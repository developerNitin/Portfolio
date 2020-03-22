import React, { useState } from "react";

function Skills() {
  const [color, setColor] = useState({
    btn1: "",
    btn2: "",
    btn3: ""
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: "",
    btn2: "",
    btn3: ""
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit"
    });
    setBackgroundColor({
      btn1: "rgb(255, 157, 157)"
    });
    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {opacity: 0}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";
  }

  function btn2onCLick() {
    setColor({
      btn2: "inherit"
    });
    setBackgroundColor({
      btn2: "rgb(142, 207, 206)"
    });

    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {opacity: 0}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";
  }

  function btn3onCLick() {
    setColor({
      btn3: "inherit"
    });
    setBackgroundColor({
      btn3: "rgb(235, 196, 77)"
    });

    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {opacity: 0}";
  }

  return (
    <div className="skills">
      <header className="skills-heading">
        <h1 className="skills-name">
          <span style={{ fontSize: "85px" }}>S</span>kill
          <span style={{ fontSize: "85px" }}>S</span>
        </h1>
        <p>Take a sneak peek on Github and Codepen</p>
      </header>
      <div className="dots-list-container">
        <ul className="dots-list1">
          <li>
            <ul>
              <li>
                <span></span>
                <span>ReactJS</span>
              </li>
              <li>
                <span></span>
                <span>Swift</span>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <span></span>
                <span>HTML5</span>
              </li>
              <li>
                <span></span>
                <span>C</span>
              </li>
              <li>
                <span></span>
                <span>CSS3</span>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <span></span>
                <span>Javascript ES6</span>
              </li>
              <li>
                <span></span>
                <span>Git</span>
              </li>
              <li>
                <span></span>
                <span>NodeJS</span>
              </li>
            </ul>
          </li>
        </ul>

        <div className="skills-list">
          <button
            className="btn-skills btn1-skills"
            style={{
              color: color.btn1,
              backgroundColor: backgroundColor.btn1
            }}
            onClick={btn1onCLick}
          >
            ios dev
          </button>
          <button
            className="btn-skills btn2-skills"
            style={{
              color: color.btn2,
              backgroundColor: backgroundColor.btn2
            }}
            onClick={btn2onCLick}
          >
            web dev
          </button>
          <button
            className="btn-skills btn3-skills"
            style={{
              color: color.btn3,
              backgroundColor: backgroundColor.btn3
            }}
            onClick={btn3onCLick}
          >
            languages
          </button>
        </div>

        <ul className="dots-list2">
          <li>
            <ul>
              <li>
                <span></span>
                <span>ExpressJS</span>
              </li>
              <li>
                <span></span>
                <span>UI</span>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <span></span>
                <span>EJS</span>
              </li>
              <li>
                <span></span>
                <span>SwiftUI</span>
              </li>
              <li>
                <span></span>
                <span>MongoDB</span>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <span></span>
                <span>SCSS</span>
              </li>
              <li>
                <span></span>
                <span>I'm on Github!</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
