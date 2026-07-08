import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { Sobre } from "@/components/sobre/Sobre";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Conheça a AV Gestão Financeira, nossa proposta, método, tecnologia e visão para o futuro da operação financeira.",
      },
      { property: "og:url", content: siteUrl("/sobre") },
      { property: "og:title", content: "Sobre | AV Gestão Financeira" },
      {
        property: "og:description",
        content:
          "Quem somos, o que nos torna diferentes, nossos pilares e a visão de futuro da AV Gestão Financeira.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/sobre") }],
  }),
  component: Sobre,
});
