<!-- ## Slide (Section: cover) -->
<!-- .slide: class="ascii-tight" -->
```text
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║               █████╗  ██╗      ███╗   ███╗  ██████╗  ███████╗ ████████╗              ║
║              ██╔══██╗ ██║      ████╗ ████║ ██╔═══██╗ ██╔════╝ ╚══██╔══╝              ║
║              ███████║ ██║      ██╔████╔██║ ██║   ██║ ███████╗    ██║                 ║
║              ██╔══██║ ██║      ██║╚██╔╝██║ ██║   ██║ ╚════██║    ██║                 ║
║              ██║  ██║ ███████╗ ██║ ╚═╝ ██║ ╚██████╔╝ ███████║    ██║                 ║
║              ╚═╝  ╚═╝ ╚══════╝ ╚═╝     ╚═╝  ╚═════╝  ╚══════╝    ╚═╝                 ║
║                                                                                      ║
║          ██╗    ██╗  ██████╗  ██████╗  ████████╗ ██╗  ██╗     ██╗ ████████╗          ║
║          ██║    ██║ ██╔═══██╗ ██╔══██╗ ╚══██╔══╝ ██║  ██║     ██║ ╚══██╔══╝          ║
║          ██║ █╗ ██║ ██║   ██║ ██████╔╝    ██║    ███████║     ██║    ██║             ║
║          ██║███╗██║ ██║   ██║ ██╔══██╗    ██║    ██╔══██║     ██║    ██║             ║
║          ╚███╔███╔╝ ╚██████╔╝ ██║  ██║    ██║    ██║  ██║     ██║    ██║             ║
║           ╚══╝╚══╝   ╚═════╝  ╚═╝  ╚═╝    ╚═╝    ╚═╝  ╚═╝     ╚═╝    ╚═╝             ║
║                                                                                      ║
║                                                                                      ║
║                           the backlog nobody ever approved                           ║
║                                                                                      ║
║                 what cheap code generation just moved above the line                 ║
║                                                                                      ║
║                              AI Guild  ·  Show and Tell                              ║
║                                                                                      ║
║                                                                    September 2026    ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Twelve minutes. One idea, one method to steal, one warning.

Say the frame in a sentence: the rule for what to build never changed, the price did, so
the same rule now says yes to things it used to say no to.

---

<!-- ## Slide (Section: the short version) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                  THE SHORT VERSION                                   │
└──────────────────────────────────────────────────────────────────────────────────────┘

    You only ever built something if it saved more than it cost to build.
    Plenty of useful things sat just under that line.  So nobody built them.

    Writing code got much cheaper.  The line moved.
    Everything that was almost worth it is now worth it.

    Here is what is above the line, and one item worth stealing this week.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  THREE THINGS TO LEAVE WITH                                                          ║
║                                                                                      ║
║  1   The best of this new work is the work you delete afterwards.                    ║
║  2   Write the calculation twice, from the law, and let the two disagree.            ║
║  3   Writing code got cheap.  Keeping code did not.  Build what you can throw away.  ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Read the three rules once, without explaining them. The rest of the deck is the explanation.

If people leave with only these three, the session did its job.

---

<!-- ## Slide (Section: the line moved) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                    THE LINE MOVED                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘

    The rule never changed:  build it only if it saves more than it costs.
    The cost changed.  So the same rule now says yes to a different list.

    WORK                                  BEFORE      NOW         USED TO BE
    ───────────────────────────────────── ─────────── ─────────── ──────────────
    a fake UC you can break on demand     one week    an hour     not worth it
    50,000 fake customers                 two weeks   an hour     not worth it
    a second implementation to check      one week    an hour     never approved
    a fence around code nobody gets       a sprint    an hour     too scary
    a tool for three people in ops        a sprint    an hour     not a sprint
    rename one thing across 400 files     two weeks   an hour     next quarter

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  None of this was ever a bad idea.  It was a bad trade.  It is not any more.         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Do not defend the exact hours. They are order of magnitude, and the room will supply
its own numbers.

The point is the last line: these were never bad ideas, they were bad trades.

---

<!-- ## Slide (Section: write it twice - why tests fail) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                WRITE IT TWICE  ·  WHY YOUR OWN TESTS DO NOT SAVE YOU                 │
└──────────────────────────────────────────────────────────────────────────────────────┘

    You calculate effektiv ränta.  How do you know it is right?

                              ┌──────────────────────────┐
                              │       the law text       │
                              └─────────────┬────────────┘
                                            │
                              ┌─────────────┴────────────┐
                              │ your understanding of it │
                              └─────────────┬────────────┘
                                            │
                          ┌─────────────────┴─────────────────┐
                          ▼                                   ▼
                  ┌───────────────┐                   ┌───────────────┐
                  │   the code    │                   │   the test    │
                  └───────┬───────┘                   └───────┬───────┘
                          └─────────────────┬─────────────────┘
                                            ▼
                              ┌───────────────────────────┐
                              │      the test passes      │
                              └───────────────────────────┘

    One head.  One misunderstanding.  Two artefacts that agree with each other.
    A test written by the author of the code cannot catch what the author never
    understood in the first place.
```

Notes:
Ask the room how they know their interest calculation is correct, and wait for the answer.

Land the point that the test and the code share the same misunderstanding, because the same
person wrote both, ten minutes apart, from one reading of the law.

---

<!-- ## Slide (Section: write it twice - the method) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            WRITE IT TWICE  ·  THE METHOD                             │
└──────────────────────────────────────────────────────────────────────────────────────┘

    1   Take the production code.  Leave it alone.

    2   Write a second program that does the same calculation.
        From the law text.  Not from your code.  Do not look at your code.

    3   Generate 100,000 fake loans.  Amounts, terms, fees, rates, all varied.

    4   Run both on all 100,000.

    5   Compare every answer.

                 ┌──────────────────┐              ┌──────────────────┐
                 │ production code  │              │ second program   │
                 │ effektiv ränta   │              │ from the law     │
                 └────────┬─────────┘              └────────┬─────────┘
                          └────────────────┬────────────────┘
                                    100,000 loans
                                           ▼
                                  ┌────────────────┐
                                  │    compare     │
                                  └────────────────┘

    The second program never ships.  You delete it when you are done.
    Its only job is to disagree with the first one.
```

Notes:
Step 2 is the whole trick, and it is the step people skip. From the law text, not from the
code. If you read your own code first you have thrown the experiment away.

Say plainly that the second program is throwaway and never goes near production.

---

<!-- ## Slide (Section: write it twice - what falls out) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                          WRITE IT TWICE  ·  WHAT FALLS OUT                           │
└──────────────────────────────────────────────────────────────────────────────────────┘

    100,000 loans.  The two agree on 99,953.  They disagree on 47.

    Those 47 are the whole point.  One of the two programs is wrong, and it is
    almost always an edge nobody thought about:

        a fee charged on day one
        a term that is not a whole number of months
        a rate that moves mid-term
        a rounding rule applied at a different step

    WHY THIS IS NEW
    ───────────────
    Writing the same thing twice used to read as pure waste.  Nobody would approve
    it.  At an hour it is not a second implementation.  It is a test that happens
    to be written as a program.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  WORKS FOR ANYTHING WITH A RIGHT ANSWER                                              ║
║                                                                                      ║
║  interest  ·  amortisation  ·  fees  ·  tax  ·  payment plans                        ║
║  anything where being wrong means paying customers back later                        ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
The 47 is invented, but the shape is not. Ask if anyone has a calculation they would not
bet a refund letter on.

Close this section before moving on: this is the one item worth trying this week.

---

<!-- ## Slide (Section: the other eleven) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                   THE OTHER ELEVEN                                   │
└──────────────────────────────────────────────────────────────────────────────────────┘

    CONTROL THE THINGS YOU DO NOT CONTROL
     1   Fake UC, BankID, Kivra, banks, partners.  Same answers, your rules.  Now
         you can ask: what if UC takes 30 seconds?  what if BankID sends the
         callback twice?  what if the bank file is missing a field?
     2   Generated customers instead of a production copy.  50,000 in an hour,
         with a realistic share who stop paying.  The honest way is now the easy way.

    A FENCE AROUND CODE NOBODY UNDERSTANDS
     4   Throw 10,000 inputs at it, record every answer, save that as the test.
         You still do not understand it.  But now it screams if you change it.
         Replacing it?  Old and new on real traffic, only old answers customers,
         compare quietly, switch when they agree for two weeks.

    NEVER WORTH A SPRINT, WORTH AN AFTERNOON
     5   The three SQL queries someone pastes into Excel every Monday.
     6   Try it on paper first.  Defaults up 2 percent - what hits the queue?
     7   Framework upgrades, renames across 400 files, dead code, old flags.
     9   Build both screens and show five users, instead of holding the meeting.
    10   One tiny environment that reproduces exactly one customer's bug.
    11   A practice copy of the real flows, fake data, no consequences.
    12   A reader for the odd file a partner sends, instead of Excel by hand.

    RULES THAT CHECK THEMSELVES
     8   No new code writes a personnummer into a log.  Every table with customer
         data has a delete rule.  DORA evidence collected by the build, not
         screenshotted the week before the review.
```

Notes:
Do not read all eleven. Point at the four headings, then pick the two the room will
actually care about - item 1 and item 7.

Item 7 is the least exciting thing on the slide and probably the best payback. Say that.

---

<!-- ## Slide (Section: the part people miss) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                 THE PART PEOPLE MISS                                 │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Writing code got cheap.  Keeping code did not.

      ┌───────────────────────┐     ┌──────────────────────────────────────────┐
      │  WRITING              │     │  KEEPING                                 │
      │                       │     │                                          │
      │  before:  one week    │     │  understood when it breaks:   unchanged  │
      │  now:     one hour    │     │  updated when the world moves: unchanged │
      │                       │     │  a system you are responsible for: yes   │
      └───────────────────────┘     └──────────────────────────────────────────┘

    THE FAILURE MODE, WITH THE OBVIOUS EXAMPLE
    ─────────────────────────────────────────
    Your fake UC slowly drifts away from the real UC.  Nobody notices, because a
    fake has no users to complain.

        your tests            your product
        ──────────            ────────────
        green                 broken

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  That is worse than having no fake at all.  No fake means you know you are           ║
║  untested.  A stale fake means you believe you are tested.                           ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is the slide that keeps the deck honest. Everything you generate is still a system
you own.

The stale fake is the concrete version. Do not abstract it.

---

<!-- ## Slide (Section: build what you can delete) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            SO: BUILD WHAT YOU CAN DELETE                             │
└──────────────────────────────────────────────────────────────────────────────────────┘

    THREE SHAPES THAT STAY SAFE

      you can throw it away           the second program, the bug repro,
                                      the tool for three people
      a machine checks it for you     generated data, recorded-behaviour tests,
                                      the rules that fail the build
      it never touches a customer     fakes, simulations, the practice system

    AND THE SHAPE THAT DOES NOT FIT

      generating more production credit logic.  Nothing about it is throwaway,
      no machine checks it for you, and it touches every customer you have.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  TWO LINES TO SAY OUT LOUD                                                           ║
║                                                                                      ║
║  Simulation for planning is fine.  The moment it decides anything about an           ║
║  individual customer - a score, a limit, a price - it is high-risk AI under the      ║
║  EU AI Act, Annex III §5.  CTO and compliance sign-off before it goes anywhere       ║
║  near a customer.                                                                    ║
║                                                                                      ║
║  Generated data means generated.  A production copy in a test environment is         ║
║  still a GDPR problem, however good the intention behind it.                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Say the AI Act line once, flatly, and do not turn it into a compliance lecture. It is a
boundary on item 6, not a reason to avoid item 6.

Same for the GDPR line and item 2.

---

<!-- ## Slide (Section: close) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                 WHAT TO DO THIS WEEK                                 │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Pick one calculation where being wrong means paying money back.
    Effektiv ränta is the obvious candidate.

      1   Do not touch the production code.
      2   Write the second version from the law text.  One hour.
      3   Generate 100,000 loans.
      4   Run both.  Look only at the disagreements.

    If they agree everywhere, you spent an hour and bought confidence you did not
    have on Monday.

    If they disagree on 47, you found the thing that was going to cost you a
    refund letter and an incident report.

    Either way you delete the second program on Friday.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║     Build the things you can throw away.                                             ║
║     Build the things a machine can check for you.                                    ║
║     Build the things that never touch a customer.                                    ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
End on the one concrete action, not on the list of twelve.

If there is time, ask which calculation people would pick. That answer is the follow-up
session.
