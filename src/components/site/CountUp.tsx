import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valor final numérico (ex.: 6, 500, 40). */
  to: number;
  /** Texto antes do número (ex.: "R$ "). */
  prefix?: string;
  /** Texto depois do número (ex.: "bi", "+", "%"). */
  suffix?: string;
  /** Casas decimais. */
  decimals?: number;
  /** Duração da animação em ms. */
  duration?: number;
  className?: string;
};

/**
 * Conta de 0 até `to` quando entra na viewport. Usa tabular-nums para não
 * "tremer" a largura. Respeita prefers-reduced-motion (mostra o valor final).
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  // Inicia no valor final: o SSR (e o cenário sem JS) já mostra o número real.
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    // Zera para animar a contagem quando entrar na viewport. Como a faixa fica
    // abaixo da dobra, o usuário não vê o "reset" — só a contagem subindo.
    setValue(0);

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(to * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    // guardamos o formatador na ref via closure — recalcula no render abaixo
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration, decimals]);

  const formatted = value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
