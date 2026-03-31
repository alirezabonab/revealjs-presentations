import "dotenv/config";
import express from "express";
import fs from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { escapeMarkdownTemplate } from "./markdown-utils.js";
import { listPresentations, loadPresentation } from "./presentation-loader.js";

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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderThemeBootScript() {
  return `<script>
    (() => {
      const storageKey = "presentation-color-mode";
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const getPreferredMode = () => {
        const savedMode = window.localStorage.getItem(storageKey);

        if (savedMode === "light" || savedMode === "dark") {
          return savedMode;
        }

        return "dark";
      };

      const applyMode = (mode) => {
        document.documentElement.dataset.colorMode = mode;

        const label = mode === "dark" ? "Dark" : "Light";
        document.querySelectorAll("[data-theme-label]").forEach((node) => {
          node.textContent = label;
        });

        const metaTheme = document.querySelector('meta[name="theme-color"]');

        if (metaTheme) {
          metaTheme.setAttribute("content", mode === "dark" ? "#08090d" : "#f4f6fb");
        }
      };

      window.toggleColorMode = () => {
        const nextMode = document.documentElement.dataset.colorMode === "dark" ? "light" : "dark";
        window.localStorage.setItem(storageKey, nextMode);
        applyMode(nextMode);
      };

      applyMode(getPreferredMode());

      document.addEventListener("DOMContentLoaded", () => {
        applyMode(document.documentElement.dataset.colorMode || getPreferredMode());
      });

      mediaQuery.addEventListener("change", (event) => {
        const savedMode = window.localStorage.getItem(storageKey);

        if (!savedMode) {
          applyMode(event.matches ? "dark" : "light");
        }
      });
    })();
  </script>`;
}

function renderThemeToggle() {
  return `<button class="site-theme-toggle" type="button" onclick="toggleColorMode()" aria-label="Toggle color theme">
    <span class="site-theme-toggle__label">Theme</span>
    <strong data-theme-label>Light</strong>
  </button>`;
}

function renderIndexPage(presentations) {
  const items = presentations
    .map((presentation) => {
      const defaultRoute = `/presentation/${presentation.name}`;

      return `
        <article class="site-index-item">
          <div class="site-index-item__main">
            <h2><a href="${defaultRoute}">${escapeHtml(presentation.title)}</a></h2>
            <p>${escapeHtml(presentation.name)}</p>
          </div>
          <code class="site-index-item__route">${escapeHtml(defaultRoute)}</code>
          <div class="site-index-item__actions">
            <a class="site-button site-button--secondary" href="${defaultRoute}">Open</a>
          </div>
        </article>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#08090d" />
    <title>${escapeHtml(indexTitle)}</title>
    <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/static/app.css" />
    ${renderThemeBootScript()}
  </head>
  <body class="site-shell">
    ${renderThemeToggle()}
    <main class="site-shell__content">
      <header class="site-index-header">
        <div>
          <h1>${escapeHtml(indexTitle)}</h1>
          <p>${presentations.length} presentation${presentations.length === 1 ? "" : "s"}</p>
        </div>
      </header>

      <section class="site-index-list" id="presentations">
        ${items}
      </section>
    </main>
  </body>
</html>`;
}

function renderPresentationPage(presentation) {
  const extraStyles = presentation.styles
    .map((href) => `<link rel="stylesheet" href="${href}" />`)
    .join("\n");
  const extraScripts = presentation.scripts
    .map((src) => `<script src="${src}"></script>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#08090d" />
    <title>${escapeHtml(presentation.title)}</title>
    <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/reveal/dist/reset.css" />
    <link rel="stylesheet" href="/reveal/dist/reveal.css" />
    <link rel="stylesheet" href="/reveal/dist/theme/${presentation.theme}.css" />
    <link rel="stylesheet" href="/reveal/plugin/highlight/monokai.css" />
    <link rel="stylesheet" href="/static/app.css" />
    ${extraStyles}
    ${renderThemeBootScript()}
  </head>
  <body class="presentation-shell">
    <div class="reveal">
      <div class="slides">
        <section
          data-markdown
          data-separator="^---$"
          data-separator-vertical="^--$"
          data-separator-notes="^Notes?:"
        >
          <textarea data-template>
${escapeMarkdownTemplate(presentation.markdown)}
          </textarea>
        </section>
      </div>
    </div>

    <script src="/reveal/dist/reveal.js"></script>
    <script src="/reveal/plugin/markdown/markdown.js"></script>
    <script src="/reveal/plugin/highlight/highlight.js"></script>
    <script src="/reveal/plugin/notes/notes.js"></script>
    ${extraScripts}
    <script>
      const syncPresentationLayout = () => {
        const slidesElement = document.querySelector(".reveal .slides");

        if (!slidesElement) {
          return;
        }

        const slidesWidth = Number.parseFloat(getComputedStyle(slidesElement).width);
        const topLevelSections = Array.from(document.querySelectorAll(".reveal .slides > section"));
        const leafSections = Array.from(document.querySelectorAll(".reveal .slides section")).filter(
          (section) => !section.querySelector(":scope > section")
        );

        topLevelSections.forEach((section) => {
          const sectionWidth = Number.parseFloat(getComputedStyle(section).width);

          if (Number.isFinite(slidesWidth) && Number.isFinite(sectionWidth)) {
            const centeredLeft = Math.max(0, (slidesWidth - sectionWidth) / 2);
            section.style.left = centeredLeft + "px";
          }
        });

        leafSections.forEach((section) => {
          const sectionWidth = Number.parseFloat(getComputedStyle(section).width);

          if (Number.isFinite(slidesWidth) && Number.isFinite(sectionWidth)) {
            const centeredLeft = Math.max(0, (slidesWidth - sectionWidth) / 2);
            section.style.left = centeredLeft + "px";
          }

          section.classList.remove("has-diagram-stage");

          section
            .querySelectorAll("pre")
            .forEach((preElement) => preElement.classList.remove("diagram-plain"));

          section
            .querySelectorAll("pre code.language-plaintext, pre code.language-text, pre code.language-txt")
            .forEach((codeElement) => {
              codeElement.closest("pre")?.classList.add("diagram-plain");
            });

          const plainDiagramBlocks = Array.from(section.querySelectorAll("pre.diagram-plain"));
          const contentElements = Array.from(section.children).filter((element) => {
            const tagName = element.tagName;

            if (tagName === "H1" || tagName === "H2" || tagName === "ASIDE") {
              return false;
            }

            return !(tagName === "PRE" && element.classList.contains("diagram-plain"));
          });

          if (plainDiagramBlocks.length > 0 && contentElements.length === 0) {
            section.classList.add("has-diagram-stage");
          }
        });
      };

      Reveal.initialize({
        ...${JSON.stringify(presentation.reveal, null, 2)},
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
      });

      Reveal.on("ready", syncPresentationLayout);
      Reveal.on("slidechanged", syncPresentationLayout);
      window.addEventListener("resize", syncPresentationLayout);
    </script>
  </body>
</html>`;
}

app.get("/", async (request, response, next) => {
  try {
    const presentations = await listPresentations(presentationsRoot);
    response.type("html").send(renderIndexPage(presentations));
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

    response.type("html").send(renderPresentationPage(presentation));
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
