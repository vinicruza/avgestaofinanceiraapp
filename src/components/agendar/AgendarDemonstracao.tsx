import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Compass,
  Cpu,
  FileText,
  Fuel,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Loader2,
  MessageCircle,
  MonitorSmartphone,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CtaGhost, CtaPrimary } from "@/components/site/ctas";
import { AV_WHATSAPP_URL } from "@/lib/av-config";

/* ---------- Hero visuals ---------- */

function HeroBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="schedule-l" x1="0" x2="1">
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
          stroke="url(#schedule-l)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function FloatCard({
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

function HeroSchedule() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.4), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sched-conn" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 60 70 C 170 130, 230 190, 250 250" fill="none" stroke="url(#sched-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 440 60 C 340 130, 290 200, 250 250" fill="none" stroke="url(#sched-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 30 280 C 150 280, 210 260, 250 250" fill="none" stroke="url(#sched-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 60 440 C 170 380, 220 300, 250 250" fill="none" stroke="url(#sched-conn)" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M 440 430 C 340 370, 290 300, 250 250" fill="none" stroke="url(#sched-conn)" strokeWidth="1" strokeDasharray="3 4" />
      </svg>

      <div className="relative mx-auto aspect-[5/5] w-full max-w-[560px]">
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
              <CalendarCheck className="h-12 w-12 text-brand" strokeWidth={1.6} />
              <span className="absolute -bottom-3 whitespace-nowrap rounded-full bg-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-[var(--shadow-cta)]">
                Demonstração
              </span>
            </div>
          </div>
        </div>

        <FloatCard className="left-0 top-2" icon={Search} meta="Etapa 01" title="Diagnóstico financeiro" />
        <FloatCard className="right-0 top-0" icon={Workflow} meta="Etapa 02" title="Rotina operacional" />
        <FloatCard className="-left-2 top-1/2 -translate-y-1/2" icon={MonitorSmartphone} meta="Ferramenta" title="Plataforma AV" />
        <FloatCard className="left-0 bottom-2" icon={Target} meta="Estrutura" title="Método AV" />
        <FloatCard className="right-0 bottom-2" icon={BrainCircuit} meta="Inteligência" title="IA aplicada" />
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
            Agendar demonstração
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            Vamos entender a{" "}
            <span className="text-brand">rotina financeira</span> da sua empresa?
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Preencha o formulário e nossa equipe entrará em contato para{" "}
            <strong className="font-semibold text-white">
              entender sua operação, seus principais desafios
            </strong>{" "}
            e como a AV Gestão Financeira pode ajudar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaPrimary href="#formulario">Preencher formulário</CtaPrimary>
            <CtaGhost href={AV_WHATSAPP_URL}>
              <MessageCircle className="h-4 w-4" />
              Falar pelo WhatsApp
            </CtaGhost>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroSchedule />
        </div>
      </div>
    </section>
  );
}

/* ---------- Form + "O que acontece depois" ---------- */

const CHALLENGE_OPTIONS = [
  "Organizar contas a pagar",
  "Melhorar fluxo de caixa",
  "Ter mais controle sobre pagamentos",
  "Centralizar documentos e aprovações",
  "Reduzir dependência de planilhas",
  "Melhorar visibilidade financeira",
  "Conhecer a Plataforma AV",
  "Aplicar IA na rotina financeira",
  "Outro",
];

const NEXT_STEPS = [
  {
    icon: Search,
    title: "Entendemos sua operação",
    desc: "Analisamos sua rotina financeira, volume de demandas, principais gargalos e objetivos.",
  },
  {
    icon: Compass,
    title: "Identificamos oportunidades",
    desc: "Mapeamos onde a AV pode ajudar com processos, execução, tecnologia e inteligência.",
  },
  {
    icon: Route,
    title: "Apresentamos o caminho",
    desc: "Mostramos como seria a aplicação do Método AV na sua empresa.",
  },
];

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[12px] font-semibold uppercase tracking-wider text-navy-deep/70">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[14px] text-navy-deep placeholder:text-navy-deep/40 shadow-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

function FormAndSteps() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Interface pronta — integração posterior com backend.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="formulario" className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-14 lg:px-10">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <ClipboardList className="h-4 w-4" strokeWidth={2} />
            Formulário
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy-deep sm:text-3xl">
            Solicite uma conversa com a AV Gestão Financeira.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            Retornaremos o contato em até 1 dia útil para entender a sua operação.
          </p>

          <form className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <Field label="Nome completo">
              <input required name="nome" className={inputClass} placeholder="Seu nome" />
            </Field>
            <Field label="Empresa">
              <input required name="empresa" className={inputClass} placeholder="Nome da empresa" />
            </Field>
            <Field label="E-mail">
              <input required type="email" name="email" className={inputClass} placeholder="voce@empresa.com" />
            </Field>
            <Field label="Telefone / WhatsApp">
              <input required name="telefone" className={inputClass} placeholder="(00) 00000-0000" />
            </Field>
            <Field label="Cargo">
              <input name="cargo" className={inputClass} placeholder="Ex.: Sócio, CFO, Gerente Financeiro" />
            </Field>
            <Field label="Empresas ou unidades">
              <input name="unidades" className={inputClass} placeholder="Ex.: 1 empresa, 3 unidades" />
            </Field>
            <Field full label="Principal desafio financeiro">
              <select required name="desafio" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Selecione o principal desafio
                </option>
                {CHALLENGE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <Field full label="Mensagem">
              <textarea
                name="mensagem"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Conte um pouco sobre a rotina financeira da sua empresa."
              />
            </Field>

            <div className="sm:col-span-2 flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[12px] text-muted-foreground">
                Ao enviar, você concorda em receber contato comercial da AV Gestão Financeira.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-strong disabled:opacity-70 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Solicitar contato
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>

            {sent && (
              <div className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-brand/20 bg-brand-soft px-4 py-3 text-[13.5px] text-navy-deep">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
                <span>
                  Recebemos sua solicitação. Nossa equipe entrará em contato em breve.
                </span>
              </div>
            )}
          </form>
        </div>

        <aside className="flex flex-col">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            O que acontece depois?
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy-deep">
            Uma conversa objetiva, guiada por um especialista AV.
          </h3>

          <div className="mt-6 space-y-4">
            {NEXT_STEPS.map((s, i) => (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                        Passo {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="mt-1 text-[15px] font-bold text-navy-deep">{s.title}</h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------- Para quem ---------- */

const AUDIENCE = [
  { icon: Users, text: "Empresas com financeiro sobrecarregado" },
  { icon: FileText, text: "Negócios com muitas contas a pagar" },
  { icon: Building2, text: "Operações com múltiplas empresas, unidades ou bancos" },
  { icon: ListChecks, text: "Empresas que dependem de planilhas e mensagens soltas" },
  { icon: TrendingUp, text: "Sócios que precisam de mais previsibilidade" },
  { icon: Fuel, text: "Postos de combustíveis e operações com rotina intensa" },
];

function AudienceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            Para quem é essa conversa
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Essa conversa é indicada para empresas que querem mais{" "}
            <span className="text-brand">controle financeiro.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <article
              key={a.text}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <a.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="text-[14px] font-medium leading-snug text-navy-deep">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- O que esperar ---------- */

const EXPECT = [
  {
    icon: Gauge,
    title: "Diagnóstico inicial",
    desc: "Entendimento dos principais gargalos da rotina financeira.",
  },
  {
    icon: LayoutDashboard,
    title: "Visão de processo",
    desc: "Análise de como pagamentos, aprovações e documentos circulam hoje.",
  },
  {
    icon: ShieldCheck,
    title: "Caminho de organização",
    desc: "Indicação de como a AV poderia estruturar uma rotina mais previsível.",
  },
];

function ExpectSection() {
  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O que você pode esperar
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[36px]">
            Uma conversa prática sobre a sua{" "}
            <span className="text-brand">operação financeira.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A demonstração não é apenas uma apresentação comercial. O objetivo é entender como
            sua empresa opera hoje, quais processos precisam de mais clareza e onde a AV pode
            gerar valor com equipe, método, plataforma e inteligência artificial.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPECT.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                <e.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{e.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */

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
              Pronto para <span className="text-brand">organizar melhor o financeiro</span> da sua
              empresa?
            </h2>
          </div>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed text-white/75">
            Agende uma conversa com a AV Gestão Financeira e entenda como transformar sua rotina
            financeira em uma operação mais clara, controlada e previsível.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaPrimary href="#formulario">Agendar demonstração</CtaPrimary>
            <a
              href={AV_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 self-center text-sm font-semibold text-white/80 hover:text-white"
            >
              Falar pelo WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <Gauge className="h-4 w-4 text-brand" />
            Resposta em até 1 dia útil.
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgendarDemonstracao() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <FormAndSteps />
      <AudienceSection />
      <ExpectSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
