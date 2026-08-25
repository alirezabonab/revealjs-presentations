<!-- ## Slide (Section: cover) -->
```text
╔═════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                                     ║
║             ██████╗    ██████╗     ██████╗     ██████╗   ███████╗   ███████╗   ███████╗             ║
║             ██╔══██╗   ██╔══██╗   ██╔═══██╗   ██╔════╝   ██╔════╝   ██╔════╝   ██╔════╝             ║
║             ██████╔╝   ██████╔╝   ██║   ██║   ██║        █████╗     ███████╗   ███████╗             ║
║             ██╔═══╝    ██╔══██╗   ██║   ██║   ██║        ██╔══╝     ╚════██║   ╚════██║             ║
║             ██║        ██║  ██║   ╚██████╔╝   ╚██████╗   ███████╗   ███████║   ███████║             ║
║             ╚═╝        ╚═╝  ╚═╝    ╚═════╝     ╚═════╝   ╚══════╝   ╚══════╝   ╚══════╝             ║
║                                                                                                     ║
║        ███████╗   ███████╗   ███████╗   ██████╗    ██████╗     █████╗     ██████╗   ██╗  ██╗        ║
║        ██╔════╝   ██╔════╝   ██╔════╝   ██╔══██╗   ██╔══██╗   ██╔══██╗   ██╔════╝   ██║ ██╔╝        ║
║        █████╗     █████╗     █████╗     ██║  ██║   ██████╔╝   ███████║   ██║        █████╔╝         ║
║        ██╔══╝     ██╔══╝     ██╔══╝     ██║  ██║   ██╔══██╗   ██╔══██║   ██║        ██╔═██╗         ║
║        ██║        ███████╗   ███████╗   ██████╔╝   ██████╔╝   ██║  ██║   ╚██████╗   ██║  ██╗        ║
║        ╚═╝        ╚══════╝   ╚══════╝   ╚═════╝    ╚═════╝    ╚═╝  ╚═╝    ╚═════╝   ╚═╝  ╚═╝        ║
║                                                                                                     ║
║                                                                                                     ║
║                                                                                  August 2026        ║
║                                                                                                     ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Set the frame in one sentence before anything else: the process is a strong foundation, this deck is the feedback on it, and the goal today is agreement on what to change.

Say who this is for and what it is not. It is a review of two documents - the process overview and the Jira artifact proposal - not a rewrite of either. Nothing here questions the effort that went in; most of the feedback is about making the same model hold under pressure.

---

<!-- ## Slide (Section: verdict) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                        THE SHORT VERSION                                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      The process is a strong foundation.

      It separates product intent from delivery work.
      It gives every artifact a clear home.
      It makes review, QA, UAT and deploy visible instead of hidden.
      It treats loopbacks as normal paths, not as failures.
      It says where discovery, UX and design start and stop.


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  THREE THINGS TO FIX                                                                             ║
║                                                                                                  ║
║  1   It reads as a straight line.  Product work is not one.                                      ║
║  2   It never says what unit of work flows through it.                                           ║
║  3   Compliance fades exactly where the regulated artifacts appear.                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Lead with the assessment, not the critique, because the room needs to know the foundation is not in question. Five real strengths, listed on the slide - and the last one matters most: very few process documents say where a phase ends, and this one does.

Then name the three weaknesses and stop. Do not defend them yet; the next three sections do that. Say plainly that everything else in the deck is detail underneath these three.

---

<!-- ## Slide (Section: section one) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║               SECTION ONE  -  WHAT ALREADY WORKS               ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: keep these) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            KEEP THESE                                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      1   ARTIFACTS HAVE SEPARATE HOMES
          spec in Confluence, design in Figma, work in Jira

      2   THE JIRA HIERARCHY IS SIMPLE
          Initiative  ─►  Epic  ─►  Story / Task / Bug  ─►  Sub-task

      3   DELIVERY GATES ARE VISIBLE
          review, QA, UAT and deploy are not buried inside one in-progress status

      4   BOUNDARIES AND LOOPBACKS ARE NAMED
          discovery, UX and design have real exit conditions, and going back is a path

      5   THE NON-FUNCTIONAL MODEL IS THE CLEAREST THINKING IN THE PROPOSAL
          the standard is the requirement, the Jira item is the work it causes


      ════════════════════════════════════════════════════════════════════════════════════════
      None of this needs changing. The rest of the deck builds on it.
```

Notes:
Spend real time here. A review that opens with problems gets defended; one that first says what is already right gets heard.

Two are worth pausing on. Number three - separating review, QA, UAT and deploy - is what makes quality decisions visible at all; most teams hide them inside one status. Number five is the strongest idea in either document: a non-functional requirement is not a ticket, it is a standard, and the tickets are what the standard causes. That framing is correct and the deck should keep it word for word. It only needs verification rules added, which comes later.

---

<!-- ## Slide (Section: artifact split) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 ONE PLACE FOR EACH KIND OF TRUTH                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


            ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
            │     CONFLUENCE       │      │        FIGMA         │      │        JIRA          │
            ├──────────────────────┤      ├──────────────────────┤      ├──────────────────────┤
            │  what must be true   │      │  what it looks like  │      │  who is doing what   │
            │                      │      │                      │      │                      │
            │  scope boundaries    │      │  wireframes          │      │  planned work        │
            │  business rules      │      │  mockups             │      │  ownership           │
            │  flows and states    │      │  prototypes          │      │  status · blockers   │
            │  assumptions         │      │  component states    │      │  acceptance criteria │
            │  open questions      │      │  responsive states   │      │  links to the above  │
            └──────────────────────┘      └──────────────────────┘      └──────────────────────┘


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  A requirement is what must be true.                                                             ║
║  A Jira item is what someone is doing about it.                                                  ║
║  Connected on purpose - never collapsed into the same object.                                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is the heart of the Jira proposal and it is right. Three tools, three questions: what must be true, what it looks like, who is doing what.

The failure it prevents is familiar to everyone in the room: the ticket that slowly becomes the requirement document, then goes stale, then gets contradicted by a comment thread. Say the principle out loud because it is the sentence people will remember - connected on purpose, never collapsed into the same object.

If someone asks about a dedicated Requirement issue type, hold it. It is answered in the compliance section.

---

<!-- ## Slide (Section: section two) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║                 SECTION TWO  -  THE THREE GAPS                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: gap one) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             GAP ONE  -  IT READS AS A STRAIGHT LINE                              │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      HOW THE ELEVEN PHASES READ
      ──────────────────────────
      Idea ─► Disc ─► Scope ─► Reqs ─► UX ─► Design ─► Build ─► Review ─► QA ─► UAT ─► Deploy


      HOW THE WORK ACTUALLY BEHAVES
      ─────────────────────────────

        REQUIREMENTS  ──►  UX WIREFRAMES  ──►  FEASIBILITY  ──┐
            ▲                                                 │
            └──  new information changes the requirement  ───◄┘

        wireframing is a requirements-discovery technique,
        so the loop fires on nearly every non-trivial feature


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Keep the checkpoints. Drop the idea that a phase finishes once.                                 ║
║  Approve requirements and wireframes together, as one gate.                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
The deck already lists "wireframes expose a requirement or UX gap" as its very first loopback. That is an admission, not an edge case: wireframing IS how you discover requirements. So sequencing the two strictly guarantees the loopback fires on almost every feature of any size, and each firing looks like a process failure when it is actually the process working.

The fix is small and does not lose control. Let low-fidelity UX exploration run inside the requirements phase - it already fits the existing rule about bringing a draft pack to the workshop. Make the approvals sequential rather than the work. The gate becomes "requirements and wireframes approved together", which is what genuinely needs to be true before design and skeleton work start.

Be clear about what is not being proposed: not fewer checkpoints, and not less rigour. The same decisions, made once, on both artifacts at the same time.

---

<!-- ## Slide (Section: gap two) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                          GAP TWO  -  NOTHING SAYS WHAT FLOWS THROUGH IT                          │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      The phase model never states its unit of work.
      So teams read the diagram literally.


          ┌─────────────────────────┐        ┌─────────────────────────┐
          │  WITHOUT THE RULE       │        │  WITH THE RULE          │
          ├─────────────────────────┤        ├─────────────────────────┤
          │  the whole feature is   │        │  the Epic moves through │
          │  pushed through all     │        │  the phases             │
          │  eleven phases as one   │        │                         │
          │  batch                  │        │  Stories flow through   │
          │                         │        │  build, review and QA   │
          │  long cycle time        │        │  continuously           │
          │  late feedback          │        │                         │
          │  every loopback is      │        │  small batches, cheap   │
          │  expensive              │        │  loopbacks              │
          └─────────────────────────┘        └─────────────────────────┘


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  The phases apply at Epic level.                                                                 ║
║  Stories inside an Epic flow through build, review and QA continuously.                          ║
║  One sentence. Without it the process becomes stage-gate with agile words.                       ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is the cheapest fix in the deck and the one with the largest effect. One missing sentence.

Without it, a reasonable person looks at eleven boxes in a row and batches the whole feature through them. Cycle times grow, feedback arrives late, and the most expensive loopback in the process - UAT rejecting behaviour - lands on a large batch instead of a small one.

Name the level and the problem disappears: phases apply to the Epic, Stories flow continuously inside delivery. Say the failure mode plainly, because it is what the room will recognise: stage-gate waterfall wearing agile vocabulary.

---

<!-- ## Slide (Section: gap three) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                       GAP THREE  -  COMPLIANCE FADES WHERE IT MATTERS MOST                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      COMPLIANCE AND LEGAL INVOLVEMENT ACROSS THE ELEVEN PHASES
      ─────────────────────────────────────────────────────────

        Idea    Disc   Scope    Reqs     UX    Design  Build    Rev      QA     UAT    Deploy
         In      In     LEAD     In      I       I       -       -       -       I       -
                          ▲                                                       ▲       ▲

               strong early hook                          the regulated artifacts appear here
               escalate during scoping                    customer-facing wording · pricing
                                                          automated decisions · production changes


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  The early hook is right. It just has to hold to the last gate.                                  ║
║  For a kreditmarknadsbolag under FI supervision, several late outputs                            ║
║  currently marked as extra should be required.                                                   ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Walk the strip left to right and let the shape make the argument. Compliance leads scoping - that is genuinely good, and better than most processes manage. Then it thins to Informed, and by build, review and QA it is gone.

Now point at the right-hand end. Customer-facing wording, pricing presentation, automated decisions and production changes are exactly the artifacts a regulator cares about, and they do not exist during scoping. They come into being at UAT and deploy - precisely where the involvement has faded to a single "I".

Be careful with the framing. This is not "compliance was forgotten". The hook is in the right place. The problem is that it stops early, and the section four slide says what to add.

---

<!-- ## Slide (Section: section three) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║           SECTION THREE  -  THE REST OF THE FEEDBACK           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: gates) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              THE GATES ARE NOT DEFINED THE SAME WAY                              │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

    ┌────────────────────────────────────┬────────────────┬────────────────┬──────────────────┐
    │                                    │ EXIT CONDITION │  WHO APPROVES  │  WHERE RECORDED  │
    ├────────────────────────────────────┼────────────────┼────────────────┼──────────────────┤
    │  DISCOVERY  ·  UX  ·  DESIGN       │  yes           │  not stated    │  not stated      │
    ├────────────────────────────────────┼────────────────┼────────────────┼──────────────────┤
    │  REQS · REVIEW · QA · UAT · DEPLOY │  outputs only  │  not stated    │  not stated      │
    └────────────────────────────────────┴────────────────┴────────────────┴──────────────────┘

      Only the first column differs. The approver and the record are missing everywhere.

      ┌──────────────────────────────────────────────────────────────────────────────────────┐
      │                             WHAT EVERY GATE SHOULD STATE                             │
      ├──────────────────────────────────────────────────────────────────────────────────────┤
      │  DECISION     what is being decided here                                             │
      │  EVIDENCE     the minimum needed to decide it                                        │
      │  OWNER        one accountable person, not a group                                    │
      │  RECORD       where the decision lands - a Jira transition or a page status          │
      │  RISK         which unresolved risks are acceptable                                  │
      │  LOOPBACK     what sends the work back                                               │
      └──────────────────────────────────────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  1   Business owner APPROVES requirements and wireframes - not just involved                     ║
║  2   Output of phase N is the entry condition for N+1 - name that chain                          ║
║      Definition of Ready and Done, and the two documents become one model                        ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
The table is the finding, so read it as a table. Look at the first column: the early boundaries were given real exit conditions, the delivery gates were given outputs and nothing else. That asymmetry is the headline.

Then look at the last two columns, because this is the part that is easy to miss. Neither group names an approver, and neither says where the decision is recorded. The asymmetry is real, but the deeper gap is shared - no checkpoint in the whole process says who decides or where the decision lands.

The card is the fix, and it is deliberately a template rather than a list of principles. Six fields, fillable in an afternoon per gate. A gate that cannot answer them is a gate teams produce artifacts for and then ignore.

The two additions at the bottom carry real weight. On business-owner approval: approval, not involvement. The most expensive loopback in this process is UAT rejecting behaviour, and the cheapest prevention available is a business signature before build starts - so pay for it early. On naming the chain: the per-phase outputs already form a Definition of Ready sequence, because the output of phase N is exactly the entry condition for phase N+1. Nobody has to invent anything. Naming it is what turns the process deck and the Jira proposal into one operating model instead of two documents teams read separately.

---

<!-- ## Slide (Section: ownership) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                           WHO OWNS THE PHASE?  TWO TABLES, TWO ANSWERS                           │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


          ┌────────────────┬──────────────────────────────┬──────────────────────────────┐
          │                │    THE INVOLVEMENT TABLE     │        THE RACI TABLE        │
          ├────────────────┼──────────────────────────────┼──────────────────────────────┤
          │  REQUIREMENTS  │  PM, Tech lead and Senior    │  PM is Accountable           │
          │                │  eng are all LEAD            │  the other two Responsible   │
          ├────────────────┼──────────────────────────────┼──────────────────────────────┤
          │  DESIGN        │  UI design and Tech lead     │  Tech lead is Accountable    │
          │                │  are both LEAD               │  UI design is Responsible    │
          └────────────────┴──────────────────────────────┴──────────────────────────────┘

      LEAD means Accountable in one table and Responsible in the other.
      Same phase, two answers - teams follow whichever table they opened.

      Lead  ·  Required  ·  Responsible  ·  Accountable    -    four words, no shared definition


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  ONE accountable owner per phase - the others responsible or consulted.                          ║
║  One set of words, one definition each, used in both tables.                                     ║
║                                                                                                  ║
║  And the Design row may be hiding three decisions, not one approval:                             ║
║  product quality   ·   design quality   ·   technical delivery                                   ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Read the table across, one row at a time - the point is the contradiction, not the roles.

Requirements: the involvement table makes PM, tech lead and senior engineer all Lead. The RACI makes the PM accountable and the other two responsible. Design: the involvement table makes UI design and the tech lead both Lead, while the RACI makes the tech lead accountable and UI design responsible.

Now the line underneath, which is the actual finding: LEAD means Accountable in one table and Responsible in the other. That is why the two documents cannot both be the operating rule - a team following the involvement table sees shared ownership, a team following the RACI sees a single owner. Whichever one they opened is the one they will follow.

The fix is the first line of the box: one accountable owner per phase, everyone else responsible or consulted, and one set of words with one definition each.

The Design row is worth discussing rather than just fixing. Two Leads in the involvement table and a split between UI design and the tech lead in the RACI may not be sloppiness - it may be a sign that one Design approval is hiding three decisions. Ask the room directly: who signs off product quality, who signs off design quality, who signs off technical delivery? If the answer is three different people, the process should say so instead of forcing one combined approval.

---

<!-- ## Slide (Section: two rules) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       TWO RULES TO REWRITE                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

    ┌───────────────────────────────────────┐        ┌───────────────────────────────────────┐
    │  DESIGN AND UX                        │        │  QUALITY                              │
    ├───────────────────────────────────────┤        ├───────────────────────────────────────┤
    │  as written                           │        │  as written                           │
    │  "Design should never alter UX."      │        │  QA starts after implementation.      │
    │                                       │        │                                       │
    │  what it costs                        │        │  what it costs                        │
    │  visual and component design is where │        │  the formal QA phase discovers the    │
    │  usability problems surface. A rule   │        │  basic test approach for the first    │
    │  that forbids learning does not stop  │        │  time, at the most expensive moment.  │
    │  the learning - it hides it.          │        │                                       │
    │                                       │        │  use instead                          │
    │  use instead                          │        │  QA contributes from requirements     │
    │  Design must not SILENTLY change      │        │  onward: risks, test scenarios,       │
    │  approved UX. A material change to    │        │  unclear criteria, data needs,        │
    │  flow, behaviour or interaction       │        │  regression concerns.                 │
    │  returns for UX and requirement       │        │  Automated tests belong to build.     │
    │  review.                              │        │  The QA phase confirms quality.       │
    └───────────────────────────────────────┘        └───────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Prevent uncontrolled change. Do not prevent useful learning.                                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Both rules come from a good instinct - protect the approved experience, keep quality honest - and both are drawn one notch too tight.

On design: the word that fixes it is "silently". Design cannot quietly redraw an approved flow, but when it finds a real usability problem the process should have somewhere for that to go. As written, the rule tells a designer their discovery is out of order, so it turns up later as a surprise instead.

On QA: everything QA is good at is cheapest early. Risks, missing acceptance criteria, test data, regression exposure - all of that is nearly free during requirements and expensive after build. Leave the formal QA phase in place, but change what it is for: it confirms quality and remaining risk, it does not invent the test approach.

---

<!-- ## Slide (Section: timing) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    FINALIZE LATE, START SMALL                                    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      WHEN TO FINALIZE THE BACKLOG
      ────────────────────────────
      as written    sprint-ready Stories and Tasks during requirements,
                    before the wireframes exist

      instead       draft the backlog during requirements
                    finalize the delivery slices once the important UX
                    decisions and technical risks are understood

                    full context stays in the spec
                    item-specific acceptance criteria go on the Jira item

      WHAT MAY START BEFORE DESIGN APPROVAL
      ─────────────────────────────────────
      low regret    contracts · scaffolding · spikes · data models
                    integration setup · reusable structure

      wait          final interface behaviour · visual implementation

      undefined     what "skeleton done" means
                    how skeleton work is represented in Jira

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Parallel work buys time only when the work is cheap to throw away.                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Both halves are about the same mistake: committing detail before the information that shapes it exists.

The backlog half is straightforward. Writing sprint-ready Stories before wireframes exist produces detail that gets rewritten, and rework in a backlog is invisible - nobody logs it, so nobody notices the cost. Draft early, finalize after the UX and technical unknowns close.

The skeleton half needs the distinction said out loud, because "start early to save time" is true right up until it isn't. Contracts, scaffolding, spikes, data models and integration setup are low regret - if the design changes, you keep them. Final interface behaviour and visual implementation are high regret. Only the first group starts early.

Then flag the two definitions that are simply missing, and ask for them today: what "skeleton done" means, and how skeleton work appears in Jira. Presumably Tasks under the Epic - the deck should just say so.

---

<!-- ## Slide (Section: linking) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                            THE ONE QUESTION THAT SHOULD NOT STAY OPEN                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      The proposal names its own biggest risk: traceability becomes link-based,
      and link-based traceability needs discipline.
      Then it leaves the minimum linking rules as a discussion question.

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  MANDATORY MINIMUM                                                                               ║
║                                                                                                  ║
║  1   every Epic links to its Confluence spec                                                     ║
║  2   no Story enters a sprint without a link to the spec section it                              ║
║      implements, and to the Figma frame where there is UI                                        ║
║  3   every spec links back to its Epic                                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝

      ALSO DEFINE
      ───────────
      the owner of each artifact          ·   the canonical source per information type
      how approval is recorded            ·   how material change is recorded
      which source wins on conflict       ·   when specs and designs are archived

      ════════════════════════════════════════════════════════════════════════════════════════
      Put it in the Definition of Ready, so it is checkable at sprint planning.
```

Notes:
This is the one open question in the Jira proposal that should be closed in this meeting rather than deferred.

The logic is simple. The proposal chooses link-based traceability over a heavier issue type - the right call - and then correctly identifies discipline as the risk that choice creates. Leaving the linking rules undefined means accepting the risk without the mitigation.

Three rules are enough, and they are on the slide. What makes them work is where they live: in the Definition of Ready. A rule that is checked at sprint planning holds; a rule in a wiki page does not.

The governance list underneath is less urgent but not optional. The conflict rule especially - when the spec and the Figma frame disagree, somebody has to know which one wins, and today nobody does.

---

<!-- ## Slide (Section: nfr) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                   SPEED, SECURITY, AUDIT TRAILS  -  WHO CHECKS THEY HAPPENED?                    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

      The non-functional requirements - the ones that are not features:
      speed  ·  uptime  ·  security  ·  accessibility  ·  logging  ·  audit trail

      ALREADY RIGHT: WHERE THEY LIVE
      ──────────────────────────────
      a shared standard     the reusable ones, written once for everyone
      the Epic spec         the ones that apply to this Epic only
      Jira                  only the work those two cause - never the requirement

      MISSING: WHETHER THEY HAPPENED
      ──────────────────────────────
      take one standard:   every applicant state change keeps an audit trail

        ┌───────────────┬──────────────────────┬───────────────────┬─────────────────────────┐
        │  who owns it  │  what is the target  │  who verifies it  │  where is the evidence  │
        ├───────────────┼──────────────────────┼───────────────────┼─────────────────────────┤
        │  not stated   │  not stated          │  not stated       │  not stated             │
        └───────────────┴──────────────────────┴───────────────────┴─────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Answer those four for every non-functional requirement that applies:                            ║
║  an owner  ·  a target or a rule  ·  a verification  ·  evidence before release                  ║
║                                                                                                  ║
║  And make every Epic name which standards apply to it.                                           ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Say what this slide is about before anything else, because the term hides it: this is about speed, uptime, security, accessibility, logging and audit trails. Requirements that are real, that customers and regulators notice, and that no feature ticket owns.

The middle block is praise, and it is genuine. The proposal files these correctly: reusable ones become a shared standard written once, Epic-specific ones go in that Epic's spec, and Jira holds only the work those two cause - never the requirement itself. That is the clearest thinking in either document and it should not change.

The bottom block is the gap, and the example is the fastest way to land it. Take a real standard - every applicant state change keeps an audit trail - and ask four questions of it. Who owns it. What is the target. Who verifies it. Where is the evidence. Today, all four are unanswered, which means the standard exists and nothing proves it was met.

So the ask is small: answer those four for every non-functional requirement that applies, and make every Epic name which standards apply to it. Without that last step the standards library is documentation nobody is accountable for, and the four questions never get asked at all.

---

<!-- ## Slide (Section: measure) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              DELIVERY DONE IS NOT OUTCOME ACHIEVED                               │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      The process starts with an initiative like "improve re-application conversion".
      It ends with a technical post-release check.
      Nothing ever asks whether conversion improved.


      ┌────────────────┐   ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
      │                │   │                │   │    CONTINUE    │   │      NEXT      │
      │     DEPLOY     │──►│    MEASURE     │──►│     ADJUST     │──►│   DISCOVERY    │
      │                │   │                │   │    OR STOP     │   │     CYCLE      │
      └────────────────┘   └────────────────┘   └────────────────┘   └────────────────┘


╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  DELIVERY DONE       live, verified and operationally supported                                  ║
║  OUTCOME ACHIEVED    the agreed customer or business result is measured                          ║
║                                                                                                  ║
║  Make the success measure a required output of idea intake, not an extra.                        ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
The process is currently a loop that does not close. It opens with a business outcome and ends with a technical verification, and the two are never compared.

The two definitions of done are the practical part. Delivery done is what the current process produces. Outcome achieved is a separate question with a separate answer date - often weeks later - and it needs a named owner or it will not happen.

One small change carries most of the value: move the success measure from "extra" to required at idea intake. If nobody can state at intake how we will know this worked, that is worth discovering before the eleven phases start, not after.

---

<!-- ## Slide (Section: smaller) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    THREE SMALLER CORRECTIONS                                     │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      1   EPIC CARRIES THREE MEANINGS TODAY
          business outcome  ·  feature area  ·  release-level scope

          use Epic for one coherent product outcome or capability
          use Initiative for broader strategic outcomes
          track releases separately, not as Epic containers


      2   THE TWO DOCUMENTS DISAGREE ABOUT INITIATIVE
          the process deck never mentions it
          the Jira proposal has it as the optional top layer

          pick one answer and make both documents say it


      3   THE ARTIFACT TABLE STARTS TOO LATE
          it starts at "business objective"
          idea intake and discovery already produce artifacts

          problem framing and the risk list have no named home - give them one


      ════════════════════════════════════════════════════════════════════════════════════════
      Every phase output should have an address.
```

Notes:
Three quick ones. None is controversial, all three cause confusion if left alone.

Epic is the one that actually hurts. If Epic can mean an outcome, a feature area or a release, then Epic-level reporting means nothing - two teams will report different things under the same word. Pick the outcome definition, use Initiative above it, and keep releases out of the hierarchy entirely.

The Initiative mismatch and the artifact table gap are editorial, but worth fixing while the documents are open. If a phase produces something and the table has no row for it, the artifact quietly ends up in whichever tool the author happened to have open.

---

<!-- ## Slide (Section: section four) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║                SECTION FOUR  -  REGULATED FLOWS                ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: compliance) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                            REGULATED FLOWS: WHAT STOPS BEING OPTIONAL                            │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

    ┌───────────┬────────────────────────────────────────────────────────┬──────────────────────┐
    │   WHERE   │                 WHAT BECOMES REQUIRED                  │        TODAY         │
    ├───────────┼────────────────────────────────────────────────────────┼──────────────────────┤
    │  UAT      │  compliance sign-off on customer-facing wording,       │  listed as an extra  │
    │           │  pre-contractual information and pricing               │                      │
    │           │  konsumentkreditlagen (2010:1846) · LFD (2018:1219)    │                      │
    ├───────────┼────────────────────────────────────────────────────────┼──────────────────────┤
    │  DEPLOY   │  a change record carrying the change approval          │  not a named output  │
    │           │  DORA (EU 2022/2554) - documented ICT change management│                      │
    ├───────────┼────────────────────────────────────────────────────────┼──────────────────────┤
    │  BEFORE   │  CTO and compliance review, for credit decisioning,    │  one buried sentence │
    │  BUILD    │  scoring, risk assessment, and KYC or AML work         │                      │
    │           │  EU AI Act (2024/1689) Annex III point 5               │                      │
    │           │  penningtvättslagen (2017:630)                         │                      │
    └───────────┴────────────────────────────────────────────────────────┴──────────────────────┘

     AND ONE DECISION TO STOP DEFERRING
     ──────────────────────────────────
     the proposal waits until compliance needs are "explicitly confirmed"
     instead: map which product areas carry audit obligations, then decide per area
     the middle path: mandatory links plus Confluence approval and versioning

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  These are risk flags, not legal advice.                                                         ║
║  Compliance and legal sign off the specifics.                                                    ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Frame this as making an existing intention enforceable, not as adding process. The deck already escalates to compliance and legal during scoping for regulated, data, contract and automated-decision work. Everything here is that same intention, applied at the points where the artifacts actually exist.

Read the table by its last column first, because that is the finding: an extra, not a named output, one buried sentence. Three places where a regulator would expect a control and the process currently has an intention.

Then take the rows. UAT: compliance sign-off on customer-facing wording, pre-contractual information and pricing becomes a required gate output for flows under konsumentkreditlagen or LFD - this already happens informally, so the change is mostly making it a named output that leaves a trace. Deploy: a change record carrying the change approval, which is largely writing down what we already do in a form that survives an audit question. Before build: CTO and compliance review for anything touching credit decisioning, scoring, risk assessment, KYC or AML - and note the timing, before build, not a note in a specification.

Be firmest on that third row. Credit decisioning and scoring likely qualify as high-risk AI, and the control has to sit before the work starts, because after build the review has nothing left to influence.

The decision block is a judgement call, so present it as one. The proposal defers a dedicated Requirement issue type until compliance needs are explicitly confirmed. The recommendation is to map the obligations per product area now and decide deliberately, rather than discovering the need during an FI inspection. And offer the middle path, because it usually wins: the mandatory linking rules plus Confluence page approval and versioning give most of the audit trail without a new issue type and without a second planning layer.

Close with the caveat and mean it - these are risk flags, and compliance and legal own the specifics.

---

<!-- ## Slide (Section: section five) -->
```text
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║            SECTION FIVE  -  THE MODEL WE RECOMMEND             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: six stages) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             ORGANIZE AROUND LEARNING, THEN DELIVERY                              │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
   │           │   │           │   │           │   │           │   │           │   │           │
   │  EXPLORE  │──►│   SHAPE   │──►│  COMMIT   │──►│  DELIVER  │──►│  ACCEPT   │──►│  MEASURE  │
   │           │   │  iterate  │   │  the one  │   │           │   │    AND    │   │    AND    │
   │           │   │   here    │   │   gate    │   │           │   │  RELEASE  │   │   LEARN   │
   └───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘
         ▲                                                                               │
         └──────────────────────  evidence feeds the next cycle  ───────────────────────◄┘

╔══════════════════════════════════════════════════════════════════════════════════════════════════╗
║  Six stages instead of eleven steps in a row.                                                    ║
║  The eleven phases stay - they become the work inside the stages.                                ║
║  Shaping iterates. Delivery is committed. Learning closes the loop.                              ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Say clearly what this is not: it is not a replacement for the eleven phases, and nothing already written gets thrown away. The eleven phases stay as the detailed work. This is the shape they sit inside.

The reason to add it is that the eleven-box diagram teaches the wrong instinct even when the text underneath is right. Six stages teach the correct one: one part of the process is meant to iterate, one part is meant to be committed, and one part is meant to close the loop.

Point at the two arrows, because they carry the argument. The loop inside Shape is where requirements, UX and feasibility keep informing each other until the risks are understood. The long arrow from Measure back into discovery is the part that does not exist at all today.

---

<!-- ## Slide (Section: stage duties) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       WHAT EACH STAGE OWNS                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


     EXPLORE           idea intake  ·  discovery
                       problem, target user, evidence, urgency, risks, intended outcome
                       stop or reshape weak ideas before solution work starts

     SHAPE             scoping  ·  requirements  ·  UX wireframes  ·  feasibility
                       scope, UX, technical approach and NFR applicability, together
                       iterate until the main risks and unknowns are understood

     COMMIT            the joint gate
                       approve outcome, scope boundary, UX direction, technical
                       approach, success measures and delivery plan
                       finalize the first delivery slices and assign ownership

     DELIVER           design  ·  build  ·  code review
                       continuous review and automated testing
                       explicit loopbacks when new information changes the scope

     ACCEPT AND        QA  ·  UAT  ·  deploy  ·  post-release verification
     RELEASE           business acceptance, operational readiness, wording approval
                       record unresolved risks, follow-up work and the change record

     MEASURE AND       compare the result with the Epic success measure
     LEARN             continue, adjust or stop on evidence
                       feed the learning into the next discovery cycle
```

Notes:
This is the mapping slide - it exists so nobody has to wonder where their current phase went. Read down the left column and let people find their own work.

Two rows deserve a pause. Commit is new as a named moment: today the process has approvals scattered across phases, and this makes the point of no return explicit - one gate where outcome, scope, UX, technical approach, success measures and plan are approved together. Measure and learn is the row that does not exist today at all.

Note also that Accept and release now carries wording approval and the change record. That is where the compliance additions from the previous section actually live.

---

<!-- ## Slide (Section: priorities) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 THE SIX CHANGES THAT MATTER MOST                                 │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘


      1   NAME THE UNIT OF FLOW
          phases apply at Epic level  ·  Stories flow continuously inside delivery

      2   MAKE SHAPING A LOOP WITH ONE JOINT GATE
          requirements, UX and feasibility approved together, not in sequence

      3   ADD MEASURE AND LEARN AFTER DEPLOY
          with the success measure required at idea intake

      4   DEFINE THE DELIVERY GATES SYMMETRICALLY
          one accountable owner  ·  minimum evidence  ·  a recorded decision
          including business-owner sign-off at requirements and wireframes

      5   PROMOTE THE LINKING RULES TO DEFINITION OF READY
          Confluence, Figma and Jira stay connected by rule, not by habit

      6   MAKE COMPLIANCE REQUIRED FOR REGULATED FLOWS
          wording approval at UAT  ·  change record at deploy
          a visible high-risk rule for credit decisioning and KYC or AML work


      ════════════════════════════════════════════════════════════════════════════════════════
      Four are single sentences added to the existing deck. Two need a decision.
```

Notes:
If the room only agrees on one slide, make it this one. Take the six in order and do not rush.

Be honest about the effort, because it is the question a decision-maker will ask. One, two, three and five are essentially sentences added to documents that already exist - a day of editing, not a project. Four and six need actual decisions: who is accountable at each gate, and which flows count as regulated. Those are the two to book time for.

Then ask for what the meeting is actually for: agreement on these six, and owners for four and six.

---

<!-- ## Slide (Section: closing) -->
```text
        ╔══════════════════════════════════════════════════════════════════════════════════════════╗
        ║                                                                                          ║
        ║                                                                                          ║
        ║                                                                                          ║
        ║                            The process is a good foundation.                             ║
        ║                                                                                          ║
        ║                              It needs a named unit of flow,                              ║
        ║                        a shaping loop instead of a straight line,                        ║
        ║                       and compliance that holds to the last gate.                        ║
        ║                                                                                          ║
        ║                                 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                                  ║
        ║                                                                                          ║
        ║                                  Keep every checkpoint.                                  ║
        ║                        Lose the idea that a phase finishes once.                         ║
        ║                                                                                          ║
        ║                                                                                          ║
        ║                                                                                          ║
        ╚══════════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Land three sentences and stop talking.

The foundation is good - say it again, because it is true and it is what makes the feedback usable. Three things are missing: what flows through the process, a shaping loop where the straight line is today, and compliance that holds all the way to the last gate.

Then the closing line, which is the whole review compressed: keep every checkpoint, lose the idea that a phase finishes once. Nothing in this deck asks for less rigour. It asks for the same rigour arranged around how the work actually behaves.
