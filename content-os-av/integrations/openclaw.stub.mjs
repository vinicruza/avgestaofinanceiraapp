// Stub — não implementado, não chamado pelo pipeline de render.
//
// Futuro: permitir que o OpenClaw dispare uma geração (chamando
// src/cli.mjs internamente) a partir de um evento/agendamento, e receba de
// volta o caminho do PNG + relatório de validação para decidir o próximo
// passo (nunca publicar sozinho).

/**
 * @param {{ briefPath: string }} _params
 * @returns {Promise<{ pngPath: string, reportPath: string }>}
 */
export async function triggerGenerationFromOpenClaw(_params) {
  throw new Error('openclaw.stub.mjs: integração ainda não implementada.');
}
