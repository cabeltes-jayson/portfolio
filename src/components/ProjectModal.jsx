import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose, onPrev, onNext }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick} ref={modalRef}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="nav-button left" onClick={onPrev}>
            <ArrowLeft size={24} />
          </button>

          <h2 className="modal-title">{project.title}</h2>

          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-text">
            <p className="full-description">{project.fullDescription}</p>
            <p className="description">{project.description}</p>
          </div>
          <img src={project.image} alt={project.title} className="project-image" />
        </div>

        <button className="nav-button right" onClick={onNext}>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}