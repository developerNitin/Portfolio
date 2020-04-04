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
      <header>
        <h1>Selected ios and web projects...</h1>
      </header>
      <h2>IOS</h2>

      <div id="ios-projects">
        <div className="ios-img-div cal">
          <a href="#skills">
            <span>
              <h1> Calculator </h1>
              <svg>
                <rect height="3" width="160"></rect>
              </svg>
              <p>01</p>
            </span>
            <img className="ios-img" src={cal}></img>
          </a>
        </div>
        <div className="ios-img-div bmi">
          <a>
            {" "}
            <span>
              <h1>
                BMI <br></br> calculator{" "}
              </h1>
              <svg>
                <rect height="3" width="160"></rect>
              </svg>
              <p>02</p>
            </span>
            <img className="ios-img" src={bmi}></img>
          </a>
        </div>

        <div className="ios-img-div chat">
          <a>
            <span>
              <h1> Online chat </h1>
              <svg>
                <rect height="3" width="160"></rect>
              </svg>
              <p>03</p>
            </span>
            <img className="ios-img" src={chat}></img>
          </a>
        </div>
        <div className="ios-img-div weather">
          <a>
            <span>
              <h1> Weather </h1>
              <svg>
                <rect height="3" width="160"></rect>
              </svg>
              <p>04</p>
            </span>
            <img className="ios-img" src={weather}></img>
          </a>
        </div>
      </div>
      <div className="ios-img-div quiz">
        <a>
          <span>
            <h1> Quizzler </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>05</p>
          </span>
          <img className="ios-img" src={quiz}></img>
        </a>
      </div>

      {/* <div id="web-projects">
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
      </div> */}
    </div>
  );
}

export default Work;
