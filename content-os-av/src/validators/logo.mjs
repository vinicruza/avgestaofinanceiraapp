import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT_DIR } from '../paths.mjs';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// Garante que o logo usado é um arquivo real em disco (nunca desenhado
// pela IA em tempo de render): o arquivo precisa existir, ser um PNG de
// verdade, e — se a marca já tiver um hash de proveniência registrado —
// bater exatamente com ele.
export function validateLogo(brand, variant = 'mark') {
  const errors = [];
  const logo = brand.logos?.[variant];

  if (!logo || !logo.file) {
    errors.push(`Marca "${brand.id}" não tem logo "${variant}" configurado em brand/${brand.id}.json.`);
    return { ok: false, errors };
  }

  const abs = path.join(ROOT_DIR, logo.file);
  if (!fs.existsSync(abs)) {
    errors.push(
      `Logo real ausente para "${brand.id}": ${logo.file} não existe. ` +
        `Este pipeline nunca desenha/gera um logo — adicione o arquivo real antes de renderizar.`,
    );
    return { ok: false, errors, file: logo.file };
  }

  const buffer = fs.readFileSync(abs);
  if (!buffer.subarray(0, 8).equals(PNG_SIGNATURE)) {
    errors.push(`Arquivo de logo "${logo.file}" não é um PNG válido.`);
  }

  const sha256 = crypto.createHash('sha256').update(buffer).digest('hex');
  if (logo.sha256 && logo.sha256 !== sha256) {
    errors.push(
      `Hash do logo "${logo.file}" mudou (esperado ${logo.sha256}, encontrado ${sha256}). ` +
        `Se a troca foi intencional, atualize brand/${brand.id}.json com o novo hash.`,
    );
  }

  return { ok: errors.length === 0, errors, file: logo.file, sha256, absolutePath: abs };
}
