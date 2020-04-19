import React from "react";
import Nitin from "./img/nitin.png"
import Twitter from "./img/twitter.svg"
import Insta from "./img/insta.svg"
import Github from "./img/github.svg"
import "./css/home.css";

function Home() {
  return (
    <div id="home">
      {/* <span id="logo">
        <img src={Nitin}></img>
        Nitin
      </span> */}
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
      {/* <span className="social-media">
        <a><img src={Twitter} ></img></a><br />
        <a><img src={Insta}></img></a><br />
        <a id="github"><img src={Github}></img></a>
      </span> */}
    </div>
  );
}

export default Home;
