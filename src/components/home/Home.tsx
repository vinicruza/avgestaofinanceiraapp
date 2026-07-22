import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Fuel,
  LineChart,
  MessageCircle,
  MonitorSmartphone,
  Target,
  Users,
} from "lucide-react";
import ipirangaLogo from "@/assets/clients/ipiranga.png.asset.json";
import petrobrasLogo from "@/assets/clients/petrobras.png.asset.json";
import brManiaLogo from "@/assets/clients/br-mania.png.asset.json";
import ampmLogo from "@/assets/clients/ampm.png.asset.json";
import pitstopLogo from "@/assets/clients/pitstop.png.asset.json";
import pitstopPlusLogo from "@/assets/clients/pitstop-plus.png.asset.json";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { DashboardMockup, PaymentsMockup } from "@/components/site/AppMockup";
import { StatsBand } from "@/components/site/StatsBand";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { Reveal } from "@/components/site/Reveal";
import { AV_AI_HIGHLIGHTS } from "@/lib/av-stats";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

/* ------------------------------------------------------------------ Hero */

const DIFFERENTIALS = [
  { icon: Users, label: "Pessoas", label2: "especializadas" },
  { icon: ClipboardCheck, label: "Processos", label2: "padronizados" },
  { icon: MonitorSmartphone, label: "Tecnologia", label2: "proprietária" },
  { icon: BrainCircuit, label: "Inteligência", label2: "artificial" },
];

const HERO_TRUST = [
  { value: "37", label: "postos atendidos" },
  { value: "+19 mil", label: "pagamentos executados" },
  { value: "IA", label: "em produção" },
];

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <Reveal
            as="span"
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
          >
            Operações financeiras
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[64px]"
          >
            Construímos
            <br />
            operações financeiras <span className="text-brand">inteligentes.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70"
          >
            Combinamos pessoas, processos, tecnologia própria e inteligência artificial para
            transformar o financeiro da sua empresa em uma operação{" "}
            <span className="font-semibold text-white">previsível, eficiente e escalável.</span>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost href="#plataforma">Conheça a Plataforma AV</CtaGhost>
          </Reveal>

          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {HERO_TRUST.map((t) => (
              <div key={t.label} className="flex items-baseline gap-2">
                <span className="font-display text-xl font-extrabold text-white">{t.value}</span>
                <span className="text-[12px] uppercase tracking-wider text-white/50">
                  {t.label}
                </span>
              </div>
            ))}
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {DIFFERENTIALS.map(({ icon: Icon, label, label2 }, i) => (
              <Reveal key={label} delay={400 + i * 90} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="text-[13px] leading-tight text-white/85">
                  <div>{label}</div>
                  <div className="text-white/60">{label2}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.35), transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div className="float-slow relative w-full max-w-[720px]">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Clients */

const CLIENTS: { name: string; src: string; maxH: string; dark?: boolean }[] = [
  { name: "Ipiranga", src: ipirangaLogo.url, maxH: "h-10" },
  { name: "Petrobras", src: petrobrasLogo.url, maxH: "h-8" },
  { name: "BR Mania", src: brManiaLogo.url, maxH: "h-12" },
  { name: "ampm", src: ampmLogo.url, maxH: "h-12" },
  { name: "Pit Stop", src: pitstopLogo.url, maxH: "h-12" },
  // Logo em versão negativa (letras claras) — exibido sobre fundo escuro para
  // ficar legível na faixa branca de clientes.
  { name: "Pit Stop+ Conveniência", src: pitstopPlusLogo.url, maxH: "h-10", dark: true },
];

function Clients() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-16 lg:px-10">
        <Reveal
          as="p"
          className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand"
        >
          Empresas que confiam na AV
        </Reveal>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:justify-between lg:gap-x-10">
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              className={`flex items-center justify-center ${
                c.dark ? "rounded-xl bg-navy-deep px-4 py-3" : ""
              }`}
            >
              <img
                src={c.src}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className={`max-w-[160px] w-auto object-contain ${c.maxH}`}
              />
            </div>
          ))}
        </div>
        <Reveal as="p" delay={200} className="mt-8 text-center text-xs italic text-brand">
          e muitas outras.
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Problem */

const PROBLEMS = [
  {
    icon: ClipboardCheck,
    title: "Planilhas soltas",
    desc: "Dados espalhados, versões diferentes e risco alto de erros e retrabalho.",
  },
  {
    icon: Users,
    title: "Aprovações manuais",
    desc: "Processos lentos, dependentes de pessoas e sem trilha de auditoria.",
  },
  {
    icon: LineChart,
    title: "Pouca visibilidade",
    desc: "Falta de informação clara para saber o que realmente acontece no financeiro.",
  },
];

function Problem() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O que a AV resolve
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Organizamos a operação financeira para o dono parar de{" "}
            <span className="text-brand">decidir no escuro.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Muitas empresas crescem, mas continuam operando o financeiro com planilhas soltas,
            mensagens espalhadas, aprovações manuais e pouca visibilidade. A AV entra para
            estruturar a rotina, executar processos críticos e entregar informação confiável para
            decisão.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <p.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-bold text-navy-deep">{p.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Ecosystem */

const ECOSYSTEM = [
  {
    icon: Target,
    title: "Método AV",
    desc: "Processos e governança que trazem clareza, previsibilidade e controle.",
    to: "/metodo-av",
  },
  {
    icon: Users,
    title: "Equipe AV",
    desc: "Especialistas que executam com disciplina, excelência e visão de dono.",
    to: "/sobre",
  },
  {
    icon: MonitorSmartphone,
    title: "Plataforma AV",
    desc: "Tecnologia própria que centraliza processos, dados e indicadores em tempo real.",
    to: "/plataforma-av",
  },
  {
    icon: BrainCircuit,
    title: "IA AV",
    desc: "Inteligência artificial aplicada para automatizar, analisar e apoiar decisões.",
    to: "/ia-av",
  },
];

function Ecosystem() {
  return (
    <section id="ecossistema" className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O Ecossistema AV
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[44px]">
            Um ecossistema completo para operar o seu{" "}
            <span className="text-brand">financeiro.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Pessoas, método, plataforma e IA trabalham juntos — a equipe executa, o método orienta,
            a plataforma centraliza e a inteligência artificial amplia a capacidade de análise.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ECOSYSTEM.map((item, i) => (
            <Reveal key={item.title} delay={i * 110}>
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition group-hover:gap-2.5">
                  Saber mais <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- Platform + IA (tech) */

function PlatformAndAI() {
  return (
    <section id="plataforma" className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              <MonitorSmartphone className="h-4 w-4" strokeWidth={2} />
              Plataforma própria + IA
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Tecnologia de verdade, <span className="text-brand">rodando na sua operação.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              A Plataforma AV centraliza pagamentos, aprovações, documentos e indicadores em um só
              lugar — com integração bancária automática e inteligência artificial que já apoia a
              rotina todos os dias.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {AV_AI_HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[13.5px] text-white/85">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaGhost to="/plataforma-av">Conhecer a Plataforma</CtaGhost>
              <Link
                to="/ia-av"
                className="inline-flex items-center gap-1.5 self-center text-sm font-semibold text-white/80 hover:text-white"
              >
                Ver a IA AV <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <PaymentsMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Niche */

const NICHE_POINTS = [
  "Financeiro, estoque de combustível e loja conectados",
  "Conciliação de cartões, sangrias e recebíveis",
  "DRE do posto conversando com a operação real",
  "Controle de abastecimentos, tanques e fornecedores",
];

function Niche() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Fuel className="h-4 w-4" strokeWidth={2} />
            Especialistas em postos de combustíveis
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Nascemos operando o financeiro de <span className="text-brand">redes de postos.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Postos têm uma rotina financeira intensa: muitos pagamentos, cartões, sangrias,
            combustível, loja e conveniência. A AV entende esse cenário na prática — e conecta
            financeiro e operação em uma só rotina.
          </p>
          <div className="mt-8">
            <CtaGhost to="/casos-de-uso" variant="light">
              Ver casos de uso
            </CtaGhost>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="grid grid-cols-1 gap-3">
            {NICHE_POINTS.map((n) => (
              <li
                key={n}
                className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-[14px] font-medium text-navy-deep">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Method */

const METHOD_STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos a rotina atual, contas, fornecedores e gargalos.",
  },
  {
    n: "02",
    title: "Estruturação",
    desc: "Organizamos fluxos, responsáveis, prazos e aprovações.",
  },
  { n: "03", title: "Execução", desc: "A equipe AV executa as rotinas com disciplina e registro." },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Indicadores e dados geram visibilidade para decisão.",
  },
];

function Method() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Como aplicamos
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[38px]">
            Um método claro para tirar o financeiro do{" "}
            <span className="text-brand">improviso.</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-8 hidden border-t border-dashed border-brand/40 lg:block"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <article className="relative h-full rounded-2xl border border-border bg-card p-6 pt-9 text-center shadow-[var(--shadow-card)]">
                  <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-[var(--shadow-cta)]">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-navy-deep">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <CtaGhost to="/metodo-av" variant="light">
            Conhecer o Método AV
          </CtaGhost>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA */

function FinalCta() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Próximo passo
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[44px]">
            Quer transformar o financeiro da sua empresa em uma operação{" "}
            <span className="text-brand">mais previsível?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[15px] leading-relaxed text-white/75">
            Agende uma conversa com a AV Gestão Financeira e veja como podemos apoiar sua empresa
            com operação, tecnologia e inteligência aplicada à rotina financeira.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <a
              href={AV_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-center text-sm font-semibold text-white/80 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-brand" />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Page */

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Clients />
      <Problem />
      <Ecosystem />
      <StatsBand />
      <PlatformAndAI />
      <Niche />
      <Method />
      <Testimonials />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
