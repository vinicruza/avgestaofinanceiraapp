import { useEffect, useRef, useState } from "react";
import avLogo3d from "@/assets/av-logo-3d.png";

// Visual do hero da Home. Por padrão (e no SSR) renderiza o PNG do logo 3D.
// No cliente, quando faz sentido, "liga" o modelo 3D (model-viewer): só em telas
// com mouse (pointer: fine) e sem preferência por menos movimento. Se não
// carregar, permanece o PNG.
//
// Movimento: um BALANÇO suave em torno da vista frontal (onde se lê "AV"), o que
// permite aproximar bastante a câmera sem o logo sair das bordas. O usuário
// também pode ARRASTAR para girar — enquanto arrasta, o balanço pausa; ao
// soltar, ele retoma suavemente (o model-viewer interpola de volta).

const AZ_CENTER = 16; // azimute central (graus)
const AZ_AMP = 8; // amplitude do balanço horizontal (curta = permite mais zoom)
const EL_CENTER = 74; // elevação central
const EL_AMP = 2; // leve variação vertical
const RADIUS = 34; // % do enquadramento automático (menor = maior na tela)
const AZ_PERIOD = 10000; // ms por ciclo horizontal
const EL_PERIOD = 15000; // ms por ciclo vertical (defasado, dá naturalidade)

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

  // Balanço suave e contínuo, pausado durante o arraste do usuário.
  useEffect(() => {
    if (!live) return;
    const mv = mvRef.current;
    if (!mv) return;

    let raf = 0;
    let interacting = false;
    const start = performance.now();
    const wAz = (2 * Math.PI) / AZ_PERIOD;
    const wEl = (2 * Math.PI) / EL_PERIOD;

    const loop = (now: number) => {
      if (!interacting) {
        const t = now - start;
        const az = AZ_CENTER + AZ_AMP * Math.sin(t * wAz);
        const el = EL_CENTER + EL_AMP * Math.sin(t * wEl);
        // Ao retomar após o arraste, o model-viewer interpola daqui suavemente.
        mv.setAttribute("camera-orbit", `${az.toFixed(2)}deg ${el.toFixed(2)}deg ${RADIUS}%`);
      }
      raf = requestAnimationFrame(loop);
    };

    const onDown = () => {
      interacting = true;
    };
    const onUp = () => {
      interacting = false;
    };

    mv.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      mv.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
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
      alt="Logo 3D da AV Gestão Financeira — arraste para girar"
      camera-controls
      interaction-prompt="none"
      camera-orbit={`${AZ_CENTER}deg ${EL_CENTER}deg ${RADIUS}%`}
      min-camera-orbit="auto 50deg 20%"
      max-camera-orbit="auto 110deg 300%"
      field-of-view="26deg"
      shadow-intensity={0}
      environment-image="neutral"
      exposure={1.15}
      disable-zoom
      disable-pan
      className="drop-shadow-[0_40px_80px_rgba(10,15,40,0.45)]"
      style={{ width: "100%", aspectRatio: "1.9" }}
    />
  );
}
