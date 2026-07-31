// Leitor mínimo de cabeçalho PNG, sem dependências externas.
// Um PNG começa com uma assinatura de 8 bytes seguida do chunk IHDR, cujos
// primeiros 8 bytes de dados são width/height em big-endian uint32.
// Isso nos dá a dimensão *real* do arquivo gerado, sem confiar no que o
// template/CSS "deveria" ter produzido.

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

export function readPngDimensions(buffer) {
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error('Arquivo não é um PNG válido (assinatura ausente).');
  }
  const chunkType = buffer.toString('ascii', 12, 16);
  if (chunkType !== 'IHDR') {
    throw new Error(`Chunk esperado IHDR logo após a assinatura, encontrado "${chunkType}".`);
  }
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}
