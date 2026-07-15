import { useId } from "react";

/**
 * Fundo decorativo de linhas usado nas seções escuras (hero-bg).
 * Antes estava duplicado em ~8 páginas — agora é um componente único.
 *
 * O `id` do gradiente é gerado com `useId()` para evitar colisão quando
 * mais de um backdrop é renderizado na mesma página (ex.: a Home one-page,
 * que tem hero + CTA final escuros).
 */
export function HeroBackdrop({ className = "" }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] ${className}`}
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="hero-lines">
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M -100 ${200 + i * 55} C 300 ${120 + i * 55}, 900 ${340 + i * 55}, 1700 ${180 + i * 55}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
}
