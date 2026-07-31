import fs from 'node:fs';
import path from 'node:path';
import { BRAND_DIR } from './paths.mjs';

// Carrega a direção visual da marca (paleta, tipografia, logos, CTA,
// requisitos de contraste). Este arquivo NUNCA contém texto de conteúdo —
// isso é responsabilidade do briefing. Separar os dois é o que permite
// trocar o briefing sem tocar na identidade visual, e vice-versa.
export function loadBrand(brandId) {
  const file = path.join(BRAND_DIR, `${brandId}.json`);
  if (!fs.existsSync(file)) {
    const available = fs
      .readdirSync(BRAND_DIR)
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.replace(/\.json$/, ''));
    throw new Error(
      `Marca "${brandId}" não encontrada em brand/. Marcas disponíveis: ${available.join(', ')}`,
    );
  }
  const brand = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (brand.id !== brandId) {
    throw new Error(`brand/${brandId}.json declara id "${brand.id}", esperado "${brandId}".`);
  }
  return brand;
}
