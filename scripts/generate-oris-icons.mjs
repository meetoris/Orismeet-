// One-off brand-asset generator: rasterizes the Oris Meet master icon SVG into
// the PNG/ICO favicons served via /api/logo. Re-run after editing
// apps/web/public/oris-meet-icon-color.svg. Not part of the build.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "apps", "web", "public");
const master = readFileSync(join(publicDir, "oris-meet-icon-color.svg"));

const pngTargets = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "mstile-150x150.png", size: 150 },
  { file: "android-chrome-192x192.png", size: 192 },
  { file: "android-chrome-256x256.png", size: 256 },
];

function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 means 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image size
  entry.writeUInt32LE(header.length + entry.length, 12); // offset

  return Buffer.concat([header, entry, pngBuffer]);
}

for (const { file, size } of pngTargets) {
  const buffer = await sharp(master).resize(size, size).png().toBuffer();
  writeFileSync(join(publicDir, file), buffer);
  console.log(`wrote ${file} (${size}x${size})`);
}

const ico32 = await sharp(master).resize(32, 32).png().toBuffer();
writeFileSync(join(publicDir, "favicon.ico"), pngToIco(ico32, 32));
console.log("wrote favicon.ico (32x32)");
