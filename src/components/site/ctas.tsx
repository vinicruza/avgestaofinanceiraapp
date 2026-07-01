import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
};

export function CtaPrimary({ children, className = "", to, href }: CommonProps) {
  const base = `group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition hover:bg-brand-strong ${className}`;
  const inner = (
    <>
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-md bg-white/15 transition group-hover:translate-x-0.5">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return <button className={base}>{inner}</button>;
}

export function CtaGhost({
  children,
  variant = "dark",
  className = "",
  to,
  href,
}: CommonProps & { variant?: "dark" | "light" }) {
  const styles =
    variant === "dark"
      ? "border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10"
      : "border-border bg-white text-navy-deep hover:bg-brand-soft";
  const base = `group inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition ${styles} ${className}`;
  const inner = (
    <>
      {children}
      <span
        className={`grid h-6 w-6 place-items-center rounded-md transition group-hover:translate-x-0.5 ${
          variant === "dark" ? "bg-white/15 text-white" : "bg-brand-soft text-brand"
        }`}
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return <button className={base}>{inner}</button>;
}
