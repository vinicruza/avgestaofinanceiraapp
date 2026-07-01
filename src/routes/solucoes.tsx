import { createFileRoute } from "@tanstack/react-router";
import { Solucoes } from "@/components/solucoes/Solucoes";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — AV Gestão Financeira" },
      {
        name: "description",
        content:
          "BPO Financeiro, Gestão de Pagamentos, Fluxo de Caixa, Plataforma AV e IA AV: soluções para empresas que precisam de controle, rotina e previsibilidade.",
      },
      { property: "og:title", content: "Soluções — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Um ecossistema completo de soluções financeiras: pessoas, processos, tecnologia própria e IA.",
      },
    ],
  }),
  component: Solucoes,
});
