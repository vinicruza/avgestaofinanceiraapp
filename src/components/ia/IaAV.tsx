import {
  ArrowUpRight,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileSearch,
  Gauge,
  LayoutGrid,
  LineChart,
  MonitorSmartphone,
  Sparkles,
  Users,
  Wand2,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

function HeroAI() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background: "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.4), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Connecting lines (decorative) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 460"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ia-conn" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 60 90 C 180 120, 260 180, 250 230"
          fill="none"
          stroke="url(#ia-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 440 80 C 340 140, 300 190, 250 230"
          fill="none"
          stroke="url(#ia-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 60 380 C 160 340, 220 300, 250 230"
          fill="none"
          stroke="url(#ia-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 440 400 C 340 340, 300 290, 250 230"
          fill="none"
          stroke="url(#ia-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      </svg>

      <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[560px]">
        {/* Center IA core */}
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
              <BrainCircuit className="h-12 w-12 text-brand" strokeWidth={1.6} />
              <span className="absolute -bottom-3 rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)]">
                IA AV
              </span>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <FloatCard
          className="left-0 top-2"
          icon={BellRing}
          tone="amber"
          title="Alerta inteligente"
          desc="Fornecedor Alpha vence em 2 dias — sem aprovação."
        />
        <FloatCard
          className="right-0 top-0"
          icon={FileSearch}
          title="Análise de pagamento"
          desc="Divergência entre NF e boleto identificada."
        />
        <FloatCard
          className="left-2 bottom-4"
          icon={LayoutGrid}
          title="Organização automática"
          desc="24 documentos categorizados nesta manhã."
        />
        <FloatCard
          className="right-0 bottom-2"
          icon={LineChart}
          tone="emerald"
          title="Resumo financeiro"
          desc="Caixa +8,4% vs. previsto — 30 dias."
        />
      </div>
    </div>
  );
}

function FloatCard({
  className = "",
  icon: Icon,
  title,
  desc,
  tone = "brand",
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  tone?: "brand" | "amber" | "emerald";
}) {
  const dot =
    tone === "amber" ? "bg-amber-400" : tone === "emerald" ? "bg-emerald-400" : "bg-brand";
  const iconColor =
    tone === "amber" ? "text-amber-300" : tone === "emerald" ? "text-emerald-300" : "text-brand";
  return (
    <div
      className={`absolute w-[210px] rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-md shadow-[0_10px_30px_-12px_oklch(0.1_0.05_264_/_0.6)] ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] ${iconColor}`}>
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
            {title}
          </span>
        </div>
      </div>
      <p className="mt-2 text-[11.5px] leading-snug text-white/80">{desc}</p>
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
            IA AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Inteligência artificial aplicada à <span className="text-brand">rotina financeira</span>{" "}
            da sua empresa.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A IA AV apoia a operação financeira com{" "}
            <strong className="font-semibold text-white">
              automações, leitura de dados, organização de informações, alertas e análises
            </strong>{" "}
            que ajudam a equipe e os gestores a trabalharem com mais clareza e produtividade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost to="/plataforma-av">Conhecer a Plataforma AV</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroAI />
        </div>
      </div>
    </section>
  );
}

function WhyAI() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            IA no financeiro, sem complicar a operação
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            A inteligência artificial deve <span className="text-brand">simplificar a rotina</span>,
            não complicar.
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Na prática, muitas empresas ainda perdem tempo com tarefas repetitivas, conferências
            manuais, informações espalhadas e dificuldade para transformar dados financeiros em
            decisões.
          </p>
          <p>
            A IA AV foi pensada para apoiar a operação real do financeiro, ajudando a identificar
            pendências, organizar informações, acelerar análises e reduzir atividades manuais que
            consomem tempo da equipe.
          </p>
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  {
    icon: LayoutGrid,
    title: "Organização de informações",
    desc: "Apoio para estruturar dados financeiros, documentos, mensagens e informações operacionais.",
  },
  {
    icon: Wand2,
    title: "Automação de tarefas",
    desc: "Redução de atividades repetitivas que consomem tempo e aumentam o risco de falhas.",
  },
  {
    icon: BellRing,
    title: "Alertas inteligentes",
    desc: "Identificação de pendências, vencimentos, inconsistências e pontos que precisam de atenção.",
  },
  {
    icon: LineChart,
    title: "Apoio à análise financeira",
    desc: "Leitura e interpretação de dados para gerar mais clareza sobre a operação.",
  },
  {
    icon: FileSearch,
    title: "Resumos operacionais",
    desc: "Sínteses rápidas sobre pagamentos, recebimentos, aprovações e movimentações importantes.",
  },
  {
    icon: Gauge,
    title: "Ganho de produtividade",
    desc: "Mais velocidade para a equipe executar, conferir e acompanhar a rotina financeira.",
  },
];

function AreasSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Onde a IA AV atua
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          Inteligência aplicada aos pontos que realmente importam.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <article
              key={a.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <a.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{a.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ECO = [
  {
    icon: ClipboardCheck,
    title: "Método AV",
    desc: "Define os processos e critérios da operação.",
  },
  {
    icon: MonitorSmartphone,
    title: "Plataforma AV",
    desc: "Centraliza dados, documentos e indicadores.",
  },
  { icon: Users, title: "Equipe AV", desc: "Executa, acompanha e valida a rotina financeira." },
  {
    icon: BrainCircuit,
    title: "IA AV",
    desc: "Apoia automações, análises e alertas inteligentes.",
  },
];

function EcosystemSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Workflow className="h-4 w-4" strokeWidth={2} />
            IA conectada ao método e à plataforma
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            A IA AV trabalha junto com o{" "}
            <span className="text-brand">método, a equipe e a plataforma.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A inteligência artificial não substitui a responsabilidade da operação. Ela funciona
            como uma camada de apoio para ampliar a capacidade da equipe, melhorar o acompanhamento
            da rotina e trazer mais velocidade para análises e conferências.
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

const OUTCOMES = [
  "Menos tempo perdido com tarefas repetitivas",
  "Menos informações espalhadas em mensagens e planilhas",
  "Mais velocidade para identificar pendências",
  "Mais apoio para análises financeiras",
  "Mais clareza para sócios e gestores",
  "Mais capacidade operacional sem aumentar complexidade",
];

function OutcomesSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O que muda na prática
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Mais produtividade para a operação.{" "}
            <span className="text-brand">Mais clareza para a gestão.</span>
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2">
          {OUTCOMES.map((o) => (
            <li
              key={o}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-semibold text-navy-deep">{o}</span>
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
            <Cpu className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Quer aplicar <span className="text-brand">inteligência artificial</span> na rotina
              financeira da sua empresa?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Conheça a IA AV e veja como a AV Gestão Financeira combina operação, tecnologia e
            inteligência artificial para tornar o financeiro mais produtivo, claro e previsível.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <a
              href={AV_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 self-center text-sm font-semibold text-white/80 hover:text-white"
            >
              Falar com um especialista <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <Zap className="h-4 w-4 text-brand" />
            Demonstração guiada por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function IaAV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Reveal>
        <WhyAI />
      </Reveal>
      <Reveal>
        <AreasSection />
      </Reveal>
      <Reveal>
        <EcosystemSection />
      </Reveal>
      <Reveal>
        <OutcomesSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
