import { useRef, useState } from "react";
import { MessageSquareQuote } from "lucide-react";
import { AV_TESTIMONIALS, type AvTestimonial } from "@/lib/av-testimonials";
import { Reveal } from "@/components/site/Reveal";

function Card({ t, i }: { t: AvTestimonial; i: number }) {
  const draft = !t.ready;
  return (
    <Reveal delay={i * 110} className="h-full w-[82%] shrink-0 snap-center sm:w-[47%] md:w-full">
      <figure
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-deep p-6 shadow-[0_24px_60px_-24px_rgba(10,15,40,0.55)] ring-1 sm:p-7 ${
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

        <h3 className="relative font-display text-lg font-extrabold leading-snug tracking-tight text-white sm:text-xl">
          “{t.headline}”
        </h3>

        <blockquote className="relative mt-4 flex-1 text-[14px] italic leading-relaxed text-white/70 sm:text-[14.5px]">
          {t.quote}
        </blockquote>

        <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const children = Array.from(el.children) as HTMLElement[];
    let best = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }

  function goTo(i: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const left = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  }

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

        {/*
          Mobile/tablet: carrossel horizontal com scroll-snap (deslize para o lado).
          Desktop (md+): grade de 3 colunas.
        */}
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="mt-14 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {AV_TESTIMONIALS.map((t, i) => (
            <Card key={i} t={t} i={i} />
          ))}
        </div>

        {/* Bolinhas indicadoras (apenas no mobile/tablet) */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {AV_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-brand" : "w-2 bg-navy-deep/20 hover:bg-navy-deep/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
