import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/home/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AV Gestão Financeira — Operações financeiras inteligentes" },
      {
        name: "description",
        content:
          "Pessoas, processos, tecnologia própria e IA para transformar o financeiro da sua empresa em uma operação previsível, eficiente e escalável.",
      },
      { property: "og:title", content: "AV Gestão Financeira — Operações financeiras inteligentes" },
      {
        property: "og:description",
        content:
          "Ecossistema completo de gestão financeira: Método AV, Equipe AV, Plataforma AV e IA AV.",
      },
    ],
  }),
  component: Home,
});
