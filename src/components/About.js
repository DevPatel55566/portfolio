import React from "react";

const About = ({ aboutInfo, darkMode }) => {
  return (
    <p className={`${darkMode ? "dark-theme" : "light-theme"} about`}>
      {aboutInfo.value}
    </p>
  );
};

export default About;
