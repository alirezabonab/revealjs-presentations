```text
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║                                                               ║
    ║                                                               ║
    ║                                                               ║
    ║          █████╗  ██████╗ ███████╗███╗   ██╗████████╗          ║
    ║         ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝          ║
    ║         ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║             ║
    ║         ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║             ║
    ║         ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║             ║
    ║         ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝             ║
    ║                                                               ║
    ║             A I   D R I V E N   W O R K F L O W               ║
    ║                                                               ║
    ║         ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─           ║
    ║                                                               ║
    ║          AI handles execution at speed.                       ║
    ║          Humans provide judgment, direction, and coherence.   ║
    ║                                                               ║
    ║                                                               ║
    ║                                                               ║
    ║                                                               ║
    ║                                          April 2026           ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

---

```text
┌───────────────────────────────────────────────────────────────────┐
│                    WHAT ARE LLMs & AGENTS?                        │
└───────────────────────────────────────────────────────────────────┘


     Large Language Model                      AGENT
   ════════════════════════           ════════════════════════

        It THINKS.                            It ACTS.


   ┌─────────────────────┐          ┌─────────────────────────┐
   │                     │          │                         │
   │   "Give me a        │          │   ┌───┐  ┌───┐  ┌───┐   │
   │    question,        │          │   │ S │  │ W │  │ B │   │
   │    I give you       │          │   └───┘  └───┘  └───┘   │
   │    an answer"       │          │  search write  build    │
   │                     │          │      └─────┼─────┘      │
   │                     │          │            │            │
   │      ┌─────┐        │          │            │            │
   │      │BRAIN│        │          │    ┌───────┴───────┐    │
   │      └─────┘        │          │    │  LLM = BRAIN  │    │
   │    (text in,        │          │    │    + HANDS    │    │
   │     text out)       │          │    └───────────────┘    │
   │                     │          │                         │
   └─────────────────────┘          └─────────────────────────┘
            ▲                                    ▲
            │                                    │

       "What should                      "Go DO the thing,
        we do?"                           step by step"
```

---

```text

        
   SIMPLE ANALOGY:

        LLM   =   Chef who writes recipes
        AGENT =   Chef who writes recipes AND cooks the meal

```
---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                      THE CORE PROBLEM                         │
    └───────────────────────────────────────────────────────────────┘






       👤 "This is amazing!"              👤 "This is useless..."

         🤖 ──► ✓ ✓ ✓                       🤖 ──► ✗ ✗ ✗





                               Why? ──────────────────────────►
```

---

![Presentation asset example](./assets/sarah-hired.png)

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
           │           
           ▼

         what could go wrong?  ──────────────────────────────►
```

---

```text

            WHAT ACTUALLY HAPPENS (without onboarding)         
   ───────────────────────────────────────────────────────────────

       Week 1          Week 2          Week 3          Week 4

    "What do I      "I'll just      "Nobody told    "Everything
     work on?"       guess how       me we don't     I built
                     we do this"     do it that      is wrong"
                                      way..."
        ?               ~               ✗               ✗✗

        😕              🤷              😬              😩   
    ┌───────┐       ┌───────┐        ┌───────┐       ┌───────┐
    │ lost  │──────►│ guess │───────►│ wrong │──────►│ redo  │
    │       │       │       │        │ work  │       │ every │
    │       │       │       │        │       │       │ thing │
    └───────┘       └───────┘        └───────┘       └───────┘



    ╔═════════════════════════════════════════════════════════════╗
    ║  ✗ Wasted 4 weeks            ✗ New hire demoralized         ║
    ║  ✗ Team frustrated           ✗ Manager doing damage control ║
    ╚═════════════════════════════════════════════════════════════╝
```

---

![Presentation asset example](./assets/sarah-upset.png)

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │         HIRING WITH PROPER ONBOARDING                         │
    └───────────────────────────────────────────────────────────────┘

         DAY 1
    ┌─────────────┐
    │  "Welcome!  │
    │   Let's set │
    │   you up    │
    │   for       │
    │   success." │
    └──────┬──────┘
           │
           ▼
    ┌──────────────────────────────────────────────────────────────┐
    │                    ONBOARDING SYSTEM                         │
    │                                                              │
    │  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  │
    │  │  1. CONTEXT    │  │  2. CLEAR      │  │  3. STANDARDS  │  │
    │  │                │  │     TASKS      │  │                │  │
    │  │  "Here's how   │  │                │  │  "Here's how   │  │
    │  │   we work,     │  │  "Here's your  │  │   we name,     │  │
    │  │   our tools,   │  │   first project│  │   write, and   │  │
    │  │   our history" │  │   and goals"   │  │   format"      │  │
    │  └────────────────┘  └────────────────┘  └────────────────┘  │
    │                                                              │
    └─────────────────────────────┬────────────────────────────────┘
                                  │
                                  ▼
                         what happens next?  ─────────────────►
```

---

```text

               WHAT ACTUALLY HAPPENS (with onboarding)               
    ───────────────────────────────────────────────────────────────

          Week 1          Week 2          Week 3          Week 4
   
       "I know the     "First task     "Got feedback,  "Running
        system and      done, matches   improved my     independ-
        the goals"      our standards"  approach"       ently!"
   
           ✓               ✓✓              ✓✓             ✓✓✓
   
   
            🙂             😊            💪              🚀    
        ┌───────┐      ┌───────┐      ┌───────┐      ┌───────┐
        │orient │─────►│deliver│─────►│refine │─────►│ own   │
        │       │      │       │      │       │      │ it    │
        │       │      │       │      │       │      │       │
        └───────┘      └───────┘      └───┬───┘      └───────┘
                                          ▲
                                          │
                                   ┌──────┴──────┐
                                   │ 4. FEEDBACK │
                                   │    LOOP     │
                                   │  "Here's    │
                                   │   what to   │
                                   │   adjust"   │
                                   └─────────────┘
   
   ╔══════════════════════════════════════════════════════════════╗
   ║  ✓ Productive by week 2      ✓ New hire confident            ║
   ║  ✓ Team trusts the output    ✓ Manager leads, not fixes      ║
   ╚══════════════════════════════════════════════════════════════╝

       
```

---

![Presentation asset example](./assets/sarah-proud.png)

---

```text
    ┌──────────────────────────┐    ┌──────────────────────────┐
    │     ✗  THE BAD WAY       │    │     ✓  THE GOOD WAY      │
    ├──────────────────────────┤    ├──────────────────────────┤
    │                          │    │                          │
    │                          │    │                          │
    │  "here's a laptop"       │    │  "here's your plan"      │
    │                          │    │                          │
    │  Week 1:  ?  (lost)      │    │  Week 1:  ✓  (oriented)  │
    │  Week 2:  ~  (guessing)  │    │  Week 2:  ✓✓ (delivers)  │
    │  Week 3:  ✗  (wrong)     │    │  Week 3:  ✓✓ (refines)   │
    │  Week 4:  ✗✗ (rework)    │    │  Week 4:  ✓✓✓(owns it)   │
    │                          │    │                          │
    │                          │    │                          │
    └──────────────────────────┘    └──────────────────────────┘

     ══════════════════════════════════════════════════════════
      Now replace 👤 with 🤖 ...  same story, same lesson.
     ══════════════════════════════════════════════════════════
```

---

<!-- ## Slide (Section: human-vs-agent) -->

```text
┌───────────────────────────────────────────────────────────────┐
│                  HUMAN VS AGENT MAPPING                       │
└───────────────────────────────────────────────────────────────┘



        👤 Human hire                    🤖 AI agent
        -------------                    -----------

        Onboarding       <--------->     Context / MCP

        Clear task       <--------->     Prompt / intent
         
        Team standards   <--------->     Skill / template
         
        Feedback         <--------->     Validation / iteration
          
```

--

```text
                       STRONG INTELLIGENCE
                                
                                │
                                ▼
                      ┌───────────────────┐
                      │  NO REAL CONTEXT  │
                      └─────────┬─────────┘
                                │
        ┌───────────────┬───────┴───────┬───────────────┐
        │               │               │               │
        ▼               ▼               ▼               ▼
        
   Vague Work      Wrong Task      Bad Format    Weak Alignment

        │               │               │               │
        └───────────────┴───────┬───────┴───────────────┘
                                │
                                ▼
                        Unreliable Output
```

--

```text

                  GOOD ONBOARDING FOR AGENTS                   



  
  
    ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
    │  [1] CONTEXT  │   │  [2] INTENT   │   │ [3] STANDARDS │
    ├───────────────┤   ├───────────────┤   ├───────────────┤
    │  Jira         │   │  goal         │   │  templates    │
    │  architecture │   │  scope        │   │  format       │
    │  history      │   │  outcome      │   │  rules        │
    └───────┬───────┘   └───────┬───────┘   └───────┬───────┘
            │                   │                   │
            └───────────────────┼───────────────────┘
                                │
                                ▼
                  ╔═══════════════════════════╗
          ┌──────►║        AI   AGENT         ║
          │       ╚═════════════╤═════════════╝
          │                     │
          │                     ▼
          │       ┌─────────────────────────┐
          │       │      BETTER OUTPUT      │
          │       └─────────────┬───────────┘
          │                     │
          │       ┌─────────────┴───────────┐
          │       │     [4] FEEDBACK        │
          └───────┤  review ∙ refine ∙ fix  │
                  └─────────────────────────┘
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                       KEY INSIGHT                             │
    └───────────────────────────────────────────────────────────────┘



              ✗  STOP thinking of AI agents as SOFTWARE

                         📦 ──► 🔌 ──► done?

                              NO.



              ✓  START thinking of them as your COLLEAGUES

                         👤 ──► 📋 ──► 🚀

                              YES.


    ╔═════════════════════════════════════════════════════════════╗
    ║                                                             ║
    ║   You don't install a colleague.  You ONBOARD them.         ║
    ║                                                             ║
    ╚═════════════════════════════════════════════════════════════╝
```

---

<pre class="ascii-morph-stage" data-ascii-morph="workflow-slider"><code>                         ┌──────────────────────────────────────── Agentic Workflow ──────────────────────────────────────┐
                         │                                                                                                │
                         │ ┌── Context ───────────────────────────────────────────────────────────────────────────────┐   │
                         │ │                                                                                          │   │
                         │ │      Specs                                                                               │   │
                         │ │      Code                                                                                │   │
  Requests,              │ │      Docs                      ┌── Rules ────────────────────────────────────────────┐   │   │
  Feedback,              │ │      Decisions                 │                                                     │   │   │
  Bugs,               ◄────────►  Tickets                 ◄───►  Automations    ┌── Agents ───────────────────┐   │   │   │
  Requirements,          │ │      Patterns                  │    Skills         │                             │   │   │   │
  User stories           │ │                                │    Permissions   ◄──►       [█████████]         ◄──────────────► Output
                         │ │                                │                   │                             │   │   │   │
                         │ │                                │                   └─────────────────────────────┘   │   │   │
                         │ │                                └─────────────────────────────────────────────────────┘   │   │
                         │ │                                                                                          │   │
                         │ └──────────────────────────────────────────────────────────────────────────────────────────┘   │
                         │                                                                                                │
                         └────────────────────────────────────────────────────────────────────────────────────────────────┘</code></pre>

--

```text

                                             AGENT COMPONENTS


                        👤 PM / Developer
                               │
                               │  intent
                               ▼
    ┌───────────────────────────────────────────────────────────┐
    │                                                           │
    │   SKILLS tell the agent                                   │
    │   ─────────────────────────────────────────────────       │
    │   "Follow our ticket format, use acceptance criteria,     │
    │    name branches like this..."                            │
    │                                                           │      
    │                                                           │      
    │                                                           │      
    │                                                           │      
    │       ┌───────────────────────────────────────────┐       │    
    │       │                                           │       │    
    │       │   MCP connects to                         │       │    
    │       │   ─────────────────────────────────       │       │    
    │       │   Jira · GitHub · Slack · DB · Docs       │       │              Skills  =  HOW we work
    │       │                                           │       │              MCP     =  WHERE to connect
    │       │                                           │       │              Tools   =  WHAT to execute
    │       │                                           │       │              Plugins =  All of the above for reuse
    │       │                                           │       │
    │       │       ┌───────────────────────────┐       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │   TOOLS                   │       │       │
    │       │       │   ─────────────────────   │       │       │
    │       │       │   read · write · create   │       │       │
    │       │       │   search · update · call  │       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       └───────────────────────────┘       │       │
    │       │                                           │       │
    │       └───────────────────────────────────────────┘       │
    │                                                           │
    │                                                           │
    │                                                           │
    └──────────────────────────┬────────────────────────────────┘
                               │
                               ▼
                            OUTPUT
                     tickets · code · docs

```

--

```text
    VIBE CODING
    ─────────────────────────────────────────────────────────────

    👤 "make me a login page"  ──►  🤖  ──►  ???

    No context. No standards. No review.
    Fast but fragile. Fine for prototypes. Dangerous at scale.




    FULL AUTONOMOUS
    ─────────────────────────────────────────────────────────────

    🤖 decides  ──►  🤖 builds  ──►  🤖 ships  ──►  💥

    No human in the loop. No guardrails. No accountability.
    Impressive demos. Terrifying in production.




    AGENTIC WORKFLOW
    ─────────────────────────────────────────────────────────────

    👤 intent  ──►  context + rules  ──►  🤖 executes  ──►  👤 validates
                                            ▲                 │
                                            └─── feedback ────┘

    Human sets direction. Agent does the work. Human owns the output.
    Structured. Predictable. Scalable.
```
--

```text


                       Vibe          Full              Agentic
                       Coding        Autonomous        Workflow
                       ──────        ──────────        ────────

    Compliance            ✗              ✗                 ✓

    Audit trail           ✗              ✗                 ✓
    
    Consistency           ✗              ~                 ✓

    Accountability        ✗              ✗                 ✓

    Speed                 ✓              ✓                 ✓

    Scalability           ✓              ~                 ✓

    Team trust            ✗              ✗                 ✓


    ═══════════════════════════════════════════════════════════

    Vibe coding     =  fun, no control
    Full autonomous =  fast, no trust
    Agentic         =  fast AND controlled

```

--

```text
    Enterprises don't need faster chaos.
    They need structured speed.
```

---

```text
         ┌────────┐  ┌───────┐  ┌───────┐  ┌────────┐  ┌────┐  ┌───────┐  ┌────────┐
         │ Ticket │─►│  Spec │─►│ Code  │─►│ Review │─►│ QA │─►│ Build │─►│ Deploy │
         └────────┘  └───────┘  └───────┘  └───┬────┘  └─┬──┘  └───────┘  └────────┘
             ▲                                 │         │
             ╵                                 │         │
          Backlog                              │         │
             ╷                                 │         │
             │      ┌───────────────────┐      │         │
             └──────┤    New Ticket     │◄─────┘         │
                    │  (Scope Control)  │◄───────────────┘
                    └───────────────────┘             
```

--

```text

    You define intent. You verify output. AI handles the brickwork.




             🤖 EXECUTION                       🛑 HUMAN GATE
             ────────────                       ─────────────

      1. Agent drafts the tech spec  ─────►  👤 Approve Architecture
                                                    │
                                                    ▼
      2. Agent writes the code       ─────►  👤 Code Review (Look Good To Me)
         and unit tests                             │
                                                    ▼
      3. Agent does the code review  ─────►  👤 Approve for Deployment




    ╔═══════════════════════════════════════════════════════════════════╗
    ║   The bottleneck is no longer writing the code.                   ║
    ║   The bottleneck is defining the intent and verifying the output. ║
    ╚═══════════════════════════════════════════════════════════════════╝
```

--


```text

            👤🤖        🤖👤         👤          🤖          👤        🤖👤      🤖         👤
         ┌────────┐  ╔═══════╗  ┌────────┐  ╔═══════╗  ┌────────┐  ╔════╗  ╔═══════╗  ┌────────┐
         │ Ticket │─►║ Spec  ║─►│ Verify │─►║ Code  ║─►│ Review │─►║ QA ║─►║ Build ║─►│ Deploy │
         └────────┘  ╚═══════╝  └────────┘  ╚═══════╝  └───┬────┘  ╚═╤══╝  ╚═══════╝  └────────┘
              ▲                                            │         │
              ╵                                            │         │
           Backlog                                         │         │
              ╷                                            │         │
              │                  ╔═══════════════════╗     │         │
              └──────────────────╢   New Ticket      ║◄────┘         │
                                 ║  (Scope Control)  ║◄──────────────┘
                                 ╚═══════════════════╝
                                          🤖👤

```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                 AGENT PLAYBOOK FOR ENGINEERS                  │
    └───────────────────────────────────────────────────────────────┘


       Every step needs two things:
       clear context in, one concrete artifact out.


       STEP      CALL        SKILL / TOOL
       ────      ────        ────────────

       Spec      /spec       Spec Generation Skill
       Code      /code       Coding Skill
       Review    /review     Local Code Review Skill
       QA        /qa         QA Skill + Playwright MCP
       Ticket    /ticket     Ticket Generation Skill
       ADR       /adr        ADR Generation Skill
       PR        auto        GitHub Review Agent


    ═════════════════════════════════════════════════════════════════
       Better context in -> better output out.
       That is the whole loop.
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │              [1] SPEC  ─  CREATE THE SHARED PLAN              │
    └───────────────────────────────────────────────────────────────┘

    TRIGGER   Assigned an Epic / Requirement ticket.
    OUTPUT    /docs/specs/PROJ-1234.md
    PURPOSE   One parent ticket, one shared plan for child work.


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /spec PROJ-1234
    >
    > Read Epic / Requirement ticket PROJ-1234 from Jira.
    > Draft /docs/specs/PROJ-1234.md with:
    > - problem
    > - proposed solution
    > - API / data changes
    > - acceptance criteria
    > - open questions / risks


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: one parent ticket = one spec. Every child ticket     │
    │  must point back to that file.                              │
    └─────────────────────────────────────────────────────────────┘
```

--

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                 [1A] SPEC = THE DELTA                         │
    └───────────────────────────────────────────────────────────────┘


    WHAT WE WANT                                    WHAT WE HAVE
    ────────────                                    ────────────

    ┌──────────────────┐                    ┌──────────────────┐
    │                  │                    │                  │
    │  Ticket /        │                    │  Code on main    │
    │  Requirement     │                    │                  │
    │                  │                    │  current         │
    │  desired         │                    │  behavior,       │
    │  behavior,       │                    │  current         │
    │  business need   │                    │  system          │
    │                  │                    │                  │
    └────────┬─────────┘                    └────────┬─────────┘
             │                                       │
             │              ┌───────┐                │
             └─────────────►│  GAP  │◄───────────────┘
                            └───┬───┘
                                │
                    ┌───────────▼───────────┐
                    │                       │
                    │     S P E C           │
                    │                       │
                    │  the exact delta      │
                    │  from here to there   │
                    │                       │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  Code + Tests + Merge │
                    └───────────────────────┘


    ═══════════════════════════════════════════════════════════════
    The spec is not a wish list.  It is the measured gap
    between what the ticket asks and what main has today.
    Code is how we close that gap.  Nothing more.
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                  [2] CODING  ─  CONTEXT FIRST                 │
    └───────────────────────────────────────────────────────────────┘

    Never start with "implement this" alone.
    Give the agent the task, the parent, and the spec.

         ┌──────────────────────┐
         │ 1. Task ticket       │  what changed now
         │ 2. Parent ticket     │  why it exists
         │ 3. Spec file         │  how it should fit
         └──────────┬───────────┘
                    │
                    ▼
               agent writes code


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /code PROJ-1234-subtask-01
    >
    > Context:
    > - Task: PROJ-1234-subtask-01
    > - Parent: PROJ-1234
    > - Spec: /docs/specs/PROJ-1234.md
    >
    > Implement only this task.
    > Follow the spec.
    > Add tests for new behavior.


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: no context, no code.                                 │
    └─────────────────────────────────────────────────────────────┘

```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │          [3] LOCAL REVIEW  ─  SAME CONTEXT, NEW LENS          │
    └───────────────────────────────────────────────────────────────┘

    Review is not for style nits.
    Review asks: did this branch solve the right problem well?


         ┌──────────────────────┐
         │ Branch diff          │  what changed
         │ Task ticket          │  what was asked
         │ Parent ticket        │  why it exists
         │ Spec file            │  what was agreed
         └──────────┬───────────┘
                    │
                    ▼
               agent reviews


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /review feature/PROJ-1234-subtask-01
    >
    > Review this branch against:
    > - task ticket
    > - parent ticket
    > - /docs/specs/PROJ-1234.md
    >
    > Check for:
    > - logic mistakes
    > - missing tests
    > - security risks
    > - drift from agreed scope


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: review locally before PR. PR review should confirm   │
    │  quality, not discover basics.                              │
    └─────────────────────────────────────────────────────────────┘

```
--

```text
    ┌───────────────────────────────────────────────────────────────┐
    │        [3A] SUBAGENT REVIEW  ─  SIX LENSES                    │
    └───────────────────────────────────────────────────────────────┘


                   📦 PINNED REVIEW UNIT
               (ticket + spec + diff + proof)
                             │
                             ▼
                             🤖
      ┌───────────────────────────────────────────────────────────────┐
      │                     6 PARALLEL SUBAGENTS                      │
      ├───────────────────────────────────────────────────────────────┤
      │  [ Contract ]       ──► APIs, Compatibility, Interfaces       │
      │  [ Correctness ]    ──► Business Logic, Invariants, Edge Cases│
      │  [ State ]          ──► DB, Persistence Integrity, Migrations │
      │  [ Resilience ]     ──► Performance, Operability, Timeouts    │
      │  [ Security ]       ──► Privacy, Abuse Risks, Auth, Leaks     │
      │  [ Verification ]   ──► Tests, Evidence, Reproducibility      │
      └───────────────────────────────┬───────────────────────────────┘
                             │
                             ▼
                 🎯 MERGED FINDINGS & SIGNAL
                (1 lens each = less overlap)


    ═════════════════════════════════════════════════════════════════
       Each agent stays focused on one topic.
       Together they cut blind spots.
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │         [4] QA  ─  TEST THE APP, NOT JUST THE DIFF            │
    └───────────────────────────────────────────────────────────────┘

    Use Playwright MCP when acceptance depends on real behavior.


          ┌─────────┐     ┌──────────────┐     ┌────────────┐
          │ Agent   │────►│ Playwright   │────►│ Running App│
          └─────────┘     │ MCP          │     └────────────┘
                          └──────────────┘


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /qa PROJ-1234-subtask-01
    >
    > Context:
    > - Task: PROJ-1234-subtask-01
    > - Spec: /docs/specs/PROJ-1234.md
    > - URL: http://localhost:3000
    >
    > Open the app in the browser.
    > Walk the acceptance criteria.
    > Check happy path + edge cases.
    > Screenshot failures.


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: if a user can click it, type in it, or wait on it,   │
    │  QA it in the browser.                                      │
    └─────────────────────────────────────────────────────────────┘

```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │        [5] NEW TICKETS  ─  PROTECT THE CURRENT SCOPE          │
    └───────────────────────────────────────────────────────────────┘

    Agents will find extra work.
    That does not mean the current ticket should absorb it.

    FOUND DURING WORK
    - unrelated bug
    - tech debt
    - follow-up improvement
    - "while we're here..." scope


    ACTION
    - create backlog ticket
    - link parent Epic
    - keep current branch focused


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /ticket
    >
    > While working on PROJ-1234-subtask-01, I found:
    > [describe the issue]
    >
    > Create a backlog ticket with:
    > - clear title
    > - impact / reproduction
    > - link to Epic PROJ-1234
    > - suggested priority
    > - acceptance criteria


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: scope creep goes to backlog, not the current         │
    │  branch.                                                    │
    └─────────────────────────────────────────────────────────────┘
```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │               [6] ADR  ─  WRITE DOWN THE WHY                  │
    └───────────────────────────────────────────────────────────────┘

    Code shows what changed.
    ADR explains why this change exists and why this design won.

    WHEN     Before merge. After local review passes.
    SAVE TO  /docs/ADRs/2026-04-12-PROJ-1234-subtask-01.md


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > /adr feature/PROJ-1234-subtask-01
    >
    > Context:
    > - Branch: feature/PROJ-1234-subtask-01
    > - Task: PROJ-1234-subtask-01
    > - Spec: /docs/specs/PROJ-1234.md
    >
    > Write an ADR with:
    > - context
    > - decision
    > - alternatives considered
    > - consequences
    >
    > Save to /docs/ADRs/2026-04-12-PROJ-1234-subtask-01.md


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: if the decision mattered, do not leave future        │
    │  engineers to reconstruct it from git.                      │
    └─────────────────────────────────────────────────────────────┘

```

---

```text
    ┌───────────────────────────────────────────────────────────────┐
    │                  [7] PR REVIEW  ─  FINAL AUDIT                │
    └───────────────────────────────────────────────────────────────┘

    By PR time, the branch should already have:
    spec + code + local review + QA + ADR


       spec -> code -> local review -> QA / ADR -> PR -> GH review


    PR AGENT SHOULD FIND
    - missing links to context
    - scope drift
    - missing tests
    - undocumented decisions

    NOT THIS
    - first discovery of obvious logic bugs


    PROMPT SHAPE
    ─────────────────────────────────────────────────────────────────

    > Review this PR against:
    > - linked ticket context
    > - spec file
    > - ADR
    >
    > Check for:
    > - scope drift
    > - missing tests
    > - security issues
    > - undocumented decisions


    ┌─────────────────────────────────────────────────────────────┐
    │  RULE: if PR review keeps finding basics, tune the          │
    │  upstream prompts and skills.                               │
    └─────────────────────────────────────────────────────────────┘
```
