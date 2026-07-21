export function getBotResponse(input) {
  const lower = input.toLowerCase();
  for (let i = 0; i < responses.length; i++) {
    const keywords = responses[i].keywords;
    for (let j = 0; j < keywords.length; j++) {
      if (lower.includes(keywords[j])) {
        return responses[i].response;
      }
    }
  }
  return "I don't have a specific answer for that - try asking about a specific project, skill, or John's background. You can also reach him directly at jmoore19023@gmail.com or on LinkedIn at linkedin.com/in/johnmoore-ci.";
}

const responses = [

  /* GREETINGS */
  {
    keywords: ["hello", "hi", "hey", "greetings", "howdy", "sup", "what's up"],
    response: "Hey! I'm John's portfolio assistant. Ask me about his background, GPI projects, technical skills, or what he's targeting next. Or pick one of the prompts to get started."
  },

  /* ABOUT / BACKGROUND */
  {
    keywords: ["background", "who are you", "about john", "tell me about", "your story", "how did", "get started", "career path", "journey"],
    response: "John started on the plant floor at Graphic Packaging International and worked his way into a Continuous Improvement Operations Specialist role over eight years. He became the person people called when data needed to make sense - connecting enterprise systems, automating manual reports, and building tools that gave leadership visibility they didn't have before. He's now finishing an AAS in Computer Programming at Lake Land College and making the full move into data analytics and BI."
  },
  {
    keywords: ["gpi", "graphic packaging", "current job", "current role", "where do you work", "employer", "company"],
    response: "John is a Continuous Improvement Operations Specialist at Graphic Packaging International in Shelbyville, IL - a 700-person packaging manufacturing facility. His role sits at the intersection of operations and data: connecting enterprise systems, building automated reporting tools, and giving plant leadership real-time visibility into performance, spoilage, scheduling, and workforce readiness."
  },
  {
    keywords: ["continuous improvement", "operations specialist", "what do you do", "day to day", "daily work", "responsibilities"],
    response: "Day to day John connects data systems, builds reporting tools, and solves operational problems that don't have clean solutions yet. That might mean building a Power Query pipeline to merge two systems that were never designed to talk, writing a scheduling optimizer, or designing a dashboard that gives a department manager a live view of something they previously had to manually calculate. CI is the framing - data is the tool."
  },

  /* MES IMPLEMENTATION */
  {
    keywords: ["mes implementation", "ignition implementation", "ignition rollout", "mes rollout", "system rollout"],
    response: "The Ignition MES implementation was a full plant-wide rollout across 100+ pieces of equipment - presses, extruders, formers, cutters, and thermoformers. John co-led the project with the site electrical engineer, coordinated with corporate IoT teams, trained 700+ managers and operators as system super users, and verified tag values and system outputs as each piece of equipment came online. It was the project that made data the focus of his career."
  },
  {
    keywords: ["ignition", "mes", "manufacturing execution", "iot", "industrial", "scada"],
    response: "Ignition is the MES platform GPI uses to collect real-time machine data across the plant floor. John facilitated the rollout - getting 100+ machines connected, verified, and feeding live data into dashboards and reports. That MES data is now the foundation of most of the reporting infrastructure he's built since: spoilage correlation, fault analysis, production reporting, and cross-system dashboards."
  },

  /* SPOILAGE PIPELINE */
  {
    keywords: ["spoilage", "production correlation", "etl pipeline", "erp mes", "spoilage report", "spoilage correlation"],
    response: "The Plant Spoilage and Production Correlation report connects GPI's ERP via SQL and the MES via REST API - two enterprise systems that were never designed to share data. John built custom scaffolding in Power Query to merge the datasets using index key joins, then layered a 30-day trending view that breaks spoilage down from plant level to individual departments and correlates it against production volume. Leadership uses it daily to identify where to focus improvement efforts."
  },
  {
    keywords: ["etl", "extract transform", "data pipeline", "data integration", "rest api", "api connection"],
    response: "John's ETL work centers on Power Query as the transformation layer. He connects to ERP via SQL, MES via REST API, and legacy systems via ODBC, then builds M code functions that clean, reshape, and join data from sources that weren't designed to work together. The spoilage correlation project is the best example - it took two completely separate enterprise systems and produced a unified daily view of plant performance."
  },

  /* PRESS SCHEDULE OPTIMIZER */
  {
    keywords: ["press schedule", "schedule optimizer", "scheduling tool", "ink changeover", "flexographic", "print schedule", "run order"],
    response: "The Press Schedule Optimizer is a Power Query M tool that solves a real daily problem - deciding what order to run print jobs to minimize ink changeovers. It groups jobs by shared ink colors using greedy scheduling logic with forward-looking ink eviction. When adding a job would force a costly color change, the algorithm checks whether a future job sharing that ink justifies keeping it loaded. The output is a prioritized run order that reduces changeover time without manual planning."
  },
  {
    keywords: ["greedy", "algorithm", "optimization", "scheduling logic", "run order logic", "forward looking"],
    response: "The press scheduler uses a greedy algorithm - it makes the locally optimal choice at each step based on ink overlap while also looking ahead to avoid decisions that force expensive changes later. That forward-looking ink eviction piece is what makes it more than a simple sort. It's implemented entirely in Power Query M using list operations and conditional steps since M doesn't have traditional loop constructs."
  },

  /* TRAINING MATRIX */
  {
    keywords: ["training matrix", "training dashboard", "workforce dashboard", "headcount", "skill gap", "position coverage", "training progression"],
    response: "John recently overhauled a department training matrix and built an Excel dashboard tracking headcount, position coverage, training progression, and skill gaps across shifts. Department-level matrices feed into a plant-level view so upper management can see workforce readiness across the entire facility - who is trained on what, where gaps exist, and how balanced each shift is by position and skill. Implementation is currently scaling across all departments."
  },
  {
    keywords: ["plant level view", "workforce readiness", "shift balance", "department matrix"],
    response: "The training matrix is designed in two layers. Department managers maintain their own matrices tracking individual operator training status by position and skill module. Those feed into a plant-level dashboard John built for upper management - giving leadership a consolidated view of headcount, coverage ratios, training gaps, and shift balance without digging into individual department files. The goal is to surface workforce risk before it becomes a production problem."
  },

  /* CROSS-SYSTEM REPORTING */
  {
    keywords: ["cross system", "odbc", "qms", "reporting layer", "automated report", "daily report", "automated dashboard"],
    response: "John built a cross-system reporting infrastructure at GPI that merges MES, QMS, and ERP data via ODBC connections and REST API responses into a single Power Query flow. Reports refresh against live data with no manual exports or copy-paste reconciliation. Access databases serve as an intermediate query layer for legacy data sources. Plant leadership uses these dashboards daily."
  },

  /* FAULT ANALYSIS */
  {
    keywords: ["fault analysis", "sensor fault", "machine fault", "fault report", "anomaly", "sensor reliability", "fault frequency"],
    response: "The Machine Sensor Fault Analysis report pulls sensor fault data from the MES via API and flags machines at both extremes. High fault counts signal mechanical risk. Zero faults during active runtime flag potential sensor reliability failures - a machine that never faults while running may have a sensor that stopped reporting rather than a machine that's performing perfectly. Both problems were invisible before this report."
  },

  /* TECHNICAL SKILLS */
  {
    keywords: ["sql", "database query", "sql query", "structured query language"],
    response: "John uses SQL primarily for ERP connections - writing queries to pull run-level production data, joining tables, and aggregating records to compact large datasets into usable reporting layers. His strength is practical ETL-focused SQL: getting the right data in the right shape for downstream analysis in Power Query or Excel dashboards."
  },
  {
    keywords: ["power query", "m code", "power query m", "m language", "query editor"],
    response: "Power Query is one of John's strongest tools. He's built parameterized M functions that drive dozens of sheet queries from a single logic block, custom scaffolding to join datasets with no shared native key, grouping and indexing logic for cross-dataset compilation, REST API connections pulling live MES data, and the scheduling optimizer's greedy logic using list operations. It's his primary transformation layer for most GPI reporting work."
  },
  {
    keywords: ["powershell", "power automate", "task scheduler", "automation", "scripting"],
    response: "John uses PowerShell for file management, task automation, and scheduled jobs that keep reporting pipelines running without manual intervention. Power Automate handles workflow automations and notifications. Task Scheduler triggers time-based processes. Together these tools mean most of his reporting infrastructure runs automatically - the right data appears in the right place at the right time."
  },
  {
    keywords: ["python", "moore plants", "inventory system", "oop", "object oriented", "class"],
    response: "John's Python experience is primarily academic and personal. His main project is Moore Plants and Pots - a five-file inventory and purchase order management system with three custom classes, JSON file persistence, 15+ functions, search, sort, and seven reports including low stock alerts and total inventory value. He's comfortable with OOP concepts, file I/O, list comprehensions, and error handling."
  },
  {
    keywords: ["react", "javascript", "web development", "frontend", "html", "css", "vite", "web scripting"],
    response: "John has been building with React through his Web Scripting II coursework. Projects include a state-driven habit tracker in vanilla JS, a Vite portfolio starter with module imports, a React component portfolio using props and reusable components, an interactive React dashboard with useState and dark mode toggle, and this personal assistant chatbot with controlled forms and message history. React is his current focus on the web side."
  },
  {
    keywords: ["qlik", "qlik sense", "business intelligence", "bi tool", "bi platform", "visualization"],
    response: "John has developer-level access to Qlik at GPI and builds personal and community pages for his own analysis - creating views and exploring data outside the formal reporting stack. He's familiar with the platform's associative data model and visualization approach. He sees Qlik or Power BI as the natural next step as he moves into a dedicated BI role."
  },
  {
    keywords: ["skills", "technical skills", "what can you do", "what do you know", "tech stack", "tools you use", "what are your skills"],
    response: "Data side: SQL, Power Query (ETL), Qlik, MES and ERP integration, REST API connections, ODBC, Excel dashboards. Automation: PowerShell, Power Automate, Task Scheduler. Programming: Python, JavaScript, HTML/CSS, React. Professional: Continuous Improvement, process documentation, project coordination, training and development, change management. Eight years of operational context sits behind all of it."
  },

  /* ACADEMIC PROJECTS */
  {
    keywords: ["habit tracker", "habit dashboard", "vanilla js project", "state driven dashboard"],
    response: "The Habit Tracker Dashboard was built with vanilla HTML, CSS, and JavaScript. It uses a central state object that drives all page updates - add, complete, filter, and delete habits by category. It includes a notes section with timestamps, inline delete confirmation, a reset day feature, and a progress bar. All rendering is done through a single render function that redraws from state on every change. Live at jmoore19023.github.io/ITT-072/Habit-Tracker.html"
  },
  {
    keywords: ["moore plants", "plants and pots", "python project", "inventory management", "purchase order"],
    response: "Moore Plants and Pots is a Python inventory and purchase order management system. It has three custom classes - Plant, PurchaseOrder, and InventoryManager - with JSON file persistence so data survives between sessions. Features include inventory CRUD, purchase order tracking, search by name or category, sort by price or quantity, and seven reports including low stock alerts and total inventory value. Available on GitHub."
  },
  {
    keywords: ["react dashboard", "developer dashboard", "interactive dashboard", "project 4"],
    response: "The React Developer Dashboard uses three pieces of useState - dark mode toggle, project filter by tech stack, and goal filter by status. Project cards render from a data array using a reusable ProjectCard component. Includes a stats bar, filterable project grid, goal tracker with status badges, and a skills section. Live at jmoore19023.github.io/ITT-072/project-4-interactive-dashboard"
  },
  {
    keywords: ["chatbot", "chat interface", "keyword bot", "portfolio assistant", "this chatbot"],
    response: "This chatbot was built with React - controlled form input with validation, message history in a useState array, typing indicator with timed delay, and a nested keyword-matching engine. It started as a Moore Plants assistant for a Web Scripting II assignment, then was rebuilt as a personal portfolio assistant covering John's background, projects, and skills. Live at jmoore19023.github.io/ITT-072/project-5-chatbot"
  },

  /* CAREER GOALS */
  {
    keywords: ["goal", "career goal", "looking for", "job search", "next role", "targeting", "transition", "move into", "data analyst", "bi developer", "business analyst"],
    response: "John is targeting Data Analyst, Business Analyst, or BI Developer roles where he can apply eight years of operational experience alongside his growing technical skill set. He wants to work closer to the data full time - building pipelines, dashboards, and tools rather than doing it as a side function of an ops role. Long term he's aiming toward BI Developer or Data Engineer."
  },
  {
    keywords: ["remote", "open to remote", "location", "where are you", "central illinois", "shelbyville"],
    response: "John is based in Shelbyville, IL - Central Illinois. He's open to remote opportunities and flexible on hybrid arrangements. Local opportunities in Central Illinois are also on the table."
  },
  {
    keywords: ["education", "degree", "aas", "lake land", "computer programming", "school", "college", "graduate", "finishing"],
    response: "John is finishing an AAS in Computer Programming at Lake Land College, expected Summer 2026. He originally started the program about ten years ago and stepped away when life required it. He's back now with a much clearer picture of where he wants to go and real-world experience that makes the coursework concrete."
  },
  {
    keywords: ["experience", "how many years", "how long", "work history", "career history", "previous roles", "progression", "years of experience"],
    response: "Eight years at Graphic Packaging International across six roles: Machine Operator, Pack Team Leader, Machine Operator Trainer, Lead Operator/Back-up Group Leader, Data Collection Coordinator, and now CI Operations Specialist. The Data Collection Coordinator role is where data became the focus - that role fed directly into the MES implementation work and everything that followed."
  },

  /* CONTACT */
  {
    keywords: ["contact", "reach you", "get in touch", "hire", "email", "linkedin", "github", "connect", "reach out", "how to contact"],
    response: "Best ways to reach John: Email at jmoore19023@gmail.com, LinkedIn at linkedin.com/in/johnmoore-ci, or GitHub at github.com/jmoore19023. He's actively looking for data analyst and BI roles and responds quickly to genuine outreach."
  },

  /* PERSONAL */
  {
    keywords: ["outside work", "hobbies", "personal life", "family", "free time", "fun", "interests", "outside of work"],
    response: "Outside of work John is a family guy and dog dad. He cycles, games, plays card and board games, grills, and calls himself a tech nerd. The plant floor background means he's equally comfortable debugging a Power Query M function and explaining what it does to a non-technical supervisor."
  },

  /* META */
  {
    keywords: ["what can you answer", "what do you know", "what can i ask", "help", "topics", "what questions", "what should i ask"],
    response: "I can answer questions about John's background and career path, any of his GPI projects (MES implementation, spoilage pipeline, press scheduler, training matrix, fault analysis, cross-system reporting), his technical skills (SQL, Power Query, Python, React, Qlik, PowerShell), his academic projects, his career goals, and how to contact him. Try asking about a specific project or skill."
  }

];