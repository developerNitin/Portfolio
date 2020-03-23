import React, { useState } from "react";

function Skills() {
  const [color, setColor] = useState({
    btn1: "inherit",
    btn2: "",
    btn3: ""
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: "rgb(255, 157, 157)",
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

  function star(name, starGroup, marginRight, marginLeft, marginTop) {
    return (
      <span
        style={{
          display: "block",
          marginRight: marginRight,
          marginLeft: marginLeft,
          marginTop: marginTop
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

  return (
    <div className="skills">
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
            <ul style={{width: "115px"}} className="sub-skills-list">
              <li style={{ marginTop: "80px", marginLeft: "50px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("React", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "30px", marginRight: "70px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                {star("Swift", stars.Group2, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "10px", marginLeft: "40px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("Aaks", stars.Group3, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "5px", marginLeft: "77px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("Mongoose", stars.Group1, "0", "20px", "0")}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul style={{width: "100px"}} className="sub-skills-list">
              <li style={{ marginTop: "25px", marginLeft: "10px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("nubika", stars.Group3, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "65px", marginLeft: "10px"}}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("HTML5", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "45px", marginLeft: "80px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("C_Lang", stars.Group3, "0", "20px", "0")}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul style={{marginRight: "20px"}} className="sub-skills-list">
              <li style={{ marginTop: "30px", marginLeft: "10px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("CSS3", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "25px", marginRight: "100px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("Git", stars.Group3, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "40px", marginLeft: "40px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("NodeJS", stars.Group1, "0", "20px", "0")}
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
            Other
          </button>
        </div>

        <ul className="dots-list2">
          <li style={{marginRight: "0px", width: "100px"}} className="sub-skills-container">
            <ul className="sub-skills-list">
              <li style={{ marginTop: "30px", marginLeft: "0px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                {star("UI", stars.Group2, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "50px", marginLeft: "30px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("Express", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "50px", marginLeft: "4s0px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("noSQL", stars.Group3, "0", "20px", "0")}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul style={{width: "80px"}} className="sub-skills-list">
              <li style={{ marginTop: "35px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
                {star("MongoDB", stars.Group3, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "55px", marginLeft: "50px" }}>
                {smallStar(stars.Group2, backgroundColor.btn2)}
                {star("SwiftUI", stars.Group2, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "45px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("jsES6", stars.Group1, "0", "20px", "0")}
              </li>
            </ul>
          </li>
          <li className="sub-skills-container">
            <ul style={{width: "50px"}} className="sub-skills-list">
              <li style={{ marginTop: "75px", marginRight: "20px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("EJS", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "45px", marginLeft: "60px" }}>
                {smallStar(stars.Group1, backgroundColor.btn1)}
                {star("SCSS", stars.Group1, "0", "20px", "0")}
              </li>
              <li style={{ marginTop: "55px", width: "130px" }}>
                {smallStar(stars.Group3, backgroundColor.btn3)}
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
                        I'm on Github
                      </a>
                    </span>
                  ) : (
                    <span style={{ color: "rgb(47, 47, 47)" }}>
                      I'm on Github
                    </span>
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
