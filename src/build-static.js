import "dotenv/config";
import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { loadAsciiMorphBrowserSource } from "./ascii-morph-vendor.js";
import { listPresentations, loadPresentation } from "./presentation-loader.js";
import { renderIndexPage, renderPresentationPage } from "./template-renderer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const outputRoot = path.resolve(projectRoot, process.env.STATIC_OUTPUT_DIR ?? "dist");
const presentationsRoot = path.resolve(
  projectRoot,
  process.env.PRESENTATIONS_DIR ?? "presentations"
);
const staticRoot = path.resolve(projectRoot, process.env.STATIC_DIR ?? "public");
const revealRoot = path.dirname(require.resolve("reveal.js/package.json"));
const asciiMorphEntry = require.resolve("ascii-morph");
const indexTitle = process.env.INDEX_TITLE ?? "Reveal.js Presentation Engine";
const exportAllMarkdownEntries = process.env.STATIC_EXPORT_ALL_MARKDOWN === "true";

function toPosixPath(targetPath) {
  return targetPath.split(path.sep).join(path.posix.sep);
}

function getRoutePrefix(routePath) {
  const normalizedRoute = routePath.replace(/^\/+|\/+$/g, "");

  if (!normalizedRoute) {
    return "";
  }

  return "../".repeat(normalizedRoute.split("/").length);
}

function getIndexUrls() {
  return {
    faviconHref: "static/favicon.svg",
    baseCssHref: "static/styles/base.css",
    indexCssHref: "static/styles/index.css",
    presentationBasePath: "presentation",
    presentationIndexPathname: "/index.html"
  };
}

function getPresentationUrls(routePath) {
  const prefix = getRoutePrefix(routePath);

  return {
    contentBasePath: `${prefix}content`,
    faviconHref: `${prefix}static/favicon.svg`,
    revealResetHref: `${prefix}reveal/dist/reset.css`,
    revealCssHref: `${prefix}reveal/dist/reveal.css`,
    baseCssHref: `${prefix}static/styles/base.css`,
    presentationCssHref: `${prefix}static/styles/presentation.css`,
    revealScriptSrc: `${prefix}reveal/dist/reveal.js`,
    revealMarkdownScriptSrc: `${prefix}reveal/plugin/markdown/markdown.js`,
    revealNotesScriptSrc: `${prefix}reveal/plugin/notes/notes.js`,
    revealZoomScriptSrc: `${prefix}reveal/plugin/zoom/zoom.js`,
    presentationRuntimeSrc: `${prefix}static/scripts/presentation-runtime.js`,
    asciiMorphVendorSrc: `${prefix}vendor/ascii-morph.js`
  };
}

async function writeRouteHtml(routePath, html) {
  const normalizedRoute = routePath.replace(/^\/+|\/+$/g, "");
  const targetDir = normalizedRoute ? path.join(outputRoot, normalizedRoute) : outputRoot;

  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, "index.html"), html, "utf8");
}

async function listPresentationMarkdownEntries(presentationName) {
  const presentationDir = path.join(presentationsRoot, presentationName);
  const entries = [];

  async function walk(currentDir) {
    const dirEntries = await fs.readdir(currentDir, { withFileTypes: true });

    for (const entry of dirEntries.sort((left, right) => left.name.localeCompare(right.name))) {
      if (entry.name.startsWith(".")) {
        continue;
      }

      const absolutePath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await walk(absolutePath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith(".md")) {
        continue;
      }

      entries.push(toPosixPath(path.relative(presentationDir, absolutePath)));
    }
  }

  await walk(presentationDir);
  return entries;
}

async function copyDirectory(source, destination) {
  await fs.cp(source, destination, {
    recursive: true,
    filter: (sourcePath) => path.basename(sourcePath) !== ".DS_Store"
  });
}

async function copyPresentationAssets() {
  await fs.cp(presentationsRoot, path.join(outputRoot, "content"), {
    recursive: true,
    filter: (sourcePath) => {
      const basename = path.basename(sourcePath);

      if (basename === ".DS_Store" || basename === "presentation.json" || basename.endsWith(".md")) {
        return false;
      }

      return true;
    }
  });
}

async function exportIndexPage() {
  const presentations = await listPresentations(presentationsRoot);
  const html = await renderIndexPage({
    indexTitle,
    presentations,
    urls: getIndexUrls()
  });

  await writeRouteHtml("/", html);
  return presentations;
}

async function exportPresentationPages(presentations) {
  let pageCount = 0;

  for (const presentationSummary of presentations) {
    const { name } = presentationSummary;
    const defaultRoute = `/presentation/${name}`;
    const defaultUrls = getPresentationUrls(defaultRoute);
    const defaultPresentation = await loadPresentation(presentationsRoot, name, null, {
      contentBasePath: defaultUrls.contentBasePath
    });
    const defaultHtml = await renderPresentationPage(defaultPresentation, {
      ...defaultUrls,
      revealThemeHref: defaultUrls.revealCssHref.replace(
        "reveal.css",
        `theme/${defaultPresentation.theme}.css`
      )
    });
    await writeRouteHtml(defaultRoute, defaultHtml);
    pageCount += 1;

    if (!exportAllMarkdownEntries) {
      continue;
    }

    const markdownEntries = await listPresentationMarkdownEntries(name);

    for (const markdownEntry of markdownEntries) {
      if (markdownEntry === defaultPresentation.entry) {
        continue;
      }

      const routeEntry = markdownEntry.replace(/\.md$/i, "");
      const routePath = `/presentation/${name}/${routeEntry}`;
      const routeUrls = getPresentationUrls(routePath);

      try {
        const presentation = await loadPresentation(presentationsRoot, name, routeEntry, {
          contentBasePath: routeUrls.contentBasePath
        });
        const html = await renderPresentationPage(presentation, {
          ...routeUrls,
          revealThemeHref: routeUrls.revealCssHref.replace(
            "reveal.css",
            `theme/${presentation.theme}.css`
          )
        });
        await writeRouteHtml(routePath, html);
        pageCount += 1;
      } catch (error) {
        console.warn(`Skipped ${name}/${markdownEntry}: ${error.message}`);
      }
    }
  }

  return pageCount;
}

async function exportStaticAssets() {
  await copyDirectory(staticRoot, path.join(outputRoot, "static"));
  await copyPresentationAssets();
  await copyDirectory(path.join(revealRoot, "dist"), path.join(outputRoot, "reveal", "dist"));
  await copyDirectory(path.join(revealRoot, "plugin"), path.join(outputRoot, "reveal", "plugin"));
  await fs.mkdir(path.join(outputRoot, "vendor"), { recursive: true });
  await fs.writeFile(
    path.join(outputRoot, "vendor", "ascii-morph.js"),
    await loadAsciiMorphBrowserSource(asciiMorphEntry),
    "utf8"
  );
}

async function buildStaticSite() {
  await fs.rm(outputRoot, { recursive: true, force: true });
  await fs.mkdir(outputRoot, { recursive: true });

  const presentations = await exportIndexPage();
  const pageCount = await exportPresentationPages(presentations);
  await exportStaticAssets();

  console.log(
    `Static export complete: ${presentations.length} presentations, ${pageCount + 1} HTML files -> ${outputRoot}`
  );
}

buildStaticSite().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
