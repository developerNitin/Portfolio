import React from "react";

function Line() {
  const line = {
    position: "absolute",
    width: "1px",
    height: "250%",
    backgroundColor: "rgb(155, 120, 222)",
    left: "19.5%",
    top: "36.4%",
  };

  const span = {
    border: "2px solid rgb(155, 120, 222)",
    width: "5px",
    height: "5px",
    position: "absolute",
    borderRadius: "50%",
    display: "block",
    top: "-7px",
    left: "-4px"
  }
  
  return <div style={line}>
    <span style={span}></span>
  </div>;
}

export default Line;
