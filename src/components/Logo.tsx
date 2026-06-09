import Link from "next/link";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * Standalone circular P mark.
 * The bowl uses a cubic bézier curve for an elegant, typographic feel.
 * Stem has subtly rounded caps. All proportions derived from a single base unit.
 */
export function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  const cx = size / 2;
  const cy = size / 2;

  // Base unit — all proportions derived from this
  const u = size / 10;

  // Stem
  const stemW   = u * 0.88;
  const stemRx  = stemW / 2;         // fully rounded caps
  const vPad    = u * 2.1;
  const stemH   = size - vPad * 2;
  const stemX   = cx - u * 1.52;    // slightly left of centre
  const stemY   = vPad;

  // Bowl — cubic bézier, symmetric control points
  const bowlTop    = stemY;
  const bowlBot    = stemY + stemH * 0.52;   // bowl = 52 % of cap height
  const bowlLeft   = stemX + stemW;
  const ctrlX      = bowlLeft + u * 2.4;     // how far right the bowl bulges

  // path: start top-left → bézier arc right → bottom-left → close (flat left edge)
  const bowlPath = [
    `M ${bowlLeft},${bowlTop}`,
    `C ${ctrlX},${bowlTop} ${ctrlX},${bowlBot} ${bowlLeft},${bowlBot}`,
    `Z`,
  ].join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circle background */}
      <circle cx={cx} cy={cy} r={cx} fill="#2563eb" />

      {/* Stem */}
      <rect
        x={stemX}
        y={stemY}
        width={stemW}
        height={stemH}
        rx={stemRx}
        fill="white"
      />

      {/* Bowl */}
      <path d={bowlPath} fill="white" />
    </svg>
  );
}

interface LogoProps {
  dark?: boolean;
  size?: number;
  asSpan?: boolean;
}

/**
 * Full lockup: circular P mark + serif "Prime" + tracked "STUDIO".
 * Uses Gloock (serif) for the name — elegant typographic contrast.
 */
export default function Logo({ dark = false, size = 36, asSpan = false }: LogoProps) {
  // Scale wordmark relative to mark size
  const nameSize  = Math.round(size * 0.52);
  const subSize   = Math.round(size * 0.255);
  const colGap    = Math.round(size * 0.28);
  const rowGap    = Math.round(size * 0.08);

  const nameColor = dark ? "#ffffff" : "#0d0d14";
  const subColor  = dark ? "#9ca3af" : "#6b7280";

  const inner = (
    <span
      className="inline-flex items-center"
      style={{ gap: colGap }}
    >
      <LogoMark size={size} />

      <span className="flex flex-col justify-center">
        {/* Serif wordmark — refined, timeless */}
        <span
          style={{
            fontFamily: "var(--font-gloock), Georgia, 'Times New Roman', serif",
            fontSize: nameSize,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color: nameColor,
          }}
        >
          Prime
        </span>

        {/* Tracked sans descriptor */}
        <span
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: subSize,
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "0.19em",
            color: subColor,
            marginTop: rowGap,
            textTransform: "uppercase" as const,
          }}
        >
          Studio
        </span>
      </span>
    </span>
  );

  if (asSpan) return inner;

  return (
    <Link href="/" className="inline-flex" aria-label="Prime Studio — Página inicial">
      {inner}
    </Link>
  );
}
