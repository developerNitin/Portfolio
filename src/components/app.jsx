import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skills from "./skills";

function app() {
  return (
    <div className="super">
      <Home />
      <About />
      <Skills />
      <Navbar />
    </div>
  );
}

export default app;