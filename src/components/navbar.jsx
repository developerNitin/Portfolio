import React, { useState } from "react";
import "./css/navbar.css";

function Navbar() {
  const [mode, setMode] = useState(false);
  const [link, setLink] = useState(false);

  function darkMode() {
    setMode(false);
    document.querySelector("body").style.backgroundColor = "rgb(67, 67, 67)";
    document.querySelector(".btn-burger").style.fill = "rgb(226, 226, 226)";
    document.querySelector(".btn-sun").style.fill = "rgb(226, 226, 226)";
    document.querySelector(".name").style.color = "rgb(226, 226, 226)";
    const flyingMan = document.querySelector(".flying-man");
    flyingMan.style.color = "rgb(226, 226, 226)";
    flyingMan.style.backgroundColor = "rgb(67, 67, 67)";
    const styleElem = document.body.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML = ".link:after {background-color: rgb(47, 47, 47)}";
    for (let i = 0; i < 5; i++) {
      document.querySelectorAll(".a")[i].style.color = "rgb(226, 226, 226)";
    } 
    document.querySelector(".asf").style.color = "rgb(226, 226, 226)";
  }

  function lightMode() {
    setMode(true);
    document.querySelector("body").style.backgroundColor = "rgb(248, 243, 238)";
    document.querySelector(" .btn-sun").style.fill = "rgb(111, 111, 111)";
    document.querySelector(".btn-burger").style.fill = "rgb(111, 111, 111)";
    document.querySelector(".name").style.color = "rgb(111, 111, 111)";
    const flyingMan = document.querySelector(".flying-man");
    flyingMan.style.color = "rgb(111, 111, 111)";
    flyingMan.style.backgroundColor = "rgb(248, 243, 238)";
    const styleElem = document.body.appendChild(
      document.createElement("style")
    );
    styleElem.innerHTML = ".link:after {background-color: #ffffff }";
    for (let i = 0; i < 5; i++) {
    document.querySelectorAll(".a")[i].style.color = "rgb(111, 111, 111)";
    }
    document.querySelector(".asf").style.color = "rgb(111, 111, 111)";
  }

  function visible() {
    setLink(false);
    document.querySelector("#links").style.display = "none";
  }

  function hidden() {
    setLink(true);
    document.querySelector("#links").style.display = "contents";
  }

  function active() {
    document.querySelector(".a").style.color = "red;";
  }

  return (
    <nav className="navbar">
      <button onClick={mode ? darkMode : lightMode} className="btn-sun">
        <svg height="33.8" width="30" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.8" cy="14" r="4"></circle>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="11.5"
            y="5.9"
            transform="rotate(-180 12.5 5.9)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="12"
            y="22"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="16.4"
            y="15.1"
            transform="rotate(-90 18.2 13)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="6.9"
            y="11.6"
            transform="rotate(90 5.2 11.6)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="15.6"
            y="20.1"
            transform="rotate(-45 15.6 17.6)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="7.6"
            y="6.2"
            transform="rotate(135 7.6 7.2)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="15.4"
            y="9.1"
            transform="rotate(-135 16.8 8.3)"
          ></rect>
          <rect
            className="svg-sun-ray"
            height="5"
            width="1.5"
            rx="1"
            x="8.6"
            y="17.3"
            transform="rotate(45 6.6 16.3)"
          ></rect>
        </svg>
      </button>
      <button onClick={link ? visible : hidden} className="btn-burger">
        <svg height="40" width="20">
          <rect height="2" width="20" rx="1" x="0" y="12"></rect>
          <rect
            style={{ opacity: ".7" }}
            height="2"
            width="15"
            rx="1"
            x="5"
            y="19"
          ></rect>
          <rect height="2" width="20" rx="1" x="0" y="26"></rect>
        </svg>
      </button>
      <div id="links">
        <ul>
          <li className="link">
            <a className="a" href="#top-container">
              home
            </a>
          </li>
          <li className="link">
            <a className="a" href="#sub-skills">
              skills
            </a>
          </li>
          <li className="link">
            <a className="a">about</a>
          </li>
          <li className="link">
            <a className="a">contact</a>
          </li>
          <li className="link">
            <a className="a">footer</a>
          </li>
        </ul>
        <span className="line"></span>
        <span className="asf">Nitin Birdi</span>
      </div>
    </nav>
  );
}

export default Navbar;
