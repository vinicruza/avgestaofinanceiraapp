import fs from 'node:fs';
import path from 'node:path';
import { TEMPLATES_DIR } from './paths.mjs';

export function loadTemplate(templateId) {
  const dir = path.join(TEMPLATES_DIR, templateId);
  const metaFile = path.join(dir, 'template.json');
  if (!fs.existsSync(metaFile)) {
    const available = fs.existsSync(TEMPLATES_DIR) ? fs.readdirSync(TEMPLATES_DIR) : [];
    throw new Error(
      `Template "${templateId}" não encontrado em templates/. Disponíveis: ${available.join(', ')}`,
    );
  }
  const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));
  const html = fs.readFileSync(path.join(dir, meta.html), 'utf8');
  const css = fs.readFileSync(path.join(dir, meta.css), 'utf8');
  return { meta, html, css };
}
