import React from "react";
import Line from "./line";
import "./css/home.css";

function Home() {
  return (
    <div id="home">
      <span id="logo">
        <h1>
          <span className="smile" style={{ color: "rgb(155, 120, 222)" }}>
            (
          </span>
          nitin
          <span style={{ color: "rgb(155, 120, 222)" }}>
            :{"<"}
            <span className="smile">)</span>
          </span>
        </h1>
      </span>
      <svg
        height="200"
        width="200"
        style={{
          fill: "rgb(65, 60, 68)",
        }}
      >
        <rect height="200" width="200" rx="50%"></rect>
      </svg>
      <div className="intro-div">
        {/* <span>Intro</span> */}
        <h1 id="h1">
          Hi, my name is<span> Nitin Birdi</span>
        </h1>
        <h1 id="h2">
          I <span>design</span> and develop
        </h1>
        <p>[Let me show You]</p>
      </div>
    </div>
  );
}

export default Home;
