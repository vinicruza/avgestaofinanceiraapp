// Depoimentos de clientes da AV Gestão Financeira.
//
// COMO ADICIONAR/EDITAR:
// - `headline`: frase curta de destaque (título do card).
// - `quote`: depoimento completo do cliente.
// - `name` / `role`: quem é (nome, cargo · rede).
// - `initials`: usado no avatar quando não há foto.
// - `ready`: só aparece publicado quando true; enquanto false, o card é exibido
//   como rascunho ("Depoimento a preencher"). Nada falso vai ao ar.

export type AvTestimonial = {
  /** Frase curta de destaque (título do card). */
  headline: string;
  /** Depoimento completo. */
  quote: string;
  /** Nome do cliente. */
  name: string;
  /** Cargo · rede/empresa. */
  role: string;
  /** Iniciais para o avatar. */
  initials: string;
  /** Só aparece como publicado quando true. */
  ready?: boolean;
};

export const AV_TESTIMONIALS: AvTestimonial[] = [
  {
    headline: "Decisões mais rápidas e assertivas",
    quote:
      "A AV trouxe mais organização e segurança para a nossa gestão financeira. Hoje temos clareza sobre os pagamentos, o fluxo de caixa e os resultados da operação, permitindo decisões muito mais rápidas e assertivas.",
    name: "Bryan Guglielmo",
    role: "Sócio · Rede Pit Stop",
    initials: "BG",
    ready: true,
  },
  {
    headline: "Uma equipe que transmite confiança",
    quote:
      "Com a AV, deixamos de apenas acompanhar números e passamos a entender realmente o que acontece no financeiro da empresa. A equipe assumiu a rotina com responsabilidade, proximidade e um cuidado que transmite muita confiança.",
    name: "Flavio Cava",
    role: "Sócio · Rede Ipiranga",
    initials: "FC",
    ready: true,
  },
  {
    headline: "Tudo centralizado e mais organizado",
    quote:
      "A implementação do sistema da AV mudou a forma como acompanhamos a operação. As informações ficaram centralizadas, os processos mais organizados e as pendências muito mais fáceis de visualizar e acompanhar no dia a dia.",
    name: "Cledja",
    role: "Administrativo · PitStop+",
    initials: "CL",
    ready: true,
  },
];
