import React from "react";
import Home from "./home";
import Skills from "./skills";
import Navbar from "./navbar";
import Work from "./work";
import About from "./about";
import Touch from "./touch";

function App() {
  let custom_cursor = {
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    left: "-10%",
    width: "30px",
    height: "30px",
    border: "2px solid white",
    borderRadius: "50%",
    position: "absolute",
    zIndex: "101",
    pointerEvents: "none",
    WebkitTransition: "all .3s ease",
    transition: "all 0.2s ease",
    WebkitTransitionProperty: "border, -webkit-transform",
    transitionProperty: "border, transform, -webkit-transform",
    mixBlendMode: "difference",
  };

  let cursor_dot = {
    left: "-10%",
    position: "absolute",
    backgroundColor: "white",
    pointerEvents: "none",
    zIndex: "102",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    mixBlendMode: "difference",
  };

  // window.addEventListener("mousemove", (e) => {
  //   let cursor = document.querySelector(".custom-cursor");
  //   let cursorDot = document.querySelector(".cursor-dot");
  //   let allLinks = document.querySelectorAll("a");
  //   let allBtn = document.querySelectorAll("button");
  //   let input = document.querySelectorAll("input")

  //   cursor.style.top = e.pageY + "px";
  //   cursor.style.left = e.pageX + "px";
  //   cursorDot.style.top = e.pageY + "px";
  //   cursorDot.style.left = e.pageX + "px";

  //   function anm(name) {
  //     name.forEach((link) => {
  //       link.addEventListener("mouseover", () => {
  //         cursor.style.transform = "scale(2) translate(-25%, -25%)"
  //       });
  //       link.addEventListener("mouseleave", () => {
  //         cursor.style.transform = "scale(1) translate(-50%, -50%)"
  //       });
  //     });
  //   }

  //   anm(allLinks);
  //   anm(allBtn);
  //   anm(input);
  // });

  return (
    <div>
      {/* <div className="custom-cursor" style={custom_cursor}></div>
      <span className="cursor-dot" style={cursor_dot}></span> */}
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <About />
      <Touch />
    </div>
  );
}

export default App;
