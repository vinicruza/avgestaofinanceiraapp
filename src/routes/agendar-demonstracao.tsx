import { createFileRoute } from "@tanstack/react-router";
import { AgendarDemonstracao } from "@/components/agendar/AgendarDemonstracao";

export const Route = createFileRoute("/agendar-demonstracao")({
  head: () => ({
    meta: [
      { title: "Agendar Demonstração | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Agende uma conversa com a AV Gestão Financeira e veja como organizar melhor a operação financeira da sua empresa.",
      },
      { property: "og:url", content: "/agendar-demonstracao" },
      { property: "og:title", content: "Agendar Demonstração | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Preencha o formulário e converse com um especialista AV sobre a rotina financeira da sua empresa.",
      },
    ],
    links: [{ rel: "canonical", href: "/agendar-demonstracao" }],
  }),
  component: AgendarDemonstracao,
});
