import React from "react";
import Skills from "./skills";
import "./css/about.css";
import Space from "./img/space5.jpg";

function About() {
  return (
    <div id="about">
      <div id="sub-about">
        <div className="about-grunt">
          <i className="fab fa-grunt"></i>
        </div>
        <span className="about-heading">
          <h1>ABOUT</h1>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default About;
