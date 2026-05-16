import "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React.",
    tech: ["React", "CSS"]
  },
  {
    title: "ToDo App",
    description: "Task manager with CRUD features.",
    tech: ["JavaScript"]
  },
  {
    title: "Weather App",
    description: "Live weather data using API.",
    tech: ["React", "API"]
  }
];
  return (
    <div className="page-content">

      <h1>Projects</h1>

      <div className="project-grid">
        {projects.map((project, index) => (
            <ProjectCard
             key={index}
            title={project.title}
            description={project.description}
           tech={project.tech}
         />
        ))}
        </div>
    </div>
  );
}

export default Projects;