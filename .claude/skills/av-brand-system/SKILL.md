---
name: av-brand-system
description: Regras de marca e uso do pipeline content-os-av para gerar artes/posts (PNG) da AV Gestão Financeira e da AVPetro360 a partir de um briefing em JSON. Use sempre que for criar, revisar ou ajustar uma arte, post de Instagram, criativo ou peça visual dessas marcas — inclui paleta, tipografia, regras de logo e como rodar o gerador em content-os-av/.
license: Uso interno AV Gestão Financeira.
---

# Sistema de marca AV (av-brand-system)

## Quando usar

Sempre que o pedido envolver gerar, montar ou revisar uma **arte/post** para
**AV Gestão Financeira** ou **AVPetro360** (feed do Instagram, criativo,
peça de campanha). Este skill não gera imagens "à mão" — ele descreve as
regras de marca e aciona o motor determinístico em `content-os-av/`.

## Regra inegociável: logo

**Nunca desenhe, recrie, vetorize ou gere via IA o logo de nenhuma marca.**
O logo usado em qualquer arte tem que ser um arquivo real, binário, já
existente em `content-os-av/assets/logos/<marca>/`.

- AV Gestão Financeira: logo real (mark) em
  `content-os-av/assets/logos/av-gestao-financeira/av-logo-mark.png`
  (cópia de `src/assets/av-logo-3d.png`). Também existe uma variante
  horizontal em cinza (`av-wordmark-grey.png`, ver `SOURCE.md` na mesma
  pasta) pensada para fundo claro — nenhum template hoje a usa.
- AVPetro360: logo real em
  `content-os-av/assets/logos/avpetro360/avpetro360-logo-mark.png`,
  fornecido pelo usuário em 2026-07-31. Se um dia esse arquivo for removido
  ou trocado sem atualizar `brand/avpetro360.json`, o pipeline volta a
  falhar sozinho na validação de logo — isso é esperado, não um bug. Nunca
  substitua um logo ausente desenhando algo no lugar; sempre peça o
  arquivo real.

Cada marca também tem uma pasta de **referências visuais** (posts reais
completos, não são logos) em `content-os-av/assets/references/<marca>/`,
usada só para calibrar `brand/*.json` e futuros templates — nunca é
consumida pelo pipeline de render.

## Direção visual (separada do conteúdo)

Cada marca tem seu próprio arquivo em `content-os-av/brand/<marca>.json`:
paleta de cores (com par `css`/`hex` — `css` é o valor usado no CSS real,
`hex` é o usado só para calcular contraste), tipografia, referência do
arquivo de logo, cores do CTA e os requisitos mínimos de contraste (WCAG AA).

- **AV Gestão Financeira** (`av-gestao-financeira.json`): paleta extraída
  dos tokens reais do site (`src/styles.css` — `--navy-deep`, `--brand`,
  `--ink` etc.), não inventada.
- **AVPetro360** (`avpetro360.json`): paleta extraída por amostragem de
  pixel do logo real e dos posts de referência (fundo claro, azul
  `#2858c0`, navy `#083870`, bordô `#901028` como acento secundário) — não
  é mais placeholder. Os posts de referência da AVPetro360 usam fundo
  claro com cards/fotos; o template `instagram-feed-1080x1350` atual é de
  fundo escuro e funciona com essa paleta, mas fica menos fiel ao estilo já
  usado pela marca do que ficaria um template dedicado de fundo claro — se
  o usuário pedir muitas artes da AVPetro360, sugira criar esse template.

Nunca misture texto de conteúdo dentro dos arquivos de `brand/` — conteúdo
vem só do briefing.

## Como gerar uma arte

1. Escreva ou edite um briefing em `content-os-av/briefs/*.json` seguindo o
   formato de `content-os-av/briefs/example-briefing.json`:
   - `meta.brand`: `"av-gestao-financeira"` ou `"avpetro360"`.
   - `meta.template`: hoje só `"instagram-feed-1080x1350"` existe.
   - `content`: `eyebrow` (opcional), `headline` (obrigatório), `subheadline`
     (opcional), `body` (opcional), `cta.label` (obrigatório).
   - `visual.logo`: variante do logo (`"mark"` por padrão).
2. Rode o gerador:
   ```bash
   cd content-os-av
   npm install   # só na primeira vez
   node src/cli.mjs briefs/<seu-briefing>.json
   ```
3. O PNG final e um relatório de validação (`*.report.json`) aparecem em
   `content-os-av/renders/`.

## Validação automática (não pule)

O pipeline valida antes e depois de renderizar, e **aborta sem gerar nada**
se algo falhar:

- **Texto**: campos obrigatórios do template presentes e dentro do limite
  de caracteres (definido em `templates/<id>/template.json`).
- **Contraste**: cada combinação texto/fundo e CTA precisa atingir WCAG AA
  (4.5:1 texto normal, 3:1 texto grande), calculado a partir dos hex do
  `brand/*.json`.
- **Logo**: o arquivo referenciado precisa existir, ser um PNG real, e (se
  já houver hash registrado) bater com o hash salvo em `brand/*.json` —
  protege contra o logo ser trocado/regenerado sem avisar.
- **Dimensão**: o PNG *gerado de fato* é lido byte a byte (cabeçalho IHDR)
  para confirmar 1080x1350 — não confia apenas no CSS.

Se qualquer validação falhar, corrija o briefing/brand/template — nunca
contorne a validação para "forçar" uma saída.

## O que este pipeline nunca faz

- Não publica nada automaticamente em nenhuma rede social ou canal. A saída
  é só um arquivo local em `content-os-av/renders/`; publicação é manual e
  fora do escopo deste skill.
- Não desenha logos.
- Não decide layout "na hora" — a montagem (`content-os-av/src/`) é
  puramente determinística: mesmo briefing + mesma marca + mesmo template
  = mesmo PNG, sempre.

## Adicionando um novo template

Novos formatos (ex.: Stories 1080x1920, LinkedIn 1200x1350) devem virar uma
nova pasta em `content-os-av/templates/<id>/` com `template.json` (metadados
de validação: dimensão, campos obrigatórios, limites de caracteres),
`template.html` e `template.css`, seguindo o mesmo padrão de
`instagram-feed-1080x1350`. Não crie lógica de logo nova — reaproveite o
mesmo slot `{{LOGO_SRC}}` alimentado pela engine.

## Integrações futuras (ainda não implementadas)

`content-os-av/integrations/` tem stubs preparados para OpenClaw, Notion,
Telegram e Supabase — nenhum está implementado ou conectado ao pipeline de
render. Se o usuário pedir para conectar algo a essas plataformas, comece
a partir desses stubs em vez de escrever integração do zero.
