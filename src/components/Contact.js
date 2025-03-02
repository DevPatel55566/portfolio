import React from "react";

const Contact = ({ personal, listSocial, darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <nav>
        <ul>
          {listSocial.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.platform}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <h2>Made By: {personal.Title}</h2>
    </div>
  );
};

export default Contact;
