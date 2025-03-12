const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.copyFileSync(
  path.resolve(__dirname, "src", "index.js"),
  path.resolve(distPath, "index.js")
);

console.log("Build complete!");
