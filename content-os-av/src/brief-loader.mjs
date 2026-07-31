import fs from 'node:fs';
import path from 'node:path';

// Um briefing é só dados: qual marca, qual template, e o conteúdo textual.
// Nenhuma decisão visual (cor, fonte, tamanho) mora aqui — isso vem de
// brand/*.json. Esta função só garante que o formato mínimo existe; regras
// de negócio (limites de caracteres, campos obrigatórios do template) ficam
// em src/validators/text.mjs.
export function loadBrief(briefPath) {
  const abs = path.resolve(briefPath);
  if (!fs.existsSync(abs)) {
    throw new Error(`Briefing não encontrado: ${abs}`);
  }
  const raw = fs.readFileSync(abs, 'utf8');
  let brief;
  try {
    brief = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Briefing "${briefPath}" não é um JSON válido: ${err.message}`);
  }

  const meta = brief.meta ?? {};
  const missingMeta = ['id', 'brand', 'template'].filter((k) => !meta[k]);
  if (missingMeta.length > 0) {
    throw new Error(`Briefing "${briefPath}" sem meta.${missingMeta.join(', meta.')}.`);
  }
  if (!brief.content || typeof brief.content !== 'object') {
    throw new Error(`Briefing "${briefPath}" sem bloco "content".`);
  }
  if (!brief.content.cta || typeof brief.content.cta.label !== 'string') {
    throw new Error(`Briefing "${briefPath}" sem "content.cta.label".`);
  }

  return {
    sourcePath: abs,
    meta,
    content: brief.content,
    visual: brief.visual ?? {},
  };
}
