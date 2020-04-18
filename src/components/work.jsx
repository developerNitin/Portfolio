import React from "react";
import bmi from "./img/projects/bmi.png";
import cal from "./img/projects/cal.png";
import chat from "./img/projects/chat.png";
import quiz from "./img/projects/quiz.png";
import weather from "./img/projects/weather.png";
// import blog from "./img/projects/blog.png";
// import drum from "./img/projects/drum.png";
// import emoji from "./img/projects/emoji.png";
// import keeper from "./img/projects/keeper.png";
// import login from "./img/projects/login.png";
// import todolist from "./img/projects/todolist.png";
import "./css/work.css";

function Work() {
  function scrolled() {
    const work = document.getElementById("ios-project");
    const name = document.getElementById("project-name");
    const no = document.getElementById("project-number");
    const iosdiv = document.getElementById("calender").offsetWidth;
    const iosdiv1 = iosdiv*0.8;
    const iosdiv2 = iosdiv + iosdiv*0.7;
    const iosdiv3 = iosdiv*2 + iosdiv*0.6;
    const iosdiv4 = iosdiv*3 + iosdiv*0.6;
    
    if (work.scrollLeft < iosdiv1) {
      name.innerHTML = "calculator";
      no.innerHTML = "01";
    }
    
    if (work.scrollLeft > iosdiv1) {
      name.innerHTML = "BmiCal";
      no.innerHTML = "02";
    }
    
    if (work.scrollLeft > iosdiv2) {
      name.innerHTML = "FlashChat";
      no.innerHTML = "03";
    }

     if (work.scrollLeft > iosdiv3) {
      name.innerHTML = "Weather";
      no.innerHTML = "04";
    }

     if (work.scrollLeft > iosdiv4) {
      name.innerHTML = "quizzer";
      no.innerHTML = "05";
    }
  }

  return (
    <div id="work">
      {/* <div className="frame" /> */}
      <div className="work-heading">
        <h2>Works</h2>{" "}
      </div>
      <div onScroll={scrolled} id="ios-project">
        <div id="calender" className="ios-img-div cal">
          <div>
            <a>
              <img className="ios-img" src={cal}></img>
            </a>
          </div>
        </div>

        <div className="ios-img-div bmi">
          <div>
            <a>
              <img className="ios-img" src={bmi}></img>
            </a>
          </div>
        </div>

        <div className="ios-img-div chat">
          <div>
            {" "}
            <a>
              <img className="ios-img" src={chat}></img>
            </a>
          </div>
        </div>

        <div className="ios-img-div weather">
          <div>
            {" "}
            <a>
              <img className="ios-img" src={weather}></img>
            </a>
          </div>
        </div>

        <div className="ios-img-div quiz">
          <div>
            {" "}
            <a>
              <img className="ios-img" src={quiz}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="cover-work">
        <h3 className="cover-heading">works</h3>
        <h1 id="project-number">01</h1>
        <h2 id="project-name">calculator</h2>
        <span>
          <h3>
            <svg width="80" height="12">
              <rect width="70" height="2" y="5"></rect>
            </svg>
            IOS
          </h3>
        </span>
      </div>
    </div>
  );
}

export default Work;
