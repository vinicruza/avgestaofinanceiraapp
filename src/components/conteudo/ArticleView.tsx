import { Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { CtaPrimary, CtaGhost } from "@/components/site/ctas";
import { Reveal } from "@/components/site/Reveal";
import type { Block, BlogPost } from "@/content/blog";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-2xl font-extrabold tracking-tight text-navy-deep">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((it) => (
            <li key={it} className="flex gap-3 text-[15.5px] leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 rounded-2xl border-l-4 border-brand bg-brand-soft px-6 py-5 text-[16px] font-medium italic leading-relaxed text-navy-deep">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">{block.text}</p>
      );
  }
}

export function ArticleView({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative hero-bg overflow-hidden">
        <HeroBackdrop />
        <SiteHeader variant="dark" />
        <div className="relative mx-auto max-w-[820px] px-6 pb-20 pt-6 lg:px-10 lg:pt-10">
          <Link
            to="/conteudo"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand">
              {post.category}
            </span>
            {post.tag && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80">
                {post.tag}
              </span>
            )}
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/70">{post.lead}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-brand" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand" />
              {post.readingMinutes} min de leitura
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[820px] px-6 py-16 lg:px-10">
          <Reveal>
            <article>
              {post.body.map((block, i) => (
                <BlockView key={i} block={block} />
              ))}
            </article>
          </Reveal>

          <div className="mt-14 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
            <h3 className="font-display text-xl font-extrabold tracking-tight text-navy-deep">
              Quer levar essa organização para a sua empresa?
            </h3>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
              A AV atua diretamente na estruturação, execução e acompanhamento da rotina financeira
              — com método, plataforma própria e inteligência artificial.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
              <CtaGhost to="/conteudo" variant="light">
                Ver mais conteúdos
              </CtaGhost>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
