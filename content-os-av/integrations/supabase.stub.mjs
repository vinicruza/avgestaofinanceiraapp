// Stub — não implementado, não chamado pelo pipeline de render.
//
// Futuro: persistir briefings, snapshots de brand/*.json usados em cada
// geração, e o histórico de renders/relatórios de validação, para
// auditoria (quem gerou o quê, com qual marca/versão de brand, quando).

/**
 * @param {{ brief: object, brand: object, report: object }} _params
 */
export async function persistGenerationRecord(_params) {
  throw new Error('supabase.stub.mjs: integração ainda não implementada.');
}
