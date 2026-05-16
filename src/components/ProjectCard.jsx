import "../styles/projectCard.css";

function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

    </div>
  );
}

export default ProjectCard;