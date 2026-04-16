import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const distIndex = path.join(distDir, "index.html");

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(path.join(rootDir, "firebase.json"))) {
  console.error("Missing firebase.json");
  process.exit(1);
}

if (!existsSync(path.join(rootDir, ".firebaserc"))) {
  console.error("Missing .firebaserc");
  process.exit(1);
}

run("yarn", ["build:static"]);

if (!existsSync(distDir) || !existsSync(distIndex)) {
  console.error("Static build failed: dist output missing");
  process.exit(1);
}

run("firebase", ["deploy", "--only", "hosting"]);
