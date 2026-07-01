import { createFileRoute } from "@tanstack/react-router";
import { PlataformaAV } from "@/components/plataforma/PlataformaAV";

export const Route = createFileRoute("/plataforma-av")({
  head: () => ({
    meta: [
      { title: "Plataforma AV — Tecnologia própria para centralizar o financeiro" },
      {
        name: "description",
        content:
          "A Plataforma AV centraliza processos, documentos, aprovações e indicadores em um único ambiente para dar mais clareza e controle ao financeiro da sua empresa.",
      },
      { property: "og:title", content: "Plataforma AV — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Visão geral, contas a pagar, contas a receber, fluxo de caixa, aprovações e documentos em uma única plataforma financeira.",
      },
    ],
  }),
  component: PlataformaAV,
});
