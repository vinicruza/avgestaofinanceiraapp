import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { Solucoes } from "@/components/solucoes/Solucoes";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Conheça as soluções da AV para BPO financeiro, gestão de pagamentos, fluxo de caixa, plataforma e inteligência artificial aplicada.",
      },
      { property: "og:url", content: siteUrl("/solucoes") },
      { property: "og:title", content: "Soluções | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "BPO Financeiro, Gestão de Pagamentos, Fluxo de Caixa, Plataforma AV e IA AV em um único ecossistema.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/solucoes") }],
  }),
  component: Solucoes,
});
