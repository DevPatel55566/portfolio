import React from "react";

const Footer = ({ listTechUsed, darkMode }) => {
  return (
    <footer className={darkMode ? "dark-mode" : ""}>
      <ul>
        {listTechUsed.map((tech, index) => (
          <li key={index}>{tech.name}</li>
        ))}
      </ul>
      <h3>Sheridan &copy; {new Date().getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
