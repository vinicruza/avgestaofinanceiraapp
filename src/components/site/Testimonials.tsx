import { MessageSquareQuote } from "lucide-react";
import { AV_TESTIMONIALS, type AvTestimonial } from "@/lib/av-testimonials";
import { Reveal } from "@/components/site/Reveal";

function Card({ t, i }: { t: AvTestimonial; i: number }) {
  const draft = !t.ready;
  return (
    <Reveal delay={i * 110} className="h-full">
      <figure
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-deep p-7 shadow-[0_24px_60px_-24px_rgba(10,15,40,0.55)] ring-1 ${
          draft ? "ring-brand/30" : "ring-white/10"
        }`}
      >
        {/* brilho decorativo no canto */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.35), transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {draft && (
          <span className="relative mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
            Depoimento a preencher
          </span>
        )}

        <h3 className="relative font-display text-xl font-extrabold leading-snug tracking-tight text-white">
          “{t.headline}”
        </h3>

        <blockquote className="relative mt-4 flex-1 text-[14.5px] italic leading-relaxed text-white/70">
          {t.quote}
        </blockquote>

        <figcaption className="relative mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-brand">
            {t.initials}
          </span>
          <span className="leading-tight">
            <span className="block text-[14px] font-bold text-white">{t.name}</span>
            <span className="block text-[12.5px] text-white/55">{t.role}</span>
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

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {AV_TESTIMONIALS.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
