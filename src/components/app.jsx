import React, { useState } from "react";
import About from "./about";
import Home from "./home";
import Skills from "./skills";
import Navbar from "./navbar";
import Line from "./line";
import "./css/cursor.css";

function App() {

  window.addEventListener("mousemove", e => {
    var cursor = document.querySelector(".custom-cursor");
    var cursorDot = document.querySelector(".cursor-dot");
    var allLinks = document.querySelectorAll("a");

    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    cursorDot.style.top = e.pageY + "px";
    cursorDot.style.left = e.pageX + "px";

    allLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("mouse-over");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouse-over");
      });
    });
  });
  // // allLinks.forEach(link, () => {
  // //   link.addEventListener("mouseover", () => {
  // //     cursor.className += " " + "linkgrow";
  // //   });
  // });

  return (
    <div className="super">
      <div className="custom-cursor">
      </div>
      <span className="cursor-dot"></span>
      <Line />
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
