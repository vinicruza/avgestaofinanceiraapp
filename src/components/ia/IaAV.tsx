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
import { WhatsAppMockup } from "@/components/site/AppMockup";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

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
          <WhatsAppMockup />
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
