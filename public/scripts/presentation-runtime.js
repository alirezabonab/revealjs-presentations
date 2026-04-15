(() => {
  const runtimeState = {
    initialized: false,
    readyDispatched: false,
    refreshFrame: 0,
    mutationObservers: new WeakMap()
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getLeafSlides() {
    return Array.from(document.querySelectorAll(".reveal .slides section")).filter((section) => {
      return !section.querySelector(":scope > section");
    });
  }

  function getVisibleChildren(section) {
    return Array.from(section.children).filter((element) => {
      return !element.matches("aside, script");
    });
  }

  function clearSlideState(section) {
    section.classList.remove("slide-mode-ascii", "slide-mode-image");
    section.removeAttribute("data-slide-mode");

    section.querySelectorAll(".slide-ascii-stage").forEach((node) => {
      node.classList.remove("slide-ascii-stage");
    });

    section.querySelectorAll(".slide-image-stage").forEach((node) => {
      node.classList.remove("slide-image-stage");
      node.style.maxWidth = "";
      node.style.maxHeight = "";
    });

    section.querySelectorAll(".slide-image-wrapper").forEach((node) => {
      node.classList.remove("slide-image-wrapper");
    });
  }

  function getRenderedSlideSpec(section) {
    const visibleChildren = getVisibleChildren(section);

    if (visibleChildren.length !== 1) {
      return {
        error: "slides must render exactly one visible stage."
      };
    }

    const [node] = visibleChildren;

    if (node.tagName === "PRE") {
      return {
        mode: "ascii",
        stage: node
      };
    }

    if (
      node.tagName === "P" &&
      node.children.length === 1 &&
      node.firstElementChild?.tagName === "IMG" &&
      node.textContent.trim() === ""
    ) {
      return {
        mode: "image",
        stage: node.firstElementChild,
        wrapper: node
      };
    }

    if (node.tagName === "IMG") {
      return {
        mode: "image",
        stage: node
      };
    }

    return {
      error: "supported slides are one ASCII <pre> stage or one image."
    };
  }

  function readCssPixels(element, propertyName, fallbackValue) {
    const value = Number.parseFloat(getComputedStyle(element).getPropertyValue(propertyName));
    return Number.isFinite(value) ? value : fallbackValue;
  }

  function getViewportSize() {
    return {
      width: window.visualViewport?.width ?? window.innerWidth,
      height: window.visualViewport?.height ?? window.innerHeight
    };
  }

  function getAvailableStageBox(section) {
    const rect = section.getBoundingClientRect();
    const styles = getComputedStyle(section);
    const scaleX = section.clientWidth > 0 ? rect.width / section.clientWidth : 1;
    const scaleY = section.clientHeight > 0 ? rect.height / section.clientHeight : 1;
    const paddingInlineCss =
      Number.parseFloat(styles.paddingLeft) + Number.parseFloat(styles.paddingRight);
    const paddingBlockCss =
      Number.parseFloat(styles.paddingTop) + Number.parseFloat(styles.paddingBottom);
    const viewport = getViewportSize();
    const renderedWidth = Math.max(
      0,
      Math.min(rect.width, viewport.width) - (paddingInlineCss * scaleX)
    );
    const renderedHeight = Math.max(
      0,
      Math.min(rect.height, viewport.height) - (paddingBlockCss * scaleY)
    );

    return {
      width: scaleX > 0 ? renderedWidth / scaleX : renderedWidth,
      height: scaleY > 0 ? renderedHeight / scaleY : renderedHeight
    };
  }

  function fitAsciiStage(section, stage) {
    const code = stage.querySelector("code") ?? stage;
    const { width, height } = getAvailableStageBox(section);
    const zoomScale = readCssPixels(document.documentElement, "--ascii-zoom-scale", 1);
    const minimumSize =
      readCssPixels(document.documentElement, "--ascii-font-size-min-base", 8) * zoomScale;
    const maximumSize =
      readCssPixels(document.documentElement, "--ascii-font-size-max-base", 32) * zoomScale;
    let low = minimumSize;
    let high = maximumSize;
    let bestSize = minimumSize;

    if (width === 0 || height === 0) {
      return;
    }

    while (low <= high) {
      const testSize = Math.floor((low + high) / 2);
      code.style.fontSize = `${testSize}px`;

      const fits = stage.scrollWidth <= width && stage.scrollHeight <= height;

      if (fits) {
        bestSize = testSize;
        low = testSize + 1;
      } else {
        high = testSize - 1;
      }
    }

    code.style.fontSize = `${bestSize}px`;
  }

  function fitImageStage(section, stage) {
    const { width, height } = getAvailableStageBox(section);

    if (width === 0 || height === 0) {
      return;
    }

    stage.style.maxWidth = `${width}px`;
    stage.style.maxHeight = `${height}px`;
  }

  function observeAsciiStage(stage) {
    if (runtimeState.mutationObservers.has(stage)) {
      return;
    }

    const observerTarget = stage.querySelector("code") ?? stage;
    const observer = new MutationObserver(() => {
      window.refreshAsciiPresentation?.();
    });

    observer.observe(observerTarget, {
      childList: true,
      characterData: true,
      subtree: true
    });

    runtimeState.mutationObservers.set(stage, observer);
  }

  function setupImageStage(section, stage, wrapper) {
    section.classList.add("slide-mode-image");
    section.dataset.slideMode = "image";
    stage.classList.add("slide-image-stage");

    if (wrapper) {
      wrapper.classList.add("slide-image-wrapper");
    }

    if (!stage.complete) {
      stage.addEventListener("load", () => {
        window.refreshAsciiPresentation?.();
      }, { once: true });
    }
  }

  function dispatchRefreshEvents() {
    window.dispatchEvent(new CustomEvent("presentation:refresh"));

    if (!runtimeState.readyDispatched) {
      runtimeState.readyDispatched = true;
      window.dispatchEvent(new CustomEvent("presentation:ready"));
    }
  }

  function showFatalError(message) {
    if (document.querySelector(".presentation-fatal-error")) {
      return;
    }

    const overlay = document.createElement("div");
    overlay.className = "presentation-fatal-error";
    overlay.innerHTML = `<pre>${escapeHtml(message)}</pre>`;
    document.body.append(overlay);
  }

  function isOverviewActive() {
    const revealRoot = document.querySelector(".presentation-shell .reveal");
    return (
      revealRoot?.classList.contains("overview") ||
      revealRoot?.classList.contains("overview-deactivating")
    );
  }

  function refreshPresentationLayout() {
    if (isOverviewActive()) {
      dispatchRefreshEvents();
      return;
    }

    const slides = getLeafSlides();

    slides.forEach((section, index) => {
      clearSlideState(section);

      const renderedSlide = getRenderedSlideSpec(section);

      if (renderedSlide.error) {
        throw new Error(`Invalid rendered slide ${index + 1}: ${renderedSlide.error}`);
      }

      if (renderedSlide.mode === "ascii") {
        section.classList.add("slide-mode-ascii");
        section.dataset.slideMode = "ascii";
        renderedSlide.stage.classList.add("slide-ascii-stage");
        observeAsciiStage(renderedSlide.stage);
        fitAsciiStage(section, renderedSlide.stage);
        return;
      }

      setupImageStage(section, renderedSlide.stage, renderedSlide.wrapper);
      fitImageStage(section, renderedSlide.stage);
    });

    dispatchRefreshEvents();
  }

  function scheduleRefresh() {
    window.cancelAnimationFrame(runtimeState.refreshFrame);
    runtimeState.refreshFrame = window.requestAnimationFrame(() => {
      try {
        refreshPresentationLayout();
      } catch (error) {
        showFatalError(error.message ?? "Unknown presentation layout error.");
        throw error;
      }
    });
  }

  function scheduleSettledRefresh() {
    scheduleRefresh();

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scheduleRefresh();
      });
    });

    window.setTimeout(() => {
      scheduleRefresh();
    }, 120);
  }

  window.refreshAsciiPresentation = scheduleRefresh;

  window.initializeAsciiPresentation = (Reveal) => {
    if (!runtimeState.initialized) {
      runtimeState.initialized = true;

      Reveal.on("ready", scheduleRefresh);
      Reveal.on("slidechanged", scheduleRefresh);
      Reveal.on("slidetransitionend", scheduleSettledRefresh);
      Reveal.on("overviewshown", scheduleRefresh);
      Reveal.on("overviewhidden", scheduleSettledRefresh);
      window.addEventListener("resize", scheduleRefresh);
      document.fonts?.ready?.then(scheduleRefresh).catch(() => {});
    }

    scheduleRefresh();
    return scheduleRefresh;
  };
})();
