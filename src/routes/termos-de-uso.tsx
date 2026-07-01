import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

function TermosDeUso() {
  return (
    <LegalPage
      title="Termos de Uso"
      subtitle="Regras e condições para navegação e uso das informações disponibilizadas neste site institucional."
    >
      <p>
        Este site é mantido pela AV Gestão Financeira e tem finalidade informativa. As
        informações apresentadas podem ser atualizadas a qualquer momento, sem aviso prévio.
      </p>
      <p>
        O conteúdo, marcas e materiais visuais são de propriedade da AV Gestão Financeira e não
        podem ser reproduzidos sem autorização.
      </p>
      <p>
        Dúvidas sobre estes termos podem ser encaminhadas para{" "}
        <a className="font-semibold text-brand" href="mailto:contato@avgestaofinanceira.com.br">
          contato@avgestaofinanceira.com.br
        </a>
        .
      </p>
    </LegalPage>
  );
}

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Termos de Uso do site institucional da AV Gestão Financeira: regras de navegação e uso das informações.",
      },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: TermosDeUso,
});
