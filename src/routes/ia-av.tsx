import { createFileRoute } from "@tanstack/react-router";
import { IaAV } from "@/components/ia/IaAV";

export const Route = createFileRoute("/ia-av")({
  head: () => ({
    meta: [
      { title: "IA AV — Inteligência artificial aplicada ao financeiro" },
      {
        name: "description",
        content:
          "IA AV: automações, alertas inteligentes, organização de informações e análises que apoiam a rotina financeira da sua empresa.",
      },
      { property: "og:title", content: "IA AV — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Camada de inteligência artificial da AV Gestão Financeira, conectada ao Método AV, à Plataforma AV e à equipe.",
      },
    ],
  }),
  component: IaAV,
});
