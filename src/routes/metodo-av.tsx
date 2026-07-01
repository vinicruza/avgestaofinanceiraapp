import { createFileRoute } from "@tanstack/react-router";
import { MetodoAV } from "@/components/metodo/MetodoAV";

export const Route = createFileRoute("/metodo-av")({
  head: () => ({
    meta: [
      { title: "Método AV — Rotina financeira com processo e previsibilidade" },
      {
        name: "description",
        content:
          "Método AV: como organizamos pessoas, processos, tecnologia e acompanhamento para transformar a rotina financeira em uma operação clara, previsível e controlada.",
      },
      { property: "og:title", content: "Método AV — AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Diagnóstico, Estruturação, Padronização, Execução e Acompanhamento — o método que transforma o financeiro em uma operação previsível.",
      },
    ],
  }),
  component: MetodoAV,
});
