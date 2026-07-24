import { useEffect, useRef, useState } from "react";
import avLogo3d from "@/assets/av-logo-3d.png";

// Visual do hero da Home. Por padrão (e no SSR) renderiza o PNG do logo 3D.
// No cliente, quando faz sentido, "liga" o modelo 3D (model-viewer): só em telas
// com mouse (pointer: fine) e sem preferência por menos movimento — assim o
// mobile continua leve. Se o model-viewer não carregar, permanece o PNG.
//
// Em vez de girar 360° (o que obrigaria a câmera a ficar longe, deixando o logo
// pequeno), o logo faz um BALANÇO suave em torno da vista frontal — onde se lê
// "AV". Como o leque de ângulos é curto, dá para aproximar bastante a câmera
// sem que o logo saia das bordas em nenhum momento.

// Faixa do balanço (validada por render: não corta em nenhum ponto).
const AZ_CENTER = 16; // azimute central (graus)
const AZ_AMP = 15; // amplitude do balanço horizontal
const EL_CENTER = 74; // elevação central
const EL_AMP = 2.5; // leve variação vertical
const RADIUS = 38; // % do enquadramento automático (menor = maior na tela)
const AZ_PERIOD = 11000; // ms por ciclo horizontal
const EL_PERIOD = 17000; // ms por ciclo vertical (defasado, dá naturalidade)

export function HeroLogo3D() {
  const [live, setLive] = useState(false);
  const mvRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    import("@google/model-viewer")
      .then(() => {
        if (!cancelled) setLive(true);
      })
      .catch(() => {
        // Falha ao carregar: mantém o PNG como fallback.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Balanço suave e contínuo (só quando o 3D está ativo).
  useEffect(() => {
    if (!live) return;
    const mv = mvRef.current;
    if (!mv) return;

    let raf = 0;
    const start = performance.now();
    const wAz = (2 * Math.PI) / AZ_PERIOD;
    const wEl = (2 * Math.PI) / EL_PERIOD;

    const loop = (now: number) => {
      const t = now - start;
      const az = AZ_CENTER + AZ_AMP * Math.sin(t * wAz);
      const el = EL_CENTER + EL_AMP * Math.sin(t * wEl);
      mv.setAttribute("camera-orbit", `${az.toFixed(2)}deg ${el.toFixed(2)}deg ${RADIUS}%`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, [live]);

  if (!live) {
    return (
      <img
        src={avLogo3d}
        alt="Logo 3D da AV Gestão Financeira"
        className="float-slow w-full drop-shadow-[0_40px_80px_rgba(10,15,40,0.45)]"
        width={1200}
        height={689}
      />
    );
  }

  return (
    <model-viewer
      ref={mvRef}
      src="/logoav.glb"
      poster={avLogo3d}
      alt="Logo 3D da AV Gestão Financeira"
      interaction-prompt="none"
      camera-orbit={`${AZ_CENTER}deg ${EL_CENTER}deg ${RADIUS}%`}
      field-of-view="26deg"
      shadow-intensity={0}
      environment-image="neutral"
      exposure={1.15}
      disable-zoom
      disable-tap
      className="drop-shadow-[0_40px_80px_rgba(10,15,40,0.45)]"
      style={{ width: "100%", aspectRatio: "1.85" }}
    />
  );
}
