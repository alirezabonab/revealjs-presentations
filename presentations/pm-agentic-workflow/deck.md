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
    ┌───────────────────────────────────────────────────────────────┐
    │         WHAT ACTUALLY HAPPENS (without onboarding)            │
    └───────────────────────────────────────────────────────────────┘

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
    ┌───────────────────────────────────────────────────────────────┐
    │         WHAT ACTUALLY HAPPENS (with onboarding)               │
    └───────────────────────────────────────────────────────────────┘

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

    ╔═════════════════════════════════════════════════════════════╗
    ║  ✓ Productive by week 2      ✓ New hire confident           ║
    ║  ✓ Team trusts the output    ✓ Manager leads, not fixes     ║
    ╚═════════════════════════════════════════════════════════════╝

       
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

```text

                                             AGENT COMPONENTS


                     👤 PM / Developer
                            │
                            │  intent
                            ▼
    ┌───────────────────────────────────────────────────────────┐
    │                                                           │
    │   SKILLS tell the agent         WHAT to do & HOW          │
    │   ─────────────────────────────────────────────────       │
    │                                                           │
    │                                                           │
    │   "Follow our ticket format, use acceptance criteria,     │
    │    name branches like this..."                            │
    │                                                           │      
    │                                                           │      
    │                                                           │      
    │                                                           │      
    │       ┌───────────────────────────────────────────┐       │    
    │       │                                           │       │    
    │       │   MCP connects to          WHERE          │       │    
    │       │   ─────────────────────────────────       │       │    
    │       │   Jira · GitHub · Slack · DB · Docs       │       │              Skills  =  HOW we work
    │       │                                           │       │              MCP     =  WHERE to connect
    │       │                                           │       │              Tools   =  WHAT to execute
    │       │                                           │       │              Plugins =  All of the above for reuse
    │       │                                           │       │
    │       │       ┌───────────────────────────┐       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │                           │       │       │
    │       │       │   TOOLS execute   ACTION  │       │       │
    │       │       │   ─────────────────────   │       │       │
    │       │       │   read · write · create   │       │       │
    │       │       │   search · update · call  │       │       │
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

---

```text
                         ┌──────────────────────────────────────── Agentic Workflow ──────────────────────────────────────┐
                         │                                                                                                │
                         │ ┌── Context ───────────────────────────────────────────────────────────────────────────────┐   │
                         │ │                                                                                          │   │
                         │ │      Plans                                                                               │   │
                         │ │      Discussions                                                                         │   │
  Customer requests,     │ │      Specs                     ┌── Rules ────────────────────────────────────────────┐   │   │
  Feedbacks,             │ │      Technical designs         │                                                     │   │   │
  Bugs,               ◄────────►  Decisions               ◄───►  Automations    ┌── Agents ───────────────────┐   │   │   │
  Requrements,           │ │      Summaries                 │    Skills         │                             │   │   │   │
  User stories           │ │      Code                      │    Permissions   ◄──►       [█████████]         ◄──────────────► Product
                         │ │                                │                   │                             │   │   │   │
                         │ │                                │                   └─────────────────────────────┘   │   │   │
                         │ │                                └─────────────────────────────────────────────────────┘   │   │
                         │ │                                                                                          │   │
                         │ └──────────────────────────────────────────────────────────────────────────────────────────┘   │
                         │                                                                                                │
                         └────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

<!-- ## Slide (Section: ticket-skill) -->
```text
+---------------------------------------------------------------+
|                   STANDARDIZED TICKET SKILL                   |
+---------------------------------------------------------------+
|                                                               |
|  +---------------------------+                                |
|  | STANDARD TICKET SKILL     |                                |
|  +---------------------------+                                |
|  | 1. Title                  |                                |
|  | 2. Context                |                                |
|  | 3. Scope                  |                                |
|  | 4. Acceptance Criteria    |                                |
|  | 5. Dependencies / Risks   |                                |
|  | 6. Definition of Done     |                                |
|  +---------------------------+                                |
|              |                                                |
|              v                                                |
|     Consistent output every time                              |
|                                                               |
+---------------------------------------------------------------+
```

---

<!-- ## Slide (Section: feedback-loop) -->
```text
+---------------------------------------------------------------+
|                         FEEDBACK LOOP                         |
+---------------------------------------------------------------+
|                                                               |
|        +-------------+                                        |
|        |  AI OUTPUT  |                                        |
|        +-------------+                                        |
|               |                                               |
|               v                                               |
|        +-------------+                                        |
|        | PM REVIEWS  |                                        |
|        +-------------+                                        |
|           |       |                                           |
|     good  |       | refine                                    |
|           v       v                                           |
|     +---------+  +----------------+                           |
|     |  USE IT |  | adjust prompt / |                          |
|     +---------+  | skill / context |                          |
|                  +----------------+                           |
|                           |                                   |
|                           v                                   |
|                     better next run                           |
|                                                               |
+---------------------------------------------------------------+
```

---

<!-- ## Slide (Section: before-after) -->
```text
+---------------------------------------------------------------+
|                       BEFORE VS AFTER                         |
+---------------------------------------------------------------+
|                                                               |
|  +-----------------------+   +------------------------+       |
|  | BEFORE                |   | AFTER                  |       |
|  +-----------------------+   +------------------------+       |
|  | manual context        |   | MCP context fetch      |       |
|  | manual formatting     |   | standard skill         |       |
|  | variable quality      |   | predictable quality    |       |
|  | PM bottleneck         |   | PM validation role     |       |
|  +-----------------------+   +------------------------+       |
|                                                               |
+---------------------------------------------------------------+
```

---

<!-- ## Slide (Section: pm-role) -->
```text
+---------------------------------------------------------------+
|                         PM'S NEW ROLE                         |
+---------------------------------------------------------------+
|                                                               |
|  Old:                                                         |
|  PM -> writes work                                            |
|                                                               |
|  New:                                                         |
|  PM -> designs system -> agent produces work                  |
|                           |                                   |
|                           v                                   |
|                      team executes                            |
|                                                               |
+---------------------------------------------------------------+
```

---

<!-- ## Slide (Section: takeaway) -->
```text
+---------------------------------------------------------------+
|                         KEY TAKEAWAY                          |
+---------------------------------------------------------------+
|                                                               |
|  AI agents are not plug-and-play.                             |
|                                                               |
|  Weak onboarding   -> weak output                             |
|  Strong onboarding -> scalable execution                      |
|                                                               |
|  Treat the agent like a new colleague, not a new install.     |
|                                                               |
+---------------------------------------------------------------+
```
