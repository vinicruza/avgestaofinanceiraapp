import { readPngDimensions } from '../png-header.mjs';

// Valida o PNG *gerado de fato* (não o que o CSS "deveria" produzir).
export function validateDimensions(pngBuffer, expectedWidth, expectedHeight) {
  const { width, height } = readPngDimensions(pngBuffer);
  const errors = [];
  if (width !== expectedWidth || height !== expectedHeight) {
    errors.push(
      `Dimensão do PNG gerado é ${width}x${height}, esperado ${expectedWidth}x${expectedHeight}.`,
    );
  }
  return { ok: errors.length === 0, errors, width, height };
}
