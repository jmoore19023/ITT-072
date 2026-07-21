import { useState } from 'react';

const gpiProjects = [
  {
    id: 'mes',
    icon: '⚙',
    status: 'live',
    category: 'Implementation',
    title: 'Ignition MES Implementation',
    summary: 'Facilitated the full plant-wide MES rollout across 100+ pieces of equipment, coordinating between department managers, the site electrical engineer, and corporate IoT teams.',
    tags: ['MES', 'Ignition', 'IoT', 'Change Management', 'Training'],
    detail: {
      problem: 'GPI needed to bring 100+ pieces of manufacturing equipment onto a single MES platform to enable real-time data collection across the plant floor. No unified system existed - production data was manual, inconsistent, and siloed by department.',
      approach: 'Co-led the implementation with the site electrical engineer. Coordinated with corporate IoT teams on system architecture, worked with department managers on equipment tagging and verification, and built the training program for 700+ operators and supervisors. Verified tag values and system outputs as each piece of equipment came online.',
      impact: 'Full plant-wide MES coverage. 700+ employees trained as system super users. Real-time machine data now feeds dashboards, spoilage reports, fault analysis, and production tracking across every department. Every subsequent data project John has built runs on this foundation.',
      tools: ['Ignition', 'MES', 'IoT', 'Change Management', 'Training Development']
    }
  },
  {
    id: 'spoilage',
    icon: '📊',
    status: 'live',
    category: 'Data Integration',
    title: 'Plant Spoilage & Production Correlation',
    summary: 'ETL pipeline connecting ERP via SQL and MES via REST API providing plant-to-department spoilage visibility with 30-day trending.',
    tags: ['SQL', 'Power Query', 'MES API', 'ETL', 'ERP'],
    detail: {
      problem: "GPI's ERP and MES systems held complementary data that leadership needed together - production volume from ERP, spoilage events from MES - but the two systems had no native integration and no shared key structure to join them on.",
      approach: 'Built a Power Query pipeline that connects to ERP via SQL for production data and to MES via REST API for spoilage data. Created custom scaffolding to generate index keys that allow the two datasets to be joined despite having no native relationship. Layered a 30-day trending view on top that breaks data down from plant level to individual departments.',
      impact: 'Leadership now has a daily view of spoilage correlated against production volume by department and trending over 30 days. Replaced manual reconciliation. Used daily by plant management to identify where to focus improvement efforts.',
      tools: ['SQL', 'Power Query M', 'REST API', 'ETL', 'ERP Integration', 'MES Integration']
    }
  },
  {
    id: 'matrix',
    icon: '📋',
    status: 'live',
    category: 'Workforce Analytics',
    title: 'Plant Training Matrix Dashboard',
    summary: 'Department-level training matrices feeding a plant-level dashboard tracking headcount, position coverage, training progression, and skill gaps.',
    tags: ['Power Query', 'Excel', 'Dashboard', 'Workforce Analytics'],
    detail: {
      problem: 'Department managers tracked training manually in disconnected spreadsheets. Leadership had no consolidated view of workforce readiness - who was trained on what, where gaps existed, or how balanced shifts were by position and skill level.',
      approach: 'Overhauled the department-level training matrix structure and built a Power Query pipeline that consolidates department matrices into a plant-level dashboard. Each department manager maintains their own matrix. Those feed automatically into the plant view John built for upper management.',
      impact: 'Upper management now has a live plant-level view of headcount, position coverage ratios, training progression, and skill gaps across all shifts. Implementation is currently scaling across all departments. Designed to eventually surface workforce risk before it becomes a production or safety problem.',
      tools: ['Power Query', 'Excel', 'Dashboard Design', 'Workforce Analytics']
    }
  },
  {
    id: 'scheduler',
    icon: '🖨',
    status: 'live',
    category: 'Optimization',
    title: 'Press Schedule Optimizer',
    summary: 'Scheduling optimization tool in Power Query M that minimizes press changeover time using greedy logic with forward-looking ink eviction.',
    tags: ['Power Query M', 'Optimization', 'Scheduling'],
    detail: {
      problem: 'Print jobs on a two-press flexographic operation required frequent ink changeovers when scheduled in the wrong order. Manual scheduling was time-consuming and inconsistent, often resulting in avoidable changeovers that cut into production time.',
      approach: 'Built a scheduling optimizer in Power Query M that groups print jobs by shared ink colors. Uses greedy scheduling logic - at each step it picks the job that best preserves the current ink load. The forward-looking ink eviction logic evaluates whether forcing a changeover now is justified by future jobs that share that ink color.',
      impact: 'Produces a prioritized run order that minimizes ink changeovers without any manual planning. Schedulers run the tool and get an optimized sequence. Reduced time spent on manual scheduling and cut avoidable changeovers.',
      tools: ['Power Query M', 'List Operations', 'Greedy Algorithm', 'Scheduling Logic']
    }
  },
  {
    id: 'crosssystem',
    icon: '📈',
    status: 'live',
    category: 'Reporting',
    title: 'Cross-System Reporting & Integration',
    summary: 'Merged MES, QMS, and ERP data via ODBC and REST API into automated dashboards used daily by plant leadership.',
    tags: ['ODBC', 'Power Query', 'MES', 'QMS', 'ERP'],
    detail: {
      problem: 'Plant leadership needed a unified view of performance data that lived across three separate enterprise systems - MES for machine data, QMS for quality data, and ERP for production and inventory data. No native integration existed between them.',
      approach: 'Built a Power Query reporting layer that connects to each system via the appropriate method - REST API for MES, ODBC for QMS and ERP, and Access databases as an intermediate layer for legacy data sources. All three streams merge into a single flow that feeds the output dashboards.',
      impact: 'Plant leadership dashboards refresh against live data with no manual exports or copy-paste reconciliation. Reports that previously required manual assembly now run automatically. Used daily by plant management.',
      tools: ['ODBC', 'REST API', 'Power Query M', 'Access Database', 'MES', 'QMS', 'ERP']
    }
  },
  {
    id: 'fault',
    icon: '⊟',
    status: 'live',
    category: 'Analysis',
    title: 'Machine Sensor Fault Analysis',
    summary: 'Fleet-wide fault frequency report pulling MES sensor data via API, flagging machines at both extremes of fault behavior.',
    tags: ['MES API', 'Power Query', 'Anomaly Detection'],
    detail: {
      problem: 'Maintenance and CI had no systematic way to identify machines trending toward failure or sensors that had stopped reporting. High fault counts were visible on individual machine screens but not aggregated fleet-wide. Zero-fault machines during runtime were never flagged at all.',
      approach: 'Built a fault frequency report that pulls sensor fault data from the MES via API across the entire fleet. Applied dual-direction flagging logic: machines above a fault threshold are flagged as mechanical risk, machines with zero faults during confirmed runtime are flagged as potential sensor reliability failures.',
      impact: 'Surfaces two categories of previously invisible risk in a single report. Maintenance uses it to prioritize proactive inspections. CI uses it to identify systemic issues across equipment types. Both the high-fault and zero-fault flags have already caught real problems.',
      tools: ['MES API', 'Power Query M', 'Anomaly Detection', 'REST API']
    }
  }
];

const academicProjects = [
  {
    id: 'habit',
    icon: '📊',
    title: 'Habit Tracker Dashboard',
    summary: 'State-driven dashboard built with vanilla HTML, CSS, and JavaScript. CRUD functionality, category filtering, confirmation prompts, and note timestamps.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://jmoore19023.github.io/ITT-072/Habit-Tracker.html'
  },
  {
    id: 'plants',
    icon: '🐍',
    title: 'Moore Plants & Pots',
    summary: 'Python inventory and purchase order management system with three custom classes, JSON persistence, search, sort, and seven reports.',
    tags: ['Python', 'OOP', 'JSON'],
    link: 'https://github.com/jmoore19023/ITT-072/tree/main/Python%20Project'
  },
  {
    id: 'dashboard',
    icon: '⚛️',
    title: 'React Developer Dashboard',
    summary: 'Interactive dashboard with dark mode toggle, project filtering by tech stack, and goal tracker with status badges. Built with React and useState.',
    tags: ['React', 'Vite', 'useState'],
    link: 'https://jmoore19023.github.io/ITT-072/project-4-interactive-dashboard/'
  },
  {
    id: 'chatbot',
    icon: '💬',
    title: 'Moore Plants & Pots Chatbot',
    summary: 'Keyword-based chat interface built in React. Controlled form with validation, message history in state, typing indicator, and chat bubble UI.',
    tags: ['React', 'Vite', 'State'],
    link: 'https://jmoore19023.github.io/ITT-072/project-5-chatbot/'
  },

  {
    id: 'portfolio',
    icon: '🌐',
    title: 'React Portfolio & Chat Assistant',
    summary: 'This site. Built with Vite and React — animated canvas background, project rotator, expandable case study cards, dark mode toggle, and an integrated personal assistant chatbot.',
    tags: ['React', 'Vite', 'Canvas API'],
    link: 'https://github.com/jmoore19023/ITT-072/tree/main/final-portfolio'
  }
];

function ProjectCard({ project, isOpen, onToggle }) {
  return (
    <>
      <div
        className={`exp-card${isOpen ? ' active' : ''}`}
        onClick={onToggle}
      >
        <span className="exp-card-icon">{project.icon}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="exp-card-footer">
          <div className="feat-tags" style={{ flex: 1 }}>
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <span className="exp-hint">{isOpen ? 'Close ↑' : 'Details ↓'}</span>
        </div>
      </div>

      {isOpen && (
        <div className="detail-panel open" style={{ gridColumn: '1 / -1' }}>
          <button className="detail-close" onClick={onToggle}>Close ✕</button>
          <div className="detail-header">
            <span className="feat-status feat-status-live" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Live</span>
            <h2>{project.title}</h2>
            <p className="detail-meta">{project.category}</p>
          </div>
          <div className="detail-blocks">
            <div className="case-block">
              <span className="case-block-title">The Problem</span>
              <p>{project.detail.problem}</p>
            </div>
            <div className="case-block">
              <span className="case-block-title">The Approach</span>
              <p>{project.detail.approach}</p>
            </div>
            <div className="case-block">
              <span className="case-block-title">The Impact</span>
              <p>{project.detail.impact}</p>
            </div>
            <div className="case-block">
              <span className="case-block-title">Tools & Technologies</span>
              <div className="feat-tags" style={{ marginTop: '0.5rem' }}>
                {project.detail.tools.map(tool => (
                  <span key={tool} className="tag tag-accent">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Projects() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId(prev => prev === id ? null : id);
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">Professional Work</span>
        <h2 className="section-title">Built for real operations</h2>
        <p className="section-desc">These aren't class projects. These are tools used daily by supervisors and leadership at a 700-person manufacturing facility. Click any card for the full case study.</p>

        <div className="expandable-grid">
          {gpiProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => toggle(project.id)}
            />
          ))}
        </div>

        <span className="section-label" style={{ marginTop: '4rem' }}>Academic & Personal</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '0.5rem' }}>Projects & Exploration</h2>
        <p className="section-desc">Built to learn, practice, and explore. All live and deployed.</p>

        <div className="academic-grid">
          {academicProjects.map(project => (
            <div key={project.id} className="acad-card">
              <span className="acad-icon">{project.icon}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="feat-tags" style={{ marginBottom: '1rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="acad-links">
                <a href={project.link} target="_blank" rel="noreferrer" className="acad-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;