import Link from "next/link";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export function LogoMark({ size = 36, className = "" }: LogoMarkProps) {
  const cx = size / 2;
  const cy = size / 2;
  const u = size / 10;

  const stemW  = u * 0.88;
  const stemRx = stemW / 2;
  const vPad   = u * 2.1;
  const stemH  = size - vPad * 2;
  const stemX  = cx - u * 1.52;
  const stemY  = vPad;

  const bowlTop  = stemY;
  const bowlBot  = stemY + stemH * 0.52;
  const bowlLeft = stemX + stemW;
  const ctrlX    = bowlLeft + u * 2.4;

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
      <circle cx={cx} cy={cy} r={cx} fill="#2563eb" />
      <rect x={stemX} y={stemY} width={stemW} height={stemH} rx={stemRx} fill="white" />
      <path d={bowlPath} fill="white" />
    </svg>
  );
}

interface LogoProps {
  dark?: boolean;
  size?: number;
  asSpan?: boolean;
}

export default function Logo({ dark = false, size = 36, asSpan = false }: LogoProps) {
  const nameSize = Math.round(size * 0.52);
  const subSize  = Math.round(size * 0.255);
  const colGap   = Math.round(size * 0.28);
  const rowGap   = Math.round(size * 0.08);

  const inner = (
    <span className="inline-flex items-center" style={{ gap: colGap }}>
      <LogoMark size={size} />
      <span className="flex flex-col justify-center">
        <span
          className={dark ? "text-white" : "text-gray-900 dark:text-white"}
          style={{
            fontFamily: "var(--font-gloock), Georgia, 'Times New Roman', serif",
            fontSize: nameSize,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          Prime
        </span>
        <span
          className={dark ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: subSize,
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "0.19em",
            marginTop: rowGap,
            textTransform: "uppercase",
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
