/**
 * Cleanup script untuk menghapus file RSC payload (.txt) 
 * dan file duplikat dari folder out hasil static export.
 */
import { readdir, rm, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const OUT_DIR = join(import.meta.dirname, "..", "out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip Next.js internal static folder
      if (entry.name === "_next") continue;
      // Hapus subfolder __next.* (RSC payload folders)
      if (entry.name.startsWith("__next.")) {
        await rm(fullPath, { recursive: true });
        console.log(`  Removed folder: ${fullPath}`);
        continue;
      }
      await walk(fullPath);
      // Bersihkan _not-found folder
      if (entry.name === "_not-found") {
        try {
          const subEntries = await readdir(fullPath);
          for (const sub of subEntries) {
            const subPath = join(fullPath, sub);
            const subStat = await stat(subPath);
            if (subStat.isDirectory() || sub !== "index.html") {
              await rm(subPath, { recursive: true });
              console.log(`  Removed: ${subPath}`);
            }
          }
        } catch {}
      }
    } else if (entry.isFile()) {
      const ext = extname(entry.name);
      // Hapus file .txt (RSC payload)
      if (ext === ".txt") {
        await rm(fullPath);
        console.log(`  Removed: ${fullPath}`);
      }
      // Hapus duplikat .html jika sudah ada folder dengan nama yang sama
      if (ext === ".html" && entry.name !== "index.html" && entry.name !== "404.html") {
        const folderName = entry.name.replace(".html", "");
        const folderPath = join(dir, folderName);
        try {
          await stat(folderPath);
          await rm(fullPath);
          console.log(`  Removed duplicate: ${fullPath}`);
        } catch {}
      }
      // Hapus dev SVG files di root (file.svg, globe.svg, window.svg, vercel.svg, next.svg)
      if (dir === OUT_DIR && ext === ".svg" && entry.name !== "favicon.svg") {
        await rm(fullPath);
        console.log(`  Removed dev asset: ${fullPath}`);
      }
    }
  }
}

console.log("🧹 Cleaning up out/ folder...");
await walk(OUT_DIR);
console.log("✅ Cleanup complete!");
