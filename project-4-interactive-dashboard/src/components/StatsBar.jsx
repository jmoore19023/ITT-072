function StatsBar({ projectCount, skillCount, goalCount, completeCount }) {
  return (
    <div className="stats-bar">
      <div className="stat-card">
        <div className="stat-value">{projectCount}</div>
        <div className="stat-label">Projects</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{skillCount}</div>
        <div className="stat-label">Skills</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{completeCount}</div>
        <div className="stat-label">Goals Complete</div>
      </div>
      <div className="stat-card">
        <div className="stat-value">{goalCount}</div>
        <div className="stat-label">Total Goals</div>
      </div>
    </div>
  );
}

export default StatsBar;