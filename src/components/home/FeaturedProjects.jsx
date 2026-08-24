import { useMemo, useState } from "react";
import "./FeaturedProjects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProjectId, setSelectedProjectId] =
    useState(null);

  // ==========================================
  // CATEGORIES
  // ==========================================

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        projects.map(
          (project) => project.category
        )
      ),
    ];
  }, []);

  // ==========================================
  // FILTERED PROJECTS
  // ==========================================

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === selectedCategory
    );
  }, [selectedCategory]);

  // ==========================================
  // CURRENT PROJECT INDEX
  // ==========================================

  const currentIndex =
    filteredProjects.findIndex(
      (project) =>
        project.id === selectedProjectId
    );

  // ==========================================
  // CURRENT PROJECT
  // ==========================================

  const currentProject =
    currentIndex !== -1
      ? filteredProjects[currentIndex]
      : null;

  // ==========================================
  // OPEN PROJECT
  // ==========================================

  const openProject = (project) => {
    setSelectedProjectId(project.id);
  };

  // ==========================================
  // CLOSE PROJECT
  // ==========================================

  const closeProject = () => {
    setSelectedProjectId(null);
  };

  // ==========================================
  // PREVIOUS PROJECT
  // ==========================================

  const prevProject = () => {
    if (
      filteredProjects.length <= 1 ||
      currentIndex === -1
    ) {
      return;
    }

    const previousIndex =
      currentIndex === 0
        ? filteredProjects.length - 1
        : currentIndex - 1;

    setSelectedProjectId(
      filteredProjects[previousIndex].id
    );
  };

  // ==========================================
  // NEXT PROJECT
  // ==========================================

  const nextProject = () => {
    if (
      filteredProjects.length <= 1 ||
      currentIndex === -1
    ) {
      return;
    }

    const nextIndex =
      currentIndex ===
      filteredProjects.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedProjectId(
      filteredProjects[nextIndex].id
    );
  };

  // ==========================================
  // CATEGORY CHANGE
  // ==========================================

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProjectId(null);
  };

  return (
    <section
      className="featured-projects"
      id="projects"
    >
      <div className="container">

        {/* ======================================
            SECTION TITLE
        ====================================== */}

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

        {/* ======================================
            PROJECT FILTER
        ====================================== */}

        <div
          className="project-filter"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              aria-pressed={
                selectedCategory === category
              }
              onClick={() =>
                handleCategoryChange(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* ======================================
            PROJECT GRID
        ====================================== */}

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

      {/* ========================================
          PROJECT MODAL
      ======================================== */}

      <ProjectModal
  project={currentProject}
  isOpen={currentProject !== null}
  onClose={closeProject}
  onPrev={prevProject}
  onNext={nextProject}
  canNavigateProjects={filteredProjects.length > 1}
/>
    </section>
  );
}

export default FeaturedProjects;