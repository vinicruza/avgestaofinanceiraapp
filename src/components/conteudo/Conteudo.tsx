import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Clock,
  Cpu,
  Fuel,
  Gauge,
  LineChart,
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
import { PostCover } from "@/components/conteudo/PostCover";

const CATEGORY_ICON: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Tecnologia: Cpu,
  Processos: Workflow,
  "Fluxo de Caixa": LineChart,
  "Gestão Financeira": Wallet,
  "Postos de Combustíveis": Fuel,
  "IA AV": BrainCircuit,
};

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />
      <div className="relative mx-auto max-w-[860px] px-6 pb-20 pt-8 text-center lg:px-10 lg:pt-14">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
          Blog AV
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
          Ideias, processos e tecnologia para uma{" "}
          <span className="text-brand">gestão financeira mais inteligente.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70">
          Conteúdos práticos sobre{" "}
          <strong className="font-semibold text-white">
            organização financeira, processos, tecnologia e inteligência artificial
          </strong>{" "}
          para empresas que querem mais controle, clareza e previsibilidade.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaPrimary href="#conteudos-destaque">Ver conteúdos</CtaPrimary>
          <CtaGhost to="/agendar-demonstracao">Falar com a AV</CtaGhost>
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
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
                >
                  <PostCover kind={p.cover} className="aspect-[16/9] w-full" />
                  <div className="flex flex-1 flex-col p-6">
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
                    <h3 className="mt-4 text-[17px] font-bold leading-snug text-navy-deep">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition group-hover:gap-2.5">
                      Ler artigo <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
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
