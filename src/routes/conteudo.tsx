import { createFileRoute } from "@tanstack/react-router";
import { Conteudo } from "@/components/conteudo/Conteudo";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Conteúdo — AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Conteúdos práticos sobre gestão financeira, BPO Financeiro, processos, tecnologia, IA e gestão para postos de combustíveis.",
      },
      { property: "og:title", content: "Conteúdo — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Ideias, processos e tecnologia para uma gestão financeira mais inteligente, aplicadas à rotina real das empresas.",
      },
    ],
  }),
  component: Conteudo,
});
