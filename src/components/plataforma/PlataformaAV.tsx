import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Receipt,
  RefreshCcw,
  ShieldCheck,
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
        <linearGradient id="plat-l" x1="0" x2="1">
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
          stroke="url(#plat-l)"
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
      <div className="relative">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: "Saldo consolidado", value: "R$ 4,82M", trend: "+8,4%" },
            { label: "A pagar (7 dias)", value: "R$ 612k", trend: "23 títulos" },
            { label: "A receber (7 dias)", value: "R$ 894k", trend: "31 títulos" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur sm:p-4"
            >
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {k.label}
              </div>
              <div className="mt-1 text-base font-bold text-white sm:text-lg">{k.value}</div>
              <div className="mt-1 text-[10px] text-emerald-300/90">{k.trend}</div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                Fluxo de Caixa
              </div>
              <div className="text-[11px] text-white/50">Previsto x Realizado — últimos 30 dias</div>
            </div>
            <span className="rounded-md bg-brand/20 px-2 py-1 text-[10px] font-semibold text-brand">
              +12,3%
            </span>
          </div>
          <svg viewBox="0 0 320 90" className="mt-3 h-20 w-full">
            <defs>
              <linearGradient id="plat-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.58 0.19 258)" stopOpacity="0.45" />
                <stop offset="1" stopColor="oklch(0.58 0.19 258)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 70 C 30 55, 60 75, 90 45 S 150 25, 180 50 240 70, 270 30 300 45, 320 25 L 320 90 L 0 90 Z"
              fill="url(#plat-area)"
            />
            <path
              d="M0 70 C 30 55, 60 75, 90 45 S 150 25, 180 50 240 70, 270 30 300 45, 320 25"
              fill="none"
              stroke="oklch(0.58 0.19 258)"
              strokeWidth="2"
            />
            <path
              d="M0 78 C 30 68, 60 80, 90 60 S 150 40, 180 62 240 76, 270 46 300 60, 320 40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
          <div className="mt-2 flex items-center gap-4 text-[10px] text-white/60">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Previsto
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Realizado
            </span>
          </div>
        </div>

        {/* Bottom row: approvals + payments table */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:col-span-2">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                Aprovações pendentes
              </div>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-amber-400/20 text-[10px] font-bold text-amber-300">
                4
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-[11px] text-white/80">
              {[
                { n: "Fornecedor Alpha", v: "R$ 42.180" },
                { n: "Marketing — Meta", v: "R$ 12.400" },
                { n: "Serviços TI", v: "R$ 6.900" },
              ].map((i) => (
                <li key={i.n} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {i.n}
                  </span>
                  <span className="font-semibold text-white">{i.v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:col-span-3">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                Pagamentos do dia
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/60">
                <CalendarDays className="h-3.5 w-3.5" />
                Hoje
              </div>
            </div>
            <table className="mt-3 w-full text-left text-[11px] text-white/80">
              <tbody>
                {[
                  { s: "Pago", c: "text-emerald-300", d: "Energia — CPFL", v: "R$ 8.240" },
                  { s: "Pago", c: "text-emerald-300", d: "Aluguel — Sede", v: "R$ 24.000" },
                  { s: "Agendado", c: "text-brand", d: "Fornecedor Beta", v: "R$ 15.780" },
                  { s: "Conferir", c: "text-amber-300", d: "Insumos — NF 4821", v: "R$ 3.420" },
                ].map((r) => (
                  <tr key={r.d} className="border-t border-white/5">
                    <td className="py-1.5 pr-2">
                      <span className={`text-[10px] font-semibold ${r.c}`}>{r.s}</span>
                    </td>
                    <td className="py-1.5 pr-2 text-white/85">{r.d}</td>
                    <td className="py-1.5 text-right font-semibold text-white">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Plataforma AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            A tecnologia que{" "}
            <span className="text-brand">centraliza a operação financeira</span> da sua empresa.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A Plataforma AV reúne <strong className="font-semibold text-white">processos, documentos, aprovações, indicadores</strong> e acompanhamento
            financeiro em um único ambiente, dando mais clareza para sócios, gestores e equipe operacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost to="/solucoes">Conhecer soluções</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function WhyPlatform() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <MonitorSmartphone className="h-4 w-4" strokeWidth={2} />
            Por que uma plataforma própria?
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            A operação financeira precisa de mais do que{" "}
            <span className="text-brand">planilhas.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Quando as informações ficam espalhadas entre bancos, planilhas, mensagens, e-mails e
            documentos soltos, o financeiro se torna difícil de acompanhar.
          </p>
          <p>
            A Plataforma AV foi criada para centralizar a rotina financeira em um ambiente único,
            conectando execução, conferência, aprovação e indicadores de gestão.
          </p>
        </div>
      </div>
    </section>
  );
}

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Visão Geral",
    desc: "Acompanhe os principais números da operação financeira em uma tela clara e objetiva.",
  },
  {
    icon: Wallet,
    title: "Contas a Pagar",
    desc: "Organize vencimentos, pagamentos programados, pendências e aprovações.",
  },
  {
    icon: Receipt,
    title: "Contas a Receber",
    desc: "Visualize recebimentos previstos, realizados e valores em aberto.",
  },
  {
    icon: LineChart,
    title: "Fluxo de Caixa",
    desc: "Compare previsto x realizado e acompanhe a necessidade financeira da empresa.",
  },
  {
    icon: ClipboardCheck,
    title: "Aprovações",
    desc: "Controle solicitações, pagamentos e decisões que precisam de validação.",
  },
  {
    icon: FileText,
    title: "Documentos",
    desc: "Centralize comprovantes, notas, anexos e informações importantes da operação.",
  },
];

function ModulesSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          O que a Plataforma AV centraliza
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          Tudo o que a rotina financeira precisa, em um só lugar.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <article
              key={m.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <m.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{m.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ROUTINE_BENEFITS = [
  { icon: LayoutDashboard, text: "Rotina financeira centralizada" },
  { icon: ClipboardCheck, text: "Aprovações mais organizadas" },
  { icon: FileText, text: "Documentos vinculados aos processos" },
  { icon: Gauge, text: "Indicadores em tempo real" },
  { icon: RefreshCcw, text: "Menos retrabalho operacional" },
  { icon: TrendingUp, text: "Mais clareza para tomada de decisão" },
];

function RoutineSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <ShieldCheck className="h-4 w-4" strokeWidth={2} />
            Como a plataforma apoia a rotina
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Menos informação perdida.{" "}
            <span className="text-brand">Mais controle sobre a operação.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              A Plataforma AV foi pensada para apoiar a rotina real do financeiro: o que precisa
              ser pago, o que já foi conferido, o que depende de aprovação, quais documentos estão
              anexados e quais números precisam ser acompanhados.
            </p>
            <p>
              Ela não substitui o método e a equipe. Ela fortalece a operação, dando visibilidade
              e rastreabilidade para tudo que acontece.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ROUTINE_BENEFITS.map((b) => (
            <li
              key={b.text}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <b.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-semibold text-navy-deep">{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const ECO = [
  { icon: Users, title: "Equipe AV", desc: "Executa e acompanha a rotina financeira." },
  { icon: ClipboardCheck, title: "Método AV", desc: "Define processos, prazos e governança." },
  { icon: MonitorSmartphone, title: "Plataforma AV", desc: "Centraliza dados, documentos e indicadores." },
  { icon: BrainCircuit, title: "IA AV", desc: "Apoia automações, análises e alertas." },
];

function EcosystemSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Ecossistema AV
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            A plataforma conecta{" "}
            <span className="text-brand">tecnologia, execução e inteligência.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A Plataforma AV é parte do ecossistema da AV Gestão Financeira. Ela conecta a equipe
            que executa, o método que organiza e a inteligência artificial que apoia análises,
            automações e acompanhamento da rotina.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-9 hidden border-t border-dashed border-brand/40 lg:block"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ECO.map((e, i) => (
              <article
                key={e.title}
                className="relative rounded-2xl border border-border bg-card p-6 pt-9 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand">
                  <e.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-deep">{e.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{e.desc}</p>
              </article>
            ))}
          </div>
        </div>
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
            <BarChart3 className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Quer ter mais <span className="text-brand">visibilidade</span> sobre sua operação financeira?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Conheça a Plataforma AV e veja como a tecnologia pode trazer mais controle, organização
            e clareza para o financeiro da sua empresa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <a
              href="#"
              className="inline-flex items-center gap-1 self-center text-sm font-semibold text-white/80 hover:text-white"
            >
              Falar com um especialista <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <CheckCircle2 className="h-4 w-4 text-brand" />
            Demonstração guiada por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlataformaAV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhyPlatform />
      <ModulesSection />
      <RoutineSection />
      <EcosystemSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
