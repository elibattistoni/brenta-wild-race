import { Resvg } from "@resvg/resvg-js";
import wawoff from "wawoff2";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, "..");
const svgPath = resolve(projectRoot, "public/og-image.svg");
const pngPath = resolve(projectRoot, "public/og-image.png");

const woff2Files = [
  "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
  "node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2",
  "node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2",
  "node_modules/@fontsource/inter/files/inter-latin-800-normal.woff2",
].map((p) => resolve(projectRoot, p));

const fontBuffers = await Promise.all(
  woff2Files.map(async (p) => Buffer.from(await wawoff.decompress(readFileSync(p))))
);

const svg = readFileSync(svgPath, "utf8");

const resvg = new Resvg(svg, {
  background: "#1D1C1B",
  fitTo: { mode: "width", value: 1200 },
  font: {
    fontBuffers,
    loadSystemFonts: false,
    defaultFontFamily: "Inter",
  },
});

const png = resvg.render().asPng();
writeFileSync(pngPath, png);

console.log(`Wrote ${pngPath} (${png.length.toLocaleString()} bytes)`);
