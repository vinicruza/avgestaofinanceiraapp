#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { RENDERS_DIR, ROOT_DIR } from './paths.mjs';
import { loadBrief } from './brief-loader.mjs';
import { loadBrand } from './brand-loader.mjs';
import { loadTemplate } from './template-loader.mjs';
import { assembleHtml } from './template-engine.mjs';
import { renderPng } from './render.mjs';
import { validateText, validateContrast, validateLogo, validateDimensions } from './validators/index.mjs';

// content-os-av — motor de montagem
//
// Pipeline: briefing (conteúdo) + brand (direção visual) + template
// (estrutura HTML/CSS) -> HTML montado -> screenshot determinístico -> PNG.
//
// Este script NUNCA publica nada (sem chamadas a APIs de redes sociais,
// Notion, Telegram etc.). Ele só escreve arquivos locais em renders/.
// Integrações futuras (OpenClaw, Notion, Telegram, Supabase) são stubs em
// integrations/ e não são chamadas por este pipeline.

function fail(report) {
  console.error('\n✗ Geração ABORTADA — validação falhou:\n');
  for (const err of report.errors) console.error(`  - ${err}`);
  console.error('\nNenhum PNG final foi publicado ou considerado válido.\n');
  process.exit(1);
}

async function main() {
  const briefArg = process.argv[2];
  if (!briefArg) {
    console.error('Uso: node src/cli.mjs <caminho-para-briefing.json>');
    process.exit(1);
  }

  const brief = loadBrief(briefArg);
  const brand = loadBrand(brief.meta.brand);
  const template = loadTemplate(brief.meta.template);

  console.log(`\n→ Marca: ${brand.displayName} (${brand.id})`);
  console.log(`→ Template: ${template.meta.displayName} (${template.meta.width}x${template.meta.height})`);
  console.log(`→ Briefing: ${brief.meta.id}\n`);

  // 1) Validações que não dependem de renderizar nada (falha cedo e barato).
  const textResult = validateText(brief, template.meta);
  const contrastResult = validateContrast(brand);
  const logoVariant = brief.visual?.logo ?? 'mark';
  const logoResult = validateLogo(brand, logoVariant);

  const preErrors = [...textResult.errors, ...contrastResult.errors, ...logoResult.errors];
  if (preErrors.length > 0) {
    fail({ errors: preErrors });
  }

  // 2) Logo real como data URI — nunca desenhado, sempre os bytes do arquivo.
  const logoBuffer = fs.readFileSync(logoResult.absolutePath);
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  // 3) Montagem determinística do HTML final.
  const html = assembleHtml({ template, brand, brief, logoDataUri });

  // 4) Screenshot -> PNG.
  const pngBuffer = await renderPng(html, {
    width: template.meta.width,
    height: template.meta.height,
  });

  // 5) Validação do artefato gerado de fato (não do que era esperado).
  const dimensionsResult = validateDimensions(pngBuffer, template.meta.width, template.meta.height);

  fs.mkdirSync(RENDERS_DIR, { recursive: true });
  const outPng = path.join(RENDERS_DIR, `${brief.meta.id}.png`);
  fs.writeFileSync(outPng, pngBuffer);

  const report = {
    briefId: brief.meta.id,
    brand: brand.id,
    template: template.meta.id,
    generatedAt: new Date().toISOString(),
    outputFile: path.relative(ROOT_DIR, outPng),
    pngSha256: crypto.createHash('sha256').update(pngBuffer).digest('hex'),
    logo: { file: logoResult.file, sha256: logoResult.sha256 },
    validations: {
      text: textResult,
      contrast: contrastResult,
      logo: { ok: logoResult.ok, errors: logoResult.errors },
      dimensions: dimensionsResult,
    },
  };
  const outReport = path.join(RENDERS_DIR, `${brief.meta.id}.report.json`);
  fs.writeFileSync(outReport, JSON.stringify(report, null, 2));

  const allOk = dimensionsResult.ok; // pre-render checks já passaram acima
  if (!allOk) {
    fail({ errors: dimensionsResult.errors });
  }

  console.log('✓ Texto válido para o template');
  console.log('✓ Contraste dentro do WCAG AA');
  console.log('✓ Logo real verificado (sem desenho/geração)');
  console.log(`✓ Dimensão final: ${dimensionsResult.width}x${dimensionsResult.height}`);
  console.log(`\nPNG gerado: ${outPng}`);
  console.log(`Relatório:  ${outReport}`);
  console.log('\nNada foi publicado. Revise o PNG antes de postar manualmente.\n');
}

main().catch((err) => {
  console.error('\n✗ Erro inesperado:', err.message);
  process.exit(1);
});
