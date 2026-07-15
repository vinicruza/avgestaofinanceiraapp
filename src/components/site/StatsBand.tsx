import { useEffect, useRef, useState } from "react";
import { PlugZap, Sparkles } from "lucide-react";
import { AV_STATS, AV_INTEGRATIONS, type AvStat } from "@/lib/av-stats";

/**
 * Contador que anima de 0 até o valor quando entra na viewport.
 *
 * - SSR-safe: o estado inicial é o valor final (idêntico no servidor e no
 *   primeiro render do cliente), evitando erro de hidratação e garantindo que
 *   quem está sem JS ou com `prefers-reduced-motion` veja o número correto.
 */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    setDisplay(0);
    let raf = 0;
    let started = false;

    const animate = () => {
      const duration = 1200;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(eased * value));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ stat }: { stat: AvStat }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        <CountUp value={stat.value} suffix={stat.suffix} />
      </div>
      <div className="mx-auto mt-2 max-w-[180px] text-[13px] leading-snug text-white/60">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="bg-navy-deep">
      <div className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            Não é promessa. É operação real.
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-[38px]">
            Uma plataforma que já roda a rotina financeira de{" "}
            <span className="text-brand">dezenas de operações.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {AV_STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="flex items-center justify-center gap-2 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
            <PlugZap className="h-4 w-4 text-brand" strokeWidth={2} />
            Integrações já em produção
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {AV_INTEGRATIONS.map((i) => (
              <div
                key={i.name}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center backdrop-blur"
              >
                <div className="text-sm font-bold text-white">{i.name}</div>
                <div className="mt-1 text-[11px] leading-snug text-white/55">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
