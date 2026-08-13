
import "./ProjectModal.css";
import { useEffect, useMemo, useState } from "react";
import Lightbox from "./Lightbox";

function ProjectModal({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = useMemo(() => {
    if (!project) return [];

    if (
      Array.isArray(project.images) &&
      project.images.length > 0
    ) {
      return project.images;
    }

    return project.image ? [project.image] : [];
  }, [project]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          if (lightboxOpen) {
            setLightboxOpen(false);
          } else {
            onClose();
          }
          break;

        case "ArrowLeft":
          if (!lightboxOpen) {
            onPrev();
          }
          break;

        case "ArrowRight":
          if (!lightboxOpen) {
            onNext();
          }
          break;

        default:
          break;
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    isOpen,
    lightboxOpen,
    onClose,
    onPrev,
    onNext,
  ]);

  useEffect(() => {
    setCurrentImage(0);
    setLightboxOpen(false);
  }, [project]);

  if (!isOpen || !project) {
    return null;
  }
  return (
    <>
      <div
  className={`project-modal-overlay ${
    isOpen ? "open" : ""
  }`}
  onClick={onClose}
>
        <div
          className="project-modal"
          onClick={(e) => e.stopPropagation()}
        >

          {/* ===============================
              Hero Section
          ============================== */}

          <div className="project-modal-image-wrapper">

            <button
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close Project"
            >
              ✕
            </button>

            <img
              src={images[currentImage]}
              alt={project.title}
              className="project-modal-image"
              onClick={() => setLightboxOpen(true)}
            />

            {images.length > 1 && (
              <>
                <button
                  className="project-nav-btn project-nav-left"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0
                        ? images.length - 1
                        : prev - 1
                    )
                  }
                  aria-label="Previous Image"
                >
                  ❮
                </button>

                <button
                  className="project-nav-btn project-nav-right"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === images.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  aria-label="Next Image"
                >
                  ❯
                </button>

                <div className="project-image-counter">
                  {currentImage + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* ===============================
              Content Section
          ============================== */}

          <div className="project-modal-content">
            <div className="project-modal-details">

              <span className="project-category">
                {project.category}
              </span>

              <h2 className="project-title">
                {project.title}
              </h2>

              <p className="project-description">
                {project.description}
              </p>

              {project.tech?.length > 0 && (
                <>
                  <h3 className="project-section-title">
                    Technologies
                  </h3>

                  <div className="project-tech-list">
                    {project.tech.map((item, index) => (
                      <span
                        key={index}
                        className="project-tech-item"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="project-action-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn primary"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn secondary"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          <div className="project-modal-navigation">

            <button
              className="project-nav-btn"
              onClick={onPrev}
            >
              ← Previous
            </button>

            <button
              className="project-nav-btn"
              onClick={onNext}
            >
              Next →
            </button>

          </div>

        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}

export default ProjectModal;
