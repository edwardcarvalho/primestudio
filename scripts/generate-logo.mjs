/**
 * Generates PNG logo files from SVG definitions.
 * Run with: node scripts/generate-logo.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public");

mkdirSync(OUT, { recursive: true });

// ─── Design constants ────────────────────────────────────────────────────────
const BLUE = "#2563eb";
const DARK = "#0d0d14";
const WHITE = "#ffffff";
const GRAY_TEXT = "#6b7280";
const GRAY_DARK = "#9ca3af";

// ─── P-mark geometry (parameterised by icon size) ────────────────────────────
function pMark(size, fg = WHITE) {
  const sw = size * 0.115;
  const br = size * 0.195;
  const vpad = size * 0.195;
  const pWidth = sw + br;
  const vx0 = (size - pWidth) / 2;
  const vx1 = vx0 + sw;
  const vy0 = vpad;
  const vy1 = size - vpad;
  const ph = vy1 - vy0;
  const bowlBottom = vy0 + br * 2;

  return `
    <rect x="${vx0}" y="${vy0}" width="${sw}" height="${ph}" fill="${fg}"/>
    <path d="M ${vx1},${vy0} A ${br},${br} 0 0,1 ${vx1},${bowlBottom} Z" fill="${fg}"/>
  `;
}

// ─── Icon mark SVG (square) ───────────────────────────────────────────────────
function iconSVG(size, bg = BLUE, fg = WHITE) {
  const r = size * 0.22;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${bg}"/>
  ${pMark(size, fg)}
</svg>`;
}

// ─── Horizontal lockup SVG ────────────────────────────────────────────────────
function lockupSVG({
  iconSize = 52,
  bg = WHITE,
  iconBg = BLUE,
  textColor = DARK,
  subColor = GRAY_TEXT,
  width,
} = {}) {
  const gap = Math.round(iconSize * 0.28);
  const primeFontSize = Math.round(iconSize * 0.46);
  const studioFontSize = Math.round(iconSize * 0.245);
  const studioTracking = Math.round(iconSize * 0.055);

  // vertical text positioning (centered on icon height)
  const primeY = Math.round(iconSize * 0.52);
  const studioY = Math.round(iconSize * 0.82);

  const textX = iconSize + gap;
  const minWidth =
    textX + primeFontSize * 4.2; // rough estimate of "Prime" width
  const totalWidth = width || Math.ceil(minWidth);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${iconSize}" viewBox="0 0 ${totalWidth} ${iconSize}">
  ${bg !== "transparent" ? `<rect width="${totalWidth}" height="${iconSize}" fill="${bg}"/>` : ""}
  <!-- Icon -->
  <rect width="${iconSize}" height="${iconSize}" rx="${+(iconSize * 0.22).toFixed(1)}" fill="${iconBg}"/>
  ${pMark(iconSize, WHITE)}
  <!-- Wordmark -->
  <text
    x="${textX}" y="${primeY}"
    font-family="Inter, Outfit, -apple-system, system-ui, sans-serif"
    font-weight="700"
    font-size="${primeFontSize}"
    fill="${textColor}"
    letter-spacing="-0.5"
  >Prime</text>
  <text
    x="${textX}" y="${studioY}"
    font-family="Inter, Outfit, -apple-system, system-ui, sans-serif"
    font-weight="500"
    font-size="${studioFontSize}"
    fill="${subColor}"
    letter-spacing="${studioTracking}"
  >STUDIO</text>
</svg>`;
}

// ─── Write files ──────────────────────────────────────────────────────────────
const files = {
  // Standalone icon marks (various sizes)
  "icon-512.svg": iconSVG(512),
  "icon-192.svg": iconSVG(192),
  "icon-96.svg": iconSVG(96),
  "icon-48.svg": iconSVG(48),
  "icon-32.svg": iconSVG(32),
  // Icon on dark bg
  "icon-dark-192.svg": iconSVG(192, DARK),

  // Horizontal lockups
  "logo-light.svg": lockupSVG({
    iconSize: 52,
    bg: WHITE,
    iconBg: BLUE,
    textColor: DARK,
    subColor: GRAY_TEXT,
    width: 220,
  }),
  "logo-dark.svg": lockupSVG({
    iconSize: 52,
    bg: DARK,
    iconBg: BLUE,
    textColor: WHITE,
    subColor: GRAY_DARK,
    width: 220,
  }),
  "logo-transparent.svg": lockupSVG({
    iconSize: 52,
    bg: "transparent",
    iconBg: BLUE,
    textColor: DARK,
    subColor: GRAY_TEXT,
    width: 220,
  }),
};

for (const [name, svg] of Object.entries(files)) {
  const path = join(OUT, name);
  writeFileSync(path, svg, "utf8");
  console.log(`✓ public/${name}`);
}

console.log(`\n✅ ${Object.keys(files).length} SVG logo files generated in /public`);
console.log("\nTo convert to PNG, run: npx sharp-cli <file.svg> -o <file.png>  (requires sharp-cli)");
