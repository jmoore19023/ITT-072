const currentSkills = [
  "SQL", "Python", "JavaScript", "HTML & CSS",
  "Power Query", "Git & GitHub", "Qlik", "Power Automate", "ETL / MES Integration"
];

const learningSkills = [
  "React", "TypeScript", "REST APIs", "Power BI",
  "Node.js", "Data Visualization", "Chart.js"
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <h3>What I Know</h3>
      <ul className="skills-list">
        {currentSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3>What I'm Learning</h3>
      <ul className="skills-list">
        {learningSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;