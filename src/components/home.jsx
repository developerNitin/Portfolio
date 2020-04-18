import React from "react";
import Line from "./line";
import "./css/home.css";

function Home() {
  return (
    <div id="home">
      <span id="logo">
        <h1>
          <span className="smile" style={{ color: "rgb(155, 120, 222)" }}>
            (
          </span>
          nitin
          <span style={{ color: "rgb(155, 120, 222)" }}>
            :{"<"}
            <span className="smile">)</span>
          </span>
        </h1>
      </span>
      <div className="intro-div">
        <h1 id="h1">
          Hi,<br /> it's<span> Nitin </span>
        </h1>
        <p>I'm a Web, Ios and Android Engineer who helps <br />to turn ideas into accessible experiences.</p>
      </div>
      <footer>
        <a href="#work">
          <span>
            <svg height="9" width="3">
              <rect ry="2" height="9" width="3"></rect>
            </svg>
          </span>
        </a>
        <p>scroll down</p>
      </footer>
      <span className="social-media">
        <a>FB</a>
        <a>IG</a>
        <a id="github">GH</a>
      </span>
    </div>
  );
}

export default Home;
