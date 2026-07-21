function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-strip">
          <div className="skill-pill">
            <span className="skill-pill-label">Data &amp; Analytics</span>
            <ul>
              <li>SQL</li>
              <li>Power Query (ETL)</li>
              <li>Business Intelligence (Qlik)</li>
              <li>MES &amp; ERP Integration</li>
              <li>Dashboard Development</li>
            </ul>
          </div>
          <div className="skill-pill">
            <span className="skill-pill-label">Automation</span>
            <ul>
              <li>PowerShell</li>
              <li>Power Automate</li>
              <li>Task Scheduler</li>
              <li>Excel (Advanced)</li>
            </ul>
          </div>
          <div className="skill-pill">
            <span className="skill-pill-label">Programming</span>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skill-pill">
            <span className="skill-pill-label">Professional</span>
            <ul>
              <li>Continuous Improvement</li>
              <li>Process Documentation</li>
              <li>Project Coordination</li>
              <li>Training &amp; Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;