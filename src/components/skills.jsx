import React, { useState } from "react";

function Skills() {
  const [color, setColor] = useState({
    btn1: "",
    btn2: "",
    btn3: "",
    btn4: ""
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: "",
    btn2: "",
    btn3: "",
    btn4: ""
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit"
    });
    setBackgroundColor({
      btn1: "rgb(255, 157, 157)"
    });
    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {background: inherit;}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {background: #adadad;}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {background: #adadad;}";
    var styleElem4 = document.body.appendChild(document.createElement("style"));
    styleElem4.innerHTML = ".btn4-skills:before {background: #adadad;}";
  }

  function btn2onCLick() {
    setColor({
      btn2: "inherit"
    });
    setBackgroundColor({
      btn2: "rgb(142, 207, 206)"
    });

    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {background: #adadad;}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {background: inherit;}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {background: #adadad;}";
    var styleElem4 = document.body.appendChild(document.createElement("style"));
    styleElem4.innerHTML = ".btn4-skills:before {background: #adadad;}";
  }

  function btn3onCLick() {
    setColor({
      btn3: "inherit"
    });
    setBackgroundColor({
      btn3: "rgb(235, 196, 77)"
    });

    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {background: #adadad;}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {background: #adadad;}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {background: inherit;}";
    var styleElem4 = document.body.appendChild(document.createElement("style"));
    styleElem4.innerHTML = ".btn4-skills:before {background: #adadad;}";
  }

  function btn4onCLick() {
    setColor({
      btn4: "inherit"
    });
    setBackgroundColor({
      btn4: "rgb(159, 118, 255)"
    });

    var styleEle1 = document.body.appendChild(document.createElement("style"));
    styleEle1.innerHTML = ".btn1-skills:before {background: #adadad;}";
    var styleElem2 = document.body.appendChild(document.createElement("style"));
    styleElem2.innerHTML = ".btn2-skills:before {background: #adadad;}";
    var styleElem3 = document.body.appendChild(document.createElement("style"));
    styleElem3.innerHTML = ".btn3-skills:before {background: #adadad;}";
    var styleElem4 = document.body.appendChild(document.createElement("style"));
    styleElem4.innerHTML = ".btn4-skills:before {background: inherit;}";
  }

  return (
    <div className="skills-div">
      <header className="skills-heading">
        <h1 className="skills-name">
          <span style={{ fontSize: "85px" }}>S</span>kill
          <span style={{ fontSize: "85px" }}>S</span>
        </h1>
        <p>Take a sneak peek on Github and Codepen</p>
      </header>
      <div className="skills-list-div">
        <div className="skills-list">
          <button
            className="btn-skills btn1-skills"
            style={{ color: color.btn1, backgroundColor: backgroundColor.btn1 }}
            onClick={btn1onCLick}
          >
            ios dev
          </button>
          <button
            className="btn-skills btn2-skills"
            style={{ color: color.btn2, backgroundColor: backgroundColor.btn2 }}
            onClick={btn2onCLick}
          >
            web dev
          </button>
          <button
            className="btn-skills btn3-skills"
            style={{ color: color.btn3, backgroundColor: backgroundColor.btn3 }}
            onClick={btn3onCLick}
          >
            languages
          </button>
          <button
            className="btn-skills btn4-skills"
            style={{ color: color.btn4, backgroundColor: backgroundColor.btn4 }}
            onClick={btn4onCLick}
          >
            dev dev
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
