<!-- ## Slide (Section: cover) -->
<!-- .slide: class="ascii-tight" -->
```text
╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                  ║
║                                                                                                  ║
║                               ██╗          ███████╗          ██╗   ██╗                           ║
║                               ██║          ██╔════╝          ██║   ██║                           ║
║                               ██║          █████╗            ██║   ██║                           ║
║                          ██   ██║          ██╔══╝            ╚██╗ ██╔╝                           ║
║                          ╚█████╔╝          ███████╗           ╚████╔╝                            ║
║                           ╚════╝           ╚══════╝            ╚═══╝                             ║
║                                                                                                  ║
║                                                                                                  ║
║                                 a decision model, not a chatbot                                  ║
║                                                                                                  ║
║                                  AI Guild  ·  topic session 02                                   ║
║                                                                                                  ║
║                                                                        September 2026            ║
║                                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Open with the one sentence that makes the rest land: Jev is not a smaller, cheaper chatbot. It writes nothing. It answers typed questions your code already asks, and hands back a value your code can branch on.

Say what this is. The second AI Guild topic session, about twenty minutes plus discussion. Deck 08 was about turning two dials on a model that writes. This one is about the case where you do not want writing at all.

Say where the material comes from, once. TypeSafe's own launch post and docs, plus the write-ups from the two weeks since launch on 15 September 2026. Most of the headline numbers are vendor-reported and not independently reproduced. There is a slide for that, and it is not buried at the end.

---

<!-- ## Slide (Section: what it is) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                           WHAT JEV IS                                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      Not a chatbot.  Not a small LLM.  It generates no text at all.

      TypeSafe AI calls it a System One model:  unstructured state goes in, typed
      probabilistic decisions come out.  It answers the questions your code already
      asks, instead of writing a paragraph that your code then has to parse.

          ┌────────────┬────────────────────────────────┬──────────────────────────────┐
          │ PRIMITIVE  │        WHAT YOU ASK IT         │       WHAT COMES BACK        │
          ├────────────┼────────────────────────────────┼──────────────────────────────┤
          │ noul       │ a yes / no question            │ a probability, 0.0 to 1.0    │
          │ choice     │ pick one from a fixed list     │ the pick + confidence        │
          │ score      │ rate this against a rubric     │ the score + confidence       │
          └────────────┴────────────────────────────────┴──────────────────────────────┘

      All three can go in one call, against one shared state, answered in parallel.
      Every answer carries a probability distribution, not just a winner.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Three shapes.  That is the entire output surface.  It cannot return anything else,              ║
║  which is why a malformed response is not a failure mode you have to handle.                     ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Land the category first. Everything this guild has discussed so far writes: it produces tokens one after another, and you read them or parse them. Jev does not. You hand it state and typed questions, and it hands back values.

Walk the three primitives slowly, because the whole model is these three. noul is the odd name - it is their word for a boolean, and it comes back as a probability rather than a hard true or false. choice is a pick from a list you define, up to 255 options. score is a rubric rating.

The line worth pausing on is the callout. There is no string being generated, so there is no schema for the model to violate. If you have ever written a retry loop around an LLM that returned almost-JSON, that loop does not exist here. That is an engineering difference, not marketing.

---

<!-- ## Slide (Section: the problem) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      THE PROBLEM IT SOLVES                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      Almost every system we run has a small judgment sitting in the middle of it.

      SOMETHING ARRIVES                       THE CODE HAS TO DECIDE
      ─────────────────                       ──────────────────────
      a payment narrative                     suspicious?    which queue?
      a support ticket                        urgent?        which team?
      an uploaded document                    what kind?     readable?
      a tool call from an agent               reversible?    allowed?

      Until now there were two ways to answer it, and you had to pick one.

    ┌────────────────────────────────────────────┐    ┌────────────────────────────────────────────┐
    │ HARD-CODE A RULE                           │    │ CALL AN LLM                                │
    ├────────────────────────────────────────────┤    ├────────────────────────────────────────────┤
    │ instant, free, and completely blind        │    │ reads the sentence, and reasons about it   │
    │ cannot read the sentence in front of it    │    │ seconds and cents on every single item     │
    │ every new case is another branch           │    │ and a parser around the answer             │
    └────────────────────────────────────────────┘    └────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  At ten items a day, either one is fine.  At fifty thousand a day, one of them is a              ║
║  maintenance backlog and the other is a bill.  That gap is the whole opening.                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Spend time here, because if the room does not recognise the problem, the model is a curiosity.

Give a concrete one from our own stack. A rules engine fires on a threshold. It cannot read the payment message attached to the transfer, so it cannot tell a real reason from a rehearsed one, and the analyst queue fills up with noise.

The two panels are the honest history. Either you write a rule, which is instant and free and cannot read a sentence, or you call a model that can read the sentence and you pay for that in latency and money on every item. We have made both of those choices in different services.

Then the callout, which frames the rest of the deck: this only matters at volume. Say it plainly. If your judgment runs ten times a day, none of this is worth an integration.

---

<!-- ## Slide (Section: how it works) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         HOW IT SOLVES IT                                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      1   NO GENERATION LOOP
          An LLM writes its answer one token at a time, and then you parse it.
          Jev reads the state once and emits the typed values directly.
          Output tokens are free because there is no output being written.

      2   MANY QUESTIONS, ONE PASS
          The state is sent once.  Every question is evaluated against it in
          parallel, in that same pass.  A tenth question costs almost nothing.

      3   TRAINED FOR CALIBRATION, NOT FOR PREFERENCE
          RLHF optimises for answers a human rater likes.
          RLCD - their term - optimises for probabilities that match reality:
          when it says 0.7, it should be right about seventy percent of the time.

          That is what makes the confidence number usable as a gate:

              high confidence   →   act on it in code
              low confidence    →   hand it to a person

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Calibration is the load-bearing claim.  If the probabilities are honest you can route           ║
║  on them.  If they are not, you have a fast classifier and a false sense of safety.              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Three ideas, and they build on each other.

First, no generation loop. This is why it is fast and why output is free - there is nothing being generated. Worth saying out loud that this is architectural, not a tuning trick.

Second, the batching. You send the state once and ask everything you want to know in the same request. That changes how you design: instead of one big question you decompose into several small atomic ones and combine them in your own code. Their docs are explicit about it - one question should be the kind of judgment a knowledgeable person makes in a few seconds.

Third, calibration, and this is the one to dwell on. The gate at the bottom is the reason anyone should care. Being able to say "act below this line, escalate above it" is what lets you put this into a real workflow that still has a person in it.

Then the callout, and do not soften it. Everything useful here rests on those probabilities being honest, and we come back to that on the limits slide.

---

<!-- ## Slide (Section: the alternatives) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       WHAT WE USED BEFORE                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   ┌──────────────────────┬───────────┬──────────────┬───────────┬───────────┬──────────────────┐
   │       APPROACH       │  CONTEXT  │  CONFIDENCE  │  LATENCY  │   COST    │      UPKEEP      │
   ├──────────────────────┼───────────┼──────────────┼───────────┼───────────┼──────────────────┤
   │ regex / rules engine │    no     │     none     │   ~1 ms   │    ~0     │     endless      │
   │ trained classifier   │   some    │ uncalibrated │  ~10 ms   │ very low  │ labels, retrain  │
   │ LLM + JSON mode      │    yes    │     none     │ 3 - 90 s  │   cents   │ prompts, retries │
   │ a person reading it  │    yes    │   implicit   │  minutes  │  salary   │      hiring      │
   ├──────────────────────┼───────────┼──────────────┼───────────┼───────────┼──────────────────┤
   │ Jev                  │    yes    │  calibrated  │ 70-500 ms │ ~$0.0001  │  the questions   │
   └──────────────────────┴───────────┴──────────────┴───────────┴───────────┴──────────────────┘

      Read it as a history, not a scoreboard.  Each row answered something the row
      above it could not, and paid for the answer somewhere else.

          Rules could not read.        Classifiers could not tell you how sure they were.
          LLMs could do both - and then the latency and the invoice showed up.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Jev does not replace the person in the fourth row.  It replaces the first pass that             ║
║  decides which items that person sees, and in what order.                                        ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Every row was a reasonable answer to the row above it. Walk them that way.

Regex and rules engines: instant, free, completely blind to meaning. We still run these, and for hard thresholds they remain the right tool.

Trained classifiers: they read something, but the number falling out of a softmax is not a probability you can trust as one, and every change means labels and a retrain.

LLM with JSON mode: what most teams reached for over the last two years. It works, and then you meet the cost per item and the retry loop for responses that are not quite JSON.

Then the bottom row. Do not oversell it - the interesting claim is the combination of columns, not any single one.

Land the callout hard, because it is the first thing compliance will ask. The analyst does not go away. What changes is what reaches their desk, and in what order.

---

<!-- ## Slide (Section: cost and speed) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 WHAT IT COSTS AND HOW FAST IT IS                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

          ┌───────────────┬──────────────────────────────────────────────────────────────┐
          │ input         │ $0.042 per million tokens                                    │
          ├───────────────┼──────────────────────────────────────────────────────────────┤
          │ output        │ free - there is nothing generated to charge for              │
          ├───────────────┼──────────────────────────────────────────────────────────────┤
          │ latency       │ 70 - 500 ms end to end, vendor-reported                      │
          ├───────────────┼──────────────────────────────────────────────────────────────┤
          │ type errors   │ 0% by construction - the shape cannot come back wrong        │
          ├───────────────┼──────────────────────────────────────────────────────────────┤
          │ accuracy      │ roughly the frontier band on TypeSafe's own workflow evals,  │
          │               │ and below the top tier on the harder ones                    │
          └───────────────┴──────────────────────────────────────────────────────────────┘

      A MEASURED EXAMPLE, FROM AN EARLY INDEPENDENT WRITE-UP
      ───────────────────────────────────────────────────────
          1,000 emails, seven questions on each, run in parallel

              Jev        ~6 seconds        ~9 cents
              an LLM     ~5 minutes        ~62 cents      for one of those questions

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  The price is not the headline.  The shape is:  you can now afford to ask a semantic             ║
║  question about every item, instead of sampling, or writing a rule and hoping.                   ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Give the numbers once and do not defend them past that. Pricing and latency are TypeSafe's own launch material. The email example is from an independent write-up, not from us.

The accuracy row is the one to be careful with. Jev is not more accurate than a frontier LLM. On TypeSafe's own benchmark it sits roughly level with the mid-tier models and below the best ones on harder workflows such as invoice processing. Anyone telling you it is smarter is reading the marketing rather than the table.

So put the emphasis in the callout. The change is not that each decision got cheaper. It is that a decision you previously could not afford to make on every item is now one you can. That is what opens up the next two slides.

---

<!-- ## Slide (Section: use case one) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                          USE CASE ONE  ·  TRANSACTION MONITORING TRIAGE                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      TODAY
      ─────
          rules engine fires   →   alert queue   →   an analyst reads every one

      The rules fire on thresholds and patterns.  They cannot read the payment
      narrative, so most of the queue is noise and the real ones wait behind it.

      WITH A DECISION MODEL IN THE MIDDLE
      ───────────────────────────────────
          rules engine fires   →   [ Jev reads it ]   →   ranked queue   →   analyst

              noul     does the stated purpose match the account's known activity?
              noul     does the narrative read as rehearsed or templated?
              score    strength of the evidence, 1 to 5
              choice   typology:  mule / structuring / third-party / none apparent

      Four questions, one call, one shared state, well under a second per alert.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  The analyst still makes the decision.  Jev decides what they read first.                        ║
║  Nothing on this slide is a report, a freeze, or any customer-facing outcome.                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Say in the first sentence that this is a design sketch and not a system we run, so nobody leaves thinking it is approved or built.

The problem is one everybody in a supervised firm recognises. Threshold rules produce a queue that is mostly false positives, and the cost is not compute, it is analyst hours - plus the genuine alert sitting at position four hundred.

Walk the four questions. Point out that they are small and atomic on purpose, which is how the model is meant to be used. You compose them in your own code, which also means the composition logic is yours: readable, reviewable, in version control.

Then the callout, which is the line that matters for this room. Ranking a queue is an operational decision about analyst attention. It is not a decision about a customer. The moment it becomes a freeze, a report or an offboarding you are somewhere else entirely, and the boundary slide covers that.

If someone asks whether we could run this: not on real alert data, and not without CTO approval. Two slides from now.

---

<!-- ## Slide (Section: use case two) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         USE CASE TWO  ·  LOAN AND CLAIM DOCUMENT INTAKE                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      A loan application arrives with six to twenty attachments.  Someone has to work
      out what each one is, and whether it can actually be used.

          choice   payslip / tax statement / ID / bank statement / policy / unknown
          noul     is it legible enough to process?
          noul     does it cover the period the application requires?
          score    completeness of the whole file, 1 to 5

      THEN YOUR OWN CODE ROUTES IT
      ────────────────────────────
          complete and legible     →   straight on into the existing flow
          something missing        →   a handler, with the reason already attached
          the model is unsure      →   a handler, always

      The same shape fits an insurance claim:  classify the loss report, check the
      documentation covers the claimed event, send the uncertain ones to an adjuster.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Jev sorts the paperwork.  It does not decide the loan, price the risk, or settle                ║
║  the claim.  That line is the entire compliance position on this slide.                          ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
The second use case is deliberately more boring than the first, because boring is where this belongs.

Document intake is real work that people in this company do by hand every day, and none of it is a credit judgment. Working out that a PDF is a payslip rather than a tax statement, that it is readable, and that it covers the right three months, is exactly the few-second judgment the model is built for.

Point at the third routing line. Low confidence goes to a person. That is not a nice-to-have, it is the design - and it is only available because the confidence number is supposed to be calibrated.

Then the callout, slowly. Classifying the attachments is intake. Deciding the loan is credit decisioning. Those are different regulatory objects and this deck does not blur them. If someone in the room proposes adding "and score the applicant" to that list of questions, that is the next slide, and the answer is not no - it is not without review.

---

<!-- ## Slide (Section: the limits) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    WHAT IS STILL JUST A CLAIM                                    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      THE BENCHMARKS ARE THE VENDOR'S OWN
          The workflows were built by TypeSafe's own capabilities team, and the
          reference answers come from averaging other models, not from human labels.
          That measures agreement with those models.  It does not measure correct.

      CALIBRATION IS ASSERTED, NOT SHOWN
          No reliability diagrams, no Brier scores, no published method behind RLCD.
          Their own guidance is to test it on your data and watch what happens.
          Everything useful about the confidence gate rests on this one claim.

      IT RETURNS A NUMBER, NEVER A REASON
          There is no rationale, because there is no text.  You cannot ask it why.

      SMALL CONTEXT, AND VERY NEW
          Tens of thousands of tokens, not millions.  Launched 15 September 2026, so
          nobody has a production track record with it yet, including us.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  None of this makes it unusable.  It makes it a thing you pilot on data you are                  ║
║  allowed to use, measure yourself, and keep away from customer outcomes.                         ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This slide is deliberate. This series puts caveats on the screen rather than in the footnotes, and a two-week-old model earns a full one.

The benchmark point is the one people miss. Ground truth generated by averaging two other models means the benchmark measures agreement with those models, not correctness. That is a real methodological limit and it is not hidden - it is in the write-ups.

Calibration matters most because it is load-bearing. The whole "escalate when unsure" pattern from the last two slides depends on those probabilities being honest, and right now there is no published evidence for it beyond the vendor saying so. If we pilot this, measuring calibration on our own data is the first thing we measure, not the last.

No rationale is what compliance will react to hardest. Let it sit for a second before moving on.

Then the callout. The conclusion is pilot, measure, and keep it away from customer outcomes - not avoid.

---

<!-- ## Slide (Section: the boundary) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  THE BOUNDARY, FOR THIS COMPANY                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      DATA
          No customer PII, and no credit, KYC or AML data, into a third-party decision
          API without CTO approval.  Both use cases above are sketches on synthetic
          data until that approval exists.

      THE HIGH-RISK LINE
          Credit decisioning, scoring and risk assessment are high-risk under the EU
          AI Act (2024/1689), Annex III point 5:  CTO and Compliance review before any
          such use, and no automated decision carrying a legal or financial effect on
          a customer.  Triage and intake sit on the near side of that line.
          Scoring an applicant does not.

      EXPLAINABILITY
          A model that returns no rationale cannot on its own satisfy an obligation to
          explain a decision.  Keep the reasoning in your own composition code.

      THIRD PARTY
          A new vendor reached over an API is an ICT third-party arrangement under
          DORA (EU 2022/2554).  Register and assessment, like any other.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  These are risk flags, not legal advice.  Compliance and Legal own the specifics.                ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Do not rush this slide and do not apologise for it. It is the same frame as deck 08, and it is the reason we get to have the conversation at all.

Data first, because it bites soonest. Everything shown today is a sketch. Nothing has run on real alert or application data, and nothing will without the approval.

The high-risk line is the important distinction in the whole talk. Ranking an analyst queue and classifying an attachment are operational. Scoring a person's creditworthiness is Annex III point 5. The two use cases were picked to sit clearly on the near side of that line - say that it was a design choice, not an accident.

Explainability deserves one extra sentence. What keeps this auditable is that the composition logic is your code: readable and in version control. The model contributes a number to it. That is a defensible position. The model deciding on its own is not.

Then the caveat, and mean it. We flag risks here. Compliance and Legal decide.

---

<!-- ## Slide (Section: closing) -->
```text
    ╔══════════════════════════════════════════════════════════════════════════════════════════╗
    ║                                                                                          ║
    ║                                                                                          ║
    ║                       A typed decision, not a paragraph about one.                       ║
    ║                                                                                          ║
    ║                         Use it where your code already branches.                         ║
    ║                                                                                          ║
    ║                   Keep the person where the decision has consequences.                   ║
    ║                                                                                          ║
    ║                                 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                                  ║
    ║                                                                                          ║
    ║                         Pilot it on data we are allowed to use.                          ║
    ║                            Measure the calibration ourselves.                            ║
    ║                                                                                          ║
    ║                                                                                          ║
    ╚══════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Close in three sentences and stop.

A typed decision, not a paragraph about one. Use it where your code already branches - that is the test for whether this is relevant to your service at all. And keep the person where the decision has consequences, which is the engineering answer and the compliance answer at the same time.

Then the two actions. If anyone wants to try it, the pilot runs on synthetic or internal non-customer data, and the first thing we measure is whether the confidence numbers are honest on our own material. Post the links in the channel as you finish.
