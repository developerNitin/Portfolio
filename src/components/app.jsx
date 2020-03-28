import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Work from "./work";
import Skills from "./skills";

function app() {
  return (
    <div className="super">
      <Home />
      <Work />
      <Skills />
      <Navbar />
    </div>
  );
}

export default app;
