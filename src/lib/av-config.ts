// Configurações públicas da AV Gestão Financeira.
// Substitua pelo número oficial quando disponível.
export const AV_WHATSAPP_NUMBER = "5500000000000"; // formato internacional, apenas dígitos
export const AV_WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma demonstração da AV Gestão Financeira.";

export const AV_WHATSAPP_URL = `https://wa.me/${AV_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  AV_WHATSAPP_MESSAGE,
)}`;

export const AV_SCHEDULE_PATH = "/agendar-demonstracao" as const;
