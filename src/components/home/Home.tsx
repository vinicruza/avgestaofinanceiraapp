import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X, Users, ClipboardCheck, MonitorSmartphone, BrainCircuit, Target, Plus } from "lucide-react";
import { useState } from "react";
import avLogo from "@/assets/av-logo-horizontal.png.asset.json";
import heroMockup from "@/assets/hero-mockup.png";

const NAV = [
  { label: "Soluções", hasMenu: true },
  { label: "Método AV" },
  { label: "Plataforma AV" },
  { label: "IA AV" },
  { label: "Casos de Uso" },
  { label: "Conteúdo" },
  { label: "Sobre" },
];

function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center">
      <img
        src={avLogo.url}
        alt="AV Gestão Financeira"
        className={`h-11 w-auto ${variant === "dark" ? "brightness-0 invert" : ""}`}
        width={220}
        height={44}
      />
    </div>
  );
}

function CtaPrimary({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-strong ${className}`}
    >
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-md bg-white/15 transition group-hover:translate-x-0.5">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

function CtaGhost({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-md bg-white/15 transition group-hover:translate-x-0.5">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.label}
              className="inline-flex items-center gap-1 text-sm font-medium text-white/85 transition hover:text-white"
            >
              {item.label}
              {item.hasMenu && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaPrimary>Agendar demonstração</CtaPrimary>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-[1360px] flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <button key={item.label} className="rounded-md px-3 py-3 text-left text-sm font-medium text-white/85 hover:bg-white/5">
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <CtaPrimary className="w-full justify-center">Agendar demonstração</CtaPrimary>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroBackdrop() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="l" x1="0" x2="1">
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
          stroke="url(#l)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

const DIFFERENTIALS = [
  { icon: Users, label: "Pessoas", label2: "especializadas" },
  { icon: ClipboardCheck, label: "Processos", label2: "padronizados" },
  { icon: MonitorSmartphone, label: "Tecnologia", label2: "proprietária" },
  { icon: BrainCircuit, label: "Inteligência", label2: "artificial" },
];

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <Header />

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-8 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Financial Operations
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[64px]">
            Construímos<br />
            operações financeiras{" "}
            <span className="text-brand">inteligentes.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Combinamos pessoas, processos, tecnologia própria e inteligência artificial para
            transformar o financeiro da sua empresa em uma operação{" "}
            <span className="font-semibold text-white">previsível, eficiente e escalável.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary>Agendar demonstração</CtaPrimary>
            <CtaGhost>Conheça a Plataforma AV</CtaGhost>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {DIFFERENTIALS.map(({ icon: Icon, label, label2 }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="text-[13px] leading-tight text-white/85">
                  <div>{label}</div>
                  <div className="text-white/60">{label2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.35), transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <img
            src={heroMockup}
            alt="Dashboard da Plataforma AV em notebook e celular"
            width={1280}
            height={960}
            className="relative w-full max-w-[820px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
}

const CLIENTS = ["Bonatto", "Full", "Proalcool", "Hexa", "City", "Ana Neri", "Super Parada"];

function Clients() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-14 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          Empresas que confiam na AV
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="text-lg font-extrabold uppercase tracking-wider text-navy-deep/60 grayscale transition hover:text-navy-deep"
            >
              {c}
              <span className="ml-1 text-[10px] font-medium tracking-widest text-navy-deep/40">
                COMBUSTÍVEIS
              </span>
            </div>
          ))}
          <span className="text-xs italic text-brand">e muitas outras.</span>
        </div>
      </div>
    </section>
  );
}

const ECOSYSTEM = [
  { icon: Target, title: "Método AV", desc: "Processos e governança que trazem clareza, previsibilidade e controle." },
  { icon: Users, title: "Equipe AV", desc: "Especialistas que executam com disciplina, excelência e visão de dono." },
  { icon: MonitorSmartphone, title: "Plataforma AV", desc: "Tecnologia própria que centraliza processos, dados e indicadores em tempo real." },
  { icon: BrainCircuit, title: "IA AV", desc: "Inteligência artificial aplicada para automatizar, analisar e apoiar decisões." },
];

function Ecosystem() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O Ecossistema AV
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[44px]">
            Um ecossistema completo para operar o seu{" "}
            <span className="text-brand">financeiro.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-stretch">
          {ECOSYSTEM.map((item, i) => (
            <div key={item.title} className="flex w-full items-stretch sm:w-1/2 xl:w-1/4">
              <article className="group relative flex-1 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand">
                  <item.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-deep">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
              {i < ECOSYSTEM.length - 1 && (
                <div className="hidden items-center justify-center px-2 xl:flex">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-brand shadow-sm">
                    <Plus className="h-4 w-4" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Clients />
      <Ecosystem />
    </main>
  );
}
