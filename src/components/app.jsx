import React from "react";
import About from "./about";
import Home from "./home";
import Skills from "./skills";
import Navbar from "./navbar";
import Line from "./line";

function App() {
  return (
    <div className="super">
      <Line />
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
