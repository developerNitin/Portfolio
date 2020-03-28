import React, { useState } from "react";
import "./css/navbar.css";

function Navbar() {
  const [link, setLink] = useState(true);

  function visible() {
    setLink(true);
    document.querySelector("#links").style.visibility = "hidden";
  }

  function hidden() {
    setLink(false);
    document.querySelector("#links").style.visibility = "visible";
  }

  return (
    <nav id="navbar">
      <span id="logo">
        <h1>nitin</h1>
      </span>
      <span id="bunBurger">
        <button onClick={link ? hidden : visible}>
          <svg height="8" width="20">
            <rect height="2" width="23" rx="1" x="0" y="0"></rect>
            <rect height="2" width="23" rx="1" x="0" y="5"></rect>
          </svg>
        </button>
      </span>
      <div id="links">
        <span id="sun">
          <button>
            <svg height="27" width="25">
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
        </span>
        <div id="nav-links">
          <ul>
            <li>
              <a onClick={hidden} className="link" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="link" href="/about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="link" href="#">
                CONTECT
              </a>
            </li>
            <li>
              <a className="link" href="#">
                FOOTER
              </a>
            </li>
          </ul>
        </div>
        <span className="media"></span>
        <span className="copyright"></span>
      </div>
    </nav>
  );
}

export default Navbar;
