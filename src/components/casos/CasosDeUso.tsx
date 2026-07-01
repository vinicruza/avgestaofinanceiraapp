import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Fuel,
  Gauge,
  Layers,
  LineChart,
  MapPinned,
  Repeat,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
  Users,
  Wallet,
  Workflow,
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
        <linearGradient id="cases-l" x1="0" x2="1">
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
          stroke="url(#cases-l)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

type Tone = "brand" | "amber" | "emerald";

function ProfileCard({
  className = "",
  icon: Icon,
  title,
  meta,
  tone = "brand",
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  meta: string;
  tone?: Tone;
}) {
  const dot =
    tone === "amber" ? "bg-amber-400" : tone === "emerald" ? "bg-emerald-400" : "bg-brand";
  const iconColor =
    tone === "amber" ? "text-amber-300" : tone === "emerald" ? "text-emerald-300" : "text-brand";
  return (
    <div
      className={`absolute w-[220px] rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-md shadow-[0_10px_30px_-12px_oklch(0.1_0.05_264_/_0.6)] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/[0.06] ${iconColor}`}>
          <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
        </span>
        <div>
          <div className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
              {meta}
            </span>
          </div>
          <div className="text-[12.5px] font-semibold leading-tight text-white">{title}</div>
        </div>
      </div>
    </div>
  );
}

function HeroCases() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.4), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 460"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cases-conn" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 60 90 C 180 130, 240 180, 250 230" fill="none" stroke="url(#cases-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 440 70 C 340 130, 300 190, 250 230" fill="none" stroke="url(#cases-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 40 260 C 140 260, 210 240, 250 230" fill="none" stroke="url(#cases-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 460 300 C 360 280, 300 250, 250 230" fill="none" stroke="url(#cases-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 250 420 C 250 340, 250 280, 250 230" fill="none" stroke="url(#cases-conn)" strokeWidth="1" strokeDasharray="3 4" />
      </svg>

      <div className="relative mx-auto aspect-[5/4.8] w-full max-w-[560px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid place-items-center">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.55), transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            <div className="relative grid h-28 w-28 place-items-center rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur">
              <Target className="h-12 w-12 text-brand" strokeWidth={1.6} />
              <span className="absolute -bottom-3 whitespace-nowrap rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)]">
                Casos de Uso
              </span>
            </div>
          </div>
        </div>

        <ProfileCard
          className="left-0 top-0"
          icon={Wallet}
          meta="Perfil 01"
          title="Muitas contas a pagar"
        />
        <ProfileCard
          className="right-0 top-0"
          icon={Building2}
          meta="Perfil 02"
          title="Múltiplas unidades"
          tone="emerald"
        />
        <ProfileCard
          className="left-0 top-[46%]"
          icon={ClipboardCheck}
          meta="Perfil 03"
          title="Aprovações financeiras"
          tone="amber"
        />
        <ProfileCard
          className="right-0 top-[46%]"
          icon={TrendingUp}
          meta="Perfil 04"
          title="Precisa de previsibilidade"
        />
        <ProfileCard
          className="left-1/2 bottom-0 -translate-x-1/2"
          icon={Fuel}
          meta="Perfil 05"
          title="Postos de combustíveis"
          tone="emerald"
        />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Casos de Uso
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Para empresas que precisam transformar o financeiro em uma{" "}
            <span className="text-brand">operação mais organizada.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A AV Gestão Financeira apoia empresas que lidam com{" "}
            <strong className="font-semibold text-white">
              rotinas financeiras intensas, múltiplas contas, aprovações, pagamentos recorrentes,
              documentos, indicadores
            </strong>{" "}
            e necessidade de maior previsibilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary>Agendar demonstração</CtaPrimary>
            <CtaGhost>Conhecer soluções</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroCases />
        </div>
      </div>
    </section>
  );
}

function WhenAV() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Quando a AV faz sentido
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            A AV faz sentido quando o financeiro começa a{" "}
            <span className="text-brand">travar a gestão.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Muitas empresas chegam a um ponto em que pagar contas, acompanhar saldos, conferir
            documentos, organizar aprovações e entender o fluxo financeiro se torna uma rotina
            pesada, manual e pouco previsível.
          </p>
          <p>
            Nesses casos, a AV entra para estruturar processos, executar rotinas críticas e
            entregar mais clareza para sócios e gestores.
          </p>
        </div>
      </div>
    </section>
  );
}

const CASES = [
  {
    icon: UserCog,
    title: "Empresas com financeiro sobrecarregado",
    desc: "Quando a rotina depende de poucas pessoas, muitas tarefas manuais e alto volume de conferências.",
  },
  {
    icon: Building2,
    title: "Negócios com múltiplas contas ou empresas",
    desc: "Para operações que precisam acompanhar bancos, saldos, pagamentos e recebimentos em diferentes CNPJs ou unidades.",
  },
  {
    icon: Repeat,
    title: "Empresas com pagamentos recorrentes",
    desc: "Para quem precisa organizar pagamentos do dia, provisionamentos da semana, vencimentos e aprovações.",
  },
  {
    icon: Eye,
    title: "Operações com pouca visibilidade financeira",
    desc: "Quando sócios e gestores não conseguem enxergar com clareza o que entra, o que sai e o que está previsto.",
  },
  {
    icon: TrendingUp,
    title: "Empresas em crescimento",
    desc: "Para negócios que cresceram, mas ainda operam o financeiro com planilhas, mensagens e controles paralelos.",
  },
  {
    icon: Fuel,
    title: "Postos de combustíveis",
    desc: "Para redes e operações de postos que precisam conectar financeiro, rotina operacional, pagamentos, documentos e indicadores.",
  },
];

function CasesSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Principais casos de uso
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          Perfis de empresa em que a AV entrega mais valor.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <c.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{c.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  "Pagamentos organizados em cima da hora",
  "Falta de clareza sobre saldos disponíveis",
  "Aprovações feitas por mensagens soltas",
  "Documentos espalhados em e-mails e conversas",
  "Fluxo de caixa sem acompanhamento consistente",
  "Pouca previsibilidade para tomada de decisão",
  "Dependência excessiva de uma única pessoa",
  "Dificuldade para acompanhar múltiplas empresas",
];

function ProblemsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Problemas comuns
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Problemas comuns que a AV ajuda a{" "}
            <span className="text-brand">resolver.</span>
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2">
          {PROBLEMS.map((p) => (
            <li
              key={p}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-semibold text-navy-deep">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: MapPinned, title: "Entendimento da rotina", desc: "Mapeamos como o financeiro funciona hoje." },
  { icon: Layers, title: "Estruturação dos processos", desc: "Organizamos fluxos, responsabilidades e prazos." },
  { icon: Users, title: "Execução acompanhada", desc: "A equipe AV executa e registra as rotinas críticas." },
  { icon: LineChart, title: "Visibilidade para gestão", desc: "A plataforma e os indicadores dão mais clareza para decisão." },
];

function HowSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Workflow className="h-4 w-4" strokeWidth={2} />
            Como a AV atua em cada cenário
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Cada empresa tem uma rotina.{" "}
            <span className="text-brand">O método organiza a operação.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A AV não aplica um modelo genérico. Primeiro entendemos a operação, os responsáveis,
            os bancos, os prazos, os documentos, os fluxos de aprovação e os principais gargalos.
            A partir disso, estruturamos uma rotina financeira mais clara, com processos, execução,
            plataforma, indicadores e inteligência artificial aplicada ao dia a dia.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-9 hidden border-t border-dashed border-brand/40 lg:block"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <article
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-6 pt-9 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
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
            <Target className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Sua empresa se encaixa em <span className="text-brand">algum desses cenários?</span>
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Converse com a AV Gestão Financeira e entenda como podemos estruturar uma operação
            financeira mais organizada, previsível e eficiente para o seu negócio.
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
          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <Gauge className="h-4 w-4 text-brand" />
            Diagnóstico inicial guiado por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function CasosDeUso() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhenAV />
      <CasesSection />
      <ProblemsSection />
      <HowSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
