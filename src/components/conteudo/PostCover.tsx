import { useId } from "react";
import type { CoverKind } from "@/content/blog";

/**
 * Capas ilustrativas dos artigos do blog — SVGs abstratos e on-brand
 * (navy + azul da marca), gerados em código. Leves, escaláveis e sem
 * dependência de imagens externas.
 */
export function PostCover({ kind, className = "" }: { kind: CoverKind; className?: string }) {
  const raw = useId();
  const id = raw.replace(/[^a-zA-Z0-9]/g, "");
  const bg = `bg-${id}`;
  const glow = `glow-${id}`;

  return (
    <div className={`relative overflow-hidden bg-navy-deep ${className}`}>
      <svg viewBox="0 0 400 225" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0b1226" />
            <stop offset="1" stopColor="#141d3f" />
          </linearGradient>
          <radialGradient id={glow} cx="0.5" cy="0.4" r="0.7">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="225" fill={`url(#${bg})`} />
        <rect width="400" height="225" fill={`url(#${glow})`} />
        <Motif kind={kind} />
      </svg>
    </div>
  );
}

function Motif({ kind }: { kind: CoverKind }) {
  const brand = "#60a5fa";
  const brandStrong = "#3b82f6";
  const line = "rgba(255,255,255,0.14)";
  const emerald = "#34d399";

  switch (kind) {
    case "payments":
      // Documentos/boletos que fluem para um pagamento aprovado.
      return (
        <g fill="none">
          {/* documentos empilhados à esquerda */}
          {[0, 1, 2].map((n) => (
            <g key={n} transform={`translate(${52 + n * 8}, ${70 + n * 18})`}>
              <rect width="86" height="26" rx="6" fill="#ffffff" opacity={0.06} />
              <rect x="10" y="8" width="40" height="4" rx="2" fill="#ffffff" opacity={0.35} />
              <rect x="10" y="16" width="26" height="4" rx="2" fill={brand} opacity={0.7} />
            </g>
          ))}
          {/* fluxo */}
          <path
            d="M 158 112 C 200 112, 210 112, 244 112"
            stroke={brand}
            strokeWidth="2"
            strokeDasharray="4 5"
          />
          <path d="M 240 106 l 10 6 l -10 6" stroke={brand} strokeWidth="2" />
          {/* cartão/pagamento aprovado à direita */}
          <g transform="translate(258, 82)">
            <rect width="92" height="60" rx="10" fill={brandStrong} opacity={0.18} />
            <rect width="92" height="60" rx="10" stroke={brand} strokeWidth="1.5" opacity={0.6} />
            <rect x="14" y="16" width="20" height="15" rx="3" fill={brand} opacity={0.85} />
            <rect x="14" y="40" width="46" height="4" rx="2" fill="#ffffff" opacity={0.3} />
            <circle cx="74" cy="20" r="10" fill={emerald} opacity={0.9} />
            <path d="M 70 20 l 3 3 l 6 -6" stroke="#0b1226" strokeWidth="2" />
          </g>
        </g>
      );

    case "reconciliation":
      // Duas colunas conciliadas por checks.
      return (
        <g fill="none">
          {[0, 1, 2].map((n) => {
            const y = 74 + n * 34;
            return (
              <g key={n}>
                <rect x="60" y={y} width="90" height="22" rx="6" fill="#ffffff" opacity={0.07} />
                <rect
                  x="70"
                  y={y + 8}
                  width="50"
                  height="5"
                  rx="2.5"
                  fill="#ffffff"
                  opacity={0.3}
                />
                <rect x="250" y={y} width="90" height="22" rx="6" fill="#ffffff" opacity={0.07} />
                <rect x="260" y={y + 8} width="50" height="5" rx="2.5" fill={brand} opacity={0.6} />
                <line
                  x1="150"
                  y1={y + 11}
                  x2="250"
                  y2={y + 11}
                  stroke={line}
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                />
                <circle cx="200" cy={y + 11} r="9" fill={emerald} opacity={0.9} />
                <path
                  d="M 196 11 l 3 3 l 6 -6"
                  transform={`translate(0, ${y})`}
                  stroke="#0b1226"
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </g>
      );

    case "cashflow":
      // Gráfico de área (previsto x realizado) subindo.
      return (
        <g fill="none">
          <line x1="40" y1="170" x2="360" y2="170" stroke={line} strokeWidth="1" />
          <path
            d="M 40 150 C 90 150, 110 120, 150 128 S 220 96, 260 108 300 70, 360 78 L 360 170 L 40 170 Z"
            fill={brandStrong}
            opacity={0.18}
          />
          <path
            d="M 40 150 C 90 150, 110 120, 150 128 S 220 96, 260 108 300 70, 360 78"
            stroke={brand}
            strokeWidth="2.5"
          />
          <path
            d="M 40 160 C 90 158, 110 140, 150 146 S 220 124, 260 132 300 108, 360 112"
            stroke={emerald}
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity={0.85}
          />
          <circle cx="360" cy="78" r="4" fill={brand} />
        </g>
      );

    case "organization":
      // Camadas organizadas / checklist.
      return (
        <g fill="none">
          {[0, 1, 2].map((n) => {
            const y = 66 + n * 34;
            return (
              <g key={n} transform={`translate(${90 - n * 6}, ${y})`}>
                <rect width="220" height="24" rx="7" fill="#ffffff" opacity={0.07} />
                <circle cx="18" cy="12" r="7" fill={n === 0 ? emerald : brand} opacity={0.85} />
                <path
                  d="M 14 12 l 3 3 l 6 -6"
                  transform="translate(1,0)"
                  stroke="#0b1226"
                  strokeWidth="2"
                />
                <rect x="36" y="9" width="120" height="5" rx="2.5" fill="#ffffff" opacity={0.3} />
              </g>
            );
          })}
        </g>
      );

    case "fuel":
      // Bomba de combustível + barras de resultado.
      return (
        <g fill="none">
          <g transform="translate(70, 66)">
            <rect width="80" height="96" rx="10" fill="#ffffff" opacity={0.07} />
            <rect x="14" y="14" width="52" height="34" rx="6" fill={brandStrong} opacity={0.25} />
            <rect
              x="14"
              y="14"
              width="52"
              height="34"
              rx="6"
              stroke={brand}
              strokeWidth="1.5"
              opacity={0.6}
            />
            <rect x="22" y="60" width="36" height="5" rx="2.5" fill="#ffffff" opacity={0.3} />
            <rect x="22" y="72" width="24" height="5" rx="2.5" fill={brand} opacity={0.6} />
            {/* mangueira */}
            <path d="M 80 40 C 100 40, 100 60, 100 80 L 100 120" stroke={brand} strokeWidth="3" />
            <rect x="92" y="120" width="16" height="10" rx="3" fill={brand} opacity={0.85} />
          </g>
          {/* barras de resultado */}
          <g>
            <rect x="230" y="120" width="22" height="42" rx="4" fill={brand} opacity={0.55} />
            <rect x="264" y="98" width="22" height="64" rx="4" fill={brand} opacity={0.75} />
            <rect x="298" y="76" width="22" height="86" rx="4" fill={emerald} opacity={0.85} />
          </g>
        </g>
      );

    default:
      return null;
  }
}
