import { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./projects.css";
import iot from "../assets/img/iot.jpg";
import cafeweb from "../assets/img/cafeweb.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "IoT-Based River Water Quality Monitoring System with Mobile Alerts",
      tags: ["C++", "Internet of Things (IoT)", "Sensor Integration", "Cloud Computing", "Mobile App Development", "Back-End Development"],
      description: "An IoT-based system using an ESP32 and sensors to monitor river water quality, with real-time data and alerts via a mobile app.",
      fullDescription:
        "This study developed an IoT-based river water quality monitoring system that integrates sensors for measuring pH, temperature, total dissolved solids (TDS) and total suspended solids (TSS), with an ESP32 microcontroller set up to gather data at 15-minute intervals and switch to sleep mode to preserve power. The mobile application for the system allows users to monitor water quality data in real-time and receive alerts.",
      image: iot,
    },
    {
      id: 2,
      title: "Pagsidlak Cafe App - Cafe Ordering System",
      tags: ["Django", "Django REST Framework", "RESTful API's", "Python", "Mobile App Development", "Web Development", "Back-End Development"],
      description: "E-Commerce Coffee App with a web page and mobile app. Check our deployed web page: https://pagsidlak.netlify.app/ (landing page only)",
      fullDescription:
        "This project is an E-Commerce Coffee App that has a user authentication, allows users to login and register and order products with receipt system. This project uses Django, Django RESTful APIs, PythonAnywhere, React Native, React JS, and Python as its main language.",
      image: cafeweb,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleProjectClick = (id) => {
    const index = projects.findIndex((project) => project.id === id);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setCurrentIndex(null);
  };

  return (
    <section id="projects" className="projects-container pattern-bg">
      <div className="pattern-bg"></div>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <button onClick={() => handleProjectClick(project.id)} key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {currentIndex !== null && (
        <ProjectModal
          project={projects[currentIndex]}
          onClose={handleCloseModal}
          onPrev={() =>
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
          }
          onNext={() =>
            setCurrentIndex((next) => (next < projects.length - 1 ? next + 1 : 0))
          }
        />
      )}
    </section>
  );
};

export default Projects;
