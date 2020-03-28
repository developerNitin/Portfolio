import React from "react";
import Skills from "./skills";
import "./css/about.css";

function About() {
  return (
    <div id="about">
      <div className="grunt-about">
        <span>
          <i className="fab fa-grunt"></i>
        </span>
      </div>
      <Skills />
    </div>
  );
}

export default About;
