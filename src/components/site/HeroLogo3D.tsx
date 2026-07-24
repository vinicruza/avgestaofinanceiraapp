import { useEffect, useState } from "react";
import avLogo3d from "@/assets/av-logo-3d.png";

// Visual do hero da Home. Por padrão (e no SSR) renderiza o PNG do logo 3D.
// No cliente, quando faz sentido, "liga" o modelo 3D interativo (model-viewer):
// só em telas com mouse (pointer: fine) e sem preferência por menos movimento —
// assim o mobile continua leve e o scroll não é capturado pelo canvas 3D.
// Se o model-viewer não carregar por qualquer motivo, permanece o PNG.
export function HeroLogo3D() {
  const [live, setLive] = useState(false);

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
      src="/logoav.glb"
      poster={avLogo3d}
      alt="Logo 3D interativo da AV Gestão Financeira — arraste para girar"
      camera-controls
      auto-rotate
      auto-rotate-delay={0}
      rotation-per-second="16deg"
      interaction-prompt="none"
      camera-orbit="18deg 74deg 105%"
      min-camera-orbit="auto 55deg auto"
      max-camera-orbit="auto 100deg auto"
      field-of-view="26deg"
      shadow-intensity={0}
      environment-image="neutral"
      exposure={1.15}
      disable-zoom
      disable-pan
      className="drop-shadow-[0_40px_80px_rgba(10,15,40,0.45)]"
      style={{ width: "100%", aspectRatio: "1200 / 689" }}
    />
  );
}
