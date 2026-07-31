# content-os-av

MVP para gerar artes profissionais (PNG) da **AV Gestão Financeira** e da
**AVPetro360** a partir de um briefing em JSON.

## Princípios

- **Logo real, sempre.** Nunca é desenhado, recriado ou gerado por IA — só
  arquivos binários reais guardados em `assets/logos/<marca>/`.
- **Direção visual separada da montagem.** `brand/*.json` decide cor,
  tipografia e CTA; `templates/**` decide estrutura/layout; `briefs/*.json`
  decide só o texto. A engine em `src/` combina os três de forma
  determinística — mesma entrada, sempre a mesma saída.
- **Validação automática antes de considerar qualquer PNG "pronto"**:
  dimensão do arquivo gerado, presença/hash do logo real, contraste WCAG AA
  e limites de texto do template.
- **Nada é publicado automaticamente.** A saída são arquivos locais em
  `renders/` e `reports/`. Postar é uma decisão manual, fora deste pipeline.

## Estrutura

```
content-os-av/
├── briefs/            briefings de exemplo/reais (conteúdo)
├── brand/             direção visual por marca (cor, tipografia, logo, CTA)
├── assets/logos/       logos reais (binários), um subdiretório por marca
├── assets/references/  posts reais de referência (apoio visual, não são logos)
├── templates/          estrutura HTML/CSS por formato (ex.: feed 1080x1350)
├── src/                engine de montagem, validadores, CLI
├── renders/            PNG + HTML montado gerados (git-ignored)
├── reports/            relatório de validação (técnica + revisão visual) por briefing (git-ignored)
└── integrations/        stubs para OpenClaw, Notion, Telegram, Supabase
```

## Uso

```bash
cd content-os-av
npm install                                   # primeira vez
node src/cli.mjs briefs/example-briefing.json
```

Saída:

- `renders/<briefing-id>.png` — a arte final, no tamanho exato do template.
- `renders/<briefing-id>.html` — o HTML já montado (marca + template +
  conteúdo), útil para auditoria/depuração sem precisar re-renderizar.
- `reports/<briefing-id>.json` — validações técnicas automáticas (texto,
  contraste, logo, dimensão) mais um campo `creative.baseImagePrompt`
  (se o briefing tiver `visual.baseImagePrompt`, documentando a intenção de
  imagem-base para um designer/futuro template com foto — não é gerado
  nenhum pixel a partir dele) e um campo `manualVisualReview` preenchido à
  mão depois de olhar o PNG gerado (não é uma verificação automatizada).

Se qualquer validação técnica falhar, o comando termina com código de saída
≠ 0, imprime os erros, e **não** produz nenhum arquivo de saída — corrija o
briefing/marca/template e rode de novo.

## Formatos suportados hoje

- `instagram-feed-1080x1350` — feed do Instagram, 1080x1350px (4:5).

Novos formatos: ver seção "Adicionando um novo template" em
`../.claude/skills/av-brand-system/SKILL.md`.

## Marcas

- **AV Gestão Financeira** — pronta para uso: paleta extraída dos tokens
  reais do site (`src/styles.css`), logo real (mark) em
  `assets/logos/av-gestao-financeira/av-logo-mark.png`, mais uma variante
  horizontal em cinza (`av-wordmark-grey.png`, pensada para fundo claro,
  ainda não usada pelo template atual).
- **AVPetro360** — pronta para uso: logo real em
  `assets/logos/avpetro360/avpetro360-logo-mark.png`, paleta extraída por
  amostragem de pixel dos posts de referência reais em
  `assets/references/avpetro360/` (fundo claro, azul/navy, ver
  `designNote` em `brand/avpetro360.json`). O template atual foi desenhado
  para fundo escuro (estilo "hero"); funciona com a paleta clara da
  AVPetro360, mas um template dedicado de fundo claro (com cards/fotos,
  como nos posts de referência) ficaria mais fiel ao estilo já usado pela
  marca — ver exemplo gerado em `briefs/example-briefing-avpetro360.json`.

## Integrações futuras

Nenhuma está implementada. Ver `integrations/README.md`.
