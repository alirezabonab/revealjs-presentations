<!-- ## Slide (Section: opening) -->
```text
+------------------------------------------------------------------+
|                         SYSTEM STORY                             |
+------------------------------------------------------------------+
|                                                                  |
|  This deck shows the strict engine contract:                     |
|                                                                  |
|  [1] one ASCII stage per slide                                   |
|  [2] one image stage per slide                                   |
|  [3] notes stay outside the visible stage                        |
|                                                                  |
|  Route: /presentation/example                                    |
|                                                                  |
+------------------------------------------------------------------+
```

Notes:
Open the example route and use it to check the engine contract.

---

<!-- ## Slide (Section: diagram) -->
<!-- .slide: data-transition="fade" -->
```text
+------------------------------------------------------------------+
|                         REQUEST FLOW                             |
+------------------------------------------------------------------+
|                                                                  |
|  +--------+      +-------------+      +-----------------+        |
|  | Author | ---> | deck.md     | ---> | Express server  |        |
|  +--------+      +-------------+      +-----------------+        |
|                                                   |              |
|                                                   v              |
|                                            +---------------+     |
|                                            | Reveal.js     |     |
|                                            | markdown deck |     |
|                                            +---------------+     |
|                                                                  |
+------------------------------------------------------------------+
```

Notes:
The markdown plugin keeps the ASCII spacing stable.

---

<!-- ## Slide (Section: animation) -->
<pre class="ascii-morph-stage" data-ascii-morph="moving-block"><code>+------------------------------+
|        ANIMATED ASCII        |
+------------------------------+
| ####                         |
| ####                         |
|                              |
+------------------------------+</code></pre>

Notes:
The runtime should still fit this stage after the animation script starts.

---

<!-- ## Slide (Section: image) -->
![Example presentation asset](./assets/board.svg)

Notes:
Image slides are image-only. They should center and fit inside the same outer frame.

---

<!-- ## Slide (Section: links) -->
```text
+------------------------------------------------------------------+
|                          USEFUL LINKS                            |
+------------------------------------------------------------------+
|                                                                  |
|  Reveal.js docs:   https://revealjs.com/                         |
|  Theme file:       /content/example/assets/theme.css             |
|  Deck index:       /                                             |
|                                                                  |
|  This slide is still one ASCII stage, so it stays valid.         |
|                                                                  |
+------------------------------------------------------------------+
```
