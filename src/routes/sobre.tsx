import { createFileRoute } from "@tanstack/react-router";
import { Sobre } from "@/components/sobre/Sobre";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AV Gestão Financeira" },
      {
        name: "description",
        content:
          "A AV Gestão Financeira une pessoas, processos, plataforma própria e IA para transformar a rotina financeira em uma operação previsível e escalável.",
      },
      { property: "og:title", content: "Sobre — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Conheça a AV: quem somos, o que nos torna diferentes, nossos pilares e a visão de futuro para a operação financeira.",
      },
    ],
  }),
  component: Sobre,
});
