import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  Clock,
  Cpu,
  Fuel,
  Gauge,
  LineChart,
  Sparkles,
  Target,
  Wallet,
  Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";
import { AV_POSTS, getPost } from "@/content/blog";
import { ArticleView } from "@/components/conteudo/ArticleView";

const CATEGORY_ICON: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Tecnologia: Cpu,
  Processos: Workflow,
  "Fluxo de Caixa": LineChart,
  "Gestão Financeira": Wallet,
  "Postos de Combustíveis": Fuel,
  "IA AV": BrainCircuit,
};

function TopicCard({
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

function HeroContent() {
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
          <linearGradient id="content-conn" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 60 90 C 180 130, 240 180, 250 230"
          fill="none"
          stroke="url(#content-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 440 70 C 340 130, 300 190, 250 230"
          fill="none"
          stroke="url(#content-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 40 260 C 140 260, 210 240, 250 230"
          fill="none"
          stroke="url(#content-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 460 300 C 360 280, 300 250, 250 230"
          fill="none"
          stroke="url(#content-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M 250 420 C 250 340, 250 280, 250 230"
          fill="none"
          stroke="url(#content-conn)"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
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
              <BookOpen className="h-12 w-12 text-brand" strokeWidth={1.6} />
              <span className="absolute -bottom-3 whitespace-nowrap rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)]">
                Conteúdo AV
              </span>
            </div>
          </div>
        </div>

        <TopicCard
          className="left-0 top-0"
          icon={Workflow}
          meta="Tema 01"
          title="Processos financeiros"
        />
        <TopicCard
          className="right-0 top-0"
          icon={ClipboardCheck}
          meta="Tema 02"
          title="BPO Financeiro"
        />
        <TopicCard
          className="left-0 top-[46%]"
          icon={BrainCircuit}
          meta="Tema 03"
          title="IA aplicada"
        />
        <TopicCard
          className="right-0 top-[46%]"
          icon={LineChart}
          meta="Tema 04"
          title="Fluxo de caixa"
        />
        <TopicCard
          className="left-1/2 bottom-0 -translate-x-1/2"
          icon={Fuel}
          meta="Tema 05"
          title="Gestão para postos"
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
            Conteúdo AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Ideias, processos e tecnologia para uma{" "}
            <span className="text-brand">gestão financeira mais inteligente.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Conteúdos práticos sobre{" "}
            <strong className="font-semibold text-white">
              organização financeira, processos, tecnologia, inteligência artificial
            </strong>{" "}
            e gestão para empresas que querem mais controle, clareza e previsibilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary href="#conteudos-destaque">Ver conteúdos</CtaPrimary>
            <CtaGhost to="/agendar-demonstracao">Falar com a AV</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}

const TOPICS = [
  {
    icon: Wallet,
    title: "Gestão Financeira",
    desc: "Rotinas, indicadores e práticas para melhorar a clareza sobre o financeiro da empresa.",
  },
  {
    icon: ClipboardCheck,
    title: "BPO Financeiro",
    desc: "Conteúdos sobre terceirização financeira, operação, processos e governança.",
  },
  {
    icon: Workflow,
    title: "Processos",
    desc: "Como organizar pagamentos, recebimentos, aprovações, documentos e conferências.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e IA",
    desc: "Aplicações práticas de tecnologia e inteligência artificial na rotina financeira.",
  },
  {
    icon: Fuel,
    title: "Postos de Combustíveis",
    desc: "Conteúdos voltados para gestão financeira e operacional de redes e postos.",
  },
];

function TopicsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Temas principais
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Conteúdos para quem quer melhorar a{" "}
            <span className="text-brand">rotina financeira</span> da empresa.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A AV compartilha aprendizados, reflexões e orientações práticas para empresas que
            precisam estruturar melhor sua operação financeira, reduzir improvisos e tomar decisões
            com mais segurança.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TOPICS.map((t) => (
            <article
              key={t.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <t.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-bold text-navy-deep">{t.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  return (
    <section id="conteudos-destaque" className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Conteúdos em destaque
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Leituras rápidas para <span className="text-brand">sócios, gestores e financeiro.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AV_POSTS.map((p, i) => {
            const Icon = CATEGORY_ICON[p.category] ?? BookOpen;
            return (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  to="/conteudo"
                  search={{ post: p.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {p.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold leading-snug text-navy-deep">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition group-hover:gap-2.5">
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AppliedSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Building2 className="h-4 w-4" strokeWidth={2} />
            Conteúdo aplicado à rotina real
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Não falamos de teoria <span className="text-brand">distante da operação.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Os conteúdos da AV partem da rotina real das empresas: pagamentos, bancos, aprovações,
            documentos, fluxo de caixa, indicadores, conciliações, dados e decisões do dia a dia.
          </p>
          <p>
            A proposta é compartilhar ideias práticas para empresas que querem sair do improviso e
            construir uma operação financeira mais previsível.
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
              Quer levar esse nível de <span className="text-brand">organização</span> para sua
              empresa?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Além de produzir conteúdo sobre gestão financeira, a AV atua diretamente na
            estruturação, execução e acompanhamento da rotina financeira dos clientes.
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
            Demonstração guiada por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function Conteudo() {
  const { post } = useSearch({ from: "/conteudo" });
  const article = post ? getPost(post) : undefined;

  if (article) {
    return <ArticleView post={article} />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Reveal>
        <TopicsSection />
      </Reveal>
      <ArticlesSection />
      <Reveal>
        <AppliedSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
