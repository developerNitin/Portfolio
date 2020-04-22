import React from "react";
import Line from "./lines2"
import "./css/about.css";

function about() {
  return (
    <div id="about">
      <Line />
      <div className="about-heading">
        <h1>Uff,</h1> <h2>You came so far...</h2>
        <h3>Here's my journey</h3>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et
        magnis dis parturient. Sed libero enim sed faucibus. Orci nulla
        pellentesque dignissim enim sit amet venenatis.
        <br />
        <br /> Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a diam
        maecenas sed enim ut sem viverra aliquet. Lacus luctus accumsan tortor
        posuere ac ut. Tincidunt au
        <br />
        <br />
        Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a diam maecenas
        sed enim ut sem viverra aliquet. Lacus luctus accumsan tortor posuere ac
        ut. Tincidunt au{" "}
      </p>
    </div>
  );
}

export default about;
