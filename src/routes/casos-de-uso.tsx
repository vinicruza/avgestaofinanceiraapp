import { createFileRoute } from "@tanstack/react-router";
import { CasosDeUso } from "@/components/casos/CasosDeUso";

export const Route = createFileRoute("/casos-de-uso")({
  head: () => ({
    meta: [
      { title: "Casos de Uso — AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Para quais empresas a AV faz sentido: financeiro sobrecarregado, múltiplas contas, pagamentos recorrentes, postos de combustíveis e mais.",
      },
      { property: "og:title", content: "Casos de Uso — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Perfis de empresa e cenários em que a AV entrega mais controle, clareza e previsibilidade para o financeiro.",
      },
    ],
  }),
  component: CasosDeUso,
});
