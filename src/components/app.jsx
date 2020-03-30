import React from "react";
import About from "./about";
import Home from "./home";
import Skills from "./skills";
import Navbar from "./navbar";

function App() {
  return (
    <div className="super">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
