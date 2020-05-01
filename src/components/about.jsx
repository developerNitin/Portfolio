import React, { useState } from "react";
import "./css/about.css";

function About() {
  // const [media, setMedia] = useState({
  //   margin_top: ".7%",
  // });

  // function load() {
  //   let screenwidth = document.getElementById("about").offsetWidth;
  //   if (screenwidth > 1100) {
  //     setMedia({
  //       margin_top: ".7%",
  //     });
  //   } else if (screenwidth < 1100) {
  //     setMedia({
  //       margin_top: "5%",
  //     });
  //   } else if (screenwidth < 900) {
  //     setMedia({
  //       margin_top: "6%",
  //     });
  //   }
  // }

  let about = {
    minHeight: "100vh",
    background: "linear-gradient(-5deg, #424043 80%, #2e2a2f 20%)",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    color: "#e2e2e2",
  };

  let about__about_heading = {
    marginTop: ".7%",
    marginLeft: "-2%",
  };

  let about__about_heading_h1 = {
    margin: "0",
    marginLeft: "-5px",
    fontSize: "45px",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
    letterSpacing: "2px",
  };
  let about__about_heading_h2 = {
    margin: "0",
    fontSize: "45px",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
  };
  let about__about_heading_h3 = {
    margin: "0",
    marginTop: "5px",
    color: "#9b78de",
    marginLeft: "-10px",
    fontSize: "45px",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
  };
  let about_p = {
    fontSize: "18px",
    lineHeight: "27px",
    fontFamily: '"mon300"',
    margin: "100px 0 0 30px",
    width: "500px",
  };

  return (
    <div id="about" style={about} >
      {/* <Line /> */}
      <div className="about-heading" style={about__about_heading}>
        <h1 style={about__about_heading_h1}>Aff,</h1>{" "}
        <h2 style={about__about_heading_h2}>Yin enim ut dia...</h2>
        <h3 style={about__about_heading_h3}>Nibh's ac eiusmo</h3>
      </div>

      <p style={about_p}>
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

export default About;
