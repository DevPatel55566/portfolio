import React, { useEffect, useState } from "react";
import projectsData from "../assets/projects.json";
import "Projects.css"
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.Contents);
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <h4>{project.subtitle}</h4>
          <img src={project.img1} alt="Project Image 1" />
          <img src={project.img2} alt="Project Image 2" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
