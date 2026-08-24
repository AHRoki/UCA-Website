import "./ProjectModal.css";

import { useEffect, useMemo, useState } from "react";

import Lightbox from "./Lightbox";

function ProjectModal({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  canNavigateProjects = false,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // ==========================================
  // PROJECT IMAGES
  // ==========================================

  const images = useMemo(() => {
    if (!project) {
      return [];
    }

    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images;
    }

    if (project.image) {
      return [project.image];
    }

    return [];
  }, [project]);

  // ==========================================
  // LOCK BODY SCROLL
  // ==========================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // ==========================================
  // RESET IMAGE WHEN PROJECT CHANGES
  // ==========================================

  useEffect(() => {
    setCurrentImage(0);
    setLightboxOpen(false);
  }, [project?.id]);

  // ==========================================
  // PREVIOUS IMAGE
  // ==========================================

  const previousImage = () => {
    if (images.length <= 1) {
      return;
    }

    setCurrentImage((previous) => {
      return previous === 0
        ? images.length - 1
        : previous - 1;
    });
  };

  // ==========================================
  // NEXT IMAGE
  // ==========================================

  const nextImage = () => {
    if (images.length <= 1) {
      return;
    }

    setCurrentImage((previous) => {
      return previous === images.length - 1
        ? 0
        : previous + 1;
    });
  };

  // ==========================================
  // PREVIOUS PROJECT
  // ==========================================

  const handlePreviousProject = () => {
    if (!canNavigateProjects || !onPrev) {
      return;
    }

    onPrev();
  };

  // ==========================================
  // NEXT PROJECT
  // ==========================================

  const handleNextProject = () => {
    if (!canNavigateProjects || !onNext) {
      return;
    }

    onNext();
  };

  // ==========================================
  // KEYBOARD NAVIGATION
  // ==========================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (lightboxOpen) {
        if (event.key === "Escape") {
          setLightboxOpen(false);
        }

        return;
      }

      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        previousImage();
        return;
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    isOpen,
    lightboxOpen,
    images.length,
  ]);

  // ==========================================
  // CLOSE MODAL
  // ==========================================

  if (!isOpen || !project) {
    return null;
  }

  // ==========================================
  // CURRENT IMAGE
  // ==========================================

  const currentImageSrc = images[currentImage];

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <>
      <div
        className="project-modal-overlay open"
        onClick={onClose}
      >
        <div
          className="project-modal"
          onClick={(event) => event.stopPropagation()}
        >
          {/* ====================================
              IMAGE SECTION
          ==================================== */}

          <div className="project-modal-image-wrapper">
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close Project"
            >
              ✕
            </button>

            {/* MAIN IMAGE */}

            {currentImageSrc && (
              <img
                key={`${project.id}-${currentImage}-${currentImageSrc}`}
                src={currentImageSrc}
                alt={`${project.title} ${currentImage + 1}`}
                className="project-modal-image"
                onClick={() => setLightboxOpen(true)}
                onLoad={() => {
                  console.log(
                    "IMAGE LOADED:",
                    currentImage + 1,
                    currentImageSrc
                  );
                }}
                onError={() => {
                  console.error(
                    "IMAGE FAILED:",
                    currentImage + 1,
                    currentImageSrc
                  );
                }}
              />
            )}

            {/* IMAGE NAVIGATION */}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="project-nav-btn project-nav-left"
                  onClick={previousImage}
                  aria-label="Previous Image"
                >
                  ❮
                </button>

                <button
                  type="button"
                  className="project-nav-btn project-nav-right"
                  onClick={nextImage}
                  aria-label="Next Image"
                >
                  ❯
                </button>

                <div
                  className="project-image-counter"
                  aria-live="polite"
                >
                  {currentImage + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* ======================================
              CONTENT SECTION
          ====================================== */}

          <div className="project-modal-content">
            <div className="project-modal-details">
              {/* CATEGORY */}

              <span className="project-category">
                {project.category}
              </span>

              {/* TITLE */}

              <h2 className="project-title">
                {project.title}
              </h2>

              {/* SUBTITLE */}

              {project.subtitle && (
                <p className="project-subtitle">
                  {project.subtitle}
                </p>
              )}

              {/* DESCRIPTION */}

              <p className="project-description">
                {project.description}
              </p>

              {/* FEATURES */}

              {project.features?.length > 0 && (
                <>
                  <h3 className="project-section-title">
                    Key Features
                  </h3>

                  <div className="project-tech-list">
                    {project.features.map(
                      (item, index) => (
                        <span
                          key={`feature-${index}`}
                          className="project-tech-item"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </>
              )}

              {/* TECHNOLOGIES */}

              {project.tech?.length > 0 && (
                <>
                  <h3 className="project-section-title">
                    Technologies
                  </h3>

                  <div className="project-tech-list">
                    {project.tech.map(
                      (item, index) => (
                        <span
                          key={`tech-${index}`}
                          className="project-tech-item"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </>
              )}

              {/* ACTION BUTTONS */}

              <div className="project-action-buttons">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* ======================================
              PROJECT NAVIGATION
          ====================================== */}

          {canNavigateProjects && (
            <div className="project-modal-navigation">
              <button
                type="button"
                className="project-modal-project-nav"
                onClick={handlePreviousProject}
                aria-label="Previous Project"
              >
                ← Previous Project
              </button>

              <button
                type="button"
                className="project-modal-project-nav"
                onClick={handleNextProject}
                aria-label="Next Project"
              >
                Next Project →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ========================================
          LIGHTBOX
      ======================================== */}

      {lightboxOpen && images.length > 0 && (
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