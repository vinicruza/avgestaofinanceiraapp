import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import avLogo from "@/assets/av-logo-horizontal.png.asset.json";
import { CtaPrimary } from "./ctas";
import { AV_SCHEDULE_PATH } from "@/lib/av-config";

const NAV: { label: string; to: string }[] = [
  { label: "Soluções", to: "/solucoes" },
  { label: "Método AV", to: "/metodo-av" },
  { label: "Plataforma AV", to: "/plataforma-av" },
  { label: "IA AV", to: "/ia-av" },
  { label: "Casos de Uso", to: "/casos-de-uso" },
  { label: "Conteúdo", to: "/conteudo" },
  { label: "Sobre", to: "/sobre" },
];

export function SiteHeader({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";
  const textBase = isDark ? "text-white/85 hover:text-white" : "text-navy-deep/75 hover:text-navy-deep";

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="shrink-0">
          <img
            src={avLogo.url}
            alt="AV Gestão Financeira"
            className={`h-11 w-auto ${isDark ? "brightness-0 invert" : ""}`}
            width={220}
            height={44}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`inline-flex items-center gap-1 text-sm font-medium ${textBase} transition`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaPrimary to={AV_SCHEDULE_PATH}>Agendar demonstração</CtaPrimary>
        </div>

        <button
          className={`grid h-10 w-10 place-items-center rounded-md border lg:hidden ${
            isDark ? "border-white/15 text-white" : "border-border text-navy-deep"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className={`border-t backdrop-blur lg:hidden ${
            isDark ? "border-white/10 bg-navy-deep/95" : "border-border bg-white/95"
          }`}
        >
          <div className="mx-auto flex max-w-[1360px] flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-left text-sm font-medium ${textBase}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <CtaPrimary to={AV_SCHEDULE_PATH} className="w-full justify-center">Agendar demonstração</CtaPrimary>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
