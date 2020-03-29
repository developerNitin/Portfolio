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
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
