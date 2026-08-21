<!-- ## Slide (Section: cover) -->
```text
       ╔════════════════════════════════════════════════════════════════════╗
       ║                                                                    ║
       ║                                                                    ║
       ║               R E Q U I R E M E N T   T I C K E T S                ║
       ║                                                                    ║
       ║                ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                 ║
       ║                                                                    ║
       ║             When to create one, and the rules we keep.             ║
       ║                                                                    ║
       ║                                                                    ║
       ║                      Team task-breakdown sync                      ║
       ║                                                                    ║
       ╚════════════════════════════════════════════════════════════════════╝
```

---

<!-- ## Slide (Section: what) -->
```text
               W H A T   I S   A   R E Q U I R E M E N T   T I C K E T ?
           ─────────────────────────────────────────────────────────────────
    
              One shippable slice of a feature — too big for a single PR.


    ┌── REQUIREMENT TICKET ────────────────────────────────────────────────────────┐
    │                                                                              │
    │      one agreed solution         ·         one set of contracts              │
    │                                                                              │
    │                                                                              │
    │    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
    │    │    task 1    │  │    task 2    │  │    task 3    │  │    task 4    │    │
    │    │              │  │              │  │              │  │              │    │
    │    │  PR-shaped   │  │  PR-shaped   │  │  PR-shaped   │  │  PR-shaped   │    │
    │    └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
    │                                                                              │
    │                                                                              │
    │      2 to 5 tasks         ·         each is small, reviewable, testable      │
    │                                                                              │
    └──────────────────────────────────────────────────────────────────────────────┘

               Create one only when the work splits into independent pieces:

                  ▪  it spans multiple services,  OR
                  ▪  several end-to-end steps must be chained together
```

---

<!-- ## Slide (Section: why) -->
```text
                               W H Y   W E   N E E D   R U L E S                                
                           ─────────────────────────────────────────                            

                 Same work, two outcomes — the rules decide which one you get.

   ╭───────────── WITHOUT RULES ─────────────╮      ╭────────────── WITH RULES ───────────────╮
   │                                         │      │                                         │
   │   ▪  contracts found mid-flight         │      │   ▪  contracts agreed up front          │
   │                                         │      │                                         │
   │   ▪  types change, rework tasks         │      │   ▪  2-5 fixed PR-shaped tasks          │
   │                                         │ ───> │                                         │
   │   ▪  ping-pong between tickets          │      │   ▪  slices build in parallel           │
   │                                         │      │                                         │
   │   ▪  "done" is unclear                  │      │   ▪  each task agent-verifiable         │
   │                                         │      │                                         │
   ├─────────────────────────────────────────┤      ├─────────────────────────────────────────┤
   │                                         │      │                                         │
   │          slow · rework · drift          │      │       fast · parallel · shippable       │
   │                                         │      │                                         │
   ╰─────────────────────────────────────────╯      ╰─────────────────────────────────────────╯

                  Rules turn coupled work into independent, shippable pieces.
```

---

<!-- ## Slide (Section: example) -->
```text
                     E X A M P L E   ·   N O T I F I C A T I O N   I N B O X                     
                 ─────────────────────────────────────────────────────────────────                 

                                       ╭─────────────────────────────────╮
                                       │                                 │
                                       │         CUSTOMER PORTAL         │
                                       │                                 │
                                       │       ▪  stores inbox state     │
                                       │       ▪  consumes events        │
                                       │                                 │
                                       ╰────────────────┬────────────────╯
                                                        ▲
                                                        │
                               ┌────────────────────────┼────────────────────────┐
                               │                        │                        │
                      ╭────────┴────────╮      ╭────────┴────────╮      ╭────────┴────────╮
                      │                 │      │                 │      │                 │
                      │    SERVICE A    │      │    SERVICE B    │      │    SERVICE C    │
                      │                 │      │                 │      │                 │
                      │ ▪ owns state    │      │ ▪ owns state    │      │ ▪ owns state    │
                      │ ▪ emits events  │      │ ▪ emits events  │      │ ▪ emits events  │
                      │                 │      │                 │      │                 │
                      ╰─────────────────╯      ╰─────────────────╯      ╰─────────────────╯

                   Independent slices, one feature   →   a requirement ticket is warranted.
```

---

<!-- ## Slide (Section: sizing) -->
```text
                     G R O U P I N G   V S .   S P L I T T I N G                     
                 ─────────────────────────────────────────────────                   

        How many requirement tickets? It depends on the complexity of the slices.

    ╭── S M A L L   S L I C E S ────────────╮    ╭── C O M P L E X   S L I C E S ────────╮
    │                                       │    │                                       │
    │  ▪ Service A: minor update (1 task)   │    │  ▪ Service A needs:                   │
    │  ▪ Service B: minor update (1 task)   │    │      - Backend API changes            │
    │  ▪ Portal UI: minor update (1 task)   │    │      - Frontend UI updates            │
    │                                       │    │      - DB migration & backfill        │
    │                                       │    │                                       │
    │       1 Requirement Ticket for        │    │        Service A gets its OWN         │
    │            all 3 services             │    │          Requirement Ticket           │
    │                                       │    │                                       │
    ╰───────────────────────────────────────╯    ╰───────────────────────────────────────╯

                 Rule of thumb: keep it to 2-5 tasks per requirement ticket.
```

---

<!-- ## Slide (Section: rules) -->
```text
                         T H E   R U L E S   W E   K E E P                          
                     ─────────────────────────────────────────                      

     ┌────────────────────────────────────────────────────────────────────────┐
     │                                                                        │
     │  1   SIZE        2-5 PR-shaped tasks per requirement ticket            │
     │                                                                        │
     │  2   SHAPE       each task is reviewable, testable, runnable, and      │
     │                  verifiable end-to-end by a coding agent               │
     │                                                                        │
     │  3   TRIGGER     only when multi-service OR chained end-to-end         │
     │                                                                        │
     │  4   CONTRACTS   define types & interfaces up front, before tasks      │
     │                                                                        │
     │  5   ALIGN       eng + solution architect + senior agree first         │
     │                                                                        │
     └────────────────────────────────────────────────────────────────────────┘

               Contracts up front kill the after-the-fact ping-pong.
```

---

<!-- ## Slide (Section: shaping skill) -->
```text
                 S H A P E   R E Q U I R E M E N T   S K I L L                   
                 ─────────────────────────────────────────────                   

              What does it take to shape a good Requirement Ticket?

          ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
          │      RULES      │  │   CODE ACCESS   │  │ PRODUCT CONTEXT │
          └────────┬────────┘  └────────┬────────┘  └────────┬────────┘
                   │                    │                    │
                   └────────────────────┼────────────────────┘
                                        ▼
                        ╭───────────────────────────────╮
                        │     IDENTIFY CHANGE SCOPE     │
                        ╰───────────────┬───────────────╯
                                        │
                                        ▼
                        ╔═══════════════════════════════╗
                        ║           MAIN JOB:           ║
                        ║                               ║
                        ║    Slice the work into the    ║
                        ║     right sizes and sets.     ║
                        ╚═══════════════════════════════╝
```

---

<!-- ## Slide (Section: your input) -->
```text
                                Y O U R   I N P U T                                 
                            ───────────────────────────                             

        ┌─ LET'S PRESSURE-TEST THIS ───────────────────────────────────────┐
        │                                                                  │
        │   ▪  Does 2-5 tasks feel right, or too rigid / too loose?        │
        │                                                                  │
        │   ▪  Where would these rules actually slow us down?              │
        │                                                                  │
        │   ▪  What's missing from the definition or the rules?            │
        │                                                                  │
        │   ▪  Who writes the contracts, and at what point?                │
        │                                                                  │
        │   ▪  How do we handle a ticket that grows past 5 tasks?          │
        │                                                                  │
        └──────────────────────────────────────────────────────────────────┘

                      Bring an example from your current work.
```
