import { Quote, MessageSquareQuote } from "lucide-react";
import { AV_TESTIMONIALS, type AvTestimonial } from "@/lib/av-testimonials";
import { Reveal } from "@/components/site/Reveal";

function Card({ t, i }: { t: AvTestimonial; i: number }) {
  const draft = !t.ready;
  return (
    <Reveal delay={i * 110}>
      <figure
        className={`flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] ${
          draft ? "border-dashed border-brand/30" : "border-border"
        }`}
      >
        {draft && (
          <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
            Depoimento a preencher
          </span>
        )}
        <Quote className="h-7 w-7 text-brand/30" strokeWidth={1.75} />
        <blockquote className="mt-3 flex-1 text-[14.5px] leading-relaxed text-navy-deep">
          {t.quote}
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">
            {t.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-[14px] font-bold text-navy-deep">{t.name}</span>
            <span className="block text-[12.5px] text-muted-foreground">{t.role}</span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function Testimonials({
  className = "bg-[oklch(0.985_0.005_258)]",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
            <MessageSquareQuote className="h-4 w-4" strokeWidth={2} />
            Quem confia na AV
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep lg:text-[38px]">
            O que dizem sobre a operação financeira com a <span className="text-brand">AV.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {AV_TESTIMONIALS.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
