import React, { useState } from "react";

function Skills() {
  const [color, setColor] = useState({
    btn1: "inherit",
    btn2: "",
    btn3: ""
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: "rgb(155, 120, 222)",
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
      btn1: "rgb(155, 120, 222)"
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

  function star(bool, color, className) {
    return (
      <span className="star">
        {bool ? (
          <i className="fas fa-square" style={{ color: color }} ></i>
        ) : (
          <i
            style={{
              opacity: ".5",
              fontSize: "7px",
              border: "3px solid rgb(47, 47, 47)",
              color: "rgb(226, 226, 226)"
            }}
            className="fas fa-square"
          ></i>
        )}
      </span>
    );
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
          <span style={{ color: "rgb(47, 47, 47)" }}>{name}</span>
        )}
      </span>
    );
  }

  function starstar(margintop, marginLeft, group, name, bcolor, className) {
    return (
      <li style={{ marginTop: margintop, marginLeft: marginLeft }}>
        {star(group, bcolor, className)}
        {starName(name, group)}
      </li>
    );
  }

  return (
    <div id="skills">
      <header className="skills-heading">
        <h1 className="skills-name">
          <span style={{ fontSize: "85px" }}>S</span>kill
          <span style={{ fontSize: "85px" }}>S</span>
        </h1>
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
                backgroundColor.btn1,
                "fas fa-atom"
              )}
              {starstar(
                "30px",
                "40px",
                stars.Group2,
                "Swift",
                backgroundColor.btn2,
                "fab fa-swift"
              )}
              {starstar(
                "20px",
                "30px",
                stars.Group3,
                "Guitar",
                backgroundColor.btn3,
                "fas fa-music"
              )}
              {starstar(
                "5px",
                "77px",
                stars.Group1,
                "Mongoose",
                backgroundColor.btn1,
                "fas fa-server"
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
                backgroundColor.btn3,
                "fas fa-th-large"
              )}

              {starstar(
                "65px",
                "10px",
                stars.Group1,
                "HTML5",
                backgroundColor.btn1,
                "fab fa-html5"
              )}
              {starstar(
                "45px",
                "40px",
                stars.Group3,
                "C_Lang",
                backgroundColor.btn3,
                "fas fa-file-code"
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
                backgroundColor.btn1,
                "fab fa-css3-alt"
              )}
              {starstar(
                "25px",
                "0px",
                stars.Group3,
                "Git",
                backgroundColor.btn3,
                "fab fa-git-alt"
              )}
              {starstar(
                "40px",
                "20px",
                stars.Group1,
                "NodeJS",
                backgroundColor.btn1,
                "fab fa-node-js"
              )}
            </ul>
          </li>
        </ul>

        <div className="skills-list">
          {button(
            "ieb dev",
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
                backgroundColor.btn2,
                "fas fa-mobile-alt"
              )}

              {starstar(
                "50px",
                "30px",
                stars.Group1,
                "Express",
                backgroundColor.btn1,
                "fab fa-node-js"
              )}
              {starstar(
                "50px",
                "0px",
                stars.Group3,
                "noSQL",
                backgroundColor.btn3,
                "fas fa-database"
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
                backgroundColor.btn3,
                "fab fa-servicestack"
              )}
              {starstar(
                "55px",
                "50px",
                stars.Group2,
                "SwiftUI",
                backgroundColor.btn2,
                "fab fa-swift"
              )}
              {starstar(
                "50px",
                "0px",
                stars.Group1,
                "jsES6",
                backgroundColor.btn1,
                "fab fa-js-square"
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
                backgroundColor.btn1,
                "fas fa-percentage"
              )}
              {starstar(
                "45px",
                "60px",
                stars.Group1,
                "SCSS",
                backgroundColor.btn1,
                "fab fa-sass"
              )}
              <li style={{ marginTop: "55px", width: "130px" }}>
                {star(stars.Group3, backgroundColor.btn3, "fab fa-github")}
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
                    <span style={{ color: "rgb(47, 47, 47)" }}>on Github</span>
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

/*
<i class="fas fa-database"></i>
<i class="fab fa-servicestack"></i>
<i class="fab fa-swift"></i>
<i class="fab fa-js-square"></i>
<i class="fas fa-code"></i>
<i class="fab fa-css3"></i>
<i class="fab fa-github-alt"></i>
*/