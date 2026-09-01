<!-- ## Slide (Section: cover) -->
<!-- .slide: class="ascii-tight" -->
```text
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║         ██████╗  ██████╗  ███╗   ███╗ ██████╗   █████╗  ███╗   ██╗ ██╗   ██╗         ║
║        ██╔════╝ ██╔═══██╗ ████╗ ████║ ██╔══██╗ ██╔══██╗ ████╗  ██║ ╚██╗ ██╔╝         ║
║        ██║      ██║   ██║ ██╔████╔██║ ██████╔╝ ███████║ ██╔██╗ ██║  ╚████╔╝          ║
║        ██║      ██║   ██║ ██║╚██╔╝██║ ██╔═══╝  ██╔══██║ ██║╚██╗██║   ╚██╔╝           ║
║        ╚██████╗ ╚██████╔╝ ██║ ╚═╝ ██║ ██║      ██║  ██║ ██║ ╚████║    ██║            ║
║         ╚═════╝  ╚═════╝  ╚═╝     ╚═╝ ╚═╝      ╚═╝  ╚═╝ ╚═╝  ╚═══╝    ╚═╝            ║
║                                                                                      ║
║                                                                                      ║
║                      ██████╗  ██████╗   █████╗  ██╗ ███╗   ██╗                       ║
║                      ██╔══██╗ ██╔══██╗ ██╔══██╗ ██║ ████╗  ██║                       ║
║                      ██████╔╝ ██████╔╝ ███████║ ██║ ██╔██╗ ██║                       ║
║                      ██╔══██╗ ██╔══██╗ ██╔══██║ ██║ ██║╚██╗██║                       ║
║                      ██████╔╝ ██║  ██║ ██║  ██║ ██║ ██║ ╚████║                       ║
║                      ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ ╚═╝  ╚═══╝                       ║
║                                                                                      ║
║                                                                                      ║
║                        Start with a codebase map we can trust                        ║
║                                                                                      ║
║                 what it is  ·  who it helps  ·  how we can build it                  ║
║                                                                                      ║
║                                                                  September 2026      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Start in plain words. A company brain is not a new source of truth, and it is not just a database. It is a way for people and for software agents to understand how our products work across repositories, with a link back to the code behind every claim.

Then say what the next fifteen minutes cover: what it is, who needs it, how we could build it, what we suggest, and what we are asking for.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
[/Sources]

---

<!-- ## Slide (Section: short version) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                  THE SHORT VERSION                                   │
└──────────────────────────────────────────────────────────────────────────────────────┘

      WHAT WE WANT       one map of how our products work across repos,
                         with a link to the code behind every claim

      WHY IT IS HARD     search finds words, it does not explain paths
                         a full scan gave us 50,000 facts and no answers
                         agents explain well, but cannot show what they missed

      WHAT WE SUGGEST    a mixed route: solid evidence first, agents on top,
                         and one named person who checks the result

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  THE ASK                                                                             ║
║  fund the MVP as phase one, and re-prioritise to make room for it.                   ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Give the whole story in about ninety seconds, so nobody has to wait until the end to hear what is being asked.

Be fair about the middle line. The full scan worked. It produced a very large number of facts. It still could not answer one question that crossed two repositories. That gap is why this deck exists.

Say that the rest of the deck is detail under these four lines.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
- `e2e-knowledge-graph/docs/research/scan-zero-findings.md`
[/Sources]

---

<!-- ## Slide (Section: section one) -->
<!-- .slide: class="ascii-tight" -->
```text
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                                 ██╗                                ║
║                                ███║                                ║
║                                ╚██║                                ║
║                                 ██║                                ║
║                                 ██║                                ║
║                                 ╚═╝                                ║
║                                                                    ║
║                                                                    ║
║                    WHAT IT IS, AND WHO NEEDS IT                    ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: definition) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                              THREE THINGS PEOPLE MIX UP                              │
└──────────────────────────────────────────────────────────────────────────────────────┘

      ┌────────────────────╥───────────────────────────────────────────────────────┐
      │  COMPANY BRAIN     ║  what people and agents actually use                  │
      │                    ║  onboarding answers · impact reports · agent context  │
      ├────────────────────╫───────────────────────────────────────────────────────┤
      │  INDEX             ║  how we query things up in the map                    │
      │                    ║  Markdown · SQL · graph · vector                      │
      ├────────────────────╫───────────────────────────────────────────────────────┤
      │  MAP               ║  what exists, and how it connects                     │
      │                    ║  repos · services · symbols · contracts · flows       │
      └────────────────────╨───────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  The map is the hard part. The index is a choice. The brain is the product.          ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
These three get mixed together in every conversation about this, so pull them apart out loud.

The map is the model: repositories, services, symbols, interfaces, behaviour, and how they connect. The index is how we look things up in it quickly. The company brain is the useful things we build on top.

Read the stack from the bottom. A plain symbol index is already useful. It becomes a company-level map only when it can connect repositories, explain a path, show the evidence, and say what it does not know.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
- `e2e-knowledge-graph/docs/artifact-contracts.md`
[/Sources]

---

<!-- ## Slide (Section: evidence chain) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                    SEARCH FINDS WORDS.  A MAP EXPLAINS THE PATH.                     │
└──────────────────────────────────────────────────────────────────────────────────────┘

      1   EXACT SOURCE        pinned repos  ·  commits  ·  approved docs

      2   WHAT EXISTS         services  ·  symbols  ·  data  ·  settings

      3   HOW IT CONNECTS     calls  ·  APIs  ·  events  ·  business flows

      4   THE EVIDENCE        file and line  ·  how sure  ·  what is missing

      5   THE ANSWER          explain a path  ·  trace a change  ·  compare

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  Every step keeps its source. That is what lets someone check the answer.            ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is the difference between a search box and a map. Search gives you places where a word appears. A map walks a path and keeps the receipt for every step.

Walk the five steps once, slowly. Pinned sources mean the answer is about a known commit, not about whatever main looked like this morning. Steps two and three are the model itself. Step four is the file and line behind each claim, plus an honest list of what could not be worked out. Only then can a reviewer check the answer.

Step four is the one people skip. Without it we have a confident chatbot, not a knowledge layer.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
- `e2e-knowledge-graph/docs/artifact-contracts.md`
[/Sources]

---

<!-- ## Slide (Section: evidence walk) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            HOW ONE QUESTION GETS ANSWERED                            │
└──────────────────────────────────────────────────────────────────────────────────────┘

      THE QUESTION   "can we book a meeting while applying for a private loan?"

  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
  │  1 VERSION  │─►│   2 PARTS   │─►│   3 LINK    │─►│   4 PROOF   │─►│  5 ANSWER   │
  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
         │                │                │                │                │
  the exact copy    the loan app     one web call     the file and     a path anyone
   we looked at    the meeting app     one event      line for each     can follow
         ▼                ▼                ▼                ▼                ▼
  ╔═════════════════════════════════════════════════════════════════════════════════╗
  ║  Every step says where it came from, so anyone can check it.                    ║
  ╚═════════════════════════════════════════════════════════════════════════════════╝

      A SEARCH BOX GETS YOU TO STEP 2. THE REST IS WHERE THE WORK IS.
```

Notes:
Same five steps as the slide before, but now with one real question going through them. Point at this slide when someone asks what the evidence chain means in practice.

Read the boxes from left to right. Step one fixes the exact version of the code, so the answer is about a known state and not about whatever the main branch looked like this morning. Step two names the parts. Step three names the one web call and the one event between them. Step four gives the file and the line behind each step, plus an honest note of what we could not work out. Step five is a path someone else can follow without us in the room.

The line under the boxes is the point. Each step keeps its own source, and those sources stay with the answer.

Then read the last line out loud. A search box can get you to step two. Everything after that is where the work is.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
- `e2e-knowledge-graph/docs/artifact-contracts.md`
- `e2e-knowledge-graph/docs/evaluation/question-catalog.md`, Q03
[/Sources]

---

<!-- ## Slide (Section: who asks) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                           THREE JOBS, ONE SET OF EVIDENCE                            │
└──────────────────────────────────────────────────────────────────────────────────────┘

      DEVELOPERS, TECH LEADS
        "where do I change this, and what else does it hit?"
            ──►   the file to change  ·  the API it calls  ·  the services it breaks

      PRODUCT, DOMAIN OWNERS
        "what do we already have, and which rules apply?"
            ──►   which service does it  ·  where the rule lives  ·  who owns it

      QA, SUPPORT, OPERATIONS
        "what should we test, and where does it break?"
            ──►   which flows have tests  ·  where it fails  ·  what to check first

      CODING AGENTS ASK THE SAME QUESTIONS, JUST IN A SMALLER FORMAT.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  Different jobs, different words, the same map underneath.                           ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Do not sell this as a search tool for developers. Engineering is the first user, but the same checked knowledge serves several jobs.

Read each lane as a real sentence someone says out loud. Then read the line under it as the specific thing the map hands back: not "impact analysis", but the file to change, the API it calls, and the services that break. A product owner does not want "capabilities", they want the name of the service that does the job and the place the rule lives. QA does not want "test coverage", they want to know which flows have tests and where the flow fails first.

The last line matters for the strategy. A coding agent needs the same evidence as a person, just smaller and easier to query. If we build this for people, agents get it for free.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`, "People and jobs affected"
- `e2e-knowledge-graph/docs/evaluation/question-catalog.md`
[/Sources]

---

<!-- ## Slide (Section: what we build) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                       SIX THINGS WE CAN BUILD ON THE SAME MAP                        │
└──────────────────────────────────────────────────────────────────────────────────────┘

  ┌────────────────────────┐   ┌────────────────────────┐   ┌────────────────────────┐
  │  ONBOARDING GUIDE      │   │  CHANGE-IMPACT VIEW    │   │  REVIEW ASSISTANT      │
  │  how our products      │   │  what a change hits,   │   │  what a change touches │
  │  fit together          │   │  before we ship it     │   │  and what it risks     │
  └────────────────────────┘   └────────────────────────┘   └────────────────────────┘

  ┌────────────────────────┐   ┌────────────────────────┐   ┌────────────────────────┐
  │  LIVING DOCS           │   │  INCIDENT HELPER       │   │  AGENT CONTEXT         │
  │  docs that follow the  │   │  the failure and       │   │  the same evidence,    │
  │  code, not memory      │   │  dependency path       │   │  small and queryable   │
  └────────────────────────┘   └────────────────────────┘   └────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  One map, one snapshot, one set of evidence. Nobody keeps a private copy.            ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This is where the value adds up: six products, one set of evidence.

Go over them quickly, one line each. Onboarding explains how the products fit together. The change-impact view shows what a change hits before we ship it. The review assistant says what a change touches and where the risk sits. Living docs follow the code instead of somebody's memory. The incident helper gives the failure and dependency path when it is needed most. Agent context is the same evidence in a small, queryable form.

The closing line is the one to land. Each box is a different view of the same snapshot. None of them keeps its own version of the truth, which is the whole reason to build the map once instead of six times.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`, "People and jobs affected"
- `e2e-knowledge-graph/docs/evaluation/question-catalog.md`
[/Sources]

---

<!-- ## Slide (Section: aspects) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                        A MAP OF CODE STRUCTURE IS NOT ENOUGH                         │
└──────────────────────────────────────────────────────────────────────────────────────┘

      1   WHAT EXISTS             and who owns it
          repos · services · modules · components · boundaries

      2   HOW THE PARTS TALK      and what changes that
          REST APIs · events · jobs · settings · logins · third parties

      3   WHAT IT DOES            for the business
          capabilities · workflows · business rules · data · state · failures

      4   WHAT WE CAN TRUST       and what we cannot
          tests · dependencies · impact · coverage · conflicts · unknowns

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  It is useful when you can go from business behaviour to code, and back.             ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Four groups, so the room gets the whole scope without a long list of terms.

Group one says what exists and where responsibility starts and stops. Group two shows how the parts talk, and how settings or access rules change that. Group three explains what the platform actually does for the business. Group four says what backs an answer, what a change would touch, and what stays unknown.

The written problem statement splits these into nine dimensions. Four groups is the version for this room.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`, “Essential knowledge dimensions”
- `e2e-knowledge-graph/docs/knowledge-topic-contracts.md`
[/Sources]

---

<!-- ## Slide (Section: section two) -->
<!-- .slide: class="ascii-tight" -->
```text
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                              ██████╗                               ║
║                              ╚════██╗                              ║
║                               █████╔╝                              ║
║                              ██╔═══╝                               ║
║                              ███████╗                              ║
║                              ╚══════╝                              ║
║                                                                    ║
║                                                                    ║
║                       HOW WE COULD BUILD IT                        ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: routes) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                              FOUR REAL WAYS TO BUILD IT                              │
└──────────────────────────────────────────────────────────────────────────────────────┘

      1   LET AGENTS WRITE THE PAGES
          coding agents read the repos and keep linked Markdown pages

      2   REUSE AN INDEX THAT ALREADY EXISTS
          SCIP or compiler data for symbols; Orbit Local for a structural index

      3   BUILD OUR OWN INDEX
          our own readers for NestJS, Vue, TypeORM and RabbitMQ, one record per fact

      4   MIX THEM, EVIDENCE FIRST
          an existing index, our own readers, agents with limits, and a named reviewer

      ALREADY RULED OUT   Orbit Remote reads GitLab. Our four repos are on GitHub.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  No single tool does all of it. That is the finding, not a preference.               ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Give all four a fair hearing. The room stops listening if it smells a pre-picked winner with three decorations. Four real options, not one favourite and three fillers.

Route one is coding agents reading the repos and writing linked pages. It is the quickest way to explore, and it reads the best.

Route two is reusing work someone else already did. SCIP or compiler data gives us symbols, definitions and references. Orbit Local builds a fast structural index, but only for one working tree at a time.

Route three is our own readers for the frameworks we actually use, so a NestJS controller, a Vue call, a TypeORM entity or a RabbitMQ message each become one record per fact. Exact, and ours to maintain.

Route four puts them together and adds a named person at the end.

The ruled-out line saves the room a question. Orbit Remote is built around GitLab projects, and our four pilot repos are on GitHub, so it is not the foundation for this pilot. That is a fact from the research, not a preference.

Then land the bottom line. The assessment looked at nine methods and found that none of them covers the whole job on its own. What we are choosing is who does which part, not which product to buy.

[Sources]
- `e2e-knowledge-graph/docs/research/production-method-assessment.md`, "Method fit"
- GitLab Orbit overview: https://docs.gitlab.com/orbit/
- GitLab Orbit local setup: https://docs.gitlab.com/orbit/local/getting-started/
- SCIP protocol: https://github.com/sourcegraph/scip
[/Sources]

---

<!-- ## Slide (Section: tradeoffs) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                             PROS AND CONS OF EACH ROUTE                              │
└──────────────────────────────────────────────────────────────────────────────────────┘

      1  AGENT PAGES     PRO   fast to start · reads well · good at exploring
                         CON   two runs, two answers · cannot show what it missed

      2  EXISTING INDEX  PRO   symbols and callers for free · someone else maintains it
                         CON   no framework meaning, no business · one tree at a time

      3  OUR OWN INDEX   PRO   exact · repeatable · covers the frameworks we use
                         CON   we build it, and we maintain it as frameworks move

      4  MIXED ROUTE     PRO   proof and plain language · answers that cross repos
                         CON   the most parts to wire · needs a person to sign off

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  Nothing is thrown away. Route 4 is 1-3, each kept to what it is good at.            ║
║  We are choosing who does which part, not which tool to buy.                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Read each route as a pair. The pro first, then the con, and do not soften the con.

Agent pages start fastest and read the best, which is why people reach for them. The con is the one that matters: they are not repeatable, so the same question can come back with a different answer, and they cannot show you a complete list or prove that something really is absent.

An existing index gives us symbols and callers for nothing, and somebody else keeps it working. The con is that it does not know what a NestJS contract means or what the business rule is, and Orbit Local only sees one working tree at a time.

Our own readers are exact and repeatable, and they cover the frameworks we actually use. The con is honest and ongoing: we build them, and we maintain them every time a framework moves.

The mixed route is the only one that gives proof and a plain explanation at the same time, and the only one that answers across repos. The con is real too: it has the most parts to wire together, and it needs a named person to sign off on the business meaning.

Then land the bottom two lines. Nothing on this slide gets thrown away — route 4 is routes 1 to 3, each kept to the part it is good at. So the decision is who does which part, not which tool to buy. If someone pushes for one tool that does everything, the assessment looked at nine methods and found none of them does.

[Sources]
- `e2e-knowledge-graph/docs/research/production-method-assessment.md`, "Method fit" and "Conclusion"
- `e2e-knowledge-graph/docs/evaluation/question-to-artifact-mapping.md`
[/Sources]

---

<!-- ## Slide (Section: the dial) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                          THE REAL CHOICE IS SPEED OR PROOF                           │
└──────────────────────────────────────────────────────────────────────────────────────┘

      MORE AGENTS                                           MORE MACHINE RULES
      quicker to explain                                    easier to repeat
      cannot show the gaps                                  slower to build

      ◄──────┬─────────────────────┬─────────────────┬─────────────────┬──────►
             1                     4                 2                 3
        agent pages           mixed route     existing index     our own index

      STORAGE IS A SMALLER CHOICE, AND A LATER ONE
      Markdown to read  ·  SQL to count  ·  graph for paths  ·  vector to find

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  A database can only answer with what we captured.                                   ║
║  It cannot find what we missed.                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
One sentence for the whole slide: the question is not which tool, it is how far to sit between fast explanation and strong proof.

The four routes are marked on the line, so the room can see they are not four unrelated ideas. They are four positions on one dial. Agent pages sit far left. Our own index sits far right. The mixed route sits where both still count.

The storage line matters because this is where these conversations usually go sideways. Obsidian, a relational database, a graph database and a vector store each answer a different kind of question, and all four are useful. None of them fixes a fact we never captured, or a claim nothing backs up.

[Sources]
- `e2e-knowledge-graph/docs/research/production-method-assessment.md`
- `e2e-knowledge-graph/docs/artifact-contracts.md`
[/Sources]

---

<!-- ## Slide (Section: section three) -->
<!-- .slide: class="ascii-tight" -->
```text
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                              ██████╗                               ║
║                              ╚════██╗                              ║
║                               █████╔╝                              ║
║                               ╚═══██╗                              ║
║                              ██████╔╝                              ║
║                              ╚═════╝                               ║
║                                                                    ║
║                                                                    ║
║                       WHAT WE ARE ASKING FOR                       ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: value already seen) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                        THREE PLACES WE ALREADY SEE THE VALUE                         │
└──────────────────────────────────────────────────────────────────────────────────────┘

      OTHER TEAMS       we have watched other teams build this and get real
                        answers out of it. We would not be first.

      OUR OWN WORK      the knowledge graph direction was right. The first scan
                        showed us the shape, and showed us the gap.

      THE MARKET        every serious organisation is building this layer now,
                        to support their agents and their people.

      SO THE OPEN QUESTION IS NOT VALUE. IT IS TIME, PEOPLE AND PRIORITY.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  We are asking to start building, not to run one more experiment.                    ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
This slide exists because the room does not need convincing that a codebase map is a good idea. Do not argue the value again. Show where we have already seen it, then move on.

Other teams: this pattern is not new or experimental any more. Teams that gave their agents and their people a shared, checked map get answers out of it. We would be following, not pioneering.

Our own work: we did not start from nothing. The knowledge graph direction was the right one, and the first scan told us both things we needed — the shape of the model, and exactly where the gap is. That work is reusable.

The market: every serious organisation is now building some version of this layer, because agents are useless without trustworthy context and people are tired of asking the same questions. The open question in the industry is how well, not whether.

So do not spend the meeting on value. Spend it on time, people and priority.

[Sources]
- `e2e-knowledge-graph/docs/problem-statement.md`
- `e2e-knowledge-graph/docs/research/scan-zero-findings.md`
- `e2e-knowledge-graph/docs/research/production-method-assessment.md`
[/Sources]

---

<!-- ## Slide (Section: ask) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                       THE ASK                                        │
└──────────────────────────────────────────────────────────────────────────────────────┘

      WHAT WE PROPOSE     the MVP as phase one of building it,
                          not a pilot to prove a value we already see

      WHAT IT NEEDS       TIME       a real slot on the roadmap, not spare hours
                          PEOPLE     one engineering owner, plus review time from
                                     the Tech Lead and one domain owner
                          PRIORITY   something else has to move down the list

      WHAT IT PAYS        the whole agentic product development process
                          business  ─►  product  ─►  engineering  ─►  QA and support
                          the same checked evidence for people and for agents

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  THE DECISION IS NOT WHETHER THIS IS VALUABLE.                                       ║
║  It is whether we believe in it enough to re-prioritise and fund phase one.          ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Close on the request, and be direct about what kind of request it is.

We are not asking for a pilot to find out whether this is worth doing. We are proposing the MVP as phase one of building it. Phase one is a thin vertical slice, not a universal scanner: take one real question end to end, reuse the snapshot and evidence work we already have, add only what that question needs, then repeat with the next one.

Say the three needs out loud, because this is the part that decides it. Time means a real slot on the roadmap, not evenings and gaps between tickets. People means one engineering owner who carries it, plus review time from the Tech Lead and one domain owner. Priority means something else moves down the list. If none of those three is given, the honest answer is that we are not doing this.

Then make the payoff wide, because it is wide. This is not an engineering tool. It is the shared context under the whole agentic product development process: business asks what we have, product asks which rules apply, engineering asks what a change hits, QA and support ask where it breaks. Today each of those runs on somebody's memory. After this they run on the same checked evidence, and so do our agents.

End on the decision. The question in front of the room is not whether this is valuable. It is whether we believe in it enough to re-prioritise and fund phase one.

[Sources]
- `e2e-knowledge-graph/docs/research/production-method-assessment.md`, "Contingent implementation sequence"
- `e2e-knowledge-graph/docs/evaluation/question-to-artifact-mapping.md`
- `e2e-knowledge-graph/docs/golden/`
[/Sources]
