# Integrações futuras

Nada aqui está implementado nem é chamado pelo pipeline de render
(`src/cli.mjs`). São só contratos/stubs para quando essas integrações forem
priorizadas. Nenhum deles deve publicar nada automaticamente sem uma etapa
explícita de aprovação humana.

- `openclaw.stub.mjs` — orquestração/disparo de geração via OpenClaw.
- `notion.stub.mjs` — ler briefings de um banco do Notion e/ou escrever o
  status/resultado de uma geração de volta numa página.
- `telegram.stub.mjs` — enviar o PNG gerado (e o relatório de validação)
  para revisão humana num chat/canal do Telegram — revisão, não publicação.
- `supabase.stub.mjs` — persistir briefings, brand configs e o histórico de
  renders/relatórios de validação.

Ao implementar de verdade: mantenha a regra do pipeline principal — carregar
briefing/marca/template continua determinístico e local; a integração entra
*antes* (buscando o briefing) ou *depois* (entregando o PNG/relatório para
revisão), nunca substituindo a validação automática existente.
