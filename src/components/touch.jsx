import React from "react";
import "./css/touch.css";
import Mail from "./img/mail.svg";

function Touch() {
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
              style={{ height: "200px", position: "relative", marginLeft: "10px" }}
            ></img>
            <h1 style={{margin: "-20px 0 25px 30px"}}>Let's talk</h1>
            <p>Ask us anything or just say hi</p>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <form>
              <div>
                <label>NAME</label> <label className="email-label">EMAIL</label>{" "}
                <br />
                <input
                  className="top-two input1"
                  type="text"
                  required="required"
                  placeholder="Nitin Birdi"
                ></input>
                <input
                  className="top-two input2"
                  type="email"
                  required
                  placeholder="nitin.birdi@icloud.com"
                ></input>{" "}
                <br />
                <label className="message-label">MESSAGE</label> <br />
                <input
                  className="message input3"
                  type="text"
                  required
                  placeholder="hi"
                ></input>{" "}
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
