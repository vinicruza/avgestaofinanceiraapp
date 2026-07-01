import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  LineChart,
  MonitorSmartphone,
  Target,
  TrendingUp,
  Users,
  Wallet,
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
        <linearGradient id="sol-l" x1="0" x2="1">
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
          stroke="url(#sol-l)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function HeroDashboard() {
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
      <div className="relative grid gap-4">
        {/* Top row: 3 KPI cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              label: "Fluxo de Caixa",
              sub: "Previsto (30 dias)",
              value: "R$ 4.238.720,50",
              delta: "↑ 12,4%",
              deltaLabel: "vs mês anterior",
              deltaColor: "text-emerald-400",
            },
            {
              label: "Contas a Pagar",
              sub: "Vencendo (7 dias)",
              value: "R$ 1.245.780,90",
              delta: "15 vencidos",
              deltaLabel: "",
              deltaColor: "text-red-400",
            },
            {
              label: "Contas a Receber",
              sub: "A Receber (30 dias)",
              value: "R$ 3.450.980,20",
              delta: "↑ 8,1%",
              deltaLabel: "vs mês anterior",
              deltaColor: "text-emerald-400",
            },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur sm:p-4"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {k.label}
              </div>
              <div className="mt-0.5 text-[10px] text-white/50">{k.sub}</div>
              <div className="mt-2 text-sm font-bold text-white sm:text-base">{k.value}</div>
              <div className={`mt-1 text-[10px] font-semibold ${k.deltaColor}`}>
                {k.delta}
                {k.deltaLabel && <span className="ml-1 text-white/50">{k.deltaLabel}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Middle: chart + donut */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-white">Resumo Financeiro</div>
              <div className="flex items-center gap-3 text-[10px] text-white/70">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-brand" /> Receitas
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400" /> Despesas
                </span>
              </div>
            </div>
            <svg viewBox="0 0 300 110" className="mt-3 h-24 w-full">
              <path
                d="M0 70 C 30 40, 60 90, 90 55 S 150 30, 180 60 210 85, 240 45 270 60, 300 40"
                fill="none"
                stroke="oklch(0.58 0.19 258)"
                strokeWidth="2"
              />
              <path
                d="M0 85 C 30 75, 60 95, 90 80 S 150 70, 180 88 210 100, 240 82 270 90, 300 75"
                fill="none"
                stroke="#f87171"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            <div className="text-xs font-semibold text-white">Despesas por Categoria</div>
            <div className="mt-3 flex items-center gap-4">
              <svg viewBox="0 0 42 42" className="h-20 w-20">
                <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#1e293b" strokeWidth="6" />
                <circle
                  cx="21"
                  cy="21"
                  r="15.9155"
                  fill="transparent"
                  stroke="oklch(0.58 0.19 258)"
                  strokeWidth="6"
                  strokeDasharray="42 100"
                  strokeDashoffset="25"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.9155"
                  fill="transparent"
                  stroke="#22c55e"
                  strokeWidth="6"
                  strokeDasharray="24 100"
                  strokeDashoffset="-17"
                />
                <circle
                  cx="21"
                  cy="21"
                  r="15.9155"
                  fill="transparent"
                  stroke="#f59e0b"
                  strokeWidth="6"
                  strokeDasharray="20 100"
                  strokeDashoffset="-41"
                />
              </svg>
              <ul className="grid flex-1 grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-white/75">
                <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-brand" />Pessoal</li>
                <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400" />Operacional</li>
                <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" />Tributos</li>
                <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400" />Outros</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: two lists */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold text-white">
              <span>Pagamentos do Dia</span>
              <span className="text-brand">R$ 124.440,00</span>
            </div>
            <ul className="mt-3 space-y-2 text-[11px] text-white/75">
              {[
                ["NF 1845 — Fornecedor ABC", "R$ 12.460,00", "Pago", "text-emerald-400"],
                ["NF 1846 — Fornecedor XYZ", "R$ 8.750,00", "Pago", "text-emerald-400"],
                ["NF 1847 — Fornecedor LMN", "R$ 5.230,00", "Programado", "text-amber-400"],
              ].map(([n, v, s, c]) => (
                <li key={n} className="flex items-center justify-between">
                  <span className="truncate pr-2">{n}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-white/85">{v}</span>
                    <span className={`${c} text-[10px] font-semibold`}>● {s}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right text-[10px] font-semibold text-brand">Ver todos</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold text-white">
              <span>Aprovações Pendentes</span>
              <span className="text-white/60">18</span>
            </div>
            <ul className="mt-3 space-y-2 text-[11px] text-white/75">
              {[
                ["Pagamento — NF 1848", "R$ 12.460,00"],
                ["Pagamento — NF 1849", "R$ 8.750,00"],
                ["Pagamento — NF 1850", "R$ 5.230,00"],
              ].map(([n, v]) => (
                <li key={n} className="flex items-center justify-between">
                  <span className="truncate pr-2">{n}</span>
                  <span className="shrink-0 text-white/85">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-right text-[10px] font-semibold text-brand">Ver todos</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const HERO_MINI = [
  { icon: Users, label: "Pessoas", label2: "especializadas" },
  { icon: ClipboardCheck, label: "Processos", label2: "padronizados" },
  { icon: MonitorSmartphone, label: "Tecnologia", label2: "proprietária" },
  { icon: BrainCircuit, label: "Inteligência", label2: "artificial" },
];

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Soluções AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Soluções financeiras para empresas que precisam de controle, rotina e{" "}
            <span className="text-brand">previsibilidade.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A AV Gestão Financeira combina execução operacional, processos padronizados, tecnologia
            própria e inteligência artificial para transformar o financeiro da sua empresa em uma
            operação{" "}
            <span className="font-semibold text-white">mais clara, segura e escalável.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary>Agendar demonstração</CtaPrimary>
            <CtaGhost>Conhecer o Método AV</CtaGhost>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {HERO_MINI.map(({ icon: Icon, label, label2 }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="text-[13px] leading-tight text-white/85">
                  <div>{label}</div>
                  <div className="text-white/60">{label2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
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
      desc: "Falta de informações claras para saber o que está acontecendo no financeiro.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O que a AV resolve
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Organizamos a operação financeira para que o dono pare de{" "}
            <span className="text-brand">decidir no escuro.</span>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Muitas empresas crescem, mas continuam operando o financeiro com planilhas soltas,
            mensagens espalhadas, aprovações manuais e pouca visibilidade sobre o que realmente
            está acontecendo.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            A AV entra para estruturar a rotina, executar processos críticos e entregar informações
            confiáveis para a tomada de decisão.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((i) => (
            <article
              key={i.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                <i.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-bold text-navy-deep">{i.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  {
    icon: Users,
    title: "BPO Financeiro",
    desc: "Assumimos rotinas financeiras operacionais com método, disciplina e acompanhamento próximo.",
  },
  {
    icon: CreditCard,
    title: "Gestão de Pagamentos",
    desc: "Organizamos pagamentos do dia, provisionamentos da semana, aprovações e conferências bancárias.",
  },
  {
    icon: TrendingUp,
    title: "Fluxo de Caixa",
    desc: "Acompanhamos previsto x realizado para dar mais clareza sobre entradas, saídas e necessidades futuras.",
  },
  {
    icon: MonitorSmartphone,
    title: "Plataforma AV",
    desc: "Centralizamos informações, documentos, aprovações, indicadores e rotinas em uma plataforma própria.",
  },
  {
    icon: BrainCircuit,
    title: "IA AV",
    desc: "Aplicamos inteligência artificial para automatizar tarefas, apoiar análises e reduzir retrabalho operacional.",
  },
];

function Solutions() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SOLUTIONS.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ECO = [
  { icon: Users, title: "Equipe AV", desc: "execução especializada" },
  { icon: Target, title: "Método AV", desc: "processos e governança" },
  { icon: MonitorSmartphone, title: "Plataforma AV", desc: "centralização e indicadores" },
  { icon: BrainCircuit, title: "IA AV", desc: "automação e inteligência" },
];

function Ecosystem() {
  return (
    <section className="bg-[oklch(0.97_0.01_258)]">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Ecossistema AV
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            As soluções da AV funcionam como um{" "}
            <span className="text-brand">ecossistema.</span>
          </h2>
          <p className="mt-6 text-[14.5px] leading-relaxed text-muted-foreground">
            Não acreditamos em financeiro organizado apenas como contas pagas em dia. Para a AV,
            uma operação financeira eficiente precisa ter rotina, processo, tecnologia,
            conferência, acompanhamento e visão gerencial.
          </p>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
            Por isso, nossas soluções foram desenhadas para trabalhar juntas: a equipe executa,
            o método orienta, a plataforma centraliza e a inteligência artificial amplia a
            capacidade de análise e automação.
          </p>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 right-6 top-[74px] hidden border-t border-dashed border-brand/40 sm:block"
          />
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-4">
            {ECO.map((e, i) => (
              <div key={e.title} className="flex flex-col items-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-white text-brand shadow-[var(--shadow-card)]">
                  <e.icon className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-sm font-bold text-navy-deep">{e.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{e.desc}</p>
                <span className="mt-4 grid h-7 w-7 place-items-center rounded-full bg-brand text-[11px] font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  "Mais previsibilidade no financeiro",
  "Menos dependência de memória, planilhas e mensagens soltas",
  "Pagamentos organizados e acompanhados com critério",
  "Informações mais confiáveis para tomada de decisão",
  "Rotina financeira mais clara para sócios e gestores",
  "Mais tempo para o dono focar na operação e no crescimento",
];

function Benefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Benefícios para sua empresa
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
          O que sua empresa ganha com a AV
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <li
              key={b}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-[14px] font-medium text-navy-deep">{b}</span>
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
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Próximo passo
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[44px]">
            Quer transformar o financeiro da sua empresa em uma operação{" "}
            <span className="text-brand">mais previsível?</span>
          </h2>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Conheça as soluções da AV Gestão Financeira e veja como podemos apoiar sua empresa com
            operação, tecnologia e inteligência aplicada à rotina financeira.
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

export function Solucoes() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProblemSection />
      <Solutions />
      <Ecosystem />
      <Benefits />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
