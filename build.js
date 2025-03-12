const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");

// Clean up existing dist folder
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}

fs.mkdirSync(distPath, { recursive: true });

// Copy index.js
fs.copyFileSync(
  path.join(srcPath, "index.js"),
  path.join(distPath, "index.js")
);

// Function to copy components recursively
function copyFolderSync(from, to) {
  fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);

    if (fs.lstatSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Copy components
copyFolderSync(
  path.join(srcPath, "components"),
  path.join(distPath, "components")
);

console.log("✅ Build complete!");
