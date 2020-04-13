import React from "react";
import "./css/touch.css";
import Mail from "./img/mail.svg";

function Touch() {
  // function inputfocus1() {
  //   const label1 = document.querySelector(".input-label1");
  //   label1.style.top = "0px";
  //   const label2 = document.querySelector(".input-label2");
  //   label2.style.top = "25px";
  //   const label3 = document.querySelector(".input-label3");
  //   label3.style.top = "25px";
  // }
  // function inputfocus2() {
  //   const label1 = document.querySelector(".input-label1");
  //   label1.style.top = "25px";
  //   const label2 = document.querySelector(".input-label2");
  //   label2.style.top = "0px";
  //   const label3 = document.querySelector(".input-label3");
  //   label3.style.top = "25px";
  // }
  // function inputfocus3() {
  //   const label1 = document.querySelector(".input-label1");
  //   label1.style.top = "25px";
  //   const label2 = document.querySelector(".input-label2");
  //   label2.style.top = "25px";
  //   const label3 = document.querySelector(".input-label3");
  //   label3.style.top = "0px";
  // }

  return (
    <div id="touch">
      {/* <h1 className="touch-heading">
        feel free to{" "}
        <span style={{ color: "rgb(155, 120, 222)" }}>Disturb me</span>
      </h1> */}
      <div id="sub-touch">
        <div className="contact-heading">
          <div>
            <img
              src={Mail}
              style={{
                height: "200px",
                position: "relative",
                marginLeft: "10px",
              }}
            ></img>
            <h1 style={{ margin: "-30px 0 25px 30px" }}>Let's talk</h1>
            <p>Ask us anything or just say hi</p>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <form>
              <div>
                <div className="input-div1">
                  <label className="input-label1">NAME</label>{" "}
                  <input
                    // onFocus={inputfocus1}
                    className="top-two input1"
                    type="text"
                    required
                  ></input>
                </div>
                <div className="input-div2">
                  <label className="email-label input-label2">EMAIL</label>
                  <input
                    // onFocus={inputfocus2}
                    className="top-two input2"
                    type="email"
                    required
                  ></input>{" "}
                </div>
                <br />
                <div className="input-div3">
                  <label className="message-label input-label3">MESSAGE</label>{" "}
                  <input
                    // onFocus={inputfocus3}
                    className="message input3"
                    type="text"
                    required
                  ></input>{" "}
                </div>
                <br />
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
