import React from "react";
import "./css/touch.css";

function Touch() {
  return (
    <div id="touch">
      <h1 className="touch-heading">
        feel free to{" "}
        <span style={{ color: "rgb(155, 120, 222)" }}>Disturb me</span>
      </h1>
      <div className="contact-heading">
        <div>
          <h1>Let's talk</h1>
          <p>Ask us anything or just say hi...</p>
          <span>
            <h3>+91-8847379603</h3>
            <h4>nitin.birdi@icloud.com</h4>
          </span>
        </div>
      </div>
      <div className="contact-form">
        <div>
          <form>
            <label>NAME</label> <label>EMAIL</label> <br />
            <input type="text" placeholder="john doe"></input>
            <input
              type="email"
              placeholder="example@yourdomain.com"
            ></input>{" "}
            <br />
            <label>MESSAGE</label> <br />
            <input
              className="message"
              type="text"
              placeholder="Hi there"
            ></input> <br />
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Touch;
