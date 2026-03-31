(async () => {
  const stages = {
    "moving-block": [
      [
        "+----------------------+",
        "| ####                 |",
        "| ####                 |",
        "|                      |",
        "+----------------------+"
      ],
      [
        "+----------------------+",
        "|        ####          |",
        "|        ####          |",
        "|                      |",
        "+----------------------+"
      ],
      [
        "+----------------------+",
        "|                ####  |",
        "|                ####  |",
        "|                      |",
        "+----------------------+"
      ]
    ]
  };

  const pause = (timeMs) => new Promise((resolve) => window.setTimeout(resolve, timeMs));
  const { default: AsciiMorph } = await import("/vendor/ascii-morph.js");

  document.querySelectorAll("[data-ascii-morph]").forEach((element) => {
    const key = element.dataset.asciiMorph;
    const frames = stages[key];

    if (!frames || frames.length < 2) {
      return;
    }

    const width = Math.max(...frames.flat().map((line) => line.length));
    const height = Math.max(...frames.map((frame) => frame.length));
    const renderer = AsciiMorph({ x: width, y: height });
    const target = element.querySelector("code") ?? element;

    renderer.update(target)(frames[0]);

    void (async () => {
      let index = 0;

      while (true) {
        const current = frames[index];
        const next = frames[(index + 1) % frames.length];

        await renderer.animate(renderer.morph(current, next), renderer.update(target));
        await pause(850);
        index = (index + 1) % frames.length;
      }
    })();
  });
})();
