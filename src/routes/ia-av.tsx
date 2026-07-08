import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { IaAV } from "@/components/ia/IaAV";

export const Route = createFileRoute("/ia-av")({
  head: () => ({
    meta: [
      { title: "IA AV | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Inteligência artificial aplicada à rotina financeira para apoiar automações, análises, alertas e produtividade.",
      },
      { property: "og:url", content: siteUrl("/ia-av") },
      { property: "og:title", content: "IA AV | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Camada de IA da AV Gestão Financeira, conectada ao Método AV, à Plataforma AV e à equipe.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/ia-av") }],
  }),
  component: IaAV,
});
