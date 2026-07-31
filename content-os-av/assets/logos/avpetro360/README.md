# Logo real da AVPetro360 — pendente

Esta pasta está vazia de propósito.

Nenhum arquivo de logo real da AVPetro360 foi encontrado no repositório
`avgestaofinanceiraapp` no momento em que este MVP (`content-os-av`) foi
criado (2026-07-31).

## Regra inegociável

O `content-os-av` **nunca** recria, desenha, vetoriza ou gera um logo via
IA/CSS/SVG. Ele só compõe artes usando arquivos de logo reais, binários,
fornecidos pela marca.

## Como destravar a AVPetro360

1. Peça ao time de marca o arquivo oficial do logo da AVPetro360 (PNG,
   fundo transparente, resolução alta).
2. Salve o arquivo aqui, por exemplo:
   `assets/logos/avpetro360/avpetro360-logo-mark.png`.
3. Calcule o hash do arquivo:
   `sha256sum assets/logos/avpetro360/avpetro360-logo-mark.png`
4. Atualize `brand/avpetro360.json`:
   - `logos.mark.file` → caminho do arquivo salvo.
   - `logos.mark.sha256` → hash calculado no passo 3.
   - Remova o campo `status: "placeholder_pending_brand_approval"` quando a
     paleta também tiver sido validada pelo time de marca.

Até que isso seja feito, o validador de logo (`src/validators/logo.mjs`)
deve falhar deliberadamente para qualquer briefing com `"brand": "avpetro360"` —
isso é o comportamento esperado, não um bug.
