// Números reais e agregados da operação da Plataforma AV.
// Valores arredondados para baixo a partir da base de produção — sem qualquer
// dado sensível ou identificável de cliente. Usados como prova social no site.
//
// Referência (base de produção, jul/2026):
//   postos: 37 · pagamentos: ~19.980 · lançamentos bancários: ~20.981
//   transações de cartão: ~19.858 · entregas de combustível: ~2.599
//   usuários na plataforma: 46 · execuções de agentes de IA: 113

export type AvStat = {
  /** Valor numérico usado no contador animado. */
  value: number;
  /** Sufixo exibido após o número (ex.: " mil+"). */
  suffix?: string;
  /** Rótulo curto. */
  label: string;
};

/** Métricas de destaque (contadores animados). */
export const AV_STATS: AvStat[] = [
  { value: 37, label: "Postos e redes atendidos" },
  { value: 19, suffix: " mil+", label: "Pagamentos executados com controle" },
  { value: 20, suffix: " mil+", label: "Lançamentos bancários conciliados" },
  { value: 2, suffix: " mil+", label: "Entregas de combustível acompanhadas" },
];

/** Integrações reais já em produção na plataforma. */
export const AV_INTEGRATIONS: { name: string; desc: string }[] = [
  { name: "Open Finance", desc: "Conexão bancária automática (Pluggy)" },
  { name: "PagBank", desc: "Conciliação de recebíveis e cartões" },
  { name: "Tecnospeed", desc: "Emissão e liquidação de pagamentos" },
  { name: "SGA", desc: "Integração com a operação do posto" },
];

/** Recursos de IA que já rodam na operação (não são promessa de futuro). */
export const AV_AI_HIGHLIGHTS: string[] = [
  "Agente de pagamentos via WhatsApp",
  "Categorização automática de lançamentos",
  "Alertas inteligentes de vencimento e divergência",
  "Conciliação bancária assistida por IA",
];
