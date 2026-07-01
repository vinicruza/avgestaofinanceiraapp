import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function CtaPrimary({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
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

export function CtaGhost({
  children,
  variant = "dark",
  className = "",
}: {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10"
      : "border-border bg-white text-navy-deep hover:bg-brand-soft";
  return (
    <button
      className={`group inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
      <span
        className={`grid h-6 w-6 place-items-center rounded-md transition group-hover:translate-x-0.5 ${
          variant === "dark" ? "bg-white/15 text-white" : "bg-brand-soft text-brand"
        }`}
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}
