import { useMemo, useState } from "react";
import "./FeaturedProjects.css";
import projects from "../../data/projects-old";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);

  // Categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  // Open Modal
  const openProject = (project) => {
    const index = filteredProjects.findIndex(
      (item) => item.id === project.id
    );

    setCurrentIndex(index);
  };

  // Close Modal
  const closeProject = () => {
    setCurrentIndex(null);
  };

  // Previous Project
  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  // Next Project
  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="featured-projects"
      id="projects"
    >
      <div className="container">

        <div
          className="section-title"
          data-aos="fade-up"
        >
          <h2>Featured Projects</h2>

          <p>
            Explore our engineering and consulting
            projects delivered with professionalism
            and excellence.
          </p>
        </div>

        {/* Filter Buttons */}

        <div
          className="project-filter"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={openProject}
            />
          ))}
        </div>

      </div>

      <ProjectModal
        project={
          currentIndex !== null
            ? filteredProjects[currentIndex]
            : null
        }
        isOpen={currentIndex !== null}
        onClose={closeProject}
        onPrev={prevProject}
        onNext={nextProject}
      />
    </section>
  );
}

export default FeaturedProjects;