#!/usr/bin/env node
// Generates the course's two pieces of key artwork from the Slop brand
// palette. One motif, used twice: a moderation queue as a stack of horizontal
// bars, most of them struck through, a few left standing in gold.
//
// Deterministic — the PRNG is seeded, so re-running reproduces the committed
// files byte for byte. Run with: node scripts/artwork.ts
import sharp from "sharp";

const GOLD = "#b97d1c";
const BRONZE = "#8a5c13";
const GREY = "#6b6154";
const INK = "#17130d";
const CREAM = "#f3ece1";

/** Mulberry32 — small, seeded, deterministic. */
function rng(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface QueueOptions {
  width: number;
  height: number;
  rows: number;
  inset: number;
  seed: number;
  /** Fraction of bars left standing (not struck through). */
  kept: number;
  opacity: number;
}

/** The motif: rows of bars, most struck through, a few kept in gold. */
function queue(o: QueueOptions): string {
  const rand = rng(o.seed);
  const usable = o.height - o.inset * 2;
  const pitch = usable / o.rows;
  const barHeight = Math.max(4, pitch * 0.62);
  const parts: string[] = [];

  for (let i = 0; i < o.rows; i += 1) {
    const y = o.inset + i * pitch;
    const indent = rand() < 0.35 ? rand() * 0.08 : 0;
    const x = o.inset + indent * (o.width - o.inset * 2);
    const w = (o.width - o.inset * 2 - indent * (o.width - o.inset * 2)) * (0.32 + rand() * 0.68);
    const isKept = rand() < o.kept;
    const fill = isKept ? GOLD : i % 3 === 0 ? BRONZE : GREY;
    const alpha = isKept ? o.opacity : o.opacity * (0.45 + rand() * 0.3);

    parts.push(
      `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" ` +
        `height="${barHeight.toFixed(1)}" fill="${fill}" fill-opacity="${alpha.toFixed(3)}"/>`,
    );

    // A struck bar carries the removal line through it.
    if (!isKept) {
      const cy = y + barHeight / 2;
      const over = barHeight * 1.4;
      parts.push(
        `<line x1="${(x - over).toFixed(1)}" y1="${cy.toFixed(1)}" ` +
          `x2="${(x + w + over).toFixed(1)}" y2="${cy.toFixed(1)}" ` +
          `stroke="${INK}" stroke-opacity="${Math.min(1, o.opacity * 1.5).toFixed(3)}" ` +
          `stroke-width="${Math.max(2, barHeight * 0.26).toFixed(1)}"/>`,
      );
    }
  }
  return parts.join("\n");
}

const hero = `<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1086" viewBox="0 0 2560 1086">
  <rect width="2560" height="1086" fill="${CREAM}"/>
  <g>${queue({ width: 2560, height: 1086, rows: 26, inset: 64, seed: 6531, kept: 0.18, opacity: 0.62 })}</g>
  <rect width="2560" height="1086" fill="${CREAM}" fill-opacity="0.18"/>
</svg>`;

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${CREAM}"/>
  <g>${queue({ width: 1200, height: 630, rows: 15, inset: 40, seed: 531, kept: 0.2, opacity: 0.34 })}</g>
  <rect x="0" y="0" width="1200" height="630" fill="${CREAM}" fill-opacity="0.42"/>
  <rect x="72" y="150" width="8" height="300" fill="${GOLD}"/>
  <text x="116" y="212" font-family="Georgia, 'Times New Roman', serif" font-size="40"
        letter-spacing="10" fill="${BRONZE}">SLOP6531</text>
  <text x="112" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="108"
        font-weight="700" fill="${INK}">The Unpaid Shift</text>
  <text x="116" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="34"
        fill="${GREY}">Who maintains the internet, and what it costs them</text>
  <text x="116" y="470" font-family="Georgia, 'Times New Roman', serif" font-size="28"
        letter-spacing="4" fill="${GREY}">SLOP UNIVERSITY</text>
</svg>`;

await sharp(Buffer.from(hero)).avif({ quality: 62, effort: 6 }).toFile("src/assets/images/hero-home.avif");
await sharp(Buffer.from(card)).png({ compressionLevel: 9 }).toFile("src/assets/images/card.png");
console.log("wrote src/assets/images/hero-home.avif and src/assets/images/card.png");
