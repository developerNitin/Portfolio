import React from "react";
import Line from "./line";
import "./css/home.css";

function Home() {
  return (
    <div id="home">
      <Line />
      <span id="logo">
        <h1>
          <span style={{ color: "rgb(155, 120, 222)" }}>>_</span>nitin
        </h1>
      </span>
      <div className="intro-div">
        <span>Intro</span>
        <h1 id="h1">
          Hi, my name is<span> Nitin Birdi</span>
        </h1>
        <h1 id="h2">
          I <span>design</span> and develop cool stuff
        </h1>
        <p>Let me show You...</p>
      </div>
    </div>
  );
}

export default Home;
