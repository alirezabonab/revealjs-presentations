(() => {
  const stages = {
    "moving-block": [
      [
        "+------------------------------+",
        "|        ANIMATED ASCII        |",
        "+------------------------------+",
        "| ####                         |",
        "| ####                         |",
        "|                              |",
        "+------------------------------+"
      ],
      [
        "+------------------------------+",
        "|        ANIMATED ASCII        |",
        "+------------------------------+",
        "|          ####                |",
        "|          ####                |",
        "|                              |",
        "+------------------------------+"
      ],
      [
        "+------------------------------+",
        "|        ANIMATED ASCII        |",
        "+------------------------------+",
        "|                    ####      |",
        "|                    ####      |",
        "|                              |",
        "+------------------------------+"
      ]
    ]
  };

  const mountedStages = new WeakSet();
  const pause = (timeMs) => new Promise((resolve) => window.setTimeout(resolve, timeMs));

  async function mountAsciiMorphStages() {
    const AsciiMorph = window.AsciiMorph;

    if (!AsciiMorph) {
      return;
    }

    document.querySelectorAll("[data-ascii-morph]").forEach((element) => {
      if (mountedStages.has(element)) {
        return;
      }

      const key = element.dataset.asciiMorph;
      const frames = stages[key];

      if (!frames || frames.length < 2) {
        return;
      }

      mountedStages.add(element);

      const width = Math.max(...frames.flat().map((line) => line.length));
      const height = Math.max(...frames.map((frame) => frame.length));
      const renderer = AsciiMorph({ x: width, y: height });
      const target = element.querySelector("code") ?? element;

      renderer.update(target)(frames[0]);
      window.refreshAsciiPresentation?.();

      void (async () => {
        let index = 0;

        while (true) {
          const current = frames[index];
          const next = frames[(index + 1) % frames.length];

          await renderer.animate(renderer.morph(current, next), renderer.update(target));
          index = (index + 1) % frames.length;
          await pause(850);
        }
      })();
    });
  }

  window.addEventListener("presentation:ready", () => {
    void mountAsciiMorphStages();
  });

  window.addEventListener("presentation:refresh", () => {
    void mountAsciiMorphStages();
  });
})();
