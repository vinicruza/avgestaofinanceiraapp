function getPath(obj, dottedPath) {
  return dottedPath.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

// Valida texto do briefing contra as regras do próprio template
// (template.json: requiredFields / maxLengths). Isso mantém as regras de
// "quanto texto cabe" junto do layout que de fato precisa respeitar isso,
// em vez de espalhadas pelo código.
export function validateText(brief, templateMeta) {
  const errors = [];
  const root = { content: brief.content };

  for (const field of templateMeta.requiredFields ?? []) {
    const value = getPath(root, field);
    if (value == null || (typeof value === 'string' && value.trim() === '')) {
      errors.push(`Campo obrigatório ausente ou vazio: "${field}".`);
    }
  }

  for (const [field, maxLen] of Object.entries(templateMeta.maxLengths ?? {})) {
    const value = getPath(root, field);
    if (typeof value === 'string' && value.length > maxLen) {
      errors.push(
        `Campo "${field}" tem ${value.length} caracteres, acima do limite de ${maxLen} do template "${templateMeta.id}".`,
      );
    }
  }

  return { ok: errors.length === 0, errors };
}
