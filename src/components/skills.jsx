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

  const [stars, setStars] = useState({
    Group1: false,
    Group2: false,
    Group3: false
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit"
    });
    setBackgroundColor({
      btn1: "rgb(255, 157, 157)"
    });
    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: 0}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";

    setStars({
      Group1: true,
      Group2: false,
      Group3: false
    });
  }

  function btn2onCLick() {
    setColor({
      btn2: "inherit"
    });
    setBackgroundColor({
      btn2: "rgb(142, 207, 206)"
    });

    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: 0}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";

    setStars({
      Group1: false,
      Group2: true,
      Group3: false
    });
  }

  function btn3onCLick() {
    setColor({
      btn3: "inherit"
    });
    setBackgroundColor({
      btn3: "rgb(235, 196, 77)"
    });

    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: 0}";

    setStars({
      Group1: false,
      Group2: false,
      Group3: true
    });
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
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>ReactJS</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group2 && <span>Swift</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>Aaks</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>Javascript ES6</span>}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>HTML5</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>C</span>}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>CSS3</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>nubika</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>Git</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>NodeJS</span>}
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
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>ExpressJS</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group2 && <span>UI</span>}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>EJS</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group2 && <span>SwiftUI</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>MongoDB</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>Mongoose</span>}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group1 && <span>SCSS</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>noSQL</span>}
              </li>
              <li>
                <span className="star">
                  <i class="fas fa-square"></i>
                </span>
                {stars.Group3 && <span>I'm on Github!</span>}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
