function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <span className="tech-badge">{tech}</span>
      </div>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">View Project →</a>
    </div>
  );
}

export default ProjectCard;