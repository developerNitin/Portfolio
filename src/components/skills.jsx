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

  function smallStar(bool, color) {
    return (
      <span className="star">
        {bool ? (
          <i style={{ color: color }} class="fas fa-square"></i>
        ) : (
          <i
            style={{
              opacity: ".5",
              fontSize: "7px",
              border: "2px solid rgb(47, 47, 47)",
              color: "rgb(226, 226, 226)"
            }}
            class="fas fa-square"
          ></i>
        )}
      </span>
    );
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
              <li style={{ marginTop: "90px", marginLeft: "70px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>ReactJS</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>ReactJS</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "30px", marginRight: "100px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                <span>
                  {stars.Group2 ? (
                    <span>Swift</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>Swift</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "25px", marginLeft: "40px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>Aaks</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>Aaks</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "30px", marginLeft: "87px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>jsES6</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>jsES6</span>
                  )}
                </span>
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li style={{ marginTop: "45px", marginLeft: "50px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>nubika</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>nubika</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "90px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>HTML5</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>HTML5</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "80px", marginLeft: "80px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>C</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>C</span>
                  )}
                </span>
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li style={{ marginTop: "35px", marginLeft: "30px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>CSS3</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>CSS3</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "45px", marginRight: "150px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>Git</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>Git</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "60px", marginLeft: "40px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>NodeJS</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>NodeJS</span>
                  )}
                </span>
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
            Web dev
          </button>
          <button
            className="btn-skills btn2-skills"
            style={{
              color: color.btn2,
              backgroundColor: backgroundColor.btn2
            }}
            onClick={btn2onCLick}
          >
            Ios dev
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
              <li style={{ marginTop: "140px", marginLeft: "30px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>ExpressJS</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>ExpressJS</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "70px", marginLeft: "60px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>noSQL</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>noSQL</span>
                  )}
                </span>
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li style={{ marginTop: "30px", marginLeft: "10px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>EJS</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>EJS</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "45px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                <span>
                  {stars.Group2 ? (
                    <span>SwiftUI</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>SwiftUI</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "65px", marginLeft: "30px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>MongoDB</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>MongoDB</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "65px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>Mongoose</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>Mongoose</span>
                  )}
                </span>
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul className="sub-skills-list">
              <li style={{ marginTop: "55px", marginRight: "80px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                <span>
                  {stars.Group1 ? (
                    <span>SCSS</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>SCSS</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "55px", marginLeft: "60px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                <span>
                  {" "}
                  {stars.Group2 ? (
                    <span>UI</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>UI</span>
                  )}
                </span>
              </li>
              <li style={{ marginTop: "65px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                <span>
                  {stars.Group3 ? (
                    <span>Github</span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>Github</span>
                  )}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
