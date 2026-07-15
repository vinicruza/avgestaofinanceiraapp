import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Compass,
  Eye,
  Gauge,
  Handshake,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

function PillarCard({
  className = "",
  icon: Icon,
  title,
  meta,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  meta: string;
}) {
  return (
    <div
      className={`absolute w-[220px] rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-md shadow-[0_10px_30px_-12px_oklch(0.1_0.05_264_/_0.6)] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/[0.06] text-brand">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
        </span>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
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

function HeroAbout() {
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
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 460"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="about-conn" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 60 80 C 180 130, 240 180, 250 230"
          fill="none"
          stroke="url(#about-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 440 80 C 340 130, 300 190, 250 230"
          fill="none"
          stroke="url(#about-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 60 400 C 180 340, 220 280, 250 230"
          fill="none"
          stroke="url(#about-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 440 400 C 340 340, 300 280, 250 230"
          fill="none"
          stroke="url(#about-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
      </svg>

      <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[560px]">
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
              <Building2 className="h-12 w-12 text-brand" strokeWidth={1.6} />
              <span className="absolute -bottom-3 whitespace-nowrap rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)]">
                AV Gestão
              </span>
            </div>
          </div>
        </div>

        <PillarCard className="left-0 top-2" icon={Users} meta="Pilar 01" title="Pessoas" />
        <PillarCard className="right-0 top-0" icon={Workflow} meta="Pilar 02" title="Processos" />
        <PillarCard
          className="left-0 bottom-2"
          icon={MonitorSmartphone}
          meta="Pilar 03"
          title="Plataforma"
        />
        <PillarCard
          className="right-0 bottom-2"
          icon={BrainCircuit}
          meta="Pilar 04"
          title="Inteligência Artificial"
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
            Sobre a AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Construímos uma nova forma de <span className="text-brand">operar o financeiro</span>{" "}
            das empresas.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A AV Gestão Financeira une{" "}
            <strong className="font-semibold text-white">
              pessoas especializadas, processos bem definidos, plataforma própria e inteligência
              artificial
            </strong>{" "}
            para entregar mais controle, clareza e previsibilidade à rotina financeira das empresas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost to="/solucoes">Conhecer soluções</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroAbout />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Quem somos
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            A AV nasceu para transformar a rotina financeira em uma{" "}
            <span className="text-brand">operação mais inteligente.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            A AV Gestão Financeira atua na organização, execução e acompanhamento de rotinas
            financeiras para empresas que precisam de mais controle sobre pagamentos, recebimentos,
            saldos, documentos, aprovações e indicadores.
          </p>
          <p>
            Mais do que executar tarefas, a AV estrutura processos, cria governança, centraliza
            informações e apoia sócios e gestores com uma visão mais clara da operação financeira.
          </p>
          <p>
            Nossa proposta é simples: tirar o financeiro do improviso e transformar a rotina em uma
            operação previsível, eficiente e escalável.
          </p>
        </div>
      </div>
    </section>
  );
}

const DIFFERENTIALS = [
  {
    icon: Handshake,
    title: "Execução com visão de dono",
    desc: "Cuidamos da rotina financeira com disciplina, responsabilidade e atenção aos detalhes que impactam a gestão.",
  },
  {
    icon: Workflow,
    title: "Método próprio",
    desc: "Organizamos processos, prazos, aprovações e responsabilidades para reduzir improvisos e aumentar previsibilidade.",
  },
  {
    icon: MonitorSmartphone,
    title: "Tecnologia própria",
    desc: "A Plataforma AV centraliza informações, documentos, indicadores e pendências da operação financeira.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência artificial aplicada",
    desc: "Usamos IA para apoiar automações, análises, organização de informações e ganho de produtividade.",
  },
];

function DifferentialsSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          O que torna a AV diferente
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          Quatro elementos que sustentam a operação financeira dos nossos clientes.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((d) => (
            <article
              key={d.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <d.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{d.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Compass className="h-4 w-4" strokeWidth={2} />
            Nossa visão
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Acreditamos que financeiro organizado é{" "}
            <span className="text-brand">base para decisão.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Para a AV, financeiro organizado não é apenas ter contas pagas em dia. É ter rotina,
            método, registros, conferências, indicadores e informações confiáveis para que o dono da
            empresa consiga decidir com mais segurança.
          </p>
          <p>
            Quando o financeiro está claro, a gestão deixa de depender de achismo e passa a
            trabalhar com dados, previsibilidade e controle.
          </p>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: Eye,
    title: "Clareza",
    desc: "Informações financeiras organizadas e acessíveis para a gestão.",
  },
  {
    icon: ShieldCheck,
    title: "Controle",
    desc: "Processos, aprovações e conferências para reduzir falhas operacionais.",
  },
  {
    icon: TrendingUp,
    title: "Previsibilidade",
    desc: "Acompanhamento do previsto x realizado para antecipar necessidades e decisões.",
  },
  {
    icon: Lightbulb,
    title: "Evolução",
    desc: "Melhoria contínua com tecnologia, dados e inteligência artificial aplicada.",
  },
];

function PillarsSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Nossos pilares
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            O que sustenta a <span className="text-brand">forma como operamos.</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-9 hidden border-t border-dashed border-brand/40 lg:block"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <article
                key={p.title}
                className="relative rounded-2xl border border-border bg-card p-6 pt-9 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-[var(--shadow-cta)]">
                  {i + 1}
                </span>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-brand-soft text-brand">
                  <p.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-deep">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Rocket className="h-4 w-4" strokeWidth={2} />
            Para onde estamos indo
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Estamos construindo o <span className="text-brand">futuro da operação financeira.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            A AV está evoluindo para unir cada vez mais operação financeira, software e inteligência
            artificial em um ecossistema próprio.
          </p>
          <p>
            Nosso objetivo é entregar uma gestão financeira mais prática, conectada e inteligente,
            onde a rotina operacional gera dados confiáveis e os dados apoiam melhores decisões.
          </p>
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
              Quer conhecer a <span className="text-brand">AV Gestão Financeira?</span>
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Veja como podemos apoiar sua empresa com operação financeira, método, tecnologia e
            inteligência artificial aplicada à rotina.
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
            <Gauge className="h-4 w-4 text-brand" />
            Conversa inicial guiada por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Reveal>
        <WhoWeAre />
      </Reveal>
      <Reveal>
        <DifferentialsSection />
      </Reveal>
      <Reveal>
        <VisionSection />
      </Reveal>
      <Reveal>
        <PillarsSection />
      </Reveal>
      <Reveal>
        <FutureSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
