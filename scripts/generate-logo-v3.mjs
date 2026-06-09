/**
 * Prime Studio — Logo Generator v3 (premium redesign)
 * Philosophy: "Confident Simplicity"
 *
 * Mark: capital P serif (Gloock) in white, perfectly centred on a solid blue
 *       rounded-square badge. No construction lines. No shadow. No gimmicks.
 *
 * Wordmark: "Prime" in Gloock-Regular (large, ink/offwhite) +
 *           "STUDIO" in Outfit-Regular (tracked uppercase, slate)
 *
 * Renders three PNG assets at 3× density using @napi-rs/canvas.
 */

import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FONTS  = 'C:/Users/Edward/AppData/Roaming/Claude/local-agent-mode-sessions/skills-plugin/15be5a37-8c82-4b91-b4ab-a7c0972d19f1/fdc8765f-c28e-4b2a-81fd-64908cc12071/skills/canvas-design/canvas-fonts';
const OUTPUT = 'C:/Users/Edward/source/repos/primestudio/public';

if (!fs.existsSync(OUTPUT)) fs.mkdirSync(OUTPUT, { recursive: true });

// ─── Register fonts ───────────────────────────────────────────────────────────
GlobalFonts.registerFromPath(path.join(FONTS, 'Gloock-Regular.ttf'),         'Gloock');
GlobalFonts.registerFromPath(path.join(FONTS, 'Outfit-Regular.ttf'),         'Outfit');
GlobalFonts.registerFromPath(path.join(FONTS, 'InstrumentSans-Regular.ttf'), 'InstrumentSans');

// ─── Colour palette ───────────────────────────────────────────────────────────
const C = {
  ink:        '#0d0d14',
  blueMain:   '#2563eb',   // badge fill (light variant)
  blueDark:   '#1d4ed8',   // badge gradient bottom
  blueLight:  '#3b82f6',   // badge gradient top
  slate:      '#64748b',
  slateLight: '#94a3b8',
  divider:    '#dde4ef',
  white:      '#ffffff',
  offwhite:   '#f8fafc',
  darkBg:     '#0d0d14',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Draw text with manual letter-spacing, returns total width rendered */
function fillTextTracked(ctx, text, x, y, letterSpacing = 0) {
  let cx = x;
  for (const ch of text) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + letterSpacing;
  }
  return cx - x - letterSpacing;
}

/** Measure total width of tracked text without drawing */
function measureTracked(ctx, text, letterSpacing = 0) {
  let total = 0;
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    total += ctx.measureText(chars[i]).width;
    if (i < chars.length - 1) total += letterSpacing;
  }
  return total;
}

/** Rounded-rect path (manual, works in all @napi-rs versions) */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y,     x + w, y + r,     r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x,     y + h, x,     y + h - r, r);
  ctx.lineTo(x,     y + r);
  ctx.arcTo(x,     y,     x + r, y,         r);
  ctx.closePath();
}

// ─── MARK: serif P centred on a solid rounded-square badge ───────────────────
//
//  The badge is a square with corner radius = size * 0.22 (modern, not pill-shaped).
//  Fill: diagonal linear gradient (#3b82f6 top-left → #1d4ed8 bottom-right).
//  The letter "P" is drawn from Gloock (serif) at a font-size that fills ~60% of
//  the badge height. We measure the actual rendered glyph bounds to centre it
//  precisely — no guesswork.
//
function drawMark(ctx, cx, cy, size, dark = false) {
  ctx.save();
  ctx.translate(cx, cy);

  const half = size / 2;
  const r    = size * 0.18;   // corner radius — refined rounded-square (less rounded = P breathes evenly)

  // ── Badge fill: diagonal gradient ─────────────────────────────────────────
  const grad = ctx.createLinearGradient(-half, -half, half, half);
  grad.addColorStop(0, C.blueLight);
  grad.addColorStop(1, C.blueDark);

  roundRect(ctx, -half, -half, size, size, r);
  ctx.fillStyle = grad;
  ctx.fill();

  // ── Letter "P" from Gloock (serif letterform) ─────────────────────────────
  //
  // Target: glyph visual height ≈ size * 0.52 — elegant breathing room in badge.
  //
  // Gloock "P" ink-box facts (measured at any size, proportional):
  //   actualBoundingBoxLeft  = 0      (tinta começa na posição de desenho)
  //   actualBoundingBoxRight = inkW   (≈ advance width)
  //   actualBoundingBoxDescent = 0    ("P" maiúsculo não tem descendente)
  //   actualBoundingBoxAscent = inkH  (cap-height)
  //
  // Portanto:
  //   Ink centre X  = inkW / 2   →  drawX = -(inkW / 2)
  //   Ink centre Y  = inkH / 2   →  drawY = +(inkH / 2)  (acima da baseline)
  //
  // Compensação óptica: o bowl do P projecta-se visualmente para a direita,
  // tornando o centro geométrico ligeiramente leve à esquerda. Desloca +4% do
  // tamanho do badge para a direita para equilíbrio óptico.
  //
  const targetH  = size * 0.60;
  let fontSize   = targetH;   // 1ª estimativa

  ctx.font = `${fontSize}px Gloock`;
  const m0 = ctx.measureText('P');
  const h0 = m0.actualBoundingBoxAscent + m0.actualBoundingBoxDescent;
  if (h0 > 0) fontSize = fontSize * (targetH / h0);

  ctx.font = `${fontSize}px Gloock`;
  const mP   = ctx.measureText('P');
  const inkW = mP.actualBoundingBoxRight - mP.actualBoundingBoxLeft;   // = Right (Left=0)
  const inkH = mP.actualBoundingBoxAscent + mP.actualBoundingBoxDescent; // = Ascent (Descent=0)

  // Centro geométrico da ink-box → canvas origin
  // Left=0, Descent=0 em Gloock: o P está matematicamente centrado com -(inkW/2), inkH/2.
  // Ajustes ópticos validados por pixel-scan e comparação visual de 5 variantes:
  //   X: +4% de inkW — equaliza percepção visual entre espaço à esq do stem e à dir do bowl
  //   Y: +2% do tamanho do badge — as serifas do stem em baixo precisam de mais espaço abaixo
  const drawX = -(inkW / 2) + inkW * 0.04;
  const drawY =  inkH / 2   + size * 0.02;

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle    = C.white;
  ctx.fillText('P', drawX, drawY);

  ctx.restore();
}

// ─── LOCKUP (3600 × 1200 canvas = 1200 × 400 logical @ 3×) ──────────────────
//
// Layout constants (all in physical pixels at 3× density):
//   MARK_D      — badge side length, drives everything else
//   primeFontSz — font-size for "Prime"; chosen so ink ascent ≈ 88% of MARK_D
//                 giving good visual weight match between P-in-badge and "Prime"
//
// Vertical alignment:
//   1. Badge is centred on canvas (markCY = H/2)
//   2. Text block is centred on canvas by placing its ink-box midpoint at H/2
//      → primeBaselineY = H/2 - textBlockInkH/2 + primeAscent
//   This means badge top ≈ top of "Prime" cap and badge bottom ≈ bottom of STUDIO.
//
function renderLockup(dark = false) {
  const W = 3600, H = 1200;
  const canvas = createCanvas(W, H);
  const ctx    = canvas.getContext('2d');

  ctx.fillStyle = dark ? C.darkBg : C.white;
  ctx.fillRect(0, 0, W, H);

  // ── Layout constants (all physical pixels, canvas is 3× logical) ─────────
  //
  // Design rule: badge height = cap-height of "Prime" + 24% padding (12% each side).
  // This means the P inside the badge and the "P" in "Prime" share the same visual height.
  // capH=330px → primeFontSz=440 → badge=409px.
  // Total lockup width ≈ 1860px on a 3600px canvas (52% fill, 24% margin each side).
  //
  const MARK_D         = 409;   // = capH * 1.24, where capH = 330px
  const GAP_MARK_DIV   = 108;   // 36px logical
  const DIV_WIDTH      = 3;
  const GAP_DIV_TEXT   = 84;    // 28px logical
  const primeFontSz    = 440;   // cap height of "P" ≈ 330px = MARK_D / 1.24
  const studioFontSz   = 88;    // 20% of primeFontSz
  const studioTracking = 12;    // 14% of studioFontSz
  const interline      = 22;    // 5% of primeFontSz

  // ── Measure text metrics ──────────────────────────────────────────────────
  ctx.font = `${primeFontSz}px Gloock`;
  const primeM       = ctx.measureText('Prime');
  const primeAscent  = primeM.actualBoundingBoxAscent;
  const primeDescent = primeM.actualBoundingBoxDescent;
  const primeW       = primeM.width;

  ctx.font = `${studioFontSz}px Outfit`;
  const studioM      = ctx.measureText('S');
  const studioAscent = studioM.actualBoundingBoxAscent;
  const studioW      = measureTracked(ctx, 'STUDIO', studioTracking);

  // Total ink height of text block
  const textBlockInkH = primeAscent + primeDescent + interline + studioAscent;

  // ── Horizontal layout ─────────────────────────────────────────────────────
  const textBlockW = Math.max(primeW, studioW);
  const totalW     = MARK_D + GAP_MARK_DIV + DIV_WIDTH + GAP_DIV_TEXT + textBlockW;
  const startX     = (W - totalW) / 2;

  // ── Badge ─────────────────────────────────────────────────────────────────
  const markCX = startX + MARK_D / 2;
  const markCY = H / 2;
  drawMark(ctx, markCX, markCY, MARK_D, dark);

  // ── Divider — 70% of badge height, centred on canvas ─────────────────────
  const divX = startX + MARK_D + GAP_MARK_DIV;
  ctx.beginPath();
  ctx.moveTo(divX, H / 2 - MARK_D * 0.35);
  ctx.lineTo(divX, H / 2 + MARK_D * 0.35);
  ctx.strokeStyle = dark ? `rgba(255,255,255,0.12)` : C.divider;
  ctx.lineWidth   = DIV_WIDTH;
  ctx.stroke();

  // ── Text block — centred inside badge ────────────────────────────────────
  // badge top = H/2 - MARK_D/2; text is centred in badge vertically
  const textX           = divX + DIV_WIDTH + GAP_DIV_TEXT;
  const textTop         = H / 2 - MARK_D / 2 + (MARK_D - textBlockInkH) / 2;
  const primeBaselineY  = textTop + primeAscent;
  const studioBaselineY = primeBaselineY + primeDescent + interline + studioAscent;

  ctx.font         = `${primeFontSz}px Gloock`;
  ctx.fillStyle    = dark ? C.offwhite : C.ink;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Prime', textX, primeBaselineY);

  ctx.font      = `${studioFontSz}px Outfit`;
  ctx.fillStyle = dark ? C.slateLight : C.slate;
  fillTextTracked(ctx, 'STUDIO', textX, studioBaselineY, studioTracking);

  return canvas;
}

// ─── MARK ONLY (1800 × 1800 canvas = 600 × 600 @ 3×) ─────────────────────────
function renderMark(dark = false) {
  const S = 1800;
  const canvas = createCanvas(S, S);
  const ctx    = canvas.getContext('2d');

  // Transparent background — mark is self-contained (has its own badge fill)
  // For dark variant, add a subtle dark background so the badge reads well
  if (dark) {
    ctx.fillStyle = C.darkBg;
    ctx.fillRect(0, 0, S, S);
  }

  // Mark fills 88% of canvas to leave a comfortable margin
  drawMark(ctx, S / 2, S / 2, S * 0.88, dark);
  return canvas;
}

// ─── Save PNG ─────────────────────────────────────────────────────────────────
function savePng(canvas, filename) {
  const buf   = canvas.toBuffer('image/png');
  const fpath = path.join(OUTPUT, filename);
  fs.writeFileSync(fpath, buf);
  console.log(`  ✓ ${filename}  (${Math.round(buf.length / 1024)} KB, ${canvas.width}×${canvas.height}px)`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
console.log('\nPrime Studio — Logo v3 (premium redesign)\n');

savePng(renderLockup(false), 'logo-v3-light.png');
savePng(renderLockup(true),  'logo-v3-dark.png');
savePng(renderMark(false),   'logo-v3-mark.png');

console.log(`\nOutput: ${OUTPUT}\n`);
