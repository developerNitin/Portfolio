import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div id="home">
     <span id="logo">
        <h1>
          <span style={{color: "rgb(155, 120, 222)"}}>>_</span>nitin
        </h1>
      </span>
      <div className="intro-div">
        <span><span className="_intro">>_</span>Intro</span>
        <h1 id="h1">Hi, my name is<span> NitinBirdi</span></h1>
        <h1 id="h2">I <span>design</span> and develop cool stuff</h1>
        <p>Let me show You...</p>
      </div>
    </div>
  );
}

export default Home;