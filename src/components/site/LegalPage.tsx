import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative hero-bg overflow-hidden">
        <SiteHeader variant="dark" />
        <div className="relative mx-auto max-w-[1360px] px-6 pb-20 pt-6 lg:px-10 lg:pt-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            AV Gestão Financeira
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">{subtitle}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-[15px] leading-relaxed text-muted-foreground lg:px-10">
          <div className="space-y-5">{children}</div>
          <div className="mt-12 border-t border-border pt-6 text-sm">
            <Link to="/" className="font-semibold text-brand hover:underline">
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
