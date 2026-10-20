<!-- ## Slide (Section: cover) -->
<!-- .slide: class="ascii-tight" -->
```text
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║                                                                                      ║
║                                E N G I N E E R I N G                                 ║
║                                                                                      ║
║     ██╗  ██╗  █████╗  ███╗   ██╗ ██████╗  ██████╗   ██████╗   ██████╗  ██╗  ██╗      ║
║     ██║  ██║ ██╔══██╗ ████╗  ██║ ██╔══██╗ ██╔══██╗ ██╔═══██╗ ██╔═══██╗ ██║ ██╔╝      ║
║     ███████║ ███████║ ██╔██╗ ██║ ██║  ██║ ██████╔╝ ██║   ██║ ██║   ██║ █████╔╝       ║
║     ██╔══██║ ██╔══██║ ██║╚██╗██║ ██║  ██║ ██╔══██╗ ██║   ██║ ██║   ██║ ██╔═██╗       ║
║     ██║  ██║ ██║  ██║ ██║ ╚████║ ██████╔╝ ██████╔╝ ╚██████╔╝ ╚██████╔╝ ██║  ██╗      ║
║     ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝   ╚═════╝   ╚═════╝  ╚═╝  ╚═╝      ║
║                                                                                      ║
║                                                                                      ║
║              one set of engineering rules for people and coding agents               ║
║                                                                                      ║
║                       tech lead meeting  ·  PR #1  ·  AUTO-286                       ║
║                                                                                      ║
║                                                                 13 October 2026      ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 30 seconds.

Today we introduce the Engineering Handbook draft in PR #1. We want to agree three things, in this order: the direction, the setup, and then the content of the rules.

The talk follows the same order as the handbook: why we need it, how it is built, one sample subject, the current PR, the feedback we need, and the roadmap.

---

<!-- ## Slide (Section: vision) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                        VISION                                        │
└──────────────────────────────────────────────────────────────────────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                      ║
║               One shared set of engineering rules that every developer               ║
║                 and every coding agent can find, apply, and verify.                  ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

    WE NEED IT ANYWAY

    A growing team          New people need one place to learn how we build.
    Agentic development     Agents need written rules they can follow and check.
    Many repositories       The Brain maps 35.  The same problems repeat in each.
    Build and maintain      New code and existing code must meet one standard.
```

Notes:
Allow 60 seconds.

Say the vision once: one shared set of engineering rules that every developer and every coding agent can find, apply, and verify.

We need this whether or not we use agents. Four things make it necessary:

- The team is growing. New developers need one place that explains how we build, instead of asking each person.
- Agentic development. Coding agents follow written instructions. A rule they can read and a check they can run make their work reviewable.
- Many repositories. The Brain already maps 35 repositories. The same problems, such as retries, timeouts, and duplicate requests, appear in many of them.
- Constant build and maintain work. We write new code and change old code every week. Both need the same standard.

Sources:
- [Handbook purpose](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md)
- [Repository scope: 35 repositories](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#repository-scope)

---

<!-- ## Slide (Section: why now) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                       WHY NOW                                        │
└──────────────────────────────────────────────────────────────────────────────────────┘

    The handbook was always needed.  It waited in the backlog.

    Two changes made us start now:

    THE BRAIN               Our system knowledge is now shared and linked.
                            Each rule can cite evidence from our own code.

    AGENTIC DEVELOPMENT     Agents now write and change our code.
                            They need rules they can read and verify.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  The handbook is written for the Brain.  It will become part of the Brain.           ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 45 seconds.

This is not a new need. A shared engineering handbook was always useful, and it sat in the backlog.

Two things changed. First, the Brain: its vault holds linked findings about our 35 repositories. The draft rules use those findings as evidence. For example, a rule can point to the exact service where the current code shows a gap. Second, agentic development: coding agents now change code in our repositories. They need the same rules as people, in a form they can read and check.

After the first review round and all required sign-offs, the approved handbook becomes part of the Brain.

Sources:
- [The Brain](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/README.md)
- [PR #1: purpose and phases](https://github.com/Enklare-Development/enklare-ai-brain/pull/1)

---

<!-- ## Slide (Section: why this shape) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                    WHY THIS SHAPE                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘

    CHAPTERS, SUBJECTS, RULES    Rules state the required behavior, not the tool.
                                 They apply to any framework, language, or technology.

    MARKDOWN                     Reviewed in PRs, like code.
                                 It will become part of the Brain.

    STABLE RULE IDS              API-RTY-01  =  chapter, subject, rule number.
                                 Wording can change.  The ID and its links stay.

    LINKS                        Technology guides and decisions point to chapter rules.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║      WHAT  in the chapters     HOW  in technology guides     WHY  in decisions       ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 60 seconds.

Chapters, subjects, and rules: each chapter covers one engineering concern. Each subject covers one task or decision. Each rule states what a system must do and how to verify it. A rule does not name a framework, so it works for every repository.

Markdown: the handbook lives in the Brain repository as plain Markdown. We review and change it in PRs, the same way we change code. People and coding agents read the same files.

Stable rule IDs: each rule has an ID in three parts. In API-RTY-01, API is the chapter, RTY is the subject (repeated requests and safe retries), and 01 is the rule number in that subject. The subject code is 2 to 4 letters and stays the same when the subject title changes. A new rule gets the next free number in its subject. We never reuse an old ID. The ID stays the same when the wording changes, so PR comments, links, and later guides still point to the right rule. When an ID changes, as it did in this PR, the old link still works.

Links: later, technology guides explain how to apply a rule in one technology. Decision records explain why we chose a technology. Both link to the rules. The rules do not depend on them.

Sources:
- [Place and scope rules](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#place-and-scope-rules)
- [Write clear rules](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#write-clear-rules)
- [Rule IDs](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#rule-ids)
- [Standards, technologies, and decisions](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#standards-technologies-and-decisions)

---

<!-- ## Slide (Section: structure tree) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                  HANDBOOK STRUCTURE                                  │
└──────────────────────────────────────────────────────────────────────────────────────┘

             docs/engineering-standards/
             ├── README.md ·················  start here: change routes to subjects
             ├── handbook-plan.md ··········  how the handbook is built and reviewed
             │
    WHAT     ├── NN-{concern}.md ···········  14 chapters, one concern each
             │   └── ## {Subject} ··········  one task or decision, with its scope
             │       ├── ### {ID} — {rule} ·  one required action, e.g. API-RTY-01
             │       └── ### How to verify ·  a check for every rule
             │
    HOW      ├── technology/ ···············  later: one guide per technology
             │   └── {technology}.md ·······  how to apply and verify the rules
             │
    WHY      ├── decisions/ ················  when needed: one record per choice
             │   └── NNNN-{decision}.md ····  the need, the choice, the alternatives
             │
             └── templates/ ················  formats: subject, guide, decision
```

Notes:
Allow 60 seconds.

This is the handbook in the abstract. Everything lives under `docs/engineering-standards/` in the Brain repository.

Start at the README. It links common changes, such as "Change an event or worker", to the subjects they need. It also holds the review instructions and the open questions with their owners. The handbook plan explains how the handbook is structured, reviewed, adopted, and extended.

The 14 chapter files hold WHAT the rules require. Inside a chapter file, each subject is a level-2 heading. Each rule is a level-3 heading with its stable ID, such as API-RTY-01. Each subject ends with How to verify.

The templates folder has three formats: a standard for subjects, a technology guide, and a decision record.

Two folders come later. The PR has only their templates. `technology/` will hold one guide for each technology, language, or framework: HOW to apply and verify the rules with it. Earlier drafts used this folder; the PR deferred those guides. `decisions/` will hold one numbered record for each significant choice: WHY we chose it, with the need, the choice, and the alternatives. The handbook plan defines that path. Both link back to the chapter rules.

The shared writing guide is outside this folder, in `docs/writing-guide.md`.

Sources:
- [Handbook plan: structure](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#structure)
- [Handbook README](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md)
- [Templates](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/templates/standard.md)

---

<!-- ## Slide (Section: chapters 01-05) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                             THE 14 CHAPTERS  ·  01 TO 05                             │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Design and build.                                                        RULE ID

    01  ARCHITECTURE AND OWNERSHIP                                              ARCH
        Who owns each system, boundary, and choice, so every change has an owner.

    02  CODEBASE STRUCTURE AND MODULES                                           MOD
        Where code lives and how modules connect, so code stays easy to change.

    03  FRONTEND                                                                  FE
        Browser apps and forms, so users get correct, accessible, safe journeys.

    04  BACKEND AND DOMAIN LOGIC                                                 DOM
        Input, business rules, and calculations, so results are correct.

    05  DATA AND PERSISTENCE                                                    DATA
        How data is stored, migrated, deleted, and restored, so it stays correct.
```

Notes:
Allow 45 seconds. Read the chapter names and the reason after "so". Do not read every word.

Each chapter covers one engineering concern. The right column shows the chapter part of each rule ID. For example, API-RTY-01 is in chapter 06, APIs. RTY is the subject, and 01 is the rule number. Every subject and rule sits in exactly one chapter.

Size in the draft (subjects / rules): 01 Architecture 8 / 18. 02 Codebase 6 / 13. 03 Frontend 11 / 31. 04 Backend 7 / 15. 05 Data 8 / 17.

Ask the room to note the chapters closest to their own systems. They review those first.

Sources:
- [Chapter list](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#chapters)

---

<!-- ## Slide (Section: chapters 06-10) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                             THE 14 CHAPTERS  ·  06 TO 10                             │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Connect, recover, protect, and release.                                  RULE ID

    06  APIS AND EXTERNAL INTEGRATIONS                                           API
        API contracts and provider calls, so integrations fail safely.

    07  ASYNCHRONOUS WORK, EVENTS, AND QUEUES                                  ASYNC
        Messages and background jobs, so work is not lost or done twice.

    08  RELIABILITY AND RECOVERY                                                 REL
        Timeouts, retries, and load limits, so failures stay small and recoverable.

    09  IDENTITY, SECURITY, AND PRIVACY                                          SEC
        Access, secrets, and personal data, so customers and systems stay safe.

    10  CONFIGURATION, DEPENDENCIES, AND DEPLOYMENT                              DEP
        Settings, builds, and releases, so each release is known and reversible.
```

Notes:
Allow 45 seconds.

Chapters 06 and 07 cover work that crosses a boundary: an API call, a provider, a callback, a message, or a background job. Chapter 08 covers what happens when that work fails or is slow. Chapter 09 covers access, secrets, and personal data. Chapter 10 covers how a change reaches production and how we roll it back.

Size in the draft (subjects / rules): 06 APIs 7 / 16. 07 Asynchronous work 8 / 27. 08 Reliability 6 / 11. 09 Security and privacy 8 / 20. 10 Configuration and deployment 6 / 12.

Sources:
- [Chapter list](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#chapters)

---

<!-- ## Slide (Section: chapters 11-14) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                             THE 14 CHAPTERS  ·  11 TO 14                             │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Operate, verify, and govern.                                             RULE ID

    11  OBSERVABILITY, MONITORING, AND OPERATIONS                                OPS
        Logs, alerts, and runbooks, so we see problems and act on them quickly.

    12  TESTING AND ENGINEERING WORKFLOW                                        TEST
        Tests, reviews, and release checks, so each change is verified.

    13  CODING AGENT RULES                                                     AGENT
        What a coding agent may read, use, and change, and how it reports results.

    14  REGULATED PRODUCT OBLIGATIONS                                            REG
        How we implement, verify, and keep evidence for regulated requirements.
```

Notes:
Allow 45 seconds.

Size in the draft (subjects / rules): 11 Observability 5 / 12. 12 Testing 7 / 14. 13 Coding agents 5 / 10. 14 Regulated products 5 / 11.

Chapter 13 applies the same idea to coding agents: what they may do, which evidence they may trust, and how they report what they verified. Existing repository and tool instructions still apply.

Chapter 14 does not decide which regulations apply. Product and compliance owners confirm the requirements. The chapter explains how to implement them, verify them, and keep evidence.

Sources:
- [Chapter list](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#chapters)
- [Coding agent rules](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/13-coding-agent-rules.md)
- [Regulated product obligations](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/14-regulated-product-obligations.md)

---

<!-- ## Slide (Section: subject and rules) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                               A SUBJECT AND ITS RULES                                │
└──────────────────────────────────────────────────────────────────────────────────────┘

    A subject is one task or decision.  A rule is one required action.

    ┌──────────────────────────────────────┐
    │ {Subject name}                       │  ◄─  one task or decision
    │ When it applies, and where           │  ◄─  browser, services and workers, or both
    │                                      │
    │ API-RTY-01 — {Short action title}    │  ◄─  one required action, one stable ID
    │ The required action, with evidence   │
    │ Observed behavior: ...               │  ◄─  what the code does today, not a rule
    │ Decision needed: ...                 │  ◄─  an owner confirms a policy or a limit
    │ API-RTY-02 — ...                     │
    │                                      │
    │ Adoption and exceptions              │  ◄─  only for migration or an exception
    │                                      │
    │ How to verify                        │  ◄─  a check for every rule
    │ Scenario  ·  action  ·  result       │
    └──────────────────────────────────────┘
```

Notes:
Allow 60 seconds.

A chapter holds subjects. A subject covers one task or decision, such as "Repeated requests and safe retries". It starts with its scope: when it applies, and whether it applies to browser applications, services and workers, or both.

A rule is one required action. Its ID never changes. Each rule links to its evidence: vault findings from our code, or a primary technical or regulatory source.

Every subject ends with How to verify. Each check gives a scenario, an action, and the expected result. Every rule has at least one check. These are checks to run, not reports of tests that already passed.

Two labels keep facts apart from proposals. They sit next to the rule they explain. Observed behavior describes inspected code; it can show a defect, and it does not approve that pattern. Decision needed marks a policy, limit, or responsibility that an owner must confirm. A Proposed starting point can follow it as a suggestion. A subject can also have an Adoption and exceptions section, but only when a system needs migration work or an approved exception. Most subjects do not have one.

Sources:
- [Standard template](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/templates/standard.md)
- [How to use the draft](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#how-to-use-the-draft)

---

<!-- ## Slide (Section: sample subject) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                    SAMPLE  ·  REPEATED REQUESTS AND SAFE RETRIES                     │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Chapter 06  ·  APIs and external integrations  ·  subject code RTY

    WHEN IT APPLIES     A browser, service, or worker repeats an API write
                        after a timeout, a reconnect, or a user action.

    API-RTY-01          Give repeated writes a stable operation identity.
    API-RTY-02          Resolve an unknown write result before starting a new operation.

    OBSERVED BEHAVIOR   Private Loan deletes its request lock after completion,
                        so a later request can repeat the operation.

    DECISION NEEDED     Not decided yet.  The owner chooses how long a retry
                        stays safe, and what happens after that.

    HOW TO VERIFY       8 checks to run, such as a lost response or a crash
                        mid-write.  Each one passes or fails.
```

Notes:
Allow 60 seconds.

This is a real subject from chapter 06. It fits our products well: a customer or a service sends "create application", the response is lost, and the caller tries again.

API-RTY-01: give the logical operation a stable request ID, often called an idempotency key. Save the ID and the change together. A repeat returns the saved result instead of applying the change again.

API-RTY-02: if the response is lost, the write may already have happened. Look up the result or retry with the same ID. Never create a new ID because of a timeout.

Observed behavior: in the inspected code, Private Loan deletes its request lock after completion, so a later request can repeat the operation. This is evidence for the rule. It is not an instruction.

Decision needed: the draft does not decide this. The service remembers each request ID for a while, so a retry with the same ID is safe. The owner of the operation chooses how long that window is, within the approved data policy. The owner also chooses what happens to a retry after the window ends, for example reject it or send it to manual recovery.

The subject has eight checks: lost response, changed input, concurrent repeat, crash during processing, request-ID scope, late repeat, permanent failure, and no safe lookup or retry. Each check names an action and the expected result, so it passes or fails. A reviewer can run it as a design review, a code inspection, or a test. The next slide shows the first one.

Sources:
- [Repeated requests and safe retries](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/06-apis-and-external-integrations.md#repeated-requests-and-safe-retries)

---

<!-- ## Slide (Section: sample apply and verify) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                             SAMPLE  ·  APPLY AND VERIFY                              │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Illustrative example:  a lost response after "create application"

    1   The caller sends "create application" with request ID create-app-42.
    2   The service saves application 700 and its result.  The response is lost.
    3   The caller retries with the same ID.
    4   The service returns application 700.  It creates no second application.
    5   The same ID with a different loan amount  ─►  rejected.

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  HOW TO VERIFY  ·  LOST RESPONSE  (API-RTY-01, API-RTY-02)                           ║
║                                                                                      ║
║  Action     Complete a write, drop its response, retry with the same ID.             ║
║  Expected   The existing result.  No second business effect.                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 60 seconds.

Walk through the five steps. This is the handbook's own illustrative example. It shows a proposed contract. It does not describe the retry guarantee of an inspected application.

Steps 1 to 4 show API-RTY-01 and API-RTY-02 applied: one logical operation, one request ID, and one application, even when the response is lost.

Step 5 shows why the ID is tied to the input: the same ID with a different loan amount is a different intent, so the service rejects it.

The box shows one of the eight checks. A developer, a reviewer, or a coding agent can run it. The expected result is concrete, so the check either passes or fails.

Sources:
- [API-RTY-01 and API-RTY-02 with the example](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/06-apis-and-external-integrations.md#api-rty-01--give-repeated-writes-a-stable-operation-identity)
- [How to verify repeated requests](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/06-apis-and-external-integrations.md#how-to-verify-repeated-requests-and-uncertain-outcomes)

---

<!-- ## Slide (Section: technology and decisions) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                           TECHNOLOGY GUIDES AND DECISIONS                            │
└──────────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────────────────┐        ┌──────────────────────────┐
    │ technology/               LATER  │        │ CHAPTERS 01 TO 14        │
    │ One guide for each technology,   │        │ WHAT the rules require   │
    │ language, or framework.          │───────►│                          │
    │ HOW to apply and verify rules.   │        │ Technology agnostic      │
    └──────────────────────────────────┘        │ Stable rule IDs          │
                                                │                          │
    ┌──────────────────────────────────┐        │ Guides and decisions     │
    │ decisions/          WHEN NEEDED  │        │ link to the rules.       │
    │ One record for each significant  │        │ The rules do not depend  │
    │ choice, such as 0001-name.md.    │───────►│ on any one tool.         │
    │ WHY, with the alternatives.      │        │                          │
    └──────────────────────────────────┘        └──────────────────────────┘

    Each file is Markdown and is reviewed in a PR.
    A replaced decision is kept and marked Superseded.  The history stays.
```

Notes:
Allow 75 seconds.

The PR has templates for both folders. The folders get files only when there is real content.

Technology guides track how to apply and verify the shared rules in one technology, language, or framework. A guide names the systems and versions it supports, links to each rule it implements, and ends with its own checks. If a decision selected the technology, the guide links to that decision. Earlier drafts had 32 guides in `technology/`, for example for HTTP clients, BullMQ, and RabbitMQ. They are kept in Git history and are deferred until the guide scope is agreed.

Decision records track why we made a significant architecture or technology choice. Each record has a stable number and states the context, the choice, the alternatives, and the consequences, including adoption work. Its status is Proposed, Accepted, Rejected, or Superseded. When a decision changes, we keep the old record and link both records. Rules ARCH-DEC-01 to ARCH-DEC-03 define this.

Sources:
- [Standards, technologies, and decisions](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#standards-technologies-and-decisions)
- [Technology guide template](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/templates/technology-guide.md)
- [Decision record template](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/templates/decision-record.md)
- [ARCH-DEC-01 to ARCH-DEC-03](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/01-architecture-and-ownership.md#architecture-and-technology-decisions)

---

<!-- ## Slide (Section: current PR) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                          THE CURRENT PR  ·  #1  ·  AUTO-286                          │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Draft engineering handbook for team review

    ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
    │       14         │        │       97         │        │       227        │
    │    chapters      │───────►│    subjects      │───────►│     rules        │
    │                  │        │                  │        │                  │
    │ one engineering  │        │ one task or      │        │ one action each, │
    │ concern each     │        │ decision each    │        │ each has a check │
    └──────────────────┘        └──────────────────┘        └──────────────────┘

    Also in the PR:  README  ·  handbook plan  ·  3 templates  ·  writing guide

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  DRAFT        No rule is approved yet.  Owners approve the rules after review.       ║
║  UNTIL THEN   Keep following the current rules in each repository.                   ║
║  NOT TESTED   We have not yet run the How to verify checks on our systems.           ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 60 seconds.

Open [PR #1, AUTO-286: Draft engineering handbook for team review](https://github.com/Enklare-Development/enklare-ai-brain/pull/1).

Read the diagram from left to right. 14 chapters hold 97 subjects. The 97 subjects hold 227 rules. Every subject ends with How to verify, and the PR states that every rule has explicit verification coverage. The handbook plan calls the 97 subjects a proposal, not a target.

The PR also adds the README with change routes, the handbook plan for structure, review, and adoption, templates for standards, technology guides, and decision records, and a shared writing guide.

The box says three things:

- Draft: this is a proposal. No rule is approved until the required owners approve it.
- Until then: nothing changes for teams today. Keep following each repository's current rules, such as the setup and implementation instructions in its README or CONTRIBUTING file.
- Not tested: each subject has How to verify checks, but we have not run them against our applications yet. So the draft does not say whether our systems meet the rules today. The PR only ran documentation checks: formatting, links, heading anchors, rule IDs, and the vault structure.

Sources:
- [Current handbook PR](https://github.com/Enklare-Development/enklare-ai-brain/pull/1)
- [Handbook README and status](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md)

---

<!-- ## Slide (Section: feedback) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                   FEEDBACK WE NEED                                   │
└──────────────────────────────────────────────────────────────────────────────────────┘

    We agree in this order:

    ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐
    │ 1  DIRECTION       │─────►│ 2  SETUP           │─────►│ 3  CONTENT         │
    │                    │      │                    │      │                    │
    │ Do we need it, and │      │ Are the chapters,  │      │ Are the rules      │
    │ is the goal right? │      │ format, and IDs    │      │ right, clear, and  │
    │                    │      │ right?             │      │ verifiable?        │
    └────────────────────┘      └────────────────────┘      └────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  COMMENT UNDER PR #1                                                                 ║
║                                                                                      ║
║  Structure   Are the chapters and subjects in the right place?                       ║
║  Format      Is a subject easy to read, apply, and verify?                           ║
║  Content     Rule ID  ·  the problem  ·  a proposed correction                       ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
```

Notes:
Allow 90 seconds, then open the discussion.

We ask for agreement in three steps. First, the direction: do we agree that we need a shared handbook, and that this is its goal? Second, the setup: chapters, subjects, rules with stable IDs, Markdown in the Brain, and separate technology guides and decisions. Third, the content of each rule. There is little value in polishing rules before we agree on the first two steps.

We expect comments under PR #1 on all three areas: structure, format, and content.

For content, start with one change you know well, such as an API, worker, data, browser, authentication, or release change. Follow its links from the README. For each rule, ask: does it apply to my systems, is it clear, is it feasible, does it cover failure paths, and can the checks verify it? Comment with the rule ID, the problem, and a proposed correction. If a decision is missing, name the question and its owner.

Tech leads review the engineering rules for clarity, coverage, and feasibility. Product, security, privacy, legal, and compliance owners confirm the decisions in their areas.

Before the meeting ends, agree which chapters each lead will review first.

Sources:
- [PR #1: start the review](https://github.com/Enklare-Development/enklare-ai-brain/pull/1)
- [Review and adopt the handbook](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#review-and-adopt-the-handbook)

---

<!-- ## Slide (Section: roadmap) -->
```text
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                   HANDBOOK ROADMAP                                   │
└──────────────────────────────────────────────────────────────────────────────────────┘

  ┌───────────────────────┐     ┌───────────────────────┐     ┌───────────────────────┐
  │ 1  CHAPTERS           │────►│ 2  TECHNOLOGIES       │────►│ 3  DECISIONS          │
  │ NOW                   │     │ NEXT                  │     │ WHEN WE CHOOSE        │
  │                       │     │                       │     │                       │
  │ This draft shapes     │     │ Apply, verify, and    │     │ Why we chose a new    │
  │ the structure and     │     │ build in the rules    │     │ technology, language, │
  │ the chapter rules.    │     │ for each technology,  │     │ or framework, and the │
  │                       │     │ language, framework.  │     │ alternatives.         │
  └───────────────────────┘     └───────────────────────┘     └───────────────────────┘

╔══════════════════════════════════════════════════════════════════════════════════════╗
║  A DECISION RECORD DEFENDS THE CHOICE AT THAT TIME                                   ║
║  The need  ·  the alternatives  ·  why this choice won                               ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

    ONGOING    Approved rules are updated through PRs after changes and incidents.
```

Notes:
Allow 75 seconds.

1. Chapters, now. This review shapes the structure and the chapters. We agree the subjects and rules. Rules stay Draft until the required owners approve them. After the first review round and all sign-offs, the approved handbook becomes part of the Brain.

2. Technologies, next. Technology guides show how to apply and verify the rules in a given technology, language, or framework, and how to build them into our code. We add guides after we agree their scope.

3. Decisions, when we choose. If we introduce a new technology, language, or framework, we write a decision record. It explains why and how, and it reviews the alternatives. Later readers can see what the need was at that time, which options we compared, and why this one won.

Ongoing: we update approved guidance through PRs after relevant system changes, incidents, or new findings. Rule IDs stay stable, and the relevant owner reviews each change.

This roadmap gives the order of the work. It has no dates and no named reviewers yet.

Sources:
- [Technology guides (deferred)](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#technology-guides-deferred)
- [Record decisions](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/handbook-plan.md#record-decisions)
- [Maintain and extend the handbook](https://github.com/Enklare-Development/enklare-ai-brain/blob/b591fe9d072641e4b5ff4a0cd4e5c410f38a0b84/docs/engineering-standards/README.md#maintain-and-extend-the-handbook)
