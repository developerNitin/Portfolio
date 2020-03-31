import React, { useState } from "react";
import "./css/skills.css";

function Skills() {
  const colorCollection = {
    gray: "rgb(65, 60, 68)",
    darkGray: "rgb(46, 42, 47)",
    pruple: "rgb(155, 120, 222)",
    blue: "rgb(82, 233, 208)",
    yellow: "rgb(223, 185, 72)"
  };
  const [color, setColor] = useState({
    btn1: "inherit",
    btn2: "",
    btn3: ""
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: colorCollection.pruple,
    btn2: "",
    btn3: ""
  });

  const [stars, setStars] = useState({
    Group1: true,
    Group2: false,
    Group3: false
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit"
    });
    setBackgroundColor({
      btn1: colorCollection.pruple
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
      btn2: colorCollection.blue
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
      btn3: colorCollection.yellow
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

  function button(name, btnclass, Color, bcolor, onClick) {
    return (
      <button
        className={btnclass}
        style={{
          color: Color,
          backgroundColor: bcolor
        }}
        onClick={onClick}
      >
        {name}
      </button>
    );
  }

  function Square(px, fill, xy, rx) {
    const rect = {
      width: px,
      height: px,
      fill: fill,
      x: xy,
      y: xy
    };
    const svg = {
      width: "13px",
      height: "13px"
    };
    return (
      <svg style={svg}>
        <rect style={rect} rx={rx}></rect>
      </svg>
    );
  }

  function star(bool, color) {
    return (
      <span className="star">
        {bool
          ? Square("13px", color, "0px", "4")
          : Square("6px", "gray", "3.5px", "1.5")}
      </span>
    );
  }

  function starName(name, starGroup) {
    return (
      <span
        style={{
          display: "block",
          marginLeft: "20px"
        }}
      >
        {starGroup ? (
          <span>{name}</span>
        ) : (
          <span style={{ visibility: "hidden" }}>{name}</span>
        )}
      </span>
    );
  }

  function starstar(margintop, marginLeft, group, name, bcolor) {
    return (
      <li style={{ marginTop: margintop, marginLeft: marginLeft }}>
        {star(group, bcolor)}
        {starName(name, group)}
      </li>
    );
  }

  return (
    <div id="skills">
      <div id="sub-skills">
        <header className="skills-heading">
          <h1 className="skills-name">skills</h1>
          <p>Take a sneak peek on Github.</p>
        </header>
        <div className="dots-list-container">
          <ul className="dots-list1">
            <li className="sub-skills-container">
              <ul style={{ width: "115px" }} className="sub-skills-list">
                {starstar(
                  "80px",
                  "40px",
                  stars.Group1,
                  "React",
                  backgroundColor.btn1
                )}
                {starstar(
                  "30px",
                  "40px",
                  stars.Group2,
                  "Swift",
                  backgroundColor.btn2
                )}
                {starstar(
                  "20px",
                  "30px",
                  stars.Group3,
                  "Guitar",
                  backgroundColor.btn3
                )}
                {starstar(
                  "5px",
                  "77px",
                  stars.Group1,
                  "Mongoose",
                  backgroundColor.btn1
                )}
              </ul>
            </li>
            <li className="sub-skills-container">
              <ul style={{ width: "100px" }} className="sub-skills-list">
                {starstar(
                  "25px",
                  "10px",
                  stars.Group3,
                  "Rubix",
                  backgroundColor.btn3
                )}

                {starstar(
                  "65px",
                  "10px",
                  stars.Group1,
                  "HTML5",
                  backgroundColor.btn1
                )}
                {starstar(
                  "45px",
                  "40px",
                  stars.Group3,
                  "C_Lang",
                  backgroundColor.btn3
                )}
              </ul>
            </li>
            <li className="sub-skills-container">
              <ul style={{ marginRight: "20px" }} className="sub-skills-list">
                {starstar(
                  "30px",
                  "10px",
                  stars.Group1,
                  "CSS5",
                  backgroundColor.btn1
                )}
                {starstar(
                  "25px",
                  "0px",
                  stars.Group3,
                  "Git",
                  backgroundColor.btn3
                )}
                {starstar(
                  "40px",
                  "20px",
                  stars.Group1,
                  "NodeJS",
                  backgroundColor.btn1
                )}
              </ul>
            </li>
          </ul>

          <div className="btn-skills-list">
            {button(
              "web dev",
              "btn-skills btn1-skills",
              color.btn1,
              backgroundColor.btn1,
              btn1onCLick
            )}
            {button(
              "ios dev",
              "btn-skills btn2-skills",
              color.btn2,
              backgroundColor.btn2,
              btn2onCLick
            )}
            {button(
              "more",
              "btn-skills btn3-skills",
              color.btn3,
              backgroundColor.btn3,
              btn3onCLick
            )}
          </div>

          <ul className="dots-list2">
            <li
              style={{ marginRight: "0px", width: "100px" }}
              className="sub-skills-container"
            >
              <ul className="sub-skills-list">
                {starstar(
                  "30px",
                  "0px",
                  stars.Group2,
                  "UI",
                  backgroundColor.btn2
                )}

                {starstar(
                  "50px",
                  "30px",
                  stars.Group1,
                  "Express",
                  backgroundColor.btn1
                )}
                {starstar(
                  "50px",
                  "0px",
                  stars.Group3,
                  "noSQL",
                  backgroundColor.btn3
                )}
              </ul>
            </li>
            <li className="sub-skills-container">
              <ul style={{ width: "80px" }} className="sub-skills-list">
                {starstar(
                  "35px",
                  "0px",
                  stars.Group3,
                  "MongoDB",
                  backgroundColor.btn3
                )}
                {starstar(
                  "55px",
                  "50px",
                  stars.Group2,
                  "SwiftUI",
                  backgroundColor.btn2
                )}
                {starstar(
                  "50px",
                  "0px",
                  stars.Group1,
                  "jsES6",
                  backgroundColor.btn1
                )}
              </ul>
            </li>
            <li className="sub-skills-container">
              <ul style={{ width: "50px" }} className="sub-skills-list">
                {starstar(
                  "75px",
                  "0px",
                  stars.Group1,
                  "EJS",
                  backgroundColor.btn1
                )}
                {starstar(
                  "45px",
                  "60px",
                  stars.Group1,
                  "sass",
                  backgroundColor.btn1
                )}
                <li style={{ marginTop: "55px", width: "130px" }}>
                  {star(stars.Group3, backgroundColor.btn3)}
                  <span
                    style={{
                      display: "block",
                      marginLeft: "20px"
                    }}
                  >
                    {stars.Group3 ? (
                      <span>
                        <a
                          className="iamongit"
                          href="https://github.com/developerNitin"
                        >
                          on Github
                        </a>
                      </span>
                    ) : (
                      <span style={{ visibility: "hidden" }}>on Github</span>
                    )}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="skill-for-mobile">
          <div className="skill-list-for-mobile ul1-mobile">
            <ul>
              <h1 className="skill-mobile-h1">web dev</h1>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>React</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>HTML5</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>sass</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>NodeJS</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>jsES6</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>EJS</span>
              </li>
            </ul>
          </div>
          <div className="skill-list-for-mobile ul2-mobile">
            <ul className="">
              <h1 className="skill-mobile-h2">ios dev</h1>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>Swift</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>SwiftUI</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>UI</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>on Github</span>
              </li>
            </ul>
          </div>
          <div className="skill-list-for-mobile ul3-mobile">
            <ul className="">
              <h1 className="skill-mobile-h3">more</h1>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>C_Lang</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>noSQL</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>MongoDB</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>Git</span>
              </li>
            </ul>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
