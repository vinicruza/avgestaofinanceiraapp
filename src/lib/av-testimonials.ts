// Depoimentos de clientes da AV Gestão Financeira.
//
// COMO PREENCHER:
// 1. Substitua cada objeto abaixo por um depoimento REAL (com autorização do cliente).
// 2. Marque `ready: true` para o card aparecer como depoimento publicado.
//    Enquanto `ready` for false/omitido, o card é exibido como rascunho
//    ("Depoimento a preencher") — nada falso vai ao ar.
// 3. `initials` é usado no avatar quando não há foto. Para usar foto, adicione
//    o arquivo em src/assets e troque o componente para exibir a imagem.
//
// Dica para coletar (mande no WhatsApp do cliente):
//   "Poderia me mandar 1–2 frases sobre como ficou a rotina financeira depois
//    da AV? Posso usar seu nome, cargo e a rede no nosso site?"

export type AvTestimonial = {
  /** Frase do cliente (1–2 linhas). */
  quote: string;
  /** Nome do cliente. */
  name: string;
  /** Cargo · rede/empresa. */
  role: string;
  /** Iniciais para o avatar (ex.: "JC"). */
  initials: string;
  /** Só aparece como publicado quando true. */
  ready?: boolean;
};

export const AV_TESTIMONIALS: AvTestimonial[] = [
  {
    quote:
      "[ Depoimento real do cliente entra aqui — 1 a 2 frases sobre o resultado que a AV trouxe para a rotina financeira. ]",
    name: "Nome do cliente",
    role: "Sócio · Rede de postos",
    initials: "AV",
    ready: false,
  },
  {
    quote:
      "[ Depoimento real do cliente entra aqui — foque em um resultado concreto: mais controle, menos planilhas, pagamentos em dia. ]",
    name: "Nome do cliente",
    role: "Gerente Financeiro · Rede de postos",
    initials: "AV",
    ready: false,
  },
  {
    quote:
      "[ Depoimento real do cliente entra aqui — vale citar antes x depois e a sensação de previsibilidade. ]",
    name: "Nome do cliente",
    role: "Diretor · Grupo de conveniência",
    initials: "AV",
    ready: false,
  },
];
