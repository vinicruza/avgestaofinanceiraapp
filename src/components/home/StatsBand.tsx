import { CountUp } from "@/components/site/CountUp";
import { Reveal } from "@/components/site/Reveal";

// TODO: substituir pelos NÚMEROS REAIS da AV antes de publicar.
// (valores atuais são placeholders — regra do projeto: nunca publicar dado inventado)
const STATS: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}[] = [
  { to: 120, prefix: "R$ ", suffix: " mi", label: "processados por ano" },
  { to: 30, suffix: "+", label: "empresas atendidas" },
  { to: 15, suffix: "+", label: "postos na operação" },
  { to: 98, suffix: "%", label: "das rotinas no prazo" },
];

export function StatsBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1360px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-l-2 border-brand pl-5">
              <div className="font-display text-3xl font-extrabold leading-none tracking-tight text-navy-deep sm:text-4xl lg:text-[42px]">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-2 text-[13px] font-medium leading-tight text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
