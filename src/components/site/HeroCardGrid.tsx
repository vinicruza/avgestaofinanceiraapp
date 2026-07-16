import type { ComponentType } from "react";

export type HeroCardItem = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  meta: string;
  title: string;
};

/**
 * Grade de cards para o visual do hero — substitui os antigos cards flutuantes
 * de posição absoluta, que se sobrepunham em várias larguras de tela.
 * Layout responsivo e estável: 1 coluna no mobile, 2 colunas a partir do sm.
 */
export function HeroCardGrid({ items }: { items: HeroCardItem[] }) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background: "radial-gradient(closest-side, oklch(0.58 0.19 258 / 0.3), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur transition hover:border-white/20"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.06] text-brand">
              <it.icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                {it.meta}
              </span>
            </div>
            <div className="mt-1 text-[13.5px] font-semibold leading-tight text-white">
              {it.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
