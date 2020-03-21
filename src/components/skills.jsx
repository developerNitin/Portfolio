import React, { useState } from "react";

function Skills() {
  const [mouseover, setMouseover] = useState({
    btn1: "#adadad",
    btn2: "#adadad",
    btn3: "#adadad",
    btn4: "#adadad"
  });

  function hover() {
    setMouseover({ btn1: "rgb(115, 131, 179)" });
    setMouseover({ btn2: "rgb(142, 207, 206)" });
    setMouseover({ btn3: "rgb(235, 196, 77)" });
    setMouseover({ btn4: "rgb(224, 157, 150)" });
  }

  function unhover() {
    setMouseover({ btn1: "#adadad" });
    setMouseover({ btn2: "#adadad" });
    setMouseover({ btn3: "#adadad" });
    setMouseover({ btn4: "#adadad" });
  }

  return (
    <div className="skills-div">
      <header className="skills-heading">
        <h1 className="skills-name">
          <span style={{ fontSize: "130px" }}>S</span>kill
          <span style={{ fontSize: "75px" }}>S</span>
        </h1>
        <p>Take a sneak peek on Github and Codepen</p>
      </header>
      <div className="skills-list-div">
        <div className="skills-list">
          <button
            className="btn-skills"
            onMouseOver={hover}
            style={{ color: mouseover.btn1 }}
            onMouseOut={unhover}
          >
            ios dev
          </button>
          <button
            className="btn-skills"
            onMouseOver={hover}
            style={{ color: mouseover.btn2 }}
            onMouseOut={unhover}
          >
            web dev
          </button>
          <button
            className="btn-skills"
            onMouseOver={hover}
            style={{ color: mouseover.btn3 }}
            onMouseOut={unhover}
          >
            languages
          </button>
          <button
            className="btn-skills"
            onMouseOver={hover}
            style={{ color: mouseover.btn4 }}
            onMouseOut={unhover}
          >
            dev dev
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
