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
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { HeroCardGrid, type HeroCardItem } from "@/components/site/HeroCardGrid";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

const PROFILE_ITEMS: HeroCardItem[] = [
  { icon: Wallet, meta: "Perfil 01", title: "Muitas contas a pagar" },
  { icon: Building2, meta: "Perfil 02", title: "Múltiplas unidades" },
  { icon: ClipboardCheck, meta: "Perfil 03", title: "Aprovações financeiras" },
  { icon: TrendingUp, meta: "Perfil 04", title: "Precisa de previsibilidade" },
  { icon: Fuel, meta: "Perfil 05", title: "Postos de combustíveis" },
];

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
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost to="/solucoes">Conhecer soluções</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroCardGrid items={PROFILE_ITEMS} />
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
            Nesses casos, a AV entra para estruturar processos, executar rotinas críticas e entregar
            mais clareza para sócios e gestores.
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
            Problemas comuns que a AV ajuda a <span className="text-brand">resolver.</span>
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
  {
    icon: MapPinned,
    title: "Entendimento da rotina",
    desc: "Mapeamos como o financeiro funciona hoje.",
  },
  {
    icon: Layers,
    title: "Estruturação dos processos",
    desc: "Organizamos fluxos, responsabilidades e prazos.",
  },
  {
    icon: Users,
    title: "Execução acompanhada",
    desc: "A equipe AV executa e registra as rotinas críticas.",
  },
  {
    icon: LineChart,
    title: "Visibilidade para gestão",
    desc: "A plataforma e os indicadores dão mais clareza para decisão.",
  },
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
            A AV não aplica um modelo genérico. Primeiro entendemos a operação, os responsáveis, os
            bancos, os prazos, os documentos, os fluxos de aprovação e os principais gargalos. A
            partir disso, estruturamos uma rotina financeira mais clara, com processos, execução,
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
      <Reveal>
        <WhenAV />
      </Reveal>
      <Reveal>
        <CasesSection />
      </Reveal>
      <Reveal>
        <ProblemsSection />
      </Reveal>
      <Reveal>
        <HowSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
