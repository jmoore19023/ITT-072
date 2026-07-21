import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    num: '01 — Data Integration',
    title: 'Plant Spoilage & Production Correlation',
    desc: 'ETL pipeline connecting ERP and MES - two enterprise systems never designed to talk. Custom scaffolding and index key joins in Power Query provide plant-to-department spoilage visibility with 30-day trending and production correlation.',
    tags: ['SQL', 'Power Query', 'MES API', 'ETL', 'ERP'],
    status: 'live',
  },
  {
    num: '02 — Implementation',
    title: 'Ignition MES Implementation',
    desc: 'Facilitated a full plant-wide MES rollout across 100+ pieces of equipment. Co-led with the site electrical engineer, trained 700+ employees, verified all system outputs, and coordinated with corporate IoT teams throughout.',
    tags: ['MES', 'Ignition', 'IoT', 'Change Management'],
    status: 'live',
  },
  {
    num: '03 — Workforce Analytics',
    title: 'Plant Training Matrix Dashboard',
    desc: 'Department-level training matrices feeding a plant-level dashboard for upper management. Tracks headcount, position coverage, training progression, and skill gaps across shifts. Currently scaling across all departments.',
    tags: ['Power Query', 'Excel', 'Dashboard', 'Workforce Analytics'],
    status: 'live',
  },
  {
    num: '04 — Optimization',
    title: 'Press Schedule Optimizer',
    desc: 'Scheduling optimization tool in Power Query M that groups print jobs by shared ink colors to minimize press changeover time across a two-press flexographic operation. Greedy logic with forward-looking ink eviction.',
    tags: ['Power Query M', 'Optimization', 'Scheduling'],
    status: 'live',
  },
  {
    num: '05 — Reporting',
    title: 'Cross-System Reporting & Integration',
    desc: 'Merged MES, QMS, and ERP data via ODBC and REST API into automated Excel dashboards used daily by plant leadership. No manual exports, no copy-paste reconciliation.',
    tags: ['ODBC', 'Power Query', 'MES', 'QMS', 'ERP'],
    status: 'live',
  },
  {
    num: '06 — Analysis',
    title: 'Machine Sensor Fault Analysis',
    desc: 'Fleet-wide fault frequency report pulling MES sensor data via API. Flags machines at both extremes - excessive faults as mechanical risk, zero faults during runtime as potential sensor reliability failures.',
    tags: ['MES API', 'Power Query', 'Anomaly Detection'],
    status: 'live',
  },
];

function Rotator() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero-right">
      <div className="rotator-eyebrow">
        <span className="rotator-label">Featured Work</span>
        <div className="rotator-controls">
          <button className="rotator-btn" onClick={() => goTo(current - 1)} aria-label="Previous">&#8592;</button>
          <span className="rotator-counter">{current + 1} / {slides.length}</span>
          <button className="rotator-btn" onClick={() => goTo(current + 1)} aria-label="Next">&#8594;</button>
        </div>
      </div>

      <div className="rotator-slides">
        <div className="rotator-slide active">
          <p className="rotator-project-num">{slide.num}</p>
          <h3 className="rotator-title">{slide.title}</h3>
          <p className="rotator-desc">{slide.desc}</p>
          <div className="rotator-tags">
            {slide.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <div className="rotator-footer">
            <span className={`rotator-status ${slide.status}`}>
              {slide.status === 'live' ? 'Live' : 'In Progress'}
            </span>
            <a href="#projects" className="rotator-link">View details &#8594;</a>
          </div>
        </div>
      </div>

      <div className="rotator-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`rotator-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Rotator;