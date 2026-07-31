import { contrastRatio } from '../color.mjs';

// Valida, a partir dos hex declarados em brand/*.json, que as combinações
// de texto usadas no template atendem WCAG AA. Roda ANTES do render — se
// a marca tiver uma combinação ruim, falha cedo em vez de gerar um PNG
// ilegível.
export function validateContrast(brand) {
  const errors = [];
  const req = brand.contrastRequirements ?? { minRatioNormalText: 4.5, minRatioLargeText: 3.0 };
  const p = brand.palette;

  const pairs = [
    { name: 'headline/subheadline sobre fundo', fg: p.text.hex, bg: p.background.hex, min: req.minRatioLargeText },
    { name: 'texto secundário sobre fundo', fg: p.textMuted.hex, bg: p.background.hex, min: req.minRatioNormalText },
    { name: 'eyebrow (accent) sobre fundo', fg: p.accent.hex, bg: p.background.hex, min: req.minRatioLargeText },
    { name: 'CTA (texto sobre fundo do botão)', fg: brand.cta.text.hex, bg: brand.cta.bg.hex, min: req.minRatioNormalText },
  ];

  const results = pairs.map(({ name, fg, bg, min }) => {
    const ratio = contrastRatio(fg, bg);
    const ok = ratio >= min;
    if (!ok) {
      errors.push(
        `Contraste insuficiente em "${name}": ${ratio.toFixed(2)}:1, mínimo exigido ${min}:1 (fg=${fg}, bg=${bg}).`,
      );
    }
    return { name, fg, bg, ratio: Number(ratio.toFixed(2)), min, ok };
  });

  return { ok: errors.length === 0, errors, results };
}
