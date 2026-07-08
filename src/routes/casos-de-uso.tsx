import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { CasosDeUso } from "@/components/casos/CasosDeUso";

export const Route = createFileRoute("/casos-de-uso")({
  head: () => ({
    meta: [
      { title: "Casos de Uso | AV Gestão Financeira" },
      {
        name: "description",
        content: "Veja para quais empresas e situações a AV Gestão Financeira é indicada.",
      },
      { property: "og:url", content: siteUrl("/casos-de-uso") },
      { property: "og:title", content: "Casos de Uso | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Perfis de empresa e cenários em que a AV entrega mais controle, clareza e previsibilidade para o financeiro.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/casos-de-uso") }],
  }),
  component: CasosDeUso,
});
