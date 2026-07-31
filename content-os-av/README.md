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
- **Nada é publicado automaticamente.** A saída é um arquivo local em
  `renders/`. Postar é uma decisão manual, fora deste pipeline.

## Estrutura

```
content-os-av/
├── briefs/            briefings de exemplo/reais (conteúdo)
├── brand/             direção visual por marca (cor, tipografia, logo, CTA)
├── assets/logos/       logos reais (binários), um subdiretório por marca
├── templates/          estrutura HTML/CSS por formato (ex.: feed 1080x1350)
├── src/                engine de montagem, validadores, CLI
├── renders/            PNG + relatório de validação gerados (git-ignored)
└── integrations/        stubs para OpenClaw, Notion, Telegram, Supabase
```

## Uso

```bash
cd content-os-av
npm install                                   # primeira vez
node src/cli.mjs briefs/example-briefing.json
```

Saída, em `renders/`:

- `<briefing-id>.png` — a arte final, no tamanho exato do template.
- `<briefing-id>.report.json` — resultado de todas as validações
  (texto, contraste, logo, dimensão).

Se qualquer validação falhar, o comando termina com código de saída ≠ 0,
imprime os erros, e **não** produz um PNG "válido" — corrija o
briefing/marca/template e rode de novo.

## Formatos suportados hoje

- `instagram-feed-1080x1350` — feed do Instagram, 1080x1350px (4:5).

Novos formatos: ver seção "Adicionando um novo template" em
`../.claude/skills/av-brand-system/SKILL.md`.

## Marcas

- **AV Gestão Financeira** — pronta para uso: paleta extraída dos tokens
  reais do site (`src/styles.css`), logo real já copiado para
  `assets/logos/av-gestao-financeira/`.
- **AVPetro360** — bloqueada de propósito: não há logo real no repositório
  ainda, e a paleta em `brand/avpetro360.json` é um placeholder
  (`status: "placeholder_pending_brand_approval"`). Ver
  `assets/logos/avpetro360/README.md` para destravar.

## Integrações futuras

Nenhuma está implementada. Ver `integrations/README.md`.
