import React, { useState } from "react";
import NitinLight from "./img/nitin-light.png";
import NitinDark from "./img/nitin-dark.png";

function Head() {
  const [mode, setMode] = useState(NitinDark);

  return (
    <div style={{ height: "100vh" }}>
      <div className="top-container">
        <img className="name" src={mode}></img>
      </div>
    </div>
  );
}

export default Head;
