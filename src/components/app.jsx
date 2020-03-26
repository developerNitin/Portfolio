import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Skills from "./skills";

function app() {
  return (
    <div>
      <Home />
      <Skills />
      <Navbar />
    </div>
  );
}

export default app;
