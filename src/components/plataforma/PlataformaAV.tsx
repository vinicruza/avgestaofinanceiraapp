import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  Receipt,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/site/Reveal";
import {
  DashboardMockup,
  PaymentsMockup,
  ReceivablesMockup,
  ContasFixasMockup,
  RelatoriosMockup,
  AtividadesMockup,
  UsuariosMockup,
} from "@/components/site/AppMockup";
import { StatsBand } from "@/components/site/StatsBand";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

const SCREENS: { label: string; Comp: React.ComponentType; desc: string }[] = [
  {
    label: "Dashboard",
    Comp: DashboardMockup,
    desc: "Visão geral da operação financeira em tempo real.",
  },
  {
    label: "Pagamentos",
    Comp: PaymentsMockup,
    desc: "Pagamentos do dia, provisionamentos e aprovações.",
  },
  {
    label: "Recebimentos",
    Comp: ReceivablesMockup,
    desc: "Previsto, recebido, pendente e atrasado em um só lugar.",
  },
  {
    label: "Contas Fixas",
    Comp: ContasFixasMockup,
    desc: "Contas recorrentes e vencimentos dos próximos dias.",
  },
  { label: "Relatórios", Comp: RelatoriosMockup, desc: "Despesas por período, categoria e setor." },
  {
    label: "Atividades",
    Comp: AtividadesMockup,
    desc: "Quadro operacional do que precisa ser feito.",
  },
  { label: "Usuários", Comp: UsuariosMockup, desc: "Papéis, acessos e status de cada usuário." },
];

function ScreensSection() {
  const [active, setActive] = useState(0);
  const Screen = SCREENS[active].Comp;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <LayoutDashboard className="h-4 w-4" strokeWidth={2} />
            Telas do produto
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Veja a Plataforma AV <span className="text-brand">por dentro.</span>
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted-foreground">
            {SCREENS[active].desc}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {SCREENS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                i === active
                  ? "bg-brand text-white shadow-[var(--shadow-cta)]"
                  : "border border-border bg-card text-navy-deep hover:border-brand/30"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <Reveal key={active} className="mx-auto mt-10 max-w-[900px]">
          <Screen />
        </Reveal>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <SiteHeader variant="dark" />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 pb-24 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 lg:px-10 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Plataforma AV
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            A tecnologia que <span className="text-brand">centraliza a operação financeira</span> da
            sua empresa.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A Plataforma AV reúne{" "}
            <strong className="font-semibold text-white">
              processos, documentos, aprovações, indicadores
            </strong>{" "}
            e acompanhamento financeiro em um único ambiente, dando mais clareza para sócios,
            gestores e equipe operacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary to="/agendar-demonstracao">Agendar demonstração</CtaPrimary>
            <CtaGhost to="/solucoes">Conhecer soluções</CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function WhyPlatform() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <MonitorSmartphone className="h-4 w-4" strokeWidth={2} />
            Por que uma plataforma própria?
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            A operação financeira precisa de mais do que{" "}
            <span className="text-brand">planilhas.</span>
          </h2>
        </div>
        <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Quando as informações ficam espalhadas entre bancos, planilhas, mensagens, e-mails e
            documentos soltos, o financeiro se torna difícil de acompanhar.
          </p>
          <p>
            A Plataforma AV foi criada para centralizar a rotina financeira em um ambiente único,
            conectando execução, conferência, aprovação e indicadores de gestão.
          </p>
        </div>
      </div>
    </section>
  );
}

const MODULES = [
  {
    icon: LayoutDashboard,
    title: "Visão Geral",
    desc: "Acompanhe os principais números da operação financeira em uma tela clara e objetiva.",
  },
  {
    icon: Wallet,
    title: "Contas a Pagar",
    desc: "Organize vencimentos, pagamentos programados, pendências e aprovações.",
  },
  {
    icon: Receipt,
    title: "Contas a Receber",
    desc: "Visualize recebimentos previstos, realizados e valores em aberto.",
  },
  {
    icon: LineChart,
    title: "Fluxo de Caixa",
    desc: "Compare previsto x realizado e acompanhe a necessidade financeira da empresa.",
  },
  {
    icon: ClipboardCheck,
    title: "Aprovações",
    desc: "Controle solicitações, pagamentos e decisões que precisam de validação.",
  },
  {
    icon: FileText,
    title: "Documentos",
    desc: "Centralize comprovantes, notas, anexos e informações importantes da operação.",
  },
];

function ModulesSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          O que a Plataforma AV centraliza
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
          Tudo o que a rotina financeira precisa, em um só lugar.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <article
              key={m.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <m.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{m.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ROUTINE_BENEFITS = [
  { icon: LayoutDashboard, text: "Rotina financeira centralizada" },
  { icon: ClipboardCheck, text: "Aprovações mais organizadas" },
  { icon: FileText, text: "Documentos vinculados aos processos" },
  { icon: Gauge, text: "Indicadores em tempo real" },
  { icon: RefreshCcw, text: "Menos retrabalho operacional" },
  { icon: TrendingUp, text: "Mais clareza para tomada de decisão" },
];

function RoutineSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <ShieldCheck className="h-4 w-4" strokeWidth={2} />
            Como a plataforma apoia a rotina
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Menos informação perdida.{" "}
            <span className="text-brand">Mais controle sobre a operação.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              A Plataforma AV foi pensada para apoiar a rotina real do financeiro: o que precisa ser
              pago, o que já foi conferido, o que depende de aprovação, quais documentos estão
              anexados e quais números precisam ser acompanhados.
            </p>
            <p>
              Ela não substitui o método e a equipe. Ela fortalece a operação, dando visibilidade e
              rastreabilidade para tudo que acontece.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {ROUTINE_BENEFITS.map((b) => (
            <li
              key={b.text}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <b.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-semibold text-navy-deep">{b.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const ECO = [
  { icon: Users, title: "Equipe AV", desc: "Executa e acompanha a rotina financeira." },
  { icon: ClipboardCheck, title: "Método AV", desc: "Define processos, prazos e governança." },
  {
    icon: MonitorSmartphone,
    title: "Plataforma AV",
    desc: "Centraliza dados, documentos e indicadores.",
  },
  { icon: BrainCircuit, title: "IA AV", desc: "Apoia automações, análises e alertas." },
];

function EcosystemSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Ecossistema AV
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            A plataforma conecta{" "}
            <span className="text-brand">tecnologia, execução e inteligência.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A Plataforma AV é parte do ecossistema da AV Gestão Financeira. Ela conecta a equipe que
            executa, o método que organiza e a inteligência artificial que apoia análises,
            automações e acompanhamento da rotina.
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

function FinalCta() {
  return (
    <section className="relative hero-bg overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <div className="flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] text-brand backdrop-blur sm:grid">
            <BarChart3 className="h-7 w-7" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[40px]">
              Quer ter mais <span className="text-brand">visibilidade</span> sobre sua operação
              financeira?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Conheça a Plataforma AV e veja como a tecnologia pode trazer mais controle, organização
            e clareza para o financeiro da sua empresa.
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
            <CheckCircle2 className="h-4 w-4 text-brand" />
            Demonstração guiada por um especialista AV.
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlataformaAV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Reveal>
        <WhyPlatform />
      </Reveal>
      <Reveal>
        <ModulesSection />
      </Reveal>
      <ScreensSection />
      <StatsBand />
      <Reveal>
        <RoutineSection />
      </Reveal>
      <Reveal>
        <EcosystemSection />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
      <SiteFooter />
    </main>
  );
}
