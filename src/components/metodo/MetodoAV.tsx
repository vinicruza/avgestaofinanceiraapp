import {
  Activity,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Calendar,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  MessageSquare,
  MonitorSmartphone,
  PlayCircle,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";

function HeroBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="met-l" x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M -100 ${200 + i * 55} C 300 ${120 + i * 55}, 900 ${340 + i * 55}, 1700 ${180 + i * 55}`}
          fill="none"
          stroke="url(#met-l)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

const STEPS = [
  { icon: Search, title: "Diagnóstico" },
  { icon: ClipboardList, title: "Estruturação" },
  { icon: ClipboardCheck, title: "Padronização" },
  { icon: PlayCircle, title: "Execução" },
  { icon: BarChart3, title: "Acompanhamento" },
];

function HeroTimeline() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.35), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div className="relative">
        {/* Steps row */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-8 right-8 top-8 hidden border-t border-dashed border-brand/40 sm:block"
          />
          <div className="relative grid grid-cols-5 gap-2 sm:gap-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-brand shadow-[0_10px_30px_-15px_rgba(59,130,246,0.6)] backdrop-blur sm:h-16 sm:w-16">
                  <s.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
                </span>
                <span className="mt-3 grid h-6 w-6 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="mt-2 text-[11px] font-semibold text-white/85 sm:text-[12px]">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur sm:p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
              Fluxo de Caixa
            </div>
            <div className="mt-0.5 text-[10px] text-white/50">Previsto x Realizado</div>
            <svg viewBox="0 0 220 70" className="mt-3 h-14 w-full">
              <path
                d="M0 50 C 20 40, 40 55, 60 35 S 100 20, 120 40 160 55, 180 30 200 40, 220 25"
                fill="none"
                stroke="oklch(0.58 0.19 258)"
                strokeWidth="2"
              />
              <path
                d="M0 58 C 20 52, 40 60, 60 48 S 100 40, 120 52 160 60, 180 42 200 52, 220 40"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
              />
            </svg>
            <div className="mt-2 flex items-center gap-3 text-[9px] text-white/60">
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Previsto</span>
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Realizado</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/[0.06] p-3 backdrop-blur sm:p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
              Aprovações
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px] text-white/80">
              <li className="flex items-center justify-between">
                <span>Pendentes</span>
                <span className="font-bold text-amber-400">18</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Aprovadas</span>
                <span className="font-bold text-emerald-400">124</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur sm:p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
              Pagamentos do dia
            </div>
            <div className="mt-2 text-sm font-bold text-white sm:text-base">R$ 245.780,90</div>
            <div className="mt-2 flex items-center gap-2 text-[10px] text-white/60">
              <CalendarDays className="h-3.5 w-3.5" />
              23 pagamentos
            </div>
          </div>
        </div>

        {/* Reconciliation card */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
          <div className="flex items-center justify-between text-xs font-semibold text-white">
            <span>Conciliações Bancárias</span>
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-white/60">
            <span>Contas conciliadas</span>
            <span>80%</span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-[11px] font-semibold text-white/85">8 / 10</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div className="absolute inset-y-0 left-0 rounded-full bg-brand" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Método AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Um método para transformar o financeiro em uma operação clara,{" "}
            <span className="text-brand">previsível e controlada.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            O Método AV organiza pessoas, processos, tecnologia e acompanhamento em uma rotina
            financeira estruturada, com mais visibilidade para sócios e gestores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary>Agendar demonstração</CtaPrimary>
            <CtaGhost>Conhecer a Plataforma AV</CtaGhost>
          </div>
        </div>

        <div className="relative flex items-center">
          <HeroTimeline />
        </div>
      </div>
    </section>
  );
}

function WhyMethod() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Target className="h-4 w-4" strokeWidth={2} />
            Por que método importa
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Financeiro organizado não depende de{" "}
            <span className="text-brand">improviso.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Empresas que crescem sem uma rotina financeira bem definida passam a depender de
            memória, mensagens soltas, planilhas paralelas e conferências emergenciais.
          </p>
          <p>
            O Método AV foi criado para substituir o improviso por processo. Ele define como as
            informações chegam, como são conferidas, como os pagamentos são organizados, como as
            aprovações acontecem e como os gestores acompanham a operação.
          </p>
        </div>
      </div>
    </section>
  );
}

const STEP_DETAILS = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Entendemos a rotina atual da empresa, contas bancárias, fornecedores, formas de pagamento, responsáveis, controles existentes e principais gargalos.",
  },
  {
    icon: ClipboardList,
    title: "Estruturação",
    desc: "Organizamos fluxos, responsabilidades, prazos, documentos, aprovações e padrões mínimos para a operação financeira funcionar com mais clareza.",
  },
  {
    icon: ClipboardCheck,
    title: "Padronização",
    desc: "Criamos uma rotina financeira previsível, com processos claros para contas a pagar, contas a receber, fluxo de caixa, conciliações e conferências.",
  },
  {
    icon: PlayCircle,
    title: "Execução",
    desc: "A equipe AV executa as rotinas combinadas com disciplina, acompanhamento diário e registro das informações relevantes na plataforma.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento",
    desc: "Os dados da operação são acompanhados para gerar visibilidade, apoiar decisões e identificar ajustes necessários ao longo do tempo.",
  },
];

function StepsSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Etapas do Método AV
        </p>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-6 hidden border-t border-dashed border-brand/40 lg:block"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {STEP_DETAILS.map((s, i) => (
              <article
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-6 pt-9 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-center text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-3 text-center text-[13px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Users,
    title: "Rotina",
    desc: "Processos financeiros recorrentes, com prazos, responsáveis e critérios claros.",
  },
  {
    icon: ShieldCheck,
    title: "Governança",
    desc: "Aprovações, conferências e registros para reduzir falhas e aumentar o controle.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia",
    desc: "Plataforma própria para centralizar informações, documentos, indicadores e pendências.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência",
    desc: "Uso de dados e IA para apoiar análises, automatizar tarefas e melhorar a tomada de decisão.",
  },
];

function PillarsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Os pilares do Método AV
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          O Método AV se apoia em quatro pilares.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <p.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-navy-deep">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  { icon: Clock, text: "Pagamentos deixam de ser organizados em cima da hora." },
  { icon: MessageSquare, text: "Informações deixam de ficar espalhadas em mensagens e planilhas." },
  { icon: ShieldCheck, text: "Aprovações passam a ter mais controle e rastreabilidade." },
  { icon: TrendingUp, text: "O fluxo financeiro passa a ser acompanhado com mais clareza." },
  { icon: Users, text: "Sócios e gestores passam a decidir com dados mais confiáveis." },
  { icon: Target, text: "A operação ganha ritmo, previsibilidade e menos dependência de pessoas específicas." },
];

function BenefitsSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Na prática, o financeiro deixa de ser reativo.
        </p>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <li
              key={b.text}
              className="flex flex-col items-center gap-4 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-brand shadow-[var(--shadow-card)]">
                <b.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="max-w-[240px] text-[13.5px] leading-relaxed text-navy-deep/85">
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <div className="flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-brand backdrop-blur sm:grid">
            <Activity className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Quer aplicar o <span className="text-brand">Método AV</span> na sua empresa?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Conheça como a AV Gestão Financeira pode estruturar sua rotina financeira com
            processo, execução, tecnologia e inteligência aplicada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaPrimary>Agendar demonstração</CtaPrimary>
            <a
              href="#"
              className="inline-flex items-center gap-1 self-center text-sm font-semibold text-white/80 hover:text-white"
            >
              Falar com um especialista <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MetodoAV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhyMethod />
      <StepsSection />
      <PillarsSection />
      <BenefitsSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
