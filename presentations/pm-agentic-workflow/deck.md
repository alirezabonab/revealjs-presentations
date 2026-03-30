<!-- ## Slide (Section: opening) -->
# Agentic Workflow

From Manual Coordination to Autonomous Execution

April 2026

---

```text
┌───────────────────────────────────────────────────────────────────┐
│           WHAT ARE LLMs & AGENTS?                                 │
└───────────────────────────────────────────────────────────────────┘


     Large Language Model                      AGENT
   ════════════════════════           ════════════════════════

      It THINKS.                              It ACTS.


   ┌─────────────────────┐          ┌─────────────────────────┐
   │                     │          │                         │
   │   "Give me a        │          │   ┌───┐  ┌───┐  ┌───┐   │
   │    question,        │          │   │ S │  │ W │  │ B │   │
   │    I give you       │          │   └───┘  └───┘  └───┘   │
   │    an answer"       │          │  search write build     │
   │                     │          │      └─────┼─────┘      │
   │      ┌─────┐        │          │            │            │
   │      │BRAIN│        │          │   ┌────────┴──────┐     │
   │      └─────┘        │          │   │  LLM = BRAIN  │     │
   │    (text in,        │          │   │    + HANDS    │     │
   │     text out)       │          │   └───────────────┘     │
   │                     │          │                         │
   └─────────────────────┘          └─────────────────────────┘
         ▲                                    ▲
         │                                    │
    "What should                      "Go DO the thing,
     we do?"                           step by step"
```

---
```text
┌───────────────────────────────────────────────────────────────────────────┐
│           HOW THEY CONNECT?                                               │
└───────────────────────────────────────────────────────────────────────────┘

        Question ──►  ┌───────┐  ──►  decides    ──►  ┌───────┐  ──► Action
                      │  LLM  │                       │ TOOLS │  
                      │(brain)│  ◄──  results    ◄──  │(hands)│
                      └───────┘                       └───────┘
                           │
                           ▼
                      ┌─────────┐
                      │  AGENT  │  =  LLM + Tools + Loop
                      └─────────┘

  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 

   SIMPLE ANALOGY:

        LLM   =   Chef who writes recipes
        AGENT =   Chef who writes recipes AND cooks the meal

```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                HIRING WITHOUT ONBOARDING                      │
    └───────────────────────────────────────────────────────────────┘


         DAY 1                                         WEEK 4
    ┌─────────────┐                              ┌─────────────────┐
    │  "Welcome!  │                              │  "Why is she    │
    │   Here's a  │                              │   doing it all  │
    │   laptop.   │                              │   wrong??"      │
    │   Good      │                              │                 │
    │   luck!"    │                              │       :(        │
    └──────┬──────┘                              └─────────────────┘
           │
           ▼
      ┌─────────┐
      │  👤 New │
      │  Hire   │
      └────┬────┘
           │
           │  no context
           │  no guides
           │  no standards
           │
           ▼

         what could go wrong?  ──────────────────────────────►
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │         WHAT ACTUALLY HAPPENS (without onboarding)            │
    └───────────────────────────────────────────────────────────────┘

       Week 1          Week 2          Week 3          Week 4

    "What do I      "I'll just      "Nobody told    "Everything
     work on?"       guess how       me we don't     I built
                     we do this"     do it that      is wrong"
                                      way..."
        ?               ~               ✗               ✗✗

    ┌───────┐      ┌───────┐      ┌───────┐      ┌───────┐
    │ lost  │─────►│ guess │─────►│ wrong │─────►│ redo  │
    │       │      │       │      │ work  │      │ every │
    │       │      │       │      │       │      │ thing │
    │  😕   │      │  🤷   │      │  😬   │      │  😩   │
    └───────┘      └───────┘      └───────┘      └───────┘

    ╔═════════════════════════════════════════════════════════════╗
    ║  ✗ Wasted 4 weeks            ✗ New hire demoralized        ║
    ║  ✗ Team frustrated           ✗ Manager doing damage control║
    ╚═════════════════════════════════════════════════════════════╝
```

---


# *** 

---

<!-- ## Slide (Section: shift) -->
# The Shift

Old world:
- PM collects requirements
- PM writes tickets by hand
- PM syncs between teams
- PM follows up execution

New world:
- PM defines intent and constraints
- Agents draft specs, tickets, and code
- PM validates and steers outcomes

```text
PM as coordinator  ----------------->  PM as orchestrator
manual movement of work             system design for work
```

---

<!-- ## Slide (Section: hire-analogy) -->
# AI Agent = Senior Hire Without Context

```text
+--------------------------------------------------+
|               AI AGENT = NEW HIRE                |
+--------------------------------------------------+

   Very capable                    But missing:
   - fast                          - business context
   - skilled                       - priorities
   - can execute                   - team conventions
   - broad knowledge               - internal standards

                [ Senior Capability ]
                         +
                [ No Company Context ]

                         =
               [ High Potential, Risky Start ]
```

---

<!-- ## Slide (Section: failure-pattern) -->
# What Happens Without Guidance

```text
            NO ONBOARDING / NO GUIDANCE
                        |
                        v
              +---------------------+
              |    AI AGENT STARTS  |
              +---------------------+
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
   Wrong assumptions  Wrong scope  Wrong format
          |             |             |
          +-------------+-------------+
                        |
                        v
                 Rework / Friction
                        |
                        v
                 PM becomes bottleneck
```

---

<!-- ## Slide (Section: human-vs-agent) -->
# Human vs Agent Mapping

```text
 Human hire                         AI agent
-----------                       -----------
 Onboarding       <--------->     Context / MCP
 Clear task       <--------->     Prompt / intent
 Team standards   <--------->     Skill / template
 Feedback         <--------->     Validation / iteration
```

---

<!-- ## Slide (Section: core-problem) -->
# Core Problem

```text
          STRONG INTELLIGENCE
                  |
                  v
         +-------------------+
         |   NO REAL CONTEXT |
         +-------------------+
                  |
      +-----------+-----------+-----------+
      |           |           |           |
      v           v           v           v
  vague work   wrong task  bad format  weak alignment
       \          |           |          /
        +----------+-----------+---------+
                  |
                  v
             Unreliable output
```

---

<!-- ## Slide (Section: onboarding-parts) -->
# Good Onboarding For Agents

```text
+------------------------------------------------------+
|             GOOD ONBOARDING FOR AGENTS               |
+------------------------------------------------------+

   [1] CONTEXT       -> Jira, architecture, history
   [2] INTENT        -> goal, scope, expected outcome
   [3] STANDARDS     -> templates, format, rules
   [4] FEEDBACK      -> review, refine, improve

                    +------------------+
                    |    AI AGENT      |
                    +------------------+
                      ^      ^      ^
                      |      |      |
                 Context   Intent  Standards
                      \      |      /
                       \     |     /
                        +----+----+
                             |
                             v
                        Better output
                             |
                             v
                         Feedback loop
```

---

<!-- ## Slide (Section: mcp) -->
# MCP (Model Context Protocol)

```text
                  +------------------+
                  |    AI AGENT      |
                  +------------------+
                           |
                           v
                  +------------------+
                  |   MCP LAYER       |
                  | (Context Bridge)  |
                  +------------------+
                    /       |       \
                   /        |        \
                  v         v         v
            +--------+ +---------+ +-----------+
            | Jira   | | System  | | Decisions |
            | issues | | design  | | / history |
            +--------+ +---------+ +-----------+
```

---

<!-- ## Slide (Section: ticket-skill) -->
# Standardized Ticket Skill

```text
+---------------------------+
| STANDARD TICKET SKILL     |
+---------------------------+
| 1. Title                  |
| 2. Context                |
| 3. Scope                  |
| 4. Acceptance Criteria    |
| 5. Dependencies / Risks   |
| 6. Definition of Done     |
+---------------------------+
            |
            v
   Consistent output every time
```

---

<!-- ## Slide (Section: feedback-loop) -->
# Feedback Loop

```text
      +-------------+
      |  AI OUTPUT  |
      +-------------+
             |
             v
      +-------------+
      | PM REVIEWS  |
      +-------------+
         |       |
   good  |       | refine
         v       v
   +---------+  +----------------+
   |  USE IT |  | adjust prompt / |
   +---------+  | skill / context |
                +----------------+
                         |
                         v
                   better next run
```

---

<!-- ## Slide (Section: before-after) -->
# Before vs After

```text
+-----------------------+     +------------------------+
| BEFORE                |     | AFTER                  |
+-----------------------+     +------------------------+
| manual context        |     | MCP context fetch      |
| manual formatting     |     | standard skill         |
| variable quality      |     | predictable quality    |
| PM bottleneck         |     | PM validation role     |
+-----------------------+     +------------------------+
```

---

<!-- ## Slide (Section: pm-role) -->
# PM's New Role

```text
Old:
PM -> writes work

New:
PM -> designs system -> agent produces work
                         |
                         v
                    team executes
```

---

<!-- ## Slide (Section: takeaway) -->
# Key Takeaway

AI agents are not plug-and-play.

Weak onboarding -> weak output  
Strong onboarding -> scalable execution
