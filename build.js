const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const distPath = path.resolve(__dirname, "dist");

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}

console.log("🚀 Compiling with Babel...");
execSync('npx babel src --out-dir dist --extensions ".js,.jsx"');
console.log("✅ Build complete!");
