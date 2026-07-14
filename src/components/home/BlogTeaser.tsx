import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Wallet, Workflow, LineChart, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

// Posts em destaque. Por enquanto apontam para /conteudo; quando o blog
// renderizar os Markdown de content/blog, cada card vai para o post.
const POSTS: { icon: LucideIcon; category: string; title: string; desc: string }[] = [
  {
    icon: Wallet,
    category: "Gestão Financeira",
    title: "Financeiro organizado não é apenas ter tudo pago",
    desc: "Por que rotina, processo e visibilidade são o que realmente sustentam uma boa gestão.",
  },
  {
    icon: Workflow,
    category: "Processos",
    title: "Como reduzir decisões no escuro dentro da empresa",
    desc: "Informação financeira organizada ajuda sócios e gestores a decidirem com segurança.",
  },
  {
    icon: LineChart,
    category: "Gestão Financeira",
    title: "Fluxo de caixa: previsto x realizado na prática",
    desc: "Acompanhar o previsto e o realizado é o que evita surpresas no caixa.",
  },
];

export function BlogTeaser() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
              Conteúdo AV
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
              Ideias práticas para uma <span className="text-brand">gestão mais inteligente.</span>
            </h2>
          </div>
          <Link
            to="/conteudo"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:gap-2 hover:text-brand-strong"
          >
            Ver o blog <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Link
                to="/conteudo"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                  <p.icon className="h-3.5 w-3.5" strokeWidth={2} />
                  {p.category}
                </span>
                <h3 className="mt-5 text-[17px] font-bold leading-snug text-navy-deep">{p.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition group-hover:gap-2.5">
                  Ler conteúdo <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
