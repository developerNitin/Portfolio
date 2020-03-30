import React from "react";

function Line() {
  const line = {
    position: "absolute",
    width: "2px",
    height: "250%",
    backgroundColor: "rgb(155, 120, 222)",
    left: "20%",
    top: "30%"
  };
  
  return <div style={line}></div>;
}

export default Line;
