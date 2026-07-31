// Stub — não implementado, não chamado pelo pipeline de render.
//
// Futuro: enviar o PNG gerado e o relatório de validação para um chat do
// Telegram, para REVISÃO HUMANA antes de qualquer publicação — este stub
// nunca deve evoluir para publicar direto numa rede social.

/**
 * @param {{ chatId: string, pngPath: string, reportPath: string }} _params
 */
export async function sendRenderForReview(_params) {
  throw new Error('telegram.stub.mjs: integração ainda não implementada.');
}
