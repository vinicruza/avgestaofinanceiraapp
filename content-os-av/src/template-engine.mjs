// Montagem final = template (estrutura/estilo) + brand (direção visual) +
// briefing (conteúdo), combinados de forma puramente determinística:
// mesma entrada sempre produz o mesmo HTML, sem IA/heurística no meio.

const IF_BLOCK_RE = /<!--IF:(\w+)-->([\s\S]*?)<!--ENDIF:\1-->/g;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// applyConditionals: remove ou mantém blocos <!--IF:NOME-->...<!--ENDIF:NOME-->
// conforme conditionals[NOME] seja truthy.
function applyConditionals(html, conditionals) {
  return html.replace(IF_BLOCK_RE, (_match, name, inner) => {
    return conditionals[name] ? inner : '';
  });
}

// applyVars: substitui {{CHAVE}} literalmente. `rawVars` vai sem escaping
// (cores, CSS, font-family, src do logo — controlados pela marca/engine).
// `textVars` vem do conteúdo do briefing e é escapado para HTML.
function applyVars(html, rawVars, textVars) {
  let out = html;
  for (const [key, value] of Object.entries(rawVars)) {
    out = out.replaceAll(`{{${key}}}`, String(value));
  }
  for (const [key, value] of Object.entries(textVars)) {
    out = out.replaceAll(`{{${key}}}`, escapeHtml(value ?? ''));
  }
  return out;
}

export function assembleHtml({ template, brand, brief, logoDataUri }) {
  const content = brief.content;
  const visual = brief.visual ?? {};

  const conditionals = {
    EYEBROW: Boolean(content.eyebrow && content.eyebrow.trim()),
    SUBHEADLINE: Boolean(content.subheadline && content.subheadline.trim()),
    BODY: Boolean(content.body && content.body.trim()),
    SHOW_BRAND_NAME: visual.showBrandName !== false,
  };

  const p = brand.palette;
  const rawVars = {
    TEMPLATE_CSS: template.css,
    BG_COLOR: p.background.css,
    BG_SOFT_COLOR: p.backgroundSoft.css,
    SURFACE_COLOR: p.surface.css,
    TEXT_COLOR: p.text.css,
    TEXT_MUTED_COLOR: p.textMuted.css,
    ACCENT_COLOR: p.accent.css,
    CTA_BG_COLOR: brand.cta.bg.css,
    CTA_TEXT_COLOR: brand.cta.text.css,
    FONT_FAMILY: brand.typography.fontFamily,
    EYEBROW_WEIGHT: brand.typography.eyebrowWeight,
    HEADLINE_WEIGHT: brand.typography.headlineWeight,
    BODY_WEIGHT: brand.typography.bodyWeight,
    LOGO_SRC: logoDataUri,
  };

  const textVars = {
    BRAND_DISPLAY_NAME: brand.displayName,
    EYEBROW: content.eyebrow ?? '',
    HEADLINE: content.headline ?? '',
    SUBHEADLINE: content.subheadline ?? '',
    BODY: content.body ?? '',
    CTA_LABEL: content.cta?.label ?? '',
  };

  let html = applyConditionals(template.html, conditionals);
  html = applyVars(html, rawVars, textVars);

  // O template atual não tem slot de foto — se o briefing trouxer um
  // prompt de imagem-base, ele só documenta a intenção (para um designer ou
  // uma futura versão do template com foto), sem gerar nenhum pixel aqui.
  if (visual.baseImagePrompt) {
    const safePrompt = String(visual.baseImagePrompt).replaceAll('--', '—');
    html = html.replace(
      '<!doctype html>',
      `<!doctype html>\n<!-- baseImagePrompt (apenas documentação, não renderizado): ${safePrompt} -->`,
    );
  }

  return html;
}
