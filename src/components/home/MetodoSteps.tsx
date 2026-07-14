import { Reveal } from "@/components/site/Reveal";

const STEPS: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos a rotina, os gargalos e a realidade financeira da empresa." },
  { n: "02", title: "Estruturação", desc: "Desenhamos processos, controles e a governança sob medida." },
  { n: "03", title: "Padronização", desc: "Definimos regras claras para pagamentos, aprovações e conferências." },
  { n: "04", title: "Execução", desc: "Colocamos a rotina para rodar, com disciplina e visão de dono." },
  { n: "05", title: "Acompanhamento", desc: "Monitoramos indicadores e ajustamos a operação de forma contínua." },
];

export function MetodoSteps() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            O Método AV
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[40px]">
            Um caminho claro, do <span className="text-brand">diagnóstico</span> ao acompanhamento.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="absolute right-3 top-1 -z-0 select-none font-display text-[64px] font-extrabold leading-none tracking-tight text-navy-deep/[0.05]">
                  {s.n}
                </span>
                <span className="block h-1 w-9 rounded-full bg-brand" />
                <h3 className="relative mt-5 text-base font-bold text-navy-deep">{s.title}</h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
