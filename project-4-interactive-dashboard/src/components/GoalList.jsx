function GoalList({ goals, filter, onFilterChange }) {
  const filtered = filter === 'all'
    ? goals
    : goals.filter(goal => goal.status === filter);

  return (
    <div className="goal-list">
      <div className="filter-row">
        <button
          className={filter === 'all' ? 'pill active' : 'pill'}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={filter === 'in progress' ? 'pill active' : 'pill'}
          onClick={() => onFilterChange('in progress')}
        >
          In Progress
        </button>
        <button
          className={filter === 'complete' ? 'pill active' : 'pill'}
          onClick={() => onFilterChange('complete')}
        >
          Complete
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="empty">No goals in this category.</p>
      ) : (
        filtered.map(goal => (
          <div key={goal.id} className="goal-item">
            <span className="goal-text">{goal.text}</span>
            <span className={`goal-status ${goal.status.replace(' ', '-')}`}>
              {goal.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default GoalList;