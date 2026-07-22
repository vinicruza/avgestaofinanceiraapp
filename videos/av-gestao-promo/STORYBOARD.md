---
format: 1080x1080
duration: 30s
message: "Pessoas, processos, tecnologia própria e IA: a AV constrói operações financeiras inteligentes"
arc: Hook → Problem → Pilares (Solution) → Promise → Proof → CTA
audience: donos e gestores de postos e redes de combustível
language: pt-BR
mode: autonomous
music: none
---

## Video direction

Silent kinetic promo — there is no voiceover, so reveals are paced to the **visual rhythm** (staggered, spread across each frame, weighted to the back ~50%), never front-loaded. One continuous film: one ground, one accent, one motion feel.

- **palette system** (from `frame.md`, by role): ground `{colors.bg}` navy-deep #0b1120 (lift panels to `{colors.bg-elevated}` #141d33); a soft blue **radial glow** behind each hero (`{colors.primary-bright}` #5b86ff, low opacity). Headlines/wordmarks `{colors.text}` white; labels/body `{colors.text-muted}` light slate; tertiary/footer `{colors.text-light}`. The **single accent** is `{colors.primary}` #3a6df5 — eyebrows, the one key word per line, all numerals, icons, bars, the CTA pill. Never a second accent hue; never dark text on the navy ground.
- **type** (by role): eyebrows = Inter uppercase 600, 0.08–0.14em tracking, blue; headlines/wordmark = Inter display 700–800 white, −0.02em; numerals = Inter 700 blue (`tabular-nums`); labels/body = Inter 400–500 slate. No italics, no uppercase body.
- **motion grammar + reveal model**: smooth long-tail settle — **`power3` default; no bounce, no `back.out`/`elastic`/`bounce` overshoot**. Entrances `fromTo` (seek-safe). Reveal each piece on its rhythmic beat via a development move (per-word staggered reveal, hard-cut word swap, count-up, cluster→outward grid assemble, keyword glow) — spread across the frame, never dumped at t=0. Kinetic-type beats swap by **velocity-matched hard cut** (`cut-catalog.md`), not fades.
- **rhythm / held-frame allocation**: kinetic beats — Frame 1 (hook build), Frame 2 (pain swaps), Frame 3 (4-pillar cascade, the busy centerpiece), Frame 5 (count-up). **Held breathers** — Frame 4 (the promise, calm) and Frame 6 (CTA lockup, dead-static settle): content resolves, then holds with **subtle jitter only**.
- **negative list**: no bounce/elastic/overshoot; no lazy breathing (no cards scaling up/down to look "alive"); no slow back-half pan/push; no infinite/`repeat`/`yoyo`; no `Math.random`/`Date.now`; no CSS `@keyframes`/`transition` for motion; no stock-photo or purple-violet "AI" bokeh gradients (stay navy + one blue); no browser chrome, nav bars, scrollbars, or real cursors; no client **logos** (client names as styled text only).

## Frame 1 — Hook / marca

- scene: Ground navy com glow azul; a frase-marca entra em tipografia display branca, "inteligentes" em azul
- voiceover: ""
- duration: 5s
- poster: 4s
- transition_in: cut
- status: animated
- type: hook
- persuasion: Direct address / thesis-first
- beat: confidence + intrigue
- blueprint: kinetic-type-beats
- src: compositions/frames/01-hook.html
- asset_candidates:

Abertura fria na promessa. Sobretítulo pequeno azul "OPERAÇÕES FINANCEIRAS" (uppercase, tracking). Título em duas/três linhas, display Inter extrabold branco: "Construímos operações financeiras **inteligentes.**" — a palavra "inteligentes" chega por último em azul (accent). Cantinho: monograma "AV" pequeno. É a tese; tudo depois paga isso.

narrativeRole: fisga com a promessa central da marca, em linguagem de resultado.
keyMessage: a AV constrói operações financeiras inteligentes.

blueprint: kinetic-type-beats (Reproduce — hook build; signature = bold centered type whose key word lands the accent)
Scene 1 (0.0–1.2s): navy field; a soft blue radial glow blooms behind center (`ambient-glow-bloom`). Eyebrow "OPERAÇÕES FINANCEIRAS" (blue, uppercase, tracked) fades up in the upper-third (`discrete-text-sequence`), power3. Centered, ~55% width.
Scene 2 (1.2–3.2s): the headline builds line-by-line, white Inter display 800 — "Construímos" / "operações financeiras" — via per-word staggered reveal (`kinetic-beat-slam`) on a smooth long-tail settle (power3). Centered, ~72% width, 3-line stack; monogram "AV" small holds top-left. Depth: glow behind, headline mid, eyebrow fore.
Scene 3 (3.2–5.0s): the payoff word "inteligentes." arrives in blue via a smooth scale-in settle (`spring-pop-entrance`, no overshoot) as the third line, with a left→right accent underline drawn beneath it (`css-marker-patterns`, sweep). Then everything settles and HOLDS still — subtle jitter only (`sine-wave-loop`, low amplitude); no breathing, no drift.

## Frame 2 — A dor

- scene: Três linhas de dor entram e saem uma a uma sobre o navy; sensação de bagunça/atrito
- voiceover: ""
- duration: 4.5s
- poster: 3s
- transition_in: blur-crossfade
- status: animated
- type: pain_point
- persuasion: Pain validation
- beat: frustration + overwhelm
- blueprint: kinetic-type-beats
- src: compositions/frames/02-dor.html
- asset_candidates:

Três dores reais do site, cada uma pousando sozinha antes da próxima, em branco com uma marca de risco/tachado sutil ou ícone alerta azul-esmaecido: "Planilhas soltas." → "Aprovações manuais." → "Pouca visibilidade." Fecha com uma micro-linha esmaecida: "O financeiro do posto vira apagar incêndio." Sem produto ainda — só o reconhecimento da dor.

narrativeRole: valida a dor que o dono já sente, criando a lacuna que os pilares preenchem.
keyMessage: hoje o financeiro é caótico, manual e sem visibilidade.

blueprint: kinetic-type-beats (Reproduce — Problem variant; signature = each pain line lands ALONE on a bare canvas before the next replaces it)
Scene 1 (0.0–1.3s): navy field, glow dimmed vs Frame 1. "Planilhas soltas." white Inter 700, centered, hard-cut FLASH-in (`discrete-text-sequence`); a faint blue strike-through sweeps across it left→right (`css-marker-patterns`). Centered, ~60% width.
Scene 2 (1.3–2.5s): velocity-matched hard cut (`cut-catalog.md`) swaps the line to "Aprovações manuais." — same centered slot, same strike-through sweep. Nothing else on screen.
Scene 3 (2.5–3.5s): hard-cut swap to "Pouca visibilidade." — same treatment. Three pains, each solo.
Scene 4 (3.5–4.5s): the three collapse into a small dim stacked list (de-emphasized via opacity, `gsap-effects`), and a slate micro-line fades up beneath: "O financeiro do posto vira apagar incêndio." (`discrete-text-sequence`). Hold; subtle jitter only.

## Frame 3 — Os 4 pilares

- scene: Quatro cards/pilares se montam um a um em grade 2×2, cada um com ícone azul, título e subtítulo
- voiceover: ""
- duration: 8s
- poster: 7s
- transition_in: zoom-through
- status: animated
- type: feature_showcase
- persuasion: Feature-to-benefit / Rule of three (extended to four)
- beat: clarity + control
- blueprint: grid-card-assemble
- src: compositions/frames/03-pilares.html
- asset_candidates:

O centro do vídeo — o ângulo. Sobretítulo azul "A FÓRMULA AV". Quatro pilares aparecem em cascata (um a cada ~1.3s) numa grade 2×2 de cards tinted (fill azul 8%, borda sutil), cada card com ícone de linha azul + rótulo em duas linhas:
1. **Pessoas** — especializadas
2. **Processos** — padronizados
3. **Tecnologia** — proprietária
4. **Inteligência** — artificial
Quando o 4º card pousa, uma linha-âncora esmaecida abaixo: "Pessoas + Processos + Tecnologia + IA."

narrativeRole: entrega a fórmula da AV — os quatro pilares como a solução.
keyMessage: pessoas, processos, tecnologia própria e IA juntos.

blueprint: grid-card-assemble (Reproduce — Key_Feature grid; signature = items stagger-assemble into their 2×2 grid slots via center-outward-expansion)
Scene 1 (0.0–1.2s): navy field, blue glow centered. Eyebrow "A FÓRMULA AV" (blue, uppercase, tracked) fades up top-center (`discrete-text-sequence`), power3.
Scene 2 (1.2–5.6s): four pillar cards assemble ONE BY ONE (~1.1s apart) into a 2×2 grid via `center-outward-expansion` + smooth scale-in settle (`spring-pop-entrance`, no overshoot, power3) — order: (1) Pessoas · especializadas, (2) Processos · padronizados, (3) Tecnologia · proprietária, (4) Inteligência · artificial. Each card is a tinted panel (`{colors.card-bg}` blue 8%, subtle border); inside, a blue line-icon draws in (`svg-path-draw` / `svg-icon-enrichment`), then the white label + slate sublabel. 2×2 grid ~72% of canvas; 3 depth layers (glow back, cards mid, icons fore).
Scene 3 (5.6–8.0s): once the 4th card lands, a thin anchor line fades up beneath the grid — "Pessoas + Processos + Tecnologia + IA" — with the "+" signs and "IA" in blue (`discrete-text-sequence`). Hold; a gentle synchronized parallax float across the four cards at tiny amplitude (`sine-wave-loop`, amplitude /√4), subtle jitter only — no breathing.

## Frame 4 — A promessa

- scene: Uma frase-payoff grande e calma toma o centro; três palavras-chave acendem em azul
- voiceover: ""
- duration: 4s
- poster: 3s
- transition_in: crossfade
- status: animated
- type: benefit_highlight
- persuasion: Future pacing / Value stacking
- beat: aspiration + confidence
- blueprint: kinetic-type-beats
- src: compositions/frames/04-promessa.html
- asset_candidates:

O que os 4 pilares produzem. Linha branca display centralizada: "Seu financeiro vira uma operação" e abaixo, três palavras que acendem em azul uma a uma: "previsível · eficiente · escalável." Baixa em movimento — a calma é a confiança.

narrativeRole: traduz a fórmula em resultado sentido pelo dono.
keyMessage: operação financeira previsível, eficiente e escalável.

blueprint: kinetic-type-beats (Compose — a calm held benefit beat; signature reduced to one keyword-glow payoff)
Scene 1 (0.0–1.2s): navy field, soft glow. "Seu financeiro vira uma operação" white Inter display 700 centered, per-word staggered reveal (`dynamic-content-sequencing`) on power3. Centered, ~68% width, upper-middle.
Scene 2 (1.2–3.0s): three keywords ignite ONE BY ONE on the line below, each in blue with a keyword-glow attack-decay envelope (`asr-keyword-glow`) + smooth scale-in (`spring-pop-entrance`), separated by middots: "previsível" · "eficiente" · "escalável". The reveal is spread across the back half.
Scene 3 (3.0–4.0s): the whole line holds STILL as a deliberate breather; the glow behind settles (`ambient-glow-bloom`); subtle jitter only. Prefer stillness — this is the calm before the proof.

## Frame 5 — Prova

- scene: Três números reais sobem em contador (count-up) em cards, com rótulos; o maior por último
- voiceover: ""
- duration: 4.5s
- poster: 4s
- transition_in: zoom-through
- status: animated
- type: social_proof
- persuasion: Statistical proof
- beat: trust + inevitability
- blueprint: dataviz-countup
- src: compositions/frames/05-prova.html
- asset_candidates:

Sobretítulo azul "EM PRODUÇÃO, NÃO PROMESSA". Três métricas reais contam para cima (números azuis grandes Inter 700 + rótulo claro):
- **37** — postos e redes atendidos
- **+19 mil** — pagamentos executados
- **+20 mil** — lançamentos conciliados
Linha esmaecida abaixo: "Confiada por redes como Ipiranga, Petrobras e ampm." (texto, sem logos).

narrativeRole: prova que a operação AV já roda em escala real.
keyMessage: resultados reais, em produção, em escala.

blueprint: dataviz-countup (Reproduce — social_proof; signature = bold numbers COUNT UP with transform-scale growing to final size, landing as one beat)
Scene 1 (0.0–1.0s): navy field, blue glow. Eyebrow "EM PRODUÇÃO, NÃO PROMESSA" (blue, uppercase, tracked) fades up top-center (`discrete-text-sequence`).
Scene 2 (1.0–3.4s): three stat rows reveal top-to-bottom, each big blue numeral counting up as it appears (`counting-dynamic-scale`, tabular-nums) with a white/slate label beside it — order lands the biggest LAST: "37 — postos e redes atendidos" → "+19 mil — pagamentos executados" → "+20 mil — lançamentos conciliados". Each row on a subtle tinted panel, stacked ~64% width, left-aligned labels / right-aligned numerals. A soft glow blooms behind the final number (`ambient-glow-bloom`).
Scene 3 (3.4–4.5s): a dim slate line fades up beneath — "Confiada por redes como Ipiranga, Petrobras e ampm." — client names one step brighter than the surrounding slate, no logos (`discrete-text-sequence`). Hold; subtle jitter only.

## Frame 6 — CTA / marca

- scene: Monograma/wordmark AV se firma ao centro sobre glow azul; abaixo, pill CTA azul sólido e o site
- voiceover: ""
- duration: 4s
- poster: 3s
- transition_in: crossfade
- status: animated
- type: cta
- persuasion: Risk reversal / clear next step
- beat: confidence + urgency-to-act
- blueprint: logo-assemble-lockup
- src: compositions/frames/06-cta.html
- asset_candidates:

Fecho calmo e confiante. Wordmark "AV Gestão Financeira" firma ao centro (monograma AV + nome). Uma linha: "Construímos operações financeiras inteligentes." Abaixo, o único elemento sólido: pill azul "Agendar demonstração". Rodapé fino: "avgestaofinanceira.com.br".

narrativeRole: fecha na marca e no próximo passo claro.
keyMessage: agende uma demonstração da AV.

blueprint: logo-assemble-lockup (Adapt — keep the mark-assembles-then-settles signature + the one CTA; drop the camera push-through, this is a calm end-card) — final frame, so it has a real settle/hold as its exit.
Scene 1 (0.0–1.2s): navy field; the "AV" monogram assembles at center via a smooth scale-in settle (`spring-pop-entrance`, no overshoot) as a blue glow ignites behind it (`asr-keyword-glow` → `ambient-glow-bloom`). Centered.
Scene 2 (1.2–2.4s): the wordmark "AV Gestão Financeira" reveals beside/under the monogram via a left→right wipe carrying a blue leading edge (`svg-path-draw` tail / `discrete-text-sequence`); one line fades up beneath — "Construímos operações financeiras inteligentes." with "inteligentes" in blue.
Scene 3 (2.4–4.0s): the one solid element — a blue pill "Agendar demonstração" — rises and scales in (`spring-pop-entrance`, smooth) with a soft blue glow; a thin footer "avgestaofinanceira.com.br" fades up below it (`{colors.text-light}`). Settle to a DEAD-STATIC hold — subtle jitter at most; the calm is the confidence.
