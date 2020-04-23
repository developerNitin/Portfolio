import React from "react";
import Img from "./img/coding.svg"
import "./css/home.css";

function Home() {
  function visi() {
    document.getElementById("scroll-mention").style.display = "block";
  }

  return (
    <div id="home" onMouseEnter={visi}>
      <div className="intro-div">
        <h1 id="h1">
          Hi,
          <br /> it's<span> Nitin </span>
        </h1>
        <p>
          I'm a Web, Ios and Android Engineer who helps <br />
          to turn ideas into accessible experiences.
        </p>
      </div>
      <img className="coding-img" src={Img}></img>
      <footer id="scroll-mention">
        <h3>start scrolling</h3>
        <svg width="150" height="3">
          <rect width="150" height="3"></rect>
        </svg>
      </footer>
    </div>
  );
}

export default Home;
