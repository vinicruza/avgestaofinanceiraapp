// Configurações públicas da AV Gestão Financeira.
export const AV_WHATSAPP_NUMBER = "5511976790038"; // formato internacional, apenas dígitos
export const AV_WHATSAPP_LABEL = "(11) 97679-0038";
export const AV_EMAIL = "contato@avgestaofinanceira.com.br";
export const AV_LINKEDIN_URL = "https://www.linkedin.com/company/av-gestao-financeira/";

export const AV_WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma demonstração da AV Gestão Financeira.";

export const AV_WHATSAPP_URL = `https://wa.me/${AV_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  AV_WHATSAPP_MESSAGE,
)}`;

export const AV_SCHEDULE_PATH = "/agendar-demonstracao" as const;
