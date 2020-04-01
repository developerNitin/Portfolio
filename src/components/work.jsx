import React from "react";
import bmi from "./img/projects/bmi.png";
import cal from "./img/projects/cal.png";
import chat from "./img/projects/chat.png";
import egg from "./img/projects/egg.png";
import quiz from "./img/projects/quiz.png";
import weather from "./img/projects/weather.png";
import music from "./img/projects/music.png";
import blog from "./img/projects/blog.png";
import drum from "./img/projects/drum.png";
import emoji from "./img/projects/emoji.png";
import keeper from "./img/projects/keeper.png";
import login from "./img/projects/login.png";
import todolist from "./img/projects/todolist.png";
import "./css/work.css";

function Work() {
  return (
    <div id="work">
      <div id="ios-projects">
        <div className="ios-img-div bmi">
          <span>
            <h1>
              BMI <br></br> calculator{" "}
            </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>01</p>
          </span>
          <img className="ios-img" src={bmi}></img>
        </div>
        <div className="ios-img-div cal">
          <span>
            <h1> Calculator </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>02</p>
          </span>
          <img className="ios-img" src={cal}></img>
        </div>
        <div className="ios-img-div chat">
          <span>
            <h1> Online chat </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>03</p>
          </span>
          <img className="ios-img" src={chat}></img>
        </div>
        <div className="ios-img-div quiz">
          <span>
            <h1> Quizzler </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>04</p>
          </span>
          <img className="ios-img" src={quiz}></img>
        </div>
        <div className="ios-img-div weather">
          <span>
            <h1> Weather </h1>
            <svg>
              <rect height="3" width="160"></rect>
            </svg>
            <p>05</p>
          </span>
          <img className="ios-img" src={weather}></img>
        </div>
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
