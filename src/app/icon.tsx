import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const s = 32;
  const r = s * 0.22;
  const sw = s * 0.115;
  const br = s * 0.195;
  const vpad = s * 0.195;
  const pWidth = sw + br;
  const vx0 = (s - pWidth) / 2;
  const vx1 = vx0 + sw;
  const vy0 = vpad;
  const vy1 = s - vpad;
  const ph = vy1 - vy0;
  const bowlBottom = vy0 + br * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: s,
          height: s,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width={s}
          height={s}
          viewBox={`0 0 ${s} ${s}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={s} height={s} rx={r} fill="#2563eb" />
          <rect x={vx0} y={vy0} width={sw} height={ph} fill="white" />
          <path
            d={`M ${vx1},${vy0} A ${br},${br} 0 0,1 ${vx1},${bowlBottom} Z`}
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
