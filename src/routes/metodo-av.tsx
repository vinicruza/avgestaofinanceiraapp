import { createFileRoute } from "@tanstack/react-router";
import { MetodoAV } from "@/components/metodo/MetodoAV";

export const Route = createFileRoute("/metodo-av")({
  head: () => ({
    meta: [
      { title: "Método AV | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Entenda como o Método AV organiza a operação financeira com processos, governança, execução e acompanhamento.",
      },
      { property: "og:url", content: "/metodo-av" },
      { property: "og:title", content: "Método AV | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Diagnóstico, Estruturação, Padronização, Execução e Acompanhamento — o método que transforma o financeiro em uma operação previsível.",
      },
    ],
    links: [{ rel: "canonical", href: "/metodo-av" }],
  }),
  component: MetodoAV,
});
