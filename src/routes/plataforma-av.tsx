import { createFileRoute } from "@tanstack/react-router";
import { PlataformaAV } from "@/components/plataforma/PlataformaAV";

export const Route = createFileRoute("/plataforma-av")({
  head: () => ({
    meta: [
      { title: "Plataforma AV | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Conheça a tecnologia própria da AV para centralizar processos, documentos, aprovações e indicadores financeiros.",
      },
      { property: "og:url", content: "/plataforma-av" },
      { property: "og:title", content: "Plataforma AV | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Visão geral, contas a pagar, contas a receber, fluxo de caixa, aprovações e documentos em uma única plataforma financeira.",
      },
    ],
    links: [{ rel: "canonical", href: "/plataforma-av" }],
  }),
  component: PlataformaAV,
});
