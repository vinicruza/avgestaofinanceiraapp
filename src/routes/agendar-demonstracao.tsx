import { createFileRoute } from "@tanstack/react-router";
import { AgendarDemonstracao } from "@/components/agendar/AgendarDemonstracao";

export const Route = createFileRoute("/agendar-demonstracao")({
  head: () => ({
    meta: [
      { title: "Agendar demonstração — AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Fale com a AV Gestão Financeira: entenda como equipe, método, plataforma e IA podem organizar a rotina financeira da sua empresa.",
      },
      { property: "og:title", content: "Agendar demonstração — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Preencha o formulário e converse com um especialista AV sobre sua operação financeira.",
      },
    ],
  }),
  component: AgendarDemonstracao,
});
