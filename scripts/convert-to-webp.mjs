/**
 * Konvertuje obrázky na WebP so SEO názvami.
 * Spusti: node scripts/convert-to-webp.mjs
 */
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "images");
const OUT_DIR = IMAGES_DIR;

const MAP = [
  {
    input: "dehunider2-5032ab91-4ca7-4396-ba79-a5783b87a4f1.jpg",
    output: "odvlhcovac-prenajom-trencin-hero.webp",
  },
  {
    input: "odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png",
    output: "odvlhcovac-novostavby.webp",
  },
  {
    input: "odvlhcovac2-4c7245ad-c7db-4e5f-a20a-02cf50ea8f0d.png",
    output: "odvlhcovac-prenajom-kroky.webp",
  },
  {
    input: "vhale-4cc93497-c5e5-40f0-b27e-828d7e425dbc.png",
    output: "odvlhcovac-po-zatopeni.webp",
  },
  {
    input: "vbyte-25d62767-f919-4fe4-a8e1-0ae27d81752a.png",
    output: "odvlhcovac-do-bytu.webp",
  },
  {
    input: "vpivnici-23b01787-564f-4269-bf9e-f38421d86458.png",
    output: "odvlhcovac-do-pivnice.webp",
  },
];

async function main() {
  for (const { input, output } of MAP) {
    const inputPath = join(IMAGES_DIR, input);
    const outputPath = join(OUT_DIR, output);
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`OK: ${input} -> ${output}`);
    } catch (e) {
      console.error(`CHYBA ${input}:`, e.message);
    }
  }
}

main();
