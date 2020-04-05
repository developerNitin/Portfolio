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
  // function workkk() {
  //   const a = document.querySelectorAll("a");
  //   for(var i = 0; i < 5; i++) {
  //     a[i].style.color = "white";
  //   }
  //   a[1].style.color = "rgb(155, 120, 222)";

  // }

  //  function workdone() {
  //   const a = document.querySelectorAll("a");
  //   a[1].style.color = "white";
  // }

  return (
    <div id="work">
      <div className="work-heading">
        <h2>Works</h2>{" "}
      </div>
      <div id="ios-project">
        <div className="ios-img-div cal">
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
        <h1>01</h1>
        <h2>calculator</h2>
        <span>
          <h3>
            <svg width="80" height="12">
              <rect width="70" height="2" y="5"></rect>
            </svg>
             2020
          </h3>
        </span>
      </div>
    </div>
  );
}

export default Work;

{
  /* <div id="web-projects">
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img blog" src={blog}></img>
        </div>
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img drum" src={drum}></img>
        </div>
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img emoji" src={emoji}></img>
        </div>
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img keeper" src={keeper}></img>
        </div>
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img login" src={login}></img>
        </div>
        <div className="web-img-div">
          <span> bmi </span>
          <img className="web-img todolist" src={todolist}></img>
        </div>
      </div> */
}
