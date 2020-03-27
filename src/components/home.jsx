import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div id="top-container">
      <div id="sub-top-container">
        {/* <spam className="loading">
          <i className="fab fa-wolf-pack-battalion"></i>
        </spam> */}
        <h1 className="name">
          <span className="flying-man">
            <i className="fab fa-studiovinari"></i>
          </span>
          <span>A</span>Nitin
        </h1>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
}

export default Home;
