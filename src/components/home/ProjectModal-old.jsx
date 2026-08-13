import "./ProjectModal.css";
import { useEffect, useState } from "react";
import Lightbox from "./Lightbox";

function ProjectModal({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Keyboard Control
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (lightboxOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          if (onPrev) onPrev();
          break;

        case "ArrowRight":
          if (onNext) onNext();
          break;

        default:
          break;
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "auto";
    };
  }, [
    isOpen,
    onClose,
    onPrev,
    onNext,
    lightboxOpen,
  ]);


  // Reset when project changes
  useEffect(() => {
    setImageIndex(0);
    setLightboxOpen(false);
  }, [project]);


  if (!isOpen || !project) {
    return null;
  }


  const images =
    project.images?.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];


  const nextImage = () => {
    setImageIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };


  const prevImage = () => {
    setImageIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };


  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
        role="presentation"
      >

        <div
          className="project-modal"
          onClick={(e) =>
            e.stopPropagation()
          }
          role="dialog"
          aria-modal="true"
        >

          {/* Close Button */}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close Modal"
          >
            ✕
          </button>


          {/* Project Image */}
          {images.length > 0 && (
            <img
              src={images[imageIndex]}
              alt={
                project.title ||
                "Project Image"
              }
              className="modal-image"
              onClick={() =>
                setLightboxOpen(true)
              }
            />
          )}



          <div className="modal-content">

            {/* Category */}
            {project.category && (
              <span className="modal-category">
                {project.category}
              </span>
            )}


            {/* Title */}
            <h2>
              {project.title}
            </h2>


            {/* Description */}
            <p>
              {project.description}
            </p>



            {/* Technology */}
            {project.tech?.length > 0 && (
              <div className="modal-tech">

                {project.tech.map(
                  (item, index) => (
                    <span key={index}>
                      {item}
                    </span>
                  )
                )}

              </div>
            )}




            {/* Buttons */}
            <div className="modal-buttons">

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn primary"
                >
                  Live Project
                </a>
              )}



              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn secondary"
                >
                  GitHub
                </a>
              )}



              <a
                href="#contact"
                className="modal-btn"
                onClick={onClose}
              >
                Contact Us
              </a>

            </div>




            {/* Image Navigation */}
            {images.length > 1 && (
              <div className="modal-navigation">

                <button
                  onClick={prevImage}
                >
                  ← Previous Image
                </button>


                <button
                  onClick={nextImage}
                >
                  Next Image →
                </button>

              </div>
            )}






            {/* Project Navigation */}
            {(onPrev || onNext) && (
              <div className="modal-navigation project-nav">

                {onPrev && (
                  <button
                    onClick={onPrev}
                  >
                    ← Previous Project
                  </button>
                )}


                {onNext && (
                  <button
                    onClick={onNext}
                  >
                    Next Project →
                  </button>
                )}

              </div>
            )}


          </div>

        </div>

      </div>




      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={imageIndex}
        isOpen={lightboxOpen}
        onClose={() =>
          setLightboxOpen(false)
        }
        onPrev={prevImage}
        onNext={nextImage}
      />

    </>
  );
}


export default ProjectModal;