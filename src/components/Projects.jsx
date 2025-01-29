import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Summarization Tool",
      tags: ["AWS", "React", "Cloudflare"],
      description: "A tool that summarizes long articles into short paragraphs using AI.",
      fullDescription:
        "This project uses AWS Lambda functions to process text data and return a summarized version of the content.",
      image: "/summarization.png",
      techStack: ["React", "AWS", "Cloudflare", "Bootstrap", "NodeJS"],
    },
    {
      id: 2,
      title: "Newsletter App",
      tags: ["NextJs", "Cloudflare", "PayloadCMS"],
      description: "A newsletter app that sends daily updates to subscribers.",
      fullDescription: "This project uses NextJS to build the front-end and PayloadCMS to manage content.",
      image: "/proj.png",
      techStack: ["NextJS", "Cloudflare", "PayloadCMS", "Bootstrap", "NodeJS", "TypeScript"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center text-white mb-4">Featured Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <button
              onClick={() => handleProjectClick(project.id)}
              className="card bg-dark text-white mb-3 p-3 border-primary"
            >
              <h3 className="h5">{project.title}</h3>
              <div className="d-flex flex-wrap mt-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="badge bg-primary me-1">{tag}</span>
                ))}
              </div>
            </button>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects;
