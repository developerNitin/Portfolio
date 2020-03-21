import React from "react";
import Navbar from "./navbar";
import Head from "./head";
import Skills from "./skills";
import Container from "./container";

function app() {
  return (
    <div className="collection">
      <Navbar />
      <Head />
      <Skills />
    </div>
  );
}

export default app;
