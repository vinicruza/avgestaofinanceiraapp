// Integração pública do site institucional com o Supabase.
//
// A chave abaixo é a chave *anon* (pública por natureza — a mesma que vai no
// front-end). A segurança vem do RLS: a tabela `site_leads` só permite INSERT
// anônimo; nenhuma leitura/edição é exposta publicamente. Os leads só podem ser
// lidos pelo painel do Supabase (service_role) ou por um usuário admin.
//
// Pode ser sobrescrita por variáveis de ambiente (VITE_SUPABASE_URL /
// VITE_SUPABASE_ANON_KEY) sem alterar o código.

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? "https://stvwbwwkbvclabzbpdtz.supabase.co";
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0dndid3drYnZjbGFiemJwZHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNzU5ODAsImV4cCI6MjA2Nzc1MTk4MH0.VNARXc7_cvS5ojAY4-A9_aebUI42c_PAtd2nyT2r9ig";

export type LeadPayload = {
  nome: string;
  empresa?: string;
  email: string;
  telefone?: string;
  cargo?: string;
  unidades?: string;
  desafio?: string;
  mensagem?: string;
};

/** Grava um lead do formulário na tabela `site_leads` via REST do Supabase. */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/site_leads`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      ...payload,
      origem: "site-agendar",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Falha ao enviar lead (${res.status}): ${detail}`);
  }
}
