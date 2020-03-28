import React from "react";
import Skills from "./skills";
import "./css/about.css";

function About() {
  return (
    <div id="about">
      <div id="sub-about">
        <span className="about-grunt">
          <i className="fab fa-grunt"></i>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
