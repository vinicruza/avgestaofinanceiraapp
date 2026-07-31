import { chromium } from 'playwright';

// Renderiza um HTML já montado (assembleHtml) para um Buffer PNG, com
// viewport exatamente do tamanho do template. deviceScaleFactor 1 garante
// que 1080x1350 lógicos virem 1080x1350 pixels reais no PNG.
export async function renderPng(html, { width, height }) {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1,
    });
    await page.setContent(html, { waitUntil: 'networkidle' });
    return await page.screenshot({ type: 'png' });
  } finally {
    await browser.close();
  }
}
