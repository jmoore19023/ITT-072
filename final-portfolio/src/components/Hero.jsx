import AnimatedBackground from './AnimatedBackground';
import Rotator from './Rotator';

function Hero({ darkMode }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg">
        <AnimatedBackground darkMode={darkMode} />
      </div>
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-eyebrow">Central Illinois - Open to Remote</p>
          <h1 className="hero-title">John Moore</h1>
          <p className="hero-subtitle">CI &amp; Data Analytics Professional<span className="cursor" /></p>
          <p className="hero-desc">
            I started on the plant floor and worked my way into data. Eight years in manufacturing
            taught me that the most valuable insights are the ones nobody thought to look for yet,
            and I build the tools that find them.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#about" className="btn-outline">About Me</a>
            <a href="#contact" className="btn-ghost">Get in Touch</a>
          </div>
          <div className="hero-badges">
            <span className="badge">SQL</span>
            <span className="badge">Power Query</span>
            <span className="badge">ETL</span>
            <span className="badge">PowerShell</span>
            <span className="badge">Python</span>
            <span className="badge">BI</span>
          </div>
        </div>

        <Rotator />
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">8+</span>
          <span className="hero-stat-label">Years in Operations</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">700+</span>
          <span className="hero-stat-label">Employees Trained</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">5+</span>
          <span className="hero-stat-label">Reporting Systems Built</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">2</span>
          <span className="hero-stat-label">Enterprise Implementations</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">AAS</span>
          <span className="hero-stat-label">Computer Programming - 2026</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;