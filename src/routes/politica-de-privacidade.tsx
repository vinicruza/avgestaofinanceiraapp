import { createFileRoute } from "@tanstack/react-router";
import { siteUrl } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

function PoliticaPrivacidade() {
  return (
    <LegalPage
      title="Política de Privacidade"
      subtitle="Como a AV Gestão Financeira coleta, utiliza e protege as informações compartilhadas pelos visitantes e clientes."
    >
      <p>
        Esta política descreve, de forma resumida, como tratamos dados pessoais coletados por
        meio deste site institucional. O conteúdo detalhado será atualizado em breve.
      </p>
      <p>
        Utilizamos informações fornecidas em formulários (nome, e-mail, telefone e empresa)
        exclusivamente para retorno comercial e envio de comunicações relacionadas à AV Gestão
        Financeira.
      </p>
      <p>
        Para solicitações relacionadas à LGPD, entre em contato pelo e-mail{" "}
        <a className="font-semibold text-brand" href="mailto:contato@avgestaofinanceira.com.br">
          contato@avgestaofinanceira.com.br
        </a>
        .
      </p>
    </LegalPage>
  );
}

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | AV Gestão Financeira" },
      {
        name: "description",
        content:
          "Política de Privacidade da AV Gestão Financeira: como coletamos, tratamos e protegemos dados pessoais.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl("/politica-de-privacidade") }],
  }),
  component: PoliticaPrivacidade,
});
