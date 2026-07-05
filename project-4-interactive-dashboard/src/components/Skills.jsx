function Skills({ currentSkills, learningSkills }) {
  return (
    <div className="skills-section">
      <div className="skills-group">
        <h3>What I Know</h3>
        <ul className="skills-list">
          {currentSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-group">
        <h3>What I'm Learning</h3>
        <ul className="skills-list">
          {learningSkills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;