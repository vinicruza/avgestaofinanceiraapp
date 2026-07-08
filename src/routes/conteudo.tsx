import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { Conteudo } from "@/components/conteudo/Conteudo";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Conteúdo | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Conteúdos sobre gestão financeira, processos, tecnologia, inteligência artificial e BPO financeiro.",
      },
      { property: "og:url", content: siteUrl("/conteudo") },
      { property: "og:title", content: "Conteúdo | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Ideias, processos e tecnologia para uma gestão financeira mais inteligente, aplicadas à rotina real.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/conteudo") }],
  }),
  component: Conteudo,
});
