import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { Home } from "@/components/home/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AV Gestão Financeira | Operação financeira com método, tecnologia e IA" },
      {
        name: "description",
        content:
          "A AV Gestão Financeira combina pessoas, processos, plataforma própria e inteligência artificial para organizar a rotina financeira de empresas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl("/") },
      {
        property: "og:title",
        content: "AV Gestão Financeira | Operação financeira com método, tecnologia e IA",
      },
      {
        property: "og:description",
        content:
          "Pessoas, processos, plataforma própria e IA para transformar o financeiro em uma operação previsível e escalável.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/") }],
  }),
  component: Home,
});
