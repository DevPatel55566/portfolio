import React from "react";

const Header = ({ personal, listSocial, darkMode }) => {
  return (
    <header className={`${darkMode ? "dark-theme" : "light-theme"} header p-4`}>
      <h1>{personal.Title}</h1>
      <h2>{personal.SubTitle}</h2>
      <h3>{personal.Moto}</h3>
      <nav>
        <ul className="flex gap-4">
          {listSocial.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.platform}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
