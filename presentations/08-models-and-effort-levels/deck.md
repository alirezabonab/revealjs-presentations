<!-- ## Slide (Section: cover) -->
<!-- .slide: class="ascii-tight" -->
```text
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                    ███╗   ███╗  ██████╗  ██████╗  ███████╗ ██╗      ███████╗                     ║
║                    ████╗ ████║ ██╔═══██╗ ██╔══██╗ ██╔════╝ ██║      ██╔════╝                     ║
║                    ██╔████╔██║ ██║   ██║ ██║  ██║ █████╗   ██║      ███████╗                     ║
║                    ██║╚██╔╝██║ ██║   ██║ ██║  ██║ ██╔══╝   ██║      ╚════██║                     ║
║                    ██║ ╚═╝ ██║ ╚██████╔╝ ██████╔╝ ███████╗ ███████╗ ███████║                     ║
║                    ╚═╝     ╚═╝  ╚═════╝  ╚═════╝  ╚══════╝ ╚══════╝ ╚══════╝                     ║
║                                                                                                  ║
║      █████╗  ███╗   ██╗ ██████╗      ███████╗ ███████╗ ███████╗  ██████╗  ██████╗  ████████╗     ║
║     ██╔══██╗ ████╗  ██║ ██╔══██╗     ██╔════╝ ██╔════╝ ██╔════╝ ██╔═══██╗ ██╔══██╗ ╚══██╔══╝     ║
║     ███████║ ██╔██╗ ██║ ██║  ██║     █████╗   █████╗   █████╗   ██║   ██║ ██████╔╝    ██║        ║
║     ██╔══██║ ██║╚██╗██║ ██║  ██║     ██╔══╝   ██╔══╝   ██╔══╝   ██║   ██║ ██╔══██╗    ██║        ║
║     ██║  ██║ ██║ ╚████║ ██████╔╝     ███████╗ ██║      ██║      ╚██████╔╝ ██║  ██║    ██║        ║
║     ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝      ╚══════╝ ╚═╝      ╚═╝       ╚═════╝  ╚═╝  ╚═╝    ╚═╝        ║
║                                                                                                  ║
║                                                                                                  ║
║                                        which dial to turn                                        ║
║                                                                                                  ║
║                                  AI Guild  ·  topic session 01                                   ║
║                                                                                                  ║
║                                                                            September 2026        ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Set the frame in one sentence before anything else: today is about turning two dials on purpose instead of one by habit.

Say what this is. The first AI Guild topic session, about twenty minutes plus discussion. If the slot is the twelve-minute Show and Tell, drop the orchestration section and run one comparison in the demo instead of three.

Say where the numbers come from, once. The Claude material is Anthropic's current documentation and its published measurements. The GPT-5.6 material is OpenAI's launch documentation, not hands-on use. Prices are list prices on the day they were checked, and they move. Say so if anyone asks, and do not defend a number past that.

---

<!-- ## Slide (Section: short version) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        THE SHORT VERSION                                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      "Which model should I use?" is the question everyone asks.

      It is the second most important dial.
      The first is how hard the model thinks - and most of us leave that
      on a default we have never looked at.

      Today is about turning two dials on purpose instead of one by habit.


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  FIVE THINGS TO LEAVE WITH                                                                       ║
║                                                                                                  ║
║  1   If there is a checker, start cheap and low, and re-run the failures higher.                 ║
║  2   Sweep effort before switching model.                                                        ║
║  3   Judge cost per finished task, not per request.                                              ║
║  4   xhigh for hard coding.  Max for measured wins only.                                         ║
║  5   Orchestrate only when there is bulk to hand off.                                            ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Lead with the reframe, not with a table. Everyone in the room has asked which model to use. Almost nobody has asked how hard it should think, and that is the dial with the bigger effect on cost and on the shape of the answer.

Then read the five rules once, without explaining them. The rest of the deck is the explanation. Say plainly that if people leave with only these five in their heads, the session did its job.

---

<!-- ## Slide (Section: section one) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              SECTION ONE  -  TWO DIALS AND A MODE              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: two dials) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   TWO DIALS, AND A MODE ON TOP                                   │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────────────┐    ┌──────────────────────────────────────────┐
    │  DIAL ONE  -  THE MODEL                  │    │  DIAL TWO  -  EFFORT                     │
    ├──────────────────────────────────────────┤    ├──────────────────────────────────────────┤
    │  capability tier                         │    │  how much the model thinks               │
    │  price                                   │    │  how many tool calls it makes            │
    │  how long it will run on one request     │    │  before it answers                       │
    └──────────────────────────────────────────┘    └──────────────────────────────────────────┘

      Claude    low  ·  medium  ·  high  ·  xhigh  ·  max
      OpenAI    none  ·  low  ·  medium  ·  high  ·  xhigh  ·  max

      A MODE ON TOP  -  NOT A LEVEL
      ─────────────────────────────
      ultracode    Claude Code at xhigh, plus the task fanned out to subagents
                   that verify each other - without you designing that
      Pro mode     a separate ChatGPT execution mode - effort is set independently inside it

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  "Ultra" is not a sixth effort level.  When people say it, they mean ultracode.                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Dial one is the model: capability tier, price, and how long it is willing to run on one request. Dial two is effort: how much the model thinks, and how many tool calls it makes before it answers. Claude has five levels. OpenAI has six, because it adds none at the bottom.

Then the mode on top, and land the correction here, because it comes up in every conversation about this. Ultracode is not a higher effort level. It is a Claude Code session mode: xhigh effort, plus Claude Code fanning the task out to subagents that verify each other, without you designing that. Pro mode in ChatGPT is the same kind of thing - a separate execution mode, with effort set independently inside it.

When someone says ultra, they mean ultracode. Say it once and move on.

---

<!-- ## Slide (Section: defaults) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE DEFAULTS NOBODY CHANGED                                    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      Defaults matter because nobody changes them.

        ┌──────────────────────┬──────────────────┐
        │  WHERE               │  DEFAULT EFFORT  │
        ├──────────────────────┼──────────────────┤
        │  Claude API          │  high            │
        │  Claude Code         │  xhigh           │
        │  OpenAI API          │  medium          │
        └──────────────────────┴──────────────────┘

      none ────── low ────── medium ────── high ────── xhigh ────── max
                                ▲            ▲           ▲
                           OpenAI API   Claude API  Claude Code

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  A developer in Claude Code and a developer in Codex are already running at different            ║
║  effort - without either of them having chosen to.                                               ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Defaults matter because nobody changes them. Three tools, three different defaults, and none of them were chosen by the person using them.

Point at the ladder. A developer in Claude Code is running at xhigh. A developer in Codex is running at medium, because that is where the OpenAI API defaults. They are already two notches apart without either of them having touched a setting. That is the whole reason to know where the dial is before turning it.

---

<!-- ## Slide (Section: section two) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║                   SECTION TWO  -  THE LINEUP                   ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: lineup) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     FOUR TIERS, TWO VENDORS                                      │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

         ┌─────────────┬──────────────┬────────────────┬────────────┬─────────────────────┐
         │  TIER       │  CLAUDE      │  GPT-5.6       │  CLAUDE $  │  GPT $              │
         ├─────────────┼──────────────┼────────────────┼────────────┼─────────────────────┤
         │  FRONTIER   │  Fable 5.1   │  Sol           │  10 / 50   │  5 / 30             │
         │  WORKHORSE  │  Opus 5      │  Sol or Terra  │  5 / 25    │  5 / 30 or 2.5 / 15 │
         │  FAST       │  Sonnet 5    │  Terra         │  2 / 10    │  2.5 / 15           │
         │  SMALL      │  Haiku 4.5   │  Luna          │  1 / 5     │  1 / 6              │
         └─────────────┴──────────────┴────────────────┴────────────┴─────────────────────┘
           list prices per million tokens, input / output  ·  check them before you quote them

      FRONTIER    long-horizon, ambiguous, hours-long agentic work.  Your hardest problems, first.
      WORKHORSE   most coding: multi-file features, refactors, review.  Start here for agents.
      FAST        bounded tasks, tests, high volume with a checker, anything latency-sensitive.
      SMALL       mechanical, checkable, bulk.  Not long agentic loops.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Fable 5 is still served at the same price as 5.1.  Opus 5 has a fast mode at 10 / 50.           ║
║  The cross-vendor tiers are approximate - run your own task on both before believing a table.    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Do not read the table out. It is on the cheat sheet. Let people look for ten seconds, then make the three points on the next slide.

Two footnotes if asked. Fable 5 is still served at the same price as 5.1. Opus 5 has a fast mode at ten and fifty that runs the same model faster - a speed setting, not a different model. And the GPT column is from OpenAI's launch material, not from hands-on use, so treat the cross-vendor tiers as a rough alignment rather than a benchmark result.

---

<!-- ## Slide (Section: three points) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               THREE THINGS THE TABLE DOES NOT SAY                                │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      1   THE TIERS LINE UP ROUGHLY ACROSS VENDORS
          frontier: Fable 5.1 and Sol  ·  workhorse: Opus 5, and Sol or Terra
          fast: Sonnet 5 and Terra  ·  small: Haiku 4.5 and Luna


      2   PRICE PER TOKEN PREDICTS PRICE PER FINISHED TASK BADLY
          a cheaper model that needs three tries costs more than the expensive one that needed one


      3   THE NEWEST MODEL AT LOW EFFORT OFTEN BEATS THE PREVIOUS GENERATION AT HIGH
          on Fable 5.1, low commonly exceeds the xhigh - or even the max - of prior models


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  If people remember one fact from today, make it number three.                                   ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Three points, in rising order of importance.

The tiers line up roughly across vendors. That is useful for talking about them, not for choosing between them - run your own task on both before believing a table.

Price per token predicts price per finished task badly. The mental model people carry is price per request, and it is the wrong one. A cheaper model that needs three tries costs more than the expensive one that needed one, and that is before anyone counts the time spent reviewing three attempts.

Then the one to slow down for. The newest model at low effort often beats the previous generation at high. On Fable 5.1, low commonly exceeds the xhigh or even the max of prior models. If people remember one fact from today, make it this one, because it inverts the instinct that a cheaper setting means a worse answer.

---

<!-- ## Slide (Section: section three) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║          SECTION THREE  -  WHAT EFFORT ACTUALLY DOES           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: ladder) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        THE EFFORT LADDER                                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

  ┌──────────┬──────────────┬───────────────┬────────────────────────────────────────────────────┐
  │  CLAUDE  │  OPENAI      │  DEFAULT FOR  │  WHAT IT DOES                                      │
  ├──────────┼──────────────┼───────────────┼────────────────────────────────────────────────────┤
  │  low     │  none, low   │  -            │  short, scoped tasks.  fewer, more consolidated    │
  │          │              │               │  tool calls.  less preamble                        │
  ├──────────┼──────────────┼───────────────┼────────────────────────────────────────────────────┤
  │  medium  │  medium      │  OpenAI API   │  the cost-saving step down.  unusually strong on   │
  │          │              │               │  Opus 5 and Fable 5.1                              │
  ├──────────┼──────────────┼───────────────┼────────────────────────────────────────────────────┤
  │  high    │  high        │  Claude API   │  balanced.  the floor for intelligence-sensitive   │
  │          │              │               │  work                                              │
  ├──────────┼──────────────┼───────────────┼────────────────────────────────────────────────────┤
  │  xhigh   │  xhigh       │  Claude Code  │  most coding and agentic work.  the sweet spot     │
  ├──────────┼──────────────┼───────────────┼────────────────────────────────────────────────────┤
  │  max     │  max         │  -            │  correctness over cost.  overthinks routine        │
  │          │              │               │  tasks.  for measured wins only                    │
  └──────────┴──────────────┴───────────────┴────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  One notch on the same model is the cheapest experiment you can run.                             ║
║  Sweep effort before switching model.                                                            ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Walk the ladder from the bottom. Low is for short, scoped work: fewer and more consolidated tool calls, less preamble. Medium is the cost-saving step down, and it is unusually strong on Opus 5 and Fable 5.1. High is balanced, and the floor for anything intelligence-sensitive. Xhigh is where most coding and agentic work belongs. Max is correctness over cost, and it overthinks routine tasks, so save it for wins you have measured.

The third column is the defaults slide again, now in context: the OpenAI API sits at medium, the Claude API at high, Claude Code at xhigh.

The box is rule two. One notch on the same model is the cheapest experiment available - change one thing and compare. Switching model changes everything at once, so do that second.

---

<!-- ## Slide (Section: curves) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        THREE CURVE SHAPES                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   score by effort level, from Anthropic's published measurements

   ┌────────────────────────────┐  ┌────────────────────────────┐  ┌────────────────────────────┐
   │  FLAT                      │  │  A REAL TRADEOFF           │  │  STEEP                     │
   ├────────────────────────────┤  ├────────────────────────────┤  ├────────────────────────────┤
   │  low      ███████████████  │  │  low      ██████████       │  │  low      ████████         │
   │  medium   ████████████████ │  │  medium   ███████████████  │  │  medium   ████████████     │
   │  default  ████████████████ │  │  default  ████████████████ │  │  default  ████████████████ │
   ├────────────────────────────┤  ├────────────────────────────┤  ├────────────────────────────┤
   │  research, summarising,    │  │  long-horizon coding       │  │  reasoning-ceiling work:   │
   │  knowledge work            │  │                            │  │  deep research across      │
   │                            │  │  Opus 5 at medium: about 2 │  │  several subtopics         │
   │  low: 1 to 3 points fewer  │  │  points for half the cost  │  │                            │
   │  for a third to a half off │  │  at low: about 8 points    │  │  every step up bought      │
   │  medium matched the        │  │  for a quarter of it       │  │  about 2.4 rubric points   │
   │  default, and was faster   │  │                            │  │  no free cut on this curve │
   └────────────────────────────┘  └────────────────────────────┘  └────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Two of the three shapes have a cheap step.  Know which curve the task is on                     ║
║  before you pay for high.                                                                        ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Three shapes, all from Anthropic's published measurements. The shape of the curve tells you whether effort is worth paying for.

Flat is research, summarising and knowledge work. Low gave up one to three points for a third to a half off the cost per task. Medium matched the default, and the default bought nothing measurable over medium on any of the four benchmarks. Lower effort was also faster. On this curve, high is money spent on nothing.

The real tradeoff is long-horizon coding. Opus 5 at medium gave up about two points for half the cost. At low, about eight points for a quarter of it. Here effort buys something, and you decide what it is worth.

Steep is reasoning-ceiling work - deep research across several subtopics. Every step up bought about 2.4 rubric points. There is no free cut on this curve, so do not go looking for one.

---

<!-- ## Slide (Section: checker) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 WHEN SOMETHING CHECKS THE ANSWER                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      A checker is anything that says pass or fail without you: tests, a validator, the compiler.

     ┌────────────────────────────────────────┐      ┌────────────────────────────────────────┐
     │  EVERYTHING AT THE DEFAULT             │      │  LOW FIRST, RE-RUN THE FAILURES        │
     ├────────────────────────────────────────┤      ├────────────────────────────────────────┤
     │  every task runs at the default effort │      │  every task runs at low                │
     │                                        │      │  only the failures re-run at default   │
     │                                        │      │                                        │
     │  91.7 % pass                           │      │  93 % pass                             │
     │  about $1.39 per task                  │      │  about $0.70 per task                  │
     └────────────────────────────────────────┘      └────────────────────────────────────────┘

      Anthropic's coding runs.  The cheap number already counts the failed low attempts.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Same pass rate, half the cost.  If there is a checker, start low and re-run failures higher.    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is the pattern that falls out of the curves, and it is the most useful thing on the cheat sheet.

A checker is anything that says pass or fail without a person: tests, a validator, the compiler. When you have one, cheap attempts are safe, because a wrong answer costs you a re-run rather than a bug.

Read the two boxes as a pair. Running everything at the default passed 91.7 percent for about 1.39 dollars a task. Running everything at low and re-running only the failures at the default passed 93 percent for about 70 cents. Same pass rate, half the cost - and the cheap number already includes the failed low attempts.

Say the condition out loud, because it is the whole trick: this only works when something other than you checks the answer.

---

<!-- ## Slide (Section: signs) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     SIGNS YOU HAVE IT WRONG                                      │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   ┌───────────────────────────────────────────┐    ┌───────────────────────────────────────────┐
   │  TOO LITTLE EFFORT                        │    │  TOO MUCH EFFORT                          │
   ├───────────────────────────────────────────┤    ├───────────────────────────────────────────┤
   │  what it looks like                       │    │  what it looks like                       │
   │  tests that cover the happy path only     │    │  a five-minute turn on a rename           │
   │  stubs and TODOs left behind              │    │  code you did not mention getting         │
   │  an edge case you named getting missed    │    │  refactored                               │
   │  a one-line answer to a three-part        │    │  a PR description with a section on       │
   │  question                                 │    │  alternatives not chosen                  │
   │                                           │    │                                           │
   │  where you see it                         │    │  where you see it                         │
   │  Sonnet 5 at low on a complex task        │    │  max on a routine edit                    │
   │                                           │    │                                           │
   │  the fix                                  │    │  the fix                                  │
   │  raise effort one notch                   │    │  drop effort one notch, and say           │
   │  do not prompt around it                  │    │  "do not refactor beyond the task"        │
   └───────────────────────────────────────────┘    └───────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Effort is the fix.  "Be thorough" in the prompt is the wrong one.                               ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Two failure modes, and both are recognisable from across the room.

Too little effort looks like tests that only cover the happy path, stubs and TODOs left behind, a named edge case missed, or a one-line answer to a three-part question. Sonnet 5 at low on a complex task does this. The fix is one notch of effort. Adding "be thorough" to the prompt is the wrong fix - it treats a budget problem as a wording problem.

Too much effort looks like a five-minute turn on a rename, code you never mentioned getting tidied, or a PR description with a section on alternatives not chosen. Max on a routine edit does this. Drop a notch, and tell it not to refactor beyond the task.

---

<!-- ## Slide (Section: demo) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                           LIVE DEMO  -  SAME BUG, THREE CONFIGURATIONS                           │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      THE PROMPT, IDENTICAL EVERY TIME
      ────────────────────────────────
      "test_duration.py::test_minutes_only is failing.  Fix the bug.  Don't change anything else."

      a synthetic package, built before the session.  Nothing from company code goes on screen.
      parse_duration("1h30m") returns seconds.  The minutes branch forgets to multiply by 60.

   ┌──────┬────────────┬──────────┬────────────┬──────────────┬────────────────┬────────────────┐
   │  RUN │  MODEL     │  EFFORT  │  WALL TIME │  TEST PASSES │  FILES TOUCHED │  NOT ASKED FOR │
   ├──────┼────────────┼──────────┼────────────┼──────────────┼────────────────┼────────────────┤
   │  A   │  Sonnet 5  │  low     │            │              │                │                │
   │  B   │  Opus 5    │  medium  │            │              │                │                │
   │  C   │  Opus 5    │  xhigh   │            │              │                │                │
   └──────┴────────────┴──────────┴────────────┴──────────────┴────────────────┴────────────────┘
     fresh session per run  ·  /model sets model and effort  ·  /cost gives a fifth column

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  All three will probably fix it.  That is the point: a one-file bug with a failing test is a     ║
║  flat-curve task, and the room watches a bigger model spend longer arriving at the same diff.    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Same bug, same prompt, three configurations. The script is in the live-demo example file. The repo is synthetic and built before the session - six tests, one of them failing - and nothing from company code goes on screen.

Run each in a fresh session, because changing effort inside a session invalidates the cache and muddies the comparison. Record wall time, whether the failing test passes, files touched, and anything it did that you did not ask for. /cost gives a fifth column if you want token numbers.

What you will probably see is that all three fix it, and that is the point: a one-file bug with a clear failing test is a flat-curve task, so the room watches a bigger model at higher effort spend longer arriving at the same diff. If run A does not fix it, better - that is the re-run-the-failures pattern happening live. Re-run it at medium and show it passing. If run C touches something you did not ask for, point at it. That is what too much effort looks like.

If a run drags, switch to the screenshots from rehearsal. Never wait on a live Fable 5.1 turn at high effort in a sixty-minute session; a fifteen-minute single request is normal for it. And reset your effort setting afterwards, because the picker persists it.

---

<!-- ## Slide (Section: section four) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        SECTION FOUR  -  ORCHESTRATION, AND WHEN IT PAYS        ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: three rules) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                THREE RULES FROM THE MEASUREMENTS                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      1   IT PAYS WHEN THERE IS BULK TO HAND OFF
          many independent pieces, ideally more than one context window holds
          on work larger than any context, an orchestrator with cheap workers cost 55 % less
          than the frontier model working alone

      2   IT DOES NOT PAY FOR ONE DEPENDENT CHAIN THAT FITS IN CONTEXT
          you pay for a plan, a handoff and a merge that a single model does for free
          in every case of that shape Anthropic measured, the coordinator's model alone
          at lower effort came out ahead

      3   SWEEP EFFORT ON THE STRONGER MODEL ALONE FIRST
          the flagship advisor pairing was the most accurate configuration measured -
          and still within noise of the frontier model alone at medium, at about the same cost

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Measure the boring alternative first: the most capable model alone, at lower effort.            ║
║  It wins more often than the architecture diagrams suggest.                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Three rules from the measurements, and the second one is the one people get wrong.

It pays when there is bulk to hand off: many independent pieces, ideally more than one context window holds. On work larger than any context, an orchestrator with cheap workers cost 55 percent less than the frontier model working alone, at every effort setting.

It does not pay for one dependent chain that fits in context. Orchestration buys a plan, a handoff and a merge, and a single model does all three for free. In every case of that shape Anthropic measured, the coordinator's model alone at lower effort came out ahead.

Sweep effort on the stronger model alone before adding a cheaper executor or an advisor. The flagship advisor pairing was the most accurate configuration measured, and it was still within noise of the frontier model alone at medium effort, at about the same cost. The consult rate is fragile too: lower the executor's effort and it can stop consulting almost entirely, and then the pairing scores below the executor alone.

The box is the habit to leave with: measure the boring alternative first.

---

<!-- ## Slide (Section: pair) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                THE SAME TOOL, PAYING OFF AND NOT                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   ┌───────────────────────────────────────────┐    ┌───────────────────────────────────────────┐
   │  FORTY MODULES, ONE DEPRECATED API        │    │  ONE FEATURE, FOUR FILES                  │
   ├───────────────────────────────────────────┤    ├───────────────────────────────────────────┤
   │  the shape                                │    │  the shape                                │
   │  forty independent pieces, more than one  │    │  each step depends on the previous one    │
   │  context holds - each checkable because   │    │  the whole thing fits in one context      │
   │  the module compiles and its tests run    │    │                                           │
   │                                           │    │                                           │
   │  the configuration                        │    │  the configuration                        │
   │  Opus 5 at xhigh plans and reviews        │    │  Opus 5 at xhigh.  Alone.  No subagents.  │
   │  Sonnet 5 at low, or Haiku 4.5, does      │    │                                           │
   │  each module                              │    │  Opus 5 reaches for subagents readily -   │
   │  failures re-run at Sonnet 5 high,        │    │  on cost-sensitive work, say              │
   │  then at Opus 5                           │    │  "no subagents" in the prompt             │
   └───────────────────────────────────────────┘    └───────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  ULTRACODE is the left box with one keyword - put the word in the prompt, on Opus 5.             ║
║  Not for single-file edits.  Cap it on cost-sensitive work.                                      ║
║  Reset your effort setting afterwards - the picker persists it.                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
These two are the pair that shows the same tool paying off and not.

Left: forty modules, one deprecated API. Independent pieces, more than one context holds, each checkable because the module compiles and its tests run. Opus 5 at xhigh plans the change and reviews what comes back. Sonnet 5 at low, or Haiku 4.5, does each module. Anything that fails its check re-runs at Sonnet 5 high, then at Opus 5. Two operational notes: have every worker return its result in one message rather than dribbling it in, and make a failing worker return an error, not silence.

Right: one feature, four files, each step depending on the last, the whole thing in one context. Opus 5 at xhigh, alone. Opus 5 reaches for subagents more readily than earlier models, so on cost-sensitive work say "no subagents" in the prompt.

Ultracode is the left box with one keyword. Put the word in the prompt on Opus 5 and Claude Code runs at xhigh and orchestrates subagents that verify each other. Not for single-file edits, not a sixth effort level, cap it on cost-sensitive work, and reset your effort setting afterwards.

---

<!-- ## Slide (Section: section five) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              SECTION FIVE  -  THE DECISION GUIDE               ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: starting points) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         STARTING POINTS                                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────┬──────────────────────────────────┬──────────────────────┐
  │  TASK SHAPE                        │  START WITH                      │  THEN                │
  ├────────────────────────────────────┼──────────────────────────────────┼──────────────────────┤
  │  mechanical, greppable, checkable  │  Sonnet 5 low, or Haiku 4.5      │  you are done        │
  │  bounded, one file, clear spec     │  Sonnet 5 medium, or Opus 5 low  │  up one if shallow   │
  │  bug with a clear stack trace      │  Opus 5 medium                   │  high if tests fail  │
  │  multi-file change with tests      │  Opus 5 xhigh                    │  full spec up front  │
  │  no repro, flaky, race condition   │  Opus 5 max, or Fable 5.1 high   │  expect a long turn  │
  │  legacy service, migration plan    │  Fable 5.1 xhigh                 │  give it the why     │
  │  code review                       │  Opus 5 low when the PR opens    │  high before merge   │
  │  summarising and knowledge work    │  Fable 5.1 low, or Sonnet 5 low  │  do not pay for high │
  │  40 independent pieces, a checker  │  Opus 5 xhigh over Sonnet 5 low  │  re-run failures up  │
  │  one dependent chain, one context  │  Opus 5 xhigh, alone             │  do not orchestrate  │
  └────────────────────────────────────┴──────────────────────────────────┴──────────────────────┘

      ════════════════════════════════════════════════════════════════════════════════════════
      Starting points, not answers.  Every curve is per workload and per model.  Measure your own.
```

Notes:
This is the table to hand out, so do not read it. Pick two rows and let people find their own work in the rest.

The row to pause on is code review: two passes, Opus 5 at low when the PR opens and Opus 5 at high before merge. Opus 5's bug-finding stays accurate at low effort, so the cheap pass is real signal, not noise. One boundary to state: security-focused review - authentication, cryptography, secrets handling - does not go through general AI tooling here without approval, and Fable 5.1's cybersecurity classifiers may decline it regardless.

Say what these rows are: starting points, not answers. The effort curve is per workload and per model. Run the sweep on one of your own tasks and you will know more than this table does.

---

<!-- ## Slide (Section: five rules) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                          THE FIVE RULES                                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      1   IF THERE IS A CHECKER, START CHEAP AND LOW
          re-run only the failures higher  ·  93 % for $0.70 against 91.7 % for $1.39

      2   SWEEP EFFORT BEFORE SWITCHING MODEL
          same model, change one thing, compare

      3   JUDGE COST PER FINISHED TASK, NOT PER REQUEST
          three cheap tries cost more than one expensive one

      4   XHIGH FOR HARD CODING.  MAX FOR MEASURED WINS ONLY
          max overthinks routine work

      5   ORCHESTRATE ONLY WHEN THERE IS BULK TO HAND OFF
          one chain in one context means one model


      ════════════════════════════════════════════════════════════════════════════════════════
      The newest model at low effort usually beats the last generation at high.  Start there.
```

Notes:
The same five as the opening slide, now with the reason behind each. Take them in order and do not rush.

If there is a checker, start cheap and low - that is the 93 percent for 70 cents result. Sweep effort before switching model - one variable at a time. Judge cost per finished task - the retries are the cost. Xhigh for hard coding, max for measured wins only - because max overthinks routine work. Orchestrate only when there is bulk to hand off - one chain in one context means one model.

The line under the rule is the fact from the lineup section, and it is the reason the first rule is safe: starting low on the newest model is not starting weak.

---

<!-- ## Slide (Section: dials) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       WHERE THE DIALS ARE                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      IN CLAUDE CODE
      ──────────────
      /model                            opens the picker - arrow keys move the effort slider
                                        saves the choice to ~/.claude/settings.json as the default
      claude --effort low               for one session
      CLAUDE_CODE_EFFORT_LEVEL=medium   for every session, from your shell profile
      ultracode                         the word in the prompt turns on the fan-out mode

      IN THE API
      ──────────
      client.messages.create(
          model="claude-opus-5",
          max_tokens=64000,
          output_config={"effort": "xhigh"},      # low | medium | high | xhigh | max
          messages=[...],
      )

      at xhigh or max, give it room: 64K max_tokens for agentic work, 128K if it is long, and stream

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  A run that hits max_tokens is a failed attempt, not a cheaper one.                              ║
║  The effort UI has changed more than once this year - check the docs for your version.           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Where the dials physically are, so nobody leaves without knowing how to turn them.

In Claude Code: /model opens the picker, and the arrow keys move the effort slider. It saves the choice to settings.json as the new default, so look at it afterwards - that is how people end up running at max for a week without noticing. The --effort flag sets it for one session. The environment variable sets it for every session. The word ultracode in the prompt turns on the fan-out mode.

In the API, effort is a field in output_config, and it takes the same five values. At xhigh or max, give it room: 64K max_tokens for agentic work, 128K if it is long, and stream. A run that hits max_tokens is a failed attempt, not a cheaper one.

The effort UI has changed more than once this year. Confirm against the installed version before the demo, and say so out loud if the screen looks different from the slide.

---

<!-- ## Slide (Section: compliance) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               NONE OF THIS CHANGES WITH THE MODEL                                │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      Everything before this slide is about choosing well inside what is allowed.

  ┌──────────────┬──────────────────────────────────────────────────────┬────────────────────────┐
  │  RULE        │  WHAT IT MEANS HERE                                  │  WHERE IT COMES FROM   │
  ├──────────────┼──────────────────────────────────────────────────────┼────────────────────────┤
  │  DATA        │  no customer PII, credit, KYC or AML data, and no    │  ISMS 1.4              │
  │              │  credentials, in any of these tools                  │                        │
  ├──────────────┼──────────────────────────────────────────────────────┼────────────────────────┤
  │  HIGH RISK   │  nothing here makes a model suitable for credit      │  EU AI Act (2024/1689) │
  │              │  decisioning, scoring or risk assessment             │  Annex III point 5     │
  │              │  CTO and Compliance before anything is built         │                        │
  ├──────────────┼──────────────────────────────────────────────────────┼────────────────────────┤
  │  RETENTION   │  Fable 5.1 needs 30-day vendor-side data retention   │  CTO and Compliance    │
  │              │  and is not available under zero data retention      │  decision              │
  │              │  acceptable for company data?  not a developer call  │                        │
  ├──────────────┼──────────────────────────────────────────────────────┼────────────────────────┤
  │  NEW VENDOR  │  a new model or vendor reached through the API is    │  DORA (EU 2022/2554)   │
  │              │  an ICT third-party arrangement - flag it            │                        │
  └──────────────┴──────────────────────────────────────────────────────┴────────────────────────┘

      approved tools list:  confirm which of these models are on it before the session

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  These are risk flags, not legal advice.  Compliance and legal sign off the specifics.           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Everything before this slide is about choosing well inside what is allowed. This slide is what does not change with the model, and it should take a minute, not five.

No customer PII, credit, KYC or AML data, and no credentials, in any of these tools - that is ISMS 1.4, and it applies at every effort level and every price. Nothing in this talk makes any model suitable for credit decisioning, scoring or risk assessment. That is high-risk under the EU AI Act, Annex III paragraph 5, and it goes to the CTO and Compliance before anything is built. Fable 5.1 requires 30-day data retention on the vendor side and is not available under zero data retention; whether that is acceptable for company data is a CTO and Compliance decision, not a developer one. And a new model or vendor reached through the API is an ICT third-party arrangement under DORA, so flag it.

Then say which models are on the approved tools list. If you do not know, say that, and take it away. Do not guess.

Close with the caveat and mean it: these are risk flags, not legal advice. Compliance and legal own the specifics.

---

<!-- ## Slide (Section: discussion) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            DISCUSSION                                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘



      THE QUESTION, POSTED IN #ai-guild THE MONDAY BEFORE
      ───────────────────────────────────────────────────

          What is the last task where you picked the model by habit?
          What would you pick now?



      IF THE ROOM IS QUIET
      ────────────────────

          Where in your week are you paying frontier prices for a flat-curve task?


```

Notes:
Post the question in the channel on the Monday before, so people arrive with an answer. Then ask it again here, and wait longer than is comfortable.

If the room is quiet, the fallback: where in your week are you paying frontier prices for a flat-curve task? Summaries, research, knowledge work - everyone has one.

---

<!-- ## Slide (Section: closing) -->
```text
        ╔══════════════════════════════════════════════════════════════════════════════════════════╗
        ║                                                                                          ║
        ║                                                                                          ║
        ║                                                                                          ║
        ║                                   Two dials, not one.                                    ║
        ║                                                                                          ║
        ║                          Sweep effort before you switch model.                           ║
        ║                           Judge the cost of the finished task.                           ║
        ║                       Start low when something checks the answer.                        ║
        ║                                                                                          ║
        ║                                 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                                  ║
        ║                                                                                          ║
        ║                               Turn both dials on purpose.                                ║
        ║                                Not one of them by habit.                                 ║
        ║                                                                                          ║
        ║                                                                                          ║
        ║                                                                                          ║
        ╚══════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Land it in three sentences and stop talking.

Two dials, not one. Sweep effort before you switch model, judge the cost of the finished task, and start low when something checks the answer.

Then the closing line, which is the whole talk compressed: turn both dials on purpose, not one of them by habit. Post the cheat sheet in the channel as you finish.
