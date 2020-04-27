import React from "react";
import "./css/touch.css";
import reading from "./img/reading.svg"

function Touch() {
  return (
    <div id="touch">
      <div id="sub-touch">
        <div className="contact-heading">
          <div>
            <h1>Let's talk</h1>
            <p>Ask us anything or just say hi</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div>
              <div className="input-div1">
                <label className="input-label1">NAME</label>{" "}
                <input className="top-two input1" type="text" required></input>
              </div>
              <div className="input-div2">
                <label className="email-label input-label2">EMAIL</label>
                <input
                  className="top-two input2"
                  type="email"
                  required
                ></input>{" "}
              </div>
              <br />
              <div className="input-div3">
                <label className="message-label input-label3">MESSAGE</label>{" "}
                <input className="message input3" type="text" required></input>{" "}
              </div>
              <br />
              <button type="submit">SEND</button>
            </div>
          </form>
          <div className="social-links">
            <a href="https://github.com/developerNitin">github</a>
            <a href="#">twitter</a>
            <a href="mailto:nitin.birdi@icloud.com">e-mail</a>
          </div>
          <div className="reading-touch-img">
            <img src={reading}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
