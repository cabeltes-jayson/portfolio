import { Modal, Button } from "react-bootstrap";

const ProjectModal = ({ project, onClose }) => {
  return (
    <Modal show={!!project} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project?.description}</p>
        <p>{project?.fullDescription}</p>
        <h5>Tech Stack:</h5>
        <ul>
          {project?.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
