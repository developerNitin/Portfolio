import React from "react";
import Nitin from "./img/nitin.png";
import Twitter from "./img/twitter.svg";
import Insta from "./img/insta.svg";
import Github from "./img/github.svg";
import "./css/home.css";

function Home() {
  function hide() {
    document.getElementById("scroll-mention").style.display = "none";
  }

  return (
    <div id="home" onScroll={hide}>
      {/* <span id="logo">
        <img src={Nitin}></img>
        Nitin
      </span> */}
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
      <span id="scroll-mention">
        <h3>start scrolling</h3>
      </span>
      {/* <span className="social-media">
        <a><img src={Twitter} ></img></a><br />
        <a><img src={Insta}></img></a><br />
        <a id="github"><img src={Github}></img></a>
      </span> */}
    </div>
  );
}

export default Home;
