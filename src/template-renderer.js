import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { escapeMarkdownTemplate } from "./markdown-utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, "templates");
const templateCache = new Map();

async function loadTemplate(name) {
  if (!templateCache.has(name)) {
    templateCache.set(name, await fs.readFile(path.join(templatesDir, name), "utf8"));
  }

  return templateCache.get(name);
}

function injectTokens(template, tokens) {
  return Object.entries(tokens).reduce((output, [token, value]) => {
    return output.replaceAll(`{{${token}}}`, value);
  }, template);
}

export function escapeHtml(value) {
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
      const defaultMode = "dark";

      const readMode = () => {
        const savedMode = window.localStorage.getItem(storageKey);
        return savedMode === "light" || savedMode === "dark" ? savedMode : defaultMode;
      };

      const themeColors = {
        dark: "#0c1115",
        light: "#f6f1e8"
      };

      const applyMode = (mode) => {
        document.documentElement.dataset.colorMode = mode;
        const label = mode === "dark" ? "Dark" : "Light";

        document.querySelectorAll("[data-theme-label]").forEach((node) => {
          node.textContent = label;
        });

        const metaTheme = document.querySelector('meta[name="theme-color"]');

        if (metaTheme) {
          metaTheme.setAttribute("content", themeColors[mode]);
        }
      };

      window.toggleColorMode = () => {
        const nextMode = document.documentElement.dataset.colorMode === "dark" ? "light" : "dark";
        window.localStorage.setItem(storageKey, nextMode);
        applyMode(nextMode);
      };

      applyMode(readMode());

      document.addEventListener("DOMContentLoaded", () => {
        applyMode(readMode());
      });
    })();
  </script>`;
}

function renderThemeToggle() {
  return `<button class="theme-toggle" type="button" onclick="toggleColorMode()" aria-label="Toggle color theme">
    <span class="theme-toggle__label">Theme</span>
    <strong data-theme-label>Dark</strong>
  </button>`;
}

function renderPresentationItems(presentations) {
  return presentations
    .map((presentation) => {
      const defaultRoute = `/presentation/${presentation.name}`;

      return `
        <article class="index-card">
          <div class="index-card__copy">
            <h2><a href="${defaultRoute}">${escapeHtml(presentation.title)}</a></h2>
            <p>${escapeHtml(presentation.name)}</p>
          </div>
          <code class="index-card__route">${escapeHtml(defaultRoute)}</code>
          <a class="index-card__action" href="${defaultRoute}">Open</a>
        </article>`;
    })
    .join("");
}

export async function renderIndexPage({ indexTitle, presentations }) {
  const template = await loadTemplate("index.html");

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(indexTitle),
    INDEX_TITLE: escapeHtml(indexTitle),
    PRESENTATION_COUNT: String(presentations.length),
    PRESENTATION_LABEL: presentations.length === 1 ? "presentation" : "presentations",
    PRESENTATION_ITEMS: renderPresentationItems(presentations),
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderThemeToggle()
  });
}

export async function renderPresentationPage(presentation) {
  const template = await loadTemplate("presentation.html");
  const extraStyles = presentation.styles
    .map((href) => `<link rel="stylesheet" href="${href}" />`)
    .join("\n");
  const extraScripts = presentation.scripts
    .map((src) => `<script src="${src}"></script>`)
    .join("\n");

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(presentation.title),
    REVEAL_THEME: escapeHtml(presentation.theme),
    EXTRA_STYLES: extraStyles,
    EXTRA_SCRIPTS: extraScripts,
    MARKDOWN_SOURCE: escapeMarkdownTemplate(presentation.markdown),
    REVEAL_CONFIG: JSON.stringify(presentation.reveal, null, 2),
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderThemeToggle()
  });
}
