import React from "react";
import Home from "./home";
import Skills from "./skills";
import Navbar from "./navbar";
import Work from "./work"
import Touch from "./touch"
import Footer from "./footer"
import "./css/cursor.css";

function App() {
  // window.addEventListener("mousemove", e => {
  //   var cursor = document.querySelector(".custom-cursor");
  //   var cursorDot = document.querySelector(".cursor-dot");
  //   var allLinks = document.querySelectorAll("a");
  //   var allBtn = document.querySelectorAll("button");

  //   cursor.style.top = e.pageY + "px";
  //   cursor.style.left = e.pageX + "px";
  //   cursorDot.style.top = e.pageY + "px";
  //   cursorDot.style.left = e.pageX + "px";

  //   function anm(name) {
  //     name.forEach(link => {
  //       link.addEventListener("mouseover", () => {
  //         cursor.classList.add("mouse-over");
  //       });
  //       link.addEventListener("mouseleave", () => {
  //         cursor.classList.remove("mouse-over");
  //       });
  //     });
  //   }
    
  //   anm(allLinks);
  //   anm(allBtn);
  // });

  return (
    <div>
      {/* <div className="custom-cursor"></div>
      <span className="cursor-dot"></span> */}
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <Touch />
      <Footer />
    </div>
  );
}

export default App;
