import { useState } from "react";
import {
  Wallet,
  ClipboardCheck,
  Banknote,
  LineChart,
  Workflow,
  BrainCircuit,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  details: string;
};

const SERVICES: Service[] = [
  {
    icon: Wallet,
    title: "Gestão Financeira",
    desc: "Rotina, indicadores e previsibilidade para o financeiro da empresa.",
    details:
      "Estruturamos a rotina financeira, definimos indicadores e damos clareza sobre entradas, saídas e resultado — para decidir com base em dados, não em achismo.",
  },
  {
    icon: ClipboardCheck,
    title: "BPO Financeiro",
    desc: "Execução da rotina financeira com método e governança.",
    details:
      "Um dos serviços da AV: assumimos a execução de contas a pagar e receber, conciliação e conferências, com processo padronizado e visibilidade em tempo real.",
  },
  {
    icon: Banknote,
    title: "Gestão de Pagamentos",
    desc: "Pagamentos, aprovações e agenda sob controle.",
    details:
      "Organizamos aprovações, comprovantes e a agenda de pagamentos, com regras claras de alçada — menos risco de erro e mais controle sobre cada saída.",
  },
  {
    icon: LineChart,
    title: "Fluxo de Caixa",
    desc: "Previsto x realizado, com projeção para os próximos meses.",
    details:
      "Acompanhamos o previsto e o realizado e projetamos o caixa à frente, para que a empresa antecipe apertos e oportunidades em vez de reagir a surpresas.",
  },
  {
    icon: Workflow,
    title: "Gestão Operacional",
    desc: "Processos que conectam a operação ao financeiro.",
    details:
      "Vamos além do financeiro: organizamos processos operacionais que impactam o caixa — estoque, cartões, documentos e conferências — de forma integrada.",
  },
  {
    icon: BrainCircuit,
    title: "IA Aplicada",
    desc: "Inteligência artificial nos pontos que realmente importam.",
    details:
      "Automatizamos tarefas, geramos alertas inteligentes e apoiamos análises — inteligência artificial aplicada à rotina para ganhar produtividade e clareza.",
  },
];

export function ServicesGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[oklch(0.985_0.005_258)]">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O que fazemos
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Soluções <span className="text-brand">personalizadas</span> para cada empresa.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            A AV desenha a combinação certa de serviços para a sua operação. Não é um pacote
            fechado — é uma parceria que se adapta à realidade do seu negócio.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <article
                  className={`group relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                    isOpen ? "border-brand" : "border-border"
                  }`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand">
                    <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-[13.5px] leading-relaxed text-navy-deep/80">
                        {s.details}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? `Recolher ${s.title}` : `Saber mais sobre ${s.title}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-brand/30 text-brand transition-all duration-300 hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <Plus
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
