import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../src/components/navbar";
import Home from "../src/components/home";
import About from "../src/components/about";
import Space from "./space"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    {" "}
    <div className="super">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
