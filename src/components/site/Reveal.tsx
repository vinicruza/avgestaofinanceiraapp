import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso da entrada, em ms — útil para efeito escalonado (stagger). */
  delay?: number;
  /** Elemento renderizado. Padrão: div. */
  as?: ElementType;
  /** Fração do elemento visível para disparar a animação (0–1). */
  threshold?: number;
};

/**
 * Revela o conteúdo com um fade + slide-up quando entra na viewport.
 *
 * - Seguro para SSR: o estado inicial (oculto) é o mesmo no servidor e no
 *   cliente, evitando erro de hidratação.
 * - Acessível: as regras de `.reveal` só existem sob
 *   `prefers-reduced-motion: no-preference`; quem prefere menos movimento vê
 *   o conteúdo estático. Sem JavaScript, o `<noscript>` no __root garante
 *   que tudo apareça normalmente.
 */
export function Reveal({ children, className, delay, as, threshold = 0.15 }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita a preferência de redução de movimento.
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} className={cn("reveal", visible && "is-visible", className)} style={style}>
      {children}
    </Tag>
  );
}
