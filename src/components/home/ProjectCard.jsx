import "./FeaturedProjects.css";

function ProjectCard({ project, onView }) {
  return (
    <div
      className="project-card"
      data-aos="fade-up"
      onClick={() => onView(project)}
      style={{ cursor: "pointer" }}
    >
      <img
  src={project.image}
  alt={project.title}
  className="project-image"
  loading="lazy"
  decoding="async"
/>

      <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <button
          className="project-btn"
          onClick={(e) => {
            e.stopPropagation();
            onView(project);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;