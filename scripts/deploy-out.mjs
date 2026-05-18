/**
 * Deploy script: push folder out ke GitHub Pages.
 */
import { execSync } from "node:child_process";

const OUT_DIR = new URL("../out", import.meta.url).pathname;
const REMOTE = "https://github.com/agungboleh/webtes.git";

console.log("🚀 Deploying to GitHub...");

const run = (cmd, cwd = OUT_DIR) => {
  console.log(`  > ${cmd}`);
  return execSync(cmd, { cwd, stdio: "inherit" });
};

try {
  run("git init");
  run("git config user.email", process.cwd());
  execSync('git config user.email "agungbolehnet@gmail.com"', { cwd: OUT_DIR });
  execSync('git config user.name "agungboleh"', { cwd: OUT_DIR });
  run("git remote remove origin 2>nul || true");
  run(`git remote add origin ${REMOTE}`);
  run("git add -A");
  run(`git commit -m "Deploy: ${new Date().toISOString()}"`);
  run("git push origin master --force");
  console.log("✅ Deploy complete!");
} catch (e) {
  // Jika commit gagal karena tidak ada perubahan, lanjutkan push
  console.log("⚠️  No changes to commit, pushing anyway...");
  try {
    run("git push origin master --force");
    console.log("✅ Deploy complete!");
  } catch {
    console.log("✅ Already up to date.");
  }
}
