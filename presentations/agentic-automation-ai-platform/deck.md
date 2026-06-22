<!-- ## Slide (Section: cover) -->
```text
    ╔═══════════════════════════════════════════════════════════════════════════╗
    ║                                                                           ║
    ║                                                                           ║
    ║   ██████╗ ██╗      █████╗ ████████╗███████╗ ██████╗ ██████╗ ███╗   ███╗   ║
    ║   ██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██╔══██╗████╗ ████║   ║
    ║   ██████╔╝██║     ███████║   ██║   █████╗  ██║   ██║██████╔╝██╔████╔██║   ║
    ║   ██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║   ║
    ║   ██║     ███████╗██║  ██║   ██║   ██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║   ║
    ║   ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝   ║
    ║                                                                           ║
    ║                       A U T O M A T I O N   /   A I                       ║
    ║                                                                           ║
    ║               ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─               ║
    ║                                                                           ║
    ║                 One controlled layer to make the company                  ║
    ║                    queryable, insightful, and agentic.                    ║
    ║                                                                           ║
    ║                                                                           ║
    ║                                                            June 2026      ║
    ║                                                                           ║
    ╚═══════════════════════════════════════════════════════════════════════════╝
```

Notes:
Open on the proposal as a platform, not a tool. The whole pitch in one line: turn the data, knowledge, and systems we already have into one controlled layer people can ask and act on. Compliance note for an FI-supervised business: this is an internal capability story — any later extension into credit scoring or risk assessment is high-risk AI under the EU AI Act (Annex III) and needs CTO + compliance review first.

---

<!-- ## Slide (Section: demand) -->
```text
                      W H A T   P E O P L E   A C T U A L L Y   A S K   F O R                       
              ────────────────────────────────────────────────────────────────────────              


          REPORTING & INSIGHT                                                             
          ████████████████████████████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░
          ▪ how are we doing · daily reports · dashboards · answers


          DATA ACTIONS (read · ingest · transform)                                        
          ██████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
          ▪ move and shape data — then feed it back into reporting


          PURE ACTIONS (email · SMS · push to API)                                        
          ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
          ▪ actually change something in another system
```

Notes:
Set expectations before architecture. The overwhelming majority of real requests are reporting and insight — "show me", "how are we doing". A smaller slice is data actions: read, ingest, transform, and prepare data so it can be reported on again. Only a small slice is pure action — send an email or SMS, push data to a third-party API.

---

<!-- ## Slide (Section: demand takeaway) -->
```text
  ╔══════════════════════════════════════════════════════════════════════════╗  
  ║                                                                          ║  
  ║                                                                          ║  
  ║                        Most demand is insight.                           ║  
  ║                                                                          ║  
  ║                 Most "actions" still serve reporting.                    ║  
  ║                                                                          ║  
  ║                                                                          ║  
  ╚══════════════════════════════════════════════════════════════════════════╝  
```

Notes:
The platform should be built insight-first, with safe actions as the smaller, controlled edge. The numbers are directional, not measured.


---

<!-- ## Slide (Section: current foundation) -->
```text
                                W H A T   W E   A L R E A D Y   H A V E                                 
                        ────────────────────────────────────────────────────────                        

╭──────────────────────────────╮    ╭──────────────────────────────╮    ╭──────────────────────────────╮
│                              │    │                              │    │                              │
│        DATA PLATFORM         │    │        KNOWLEDGE BASE        │    │           CODEBASE           │
│             GCP              │    │         agent-skills         │    │           in-house           │
├──────────────────────────────┤    ├──────────────────────────────┤    ├──────────────────────────────┤
│ ▪ Enklare · Entra            │    │ ▪ product                    │    │ ▪ APIs                       │
│ ▪ Google Analytics           │    │ ▪ organization               │    │ ▪ data contracts             │
│ ▪ Google Ads · Meta          │    │ ▪ process                    │    │ ▪ service owners             │
│ ▪ Insider · Leaddesk         │    │ ▪ architecture               │    │ ▪ behavior                   │
│ ▪ operational data           │    │                              │    │                              │
│ ▪ ML models                  │    │                              │    │                              │
│                              │    │                              │    │                              │
╰──────────────────────────────╯    ╰──────────────────────────────╯    ╰──────────────────────────────╯
   

                          The foundation is here — we do not start from zero.                          

```

Notes:
The foundation exists. The proposal is not "start from zero" — it is unlocking existing assets with one real platform.


---

<!-- ## Slide (Section: gap) -->
```text
                        T H E   T R A N S L A T I O N   G A P                         
                   ────────────────────────────────────────────────────────                   


╭─ BUSINESS LANGUAGE ──────────────╮                      ╭─ TECHNICAL REALITY ──────────────╮
│                                  │                      │                                  │
│  ▪ "lead quality"                │        manual        │  ▪ events · tables · IDs         │
│  ▪ "sales performance"           │◀────────────────────►│  ▪ services · dashboards         │
│  ▪ "customer problem"            │     translation      │  ▪ tickets · calls               │
│  ▪ "campaign impact"             │                      │  ▪ attribution · funnels         │
│                                  │                      │                                  │
╰──────────────────────────────────╯                      ╰──────────────────────────────────╯


                      Slow. Manual. Needs a person who knows both sides.                      
```

Notes:
The core organizational pain: business questions on one side, system reality on the other, and a human translating in between. The platform should own this translation.

---

<!-- ## Slide (Section: vision) -->
```text
                                 T H E   V I S I O N                                  
                                                                                      
  ╔════════════════════════════════════════════════════════════════════════════════╗  
  ║                                                                                ║  
  ║                                                                                ║  
  ║         A company you can simply ask — and it answers or takes action.         ║  
  ║                                                                                ║  
  ║                          Not just another dashboard.                           ║  
  ║                                                                                ║  
  ║                                                                                ║  
  ╚════════════════════════════════════════════════════════════════════════════════╝  
```

Notes:
The vision in one frame: pair the data platform with reasoning agents (Codex / Claude) so anyone can ask in plain language and get a grounded answer back in business terms. The goal is to make the whole organization queryable and insightful — not to add one more dashboard. Data gives the facts, the agent gives the reasoning and translation.


---

<!-- ## Slide (Section: the engine) -->
```text
                                 T H E   E N G I N E                                  
                       ───────────────────────────────────────                        





                                    DATA PLATFORM                                     
                                          +                                           
  ╭───────────────────────╮         KNOWLEDGE BASE         ╭─────────────────────────╮
  │                       │               +                │                         │
  │ ask in plain language │  ───►     CODEBASE      ───►   │ a clear answer / action │
  │                       │               +                │                         │
  ╰───────────────────────╯       SYSTEMS & SERVICES       ╰─────────────────────────╯
```

---

<!-- ## Slide (Section: proposal) -->
```text
                                      T H E   P L A T F O R M                                
                            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━      



                                                                                      
       SOURCES                             CONTROL LAYER                      INTERFACES  
                                                                                           
┌────────────────────┐                                                                        
│ DATA PLATFORM      │                                                                        
│ facts · metrics    │──┐                                                                     
│ models             │  │                                                                     
└────────────────────┘  │                                                                     
                        │     ┌───────────────────────────────────┐                           
┌────────────────────┐  │     │                                   │      ┌───────────────────┐
│ KNOWLEDGE GRAPH    │  │     │     AUTOMATION / AI PLATFORM      │      │ Slack apps        │
│ context · terms    │  ├────►│                                   │─────►│ Chat support      │
│ codebase           │  │     │    RBAC · tools · Skills / MCP    │      │ Codex / Claude    │
└────────────────────┘  │     │ agents · query · actions · audits │      └───────────────────┘
                        │     └───────────────────────────────────┘                           
┌────────────────────┐  │                                                                     
│ SYSTEMS & SERVICES │  │                                                                     
│ APIs · events      │──┘                                                                     
│ actions            │                                                                        
└────────────────────┘                                                                        
```    

Notes:
The architecture in one picture. The platform is not just a chatbot UI — it is identity, permissions, tools, agents, query, actions, and logs, sitting between data + knowledge and the interfaces.

--

<!-- ## Slide (Section: flow) -->
```text
                              H O W   A   R E Q U E S T   W O R K S                       
                            ────────────────────────────────────────                     
                                                                                          
                       user asks in business language                                     
                                     │                                                    
                                     ▼                                                    
                    ┌───────────────────────────┐                                         
                    │   identify user + role    │ ──► RBAC decides what is allowed        
                    └─────────────┬─────────────┘                                         
                                  │                                                       
                                  ▼                                                       
                    ┌───────────────────────────┐                                         
                    │         map terms         │ ──► business words to data + systems    
                    └─────────────┬─────────────┘                                         
                                  │                                                       
                                  ▼                                                       
                    ┌───────────────────────────┐                                         
                    │     plan + call tools     │ ──► query data · read context · call services
                    └─────────────┬─────────────┘                                         
                                  │                                                       
                                  ▼                                                       
                    ┌───────────────────────────┐                                         
                    │   answer or take action   │ ──► report · workflow · update · notify 
                    └─────────────┬─────────────┘                                         
                                  │                                                       
                                  ▼                                                       
                  every step is logged + traceable (audit)                                
```

Notes:
Where safety and usefulness meet. Every request is grounded in identity, context, tools, and an audit trail. This is the governance story for an FI-supervised business.

---

<!-- ## Slide (Section: use cases) -->
```text
                              W H A T   T H I S   E N A B L E S                               
                            ─────────────────────────────────────                             
                                                                                              
      ┌─ SALES ────────────────┐  ┌─ MARKETING ────────────┐  ┌─ CUSTOMER SERVICE ─────┐      
      │ daily report           │  │ ads + sales data       │  │ customer context       │      
      │ next best action       │  │ campaign insight       │  │ approved actions       │      
      └────────────────────────┘  └────────────────────────┘  └────────────────────────┘      
                                                                                              
      ┌─ PRODUCT ──────────────┐  ┌─ ENGINEERING ──────────┐  ┌─ LEADERSHIP ───────────┐      
      │ process insight        │  │ system + code map      │  │ org-wide answers       │      
      │ user behavior          │  │ Codex workflows        │  │ governed actions       │      
      └────────────────────────┘  └────────────────────────┘  └────────────────────────┘      
                                                                                              
            One platform. Many interfaces. Same permissions and shared knowledge.             
```

Notes:
Use cases stay concrete, but the point is shared infrastructure. We should not build separate one-off bots per department — same permissions, same knowledge, many interfaces.

--

<!-- ## Slide (Section: example prompts) -->
```text
                               O N E   S E N T E N C E   A W A Y                              
                             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                          
                                                                                              
    ┌─ ENGINEERING ────────────────────────────────────────────────────────────────────┐      
    │                                                                                  │      
    │  "What was the exact error and stack trace for the last bug reported on the      │      
    │   customer portal?"                                                              │      
    │                                                                                  │      
    └──────────────────────────────────────────────────────────────────────────────────┘      
                                                                                              
    ┌─ SALES ──────────────────────────────────────────────────────────────────────────┐      
    │                                                                                  │      
    │  "How many retention meetings should I call today, and which accounts have       │      
    │   the highest probability of payout?"                                            │      
    │                                                                                  │      
    └──────────────────────────────────────────────────────────────────────────────────┘      
                                                                                              
    ┌─ MARKETING ──────────────────────────────────────────────────────────────────────┐      
    │                                                                                  │      
    │  "Compare our sales performance from last month with the latest Google Ads       │      
    │   campaign data and summarize the ROI."                                          │      
    │                                                                                  │      
    └──────────────────────────────────────────────────────────────────────────────────┘      
                                                                                              
    ┌─ CUSTOMER SERVICE ───────────────────────────────────────────────────────────────┐      
    │                                                                                  │      
    │  "Summarize the recent ticket history, active issues, and current sentiment      │      
    │   for this specific customer before I call them."                                │      
    │                                                                                  │      
    └──────────────────────────────────────────────────────────────────────────────────┘      
```

Notes:
These are concrete examples of what the platform enables. Instead of clicking through 4 different dashboards or asking a data analyst to run a query, anyone in the organization is just one sentence away from complex, cross-system insights. The platform handles the translation from their natural language into the underlying APIs and databases.


---

<!-- ## Slide (Section: closing) -->
```text
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                    T H A N K   Y O U                                         
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
                                                                                              
```