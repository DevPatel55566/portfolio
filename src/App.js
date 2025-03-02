import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import content from "./assets/content.json";
import projects from "./assets/projects.json";
import "./App.css"
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(content); 

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Dark Mode
      </label>

      <Header personal={content.mydata} listSocial={content.listSocial} darkMode={darkMode} />
      <About aboutInfo={content.aboutInfo} darkMode={darkMode} />

      {/* Instead of <Projects />, we map over the projects data */}
      <div className="projects-container">
        {projects.Contents.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <img src={project.img1} alt="Project 1" />
            <img src={project.img2} alt="Project 2" />
          </div>
        ))}
      </div>

      <Contact personal={content.mydata} listSocial={content.listSocial} darkMode={darkMode} />
      <Footer listTechUsed={content.listTechUsed} darkMode={darkMode} />
    </div>
  );
};

export default App;
