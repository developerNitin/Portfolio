import React, { useState } from "react";
import "./css/navbar.css";

function Navbar() {
  const [link, setLink] = useState(true);
  const [Rect, setRect] = useState({
    Class1: "bun-rect1",
    Class2: "bun-rect2",
    x1: "11",
    y1: "13",
    x2: "11",
    y2: "27",
    w: "20"
  });

  function visible() {
    setLink(true);
    document.querySelector("#links").style.visibility = "hidden";
    document.querySelector(".btn-rect5").style.visibility = "visible";
    setRect({
      Class1: "bun-rect1",
      Class2: "bun-rect2",
      x1: "11",
      y1: "13",
      x2: "11",
      y2: "27",
      w: "20"
    });
  }

  function hidden() {
    setLink(false);
    document.querySelector("#links").style.visibility = "visible";
    document.querySelector(".btn-rect5").style.visibility = "hidden";
    setRect({
      Class1: "bun-rect3",
      Class2: "bun-rect4",
      x1: "19",
      y1: "-1",
      x2: "-12",
      y2: "29",
      w: "23"
    });
  }

  function rect(Class1, Class2, x1, y1, x2, y2, w) {
    return (
      <svg height="40" width="40">
        <rect
          className={Class1}
          height="2"
          width={w}
          rx="1"
          x={x1}
          y={y1}
        ></rect>
        <rect
          style={{ opacity: ".8" }}
          className="btn-rect5"
          height="2"
          width="17"
          rx="1"
          x="14"
          y="20"
        ></rect>
        <rect
          className={Class2}
          height="2"
          width={w}
          rx="1"
          x={x2}
          y={y2}
        ></rect>
      </svg>
    );
  }

  return (
    <nav id="navbar">
      <div id="bun-sun">
          <button id="sun">
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
          <button id="bunBurger" onClick={link ? hidden : visible}>
            {rect(
              Rect.Class1,
              Rect.Class2,
              Rect.x1,
              Rect.y1,
              Rect.x2,
              Rect.y2,
              Rect.w
            )}
          </button>
      </div>
      <div id="links">
        <ul>
          <li>
            <a href="#home">
              intro
            </a>
          </li>
          <li>
            <a href="#">
              work
            </a>
          </li>
          <li>
            <a href="#">
              about
            </a>
          </li>
          <li>
            <a href="#skills">
              skills
            </a>
          </li>
          <li>
            <a href="#">
              contact
            </a>
          </li>
          <div className="nav-line"></div>
        </ul>
          
      </div>
    </nav>
  );
}

export default Navbar;
