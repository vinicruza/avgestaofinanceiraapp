// Configuração central de SEO da AV Gestão Financeira.

/** Domínio oficial do site (sem barra final). */
export const SITE_URL = "https://avgestaofinanceira.com.br";

/**
 * Monta a URL absoluta de um caminho do site.
 * Usado em tags `canonical` e `og:url`, que devem ser absolutas —
 * URLs relativas quebram o compartilhamento em redes sociais.
 *
 * siteUrl("/")          -> "https://avgestaofinanceira.com.br"
 * siteUrl("/solucoes")  -> "https://avgestaofinanceira.com.br/solucoes"
 */
export function siteUrl(path: string = "/"): string {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const normalized = withSlash === "/" ? "" : withSlash.replace(/\/+$/, "");
  return `${SITE_URL}${normalized}`;
}
