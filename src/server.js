import "dotenv/config";
import express from "express";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { listPresentations, loadPresentation } from "./presentation-loader.js";
import { renderIndexPage, renderPresentationPage } from "./template-renderer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const presentationsRoot = path.resolve(
  projectRoot,
  process.env.PRESENTATIONS_DIR ?? "presentations"
);
// Resolve Reveal.js through Node so Yarn PnP works without a node_modules folder.
const revealRoot = path.dirname(require.resolve("reveal.js/package.json"));
const asciiMorphEntry = require.resolve("ascii-morph");

const app = express();
const port = Number(process.env.PORT ?? 4100);
const host = process.env.HOST ?? "0.0.0.0";
const staticDir = path.resolve(projectRoot, process.env.STATIC_DIR ?? "public");
const indexTitle = process.env.INDEX_TITLE ?? "Reveal.js Presentation Engine";

app.use("/static", express.static(staticDir));
app.use("/content", express.static(presentationsRoot));
app.use("/reveal/dist", express.static(path.join(revealRoot, "dist")));
app.use("/reveal/plugin", express.static(path.join(revealRoot, "plugin")));

app.get("/vendor/ascii-morph.js", async (request, response, next) => {
  try {
    const source = await fs.readFile(asciiMorphEntry, "utf8");
    response.type("js").send(source);
  } catch (error) {
    next(error);
  }
});

app.get("/", async (request, response, next) => {
  try {
    const presentations = await listPresentations(presentationsRoot);
    const page = await renderIndexPage({
      indexTitle,
      presentations
    });
    response.type("html").send(page);
  } catch (error) {
    next(error);
  }
});

app.get(["/presentation/:presentationName", "/presentation/:presentationName/*"], async (request, response, next) => {
  try {
    const presentation = await loadPresentation(
      presentationsRoot,
      request.params.presentationName,
      request.params[0]
    );

    const page = await renderPresentationPage(presentation);
    response.type("html").send(page);
  } catch (error) {
    next(error);
  }
});

app.use((error, request, response, next) => {
  const statusCode = error.statusCode ?? 500;

  response.status(statusCode).json({
    error: error.message ?? "Unexpected server error"
  });
});

app.listen(port, host, () => {
  console.log(`Reveal.js presentation engine running at http://localhost:${port}`);
});
