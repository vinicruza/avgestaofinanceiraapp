// Stub — não implementado, não chamado pelo pipeline de render.
//
// Futuro: ler linhas de um banco do Notion e convertê-las para o formato
// de briefing em src/brief-loader.mjs, e/ou escrever de volta o status da
// geração (sucesso/erros de validação, link do PNG) numa página do Notion.

/**
 * @param {{ databaseId: string }} _params
 * @returns {Promise<object[]>} lista de briefings no formato de briefs/*.json
 */
export async function fetchBriefsFromNotion(_params) {
  throw new Error('notion.stub.mjs: integração ainda não implementada.');
}

/**
 * @param {{ pageId: string, report: object }} _params
 */
export async function writeGenerationStatusToNotion(_params) {
  throw new Error('notion.stub.mjs: integração ainda não implementada.');
}
