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
      const colorModeStorageKey = "presentation-color-mode";
      const asciiZoomStorageKey = "presentation-ascii-zoom";
      const defaultMode = "dark";
      const defaultAsciiZoom = 1;
      const asciiZoomStep = 0.125;
      const minAsciiZoom = 0.75;
      const maxAsciiZoom = 2;
      const toggleIcons = {
        light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5M5.85 5.85l1.8 1.8M16.35 16.35l1.8 1.8M18.15 5.85l-1.8 1.8M7.65 16.35l-1.8 1.8"></path></svg>',
        dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.2 14.2A8.8 8.8 0 0 1 9.8 3.8a9 9 0 1 0 10.4 10.4Z"></path></svg>'
      };

      const readMode = () => {
        const savedMode = window.localStorage.getItem(colorModeStorageKey);
        return savedMode === "light" || savedMode === "dark" ? savedMode : defaultMode;
      };

      const clampAsciiZoom = (value) => {
        if (!Number.isFinite(value)) {
          return defaultAsciiZoom;
        }

        return Math.min(maxAsciiZoom, Math.max(minAsciiZoom, Math.round(value * 1000) / 1000));
      };

      const readAsciiZoom = () => {
        const savedZoom = Number.parseFloat(window.localStorage.getItem(asciiZoomStorageKey));
        return clampAsciiZoom(savedZoom);
      };

      const readCurrentAsciiZoom = (delta = 0) => {
        const storedZoom = clampAsciiZoom(
          Number.parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue("--ascii-zoom-scale")
          )
        );
        const activeAsciiCode =
          document.querySelector(".reveal .slides section.present .slide-ascii-stage code") ??
          document.querySelector(".reveal .slides section.present .slide-ascii-stage") ??
          document.querySelector(".reveal .slides section.present pre code");
        const maximumBaseSize = Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--ascii-font-size-max-base")
        );

        if (!activeAsciiCode || !Number.isFinite(maximumBaseSize) || maximumBaseSize <= 0) {
          return storedZoom;
        }

        const renderedFontSize = Number.parseFloat(getComputedStyle(activeAsciiCode).fontSize);

        if (!Number.isFinite(renderedFontSize) || renderedFontSize <= 0) {
          return storedZoom;
        }

        const minimumBaseSize = Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--ascii-font-size-min-base")
        );
        const requestedMinimumSize = minimumBaseSize * storedZoom;
        const requestedMaximumSize = maximumBaseSize * storedZoom;
        const epsilon = 0.5;

        if (
          !Number.isFinite(minimumBaseSize) ||
          minimumBaseSize <= 0 ||
          Math.abs(renderedFontSize - requestedMinimumSize) <= epsilon ||
          Math.abs(renderedFontSize - requestedMaximumSize) <= epsilon ||
          delta === 0
        ) {
          return storedZoom;
        }

        if (delta > 0) {
          return clampAsciiZoom(renderedFontSize / minimumBaseSize);
        }

        return clampAsciiZoom(renderedFontSize / maximumBaseSize);
      };

      const themeColors = {
        dark: "#0c1115",
        light: "#f6f1e8"
      };

      const applyMode = (mode) => {
        document.documentElement.dataset.colorMode = mode;
        const nextMode = mode === "dark" ? "light" : "dark";
        const toggleLabel = nextMode === "light" ? "Switch to light mode" : "Switch to dark mode";
        const toggleIcon = toggleIcons[nextMode];

        document.querySelectorAll("[data-theme-toggle]").forEach((node) => {
          node.setAttribute("aria-label", toggleLabel);
          node.setAttribute("title", toggleLabel);
        });

        document.querySelectorAll("[data-theme-icon]").forEach((node) => {
          node.innerHTML = toggleIcon;
        });

        const metaTheme = document.querySelector('meta[name="theme-color"]');

        if (metaTheme) {
          metaTheme.setAttribute("content", themeColors[mode]);
        }
      };

      const applyAsciiZoom = (zoom) => {
        const nextZoom = clampAsciiZoom(zoom);
        const zoomPercent = Math.round(nextZoom * 100);

        document.documentElement.style.setProperty("--ascii-zoom-scale", String(nextZoom));

        document.querySelectorAll("[data-ascii-zoom-out]").forEach((node) => {
          node.disabled = nextZoom <= minAsciiZoom;
          node.setAttribute("aria-label", \`Decrease ASCII size (\${zoomPercent}%)\`);
          node.setAttribute("title", \`Decrease ASCII size (\${zoomPercent}%)\`);
        });

        document.querySelectorAll("[data-ascii-zoom-in]").forEach((node) => {
          node.disabled = nextZoom >= maxAsciiZoom;
          node.setAttribute("aria-label", \`Increase ASCII size (\${zoomPercent}%)\`);
          node.setAttribute("title", \`Increase ASCII size (\${zoomPercent}%)\`);
        });

        window.refreshAsciiPresentation?.();
      };

      window.toggleColorMode = () => {
        const nextMode = document.documentElement.dataset.colorMode === "dark" ? "light" : "dark";
        window.localStorage.setItem(colorModeStorageKey, nextMode);
        applyMode(nextMode);
      };

      window.adjustAsciiZoom = (delta) => {
        const currentZoom = readCurrentAsciiZoom(delta);
        const nextZoom = clampAsciiZoom(currentZoom + delta);

        window.localStorage.setItem(asciiZoomStorageKey, String(nextZoom));
        applyAsciiZoom(nextZoom);
      };

      window.decreaseAsciiZoom = () => {
        window.adjustAsciiZoom(-asciiZoomStep);
      };

      window.increaseAsciiZoom = () => {
        window.adjustAsciiZoom(asciiZoomStep);
      };

      applyMode(readMode());
      applyAsciiZoom(readAsciiZoom());

      document.addEventListener("DOMContentLoaded", () => {
        applyMode(readMode());
        applyAsciiZoom(readAsciiZoom());
      });
    })();
  </script>`;
}

function renderThemeToggle() {
  return `<div class="presentation-toolbar" role="toolbar" aria-label="Appearance controls">
    <button class="presentation-control theme-toggle" data-theme-toggle type="button" onclick="toggleColorMode()" aria-label="Switch to light mode" title="Switch to light mode">
      <span class="theme-toggle__icon" data-theme-icon aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5M5.85 5.85l1.8 1.8M16.35 16.35l1.8 1.8M18.15 5.85l-1.8 1.8M7.65 16.35l-1.8 1.8"></path></svg></span>
    </button>
  </div>`;
}

function renderPresentationControls() {
  return `<div class="presentation-toolbar" role="toolbar" aria-label="Presentation controls">
    <button class="presentation-control presentation-control--text" data-ascii-zoom-out type="button" onclick="decreaseAsciiZoom()" aria-label="Decrease ASCII size" title="Decrease ASCII size">-</button>
    <button class="presentation-control presentation-control--text" data-ascii-zoom-in type="button" onclick="increaseAsciiZoom()" aria-label="Increase ASCII size" title="Increase ASCII size">+</button>
    <button class="presentation-control theme-toggle" data-theme-toggle type="button" onclick="toggleColorMode()" aria-label="Switch to light mode" title="Switch to light mode">
      <span class="theme-toggle__icon" data-theme-icon aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.25"></circle><path d="M12 2.75v2.5M12 18.75v2.5M4.75 12h2.5M16.75 12h2.5M5.85 5.85l1.8 1.8M16.35 16.35l1.8 1.8M18.15 5.85l-1.8 1.8M7.65 16.35l-1.8 1.8"></path></svg></span>
    </button>
  </div>`;
}

function renderPresentationItems(presentations, presentationBasePath, presentationIndexPathname) {
  return presentations
    .map((presentation) => {
      const defaultRoute = `${presentationBasePath}/${presentation.name}${presentationIndexPathname}`;

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

export async function renderIndexPage({
  indexTitle,
  presentations,
  urls = {}
}) {
  const template = await loadTemplate("index.html");
  const faviconHref = urls.faviconHref ?? "/static/favicon.svg";
  const baseCssHref = urls.baseCssHref ?? "/static/styles/base.css";
  const indexCssHref = urls.indexCssHref ?? "/static/styles/index.css";
  const presentationBasePath = urls.presentationBasePath ?? "/presentation";
  const presentationIndexPathname = urls.presentationIndexPathname ?? "/";

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(indexTitle),
    FAVICON_HREF: faviconHref,
    BASE_CSS_HREF: baseCssHref,
    INDEX_CSS_HREF: indexCssHref,
    INDEX_TITLE: escapeHtml(indexTitle),
    PRESENTATION_COUNT: String(presentations.length),
    PRESENTATION_LABEL: presentations.length === 1 ? "presentation" : "presentations",
    PRESENTATION_ITEMS: renderPresentationItems(
      presentations,
      presentationBasePath,
      presentationIndexPathname
    ),
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderThemeToggle()
  });
}

export async function renderPresentationPage(presentation, urls = {}) {
  const template = await loadTemplate("presentation.html");
  const faviconHref = urls.faviconHref ?? "/static/favicon.svg";
  const revealResetHref = urls.revealResetHref ?? "/reveal/dist/reset.css";
  const revealCssHref = urls.revealCssHref ?? "/reveal/dist/reveal.css";
  const revealThemeHref =
    urls.revealThemeHref ?? `/reveal/dist/theme/${presentation.theme}.css`;
  const baseCssHref = urls.baseCssHref ?? "/static/styles/base.css";
  const presentationCssHref = urls.presentationCssHref ?? "/static/styles/presentation.css";
  const revealScriptSrc = urls.revealScriptSrc ?? "/reveal/dist/reveal.js";
  const revealMarkdownScriptSrc =
    urls.revealMarkdownScriptSrc ?? "/reveal/plugin/markdown/markdown.js";
  const revealNotesScriptSrc = urls.revealNotesScriptSrc ?? "/reveal/plugin/notes/notes.js";
  const revealZoomScriptSrc = urls.revealZoomScriptSrc ?? "/reveal/plugin/zoom/zoom.js";
  const presentationRuntimeSrc =
    urls.presentationRuntimeSrc ?? "/static/scripts/presentation-runtime.js";
  const asciiMorphVendorSrc = urls.asciiMorphVendorSrc ?? "/vendor/ascii-morph.js";
  const extraStyles = presentation.styles
    .map((href) => `<link rel="stylesheet" href="${href}" />`)
    .join("\n");
  const extraScripts = presentation.scripts
    .map((src) => `<script src="${src}"></script>`)
    .join("\n");

  return injectTokens(template, {
    PAGE_TITLE: escapeHtml(presentation.title),
    FAVICON_HREF: faviconHref,
    REVEAL_RESET_HREF: revealResetHref,
    REVEAL_CSS_HREF: revealCssHref,
    REVEAL_THEME_HREF: revealThemeHref,
    BASE_CSS_HREF: baseCssHref,
    PRESENTATION_CSS_HREF: presentationCssHref,
    EXTRA_STYLES: extraStyles,
    EXTRA_SCRIPTS: extraScripts,
    MARKDOWN_SOURCE: escapeMarkdownTemplate(presentation.markdown),
    REVEAL_CONFIG: JSON.stringify(presentation.reveal, null, 2),
    REVEAL_SCRIPT_SRC: revealScriptSrc,
    REVEAL_MARKDOWN_SCRIPT_SRC: revealMarkdownScriptSrc,
    REVEAL_NOTES_SCRIPT_SRC: revealNotesScriptSrc,
    REVEAL_ZOOM_SCRIPT_SRC: revealZoomScriptSrc,
    PRESENTATION_RUNTIME_SRC: presentationRuntimeSrc,
    ASCII_MORPH_VENDOR_SRC: asciiMorphVendorSrc,
    THEME_BOOT_SCRIPT: renderThemeBootScript(),
    THEME_TOGGLE: renderPresentationControls()
  });
}
