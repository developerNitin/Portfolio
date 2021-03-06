import React from "react";
import Img from "./img/coding.svg";
import Media from "react-media";

function Home() {
  let darkGray = "rgb(46, 42, 47)";

  let gray = "rgb(66, 64, 67)";

  let home = {
    height: "calc(100vh)",
    width: "100%",
    backgroundColor: darkGray,
    margin: "0",
    padding: "0",
    scrollSnapAlign: "start",
  };

  let intro_div = {
    position: "absolute",
    textAlign: "left",
    marginLeft: "10%",
    marginTop: "30vh",
    color: "rgb(226, 226, 226)",
  };

  let h1 = {
    fontSize: "60px",
    margin: "0",
    transition: "all .4s ease",
    fontFamily: '"mon500"',
  };

  let p = {
    fontSize: "19px",
    marginTop: "10px",
    transition: "all .4s ease",
    fontFamily: '"mon300"',
    lineHeight: "30px",
  };

  let coding_img = {
    width: "400px",
    position: "absolute",
    top: "22vh",
    right: "10vw",
  };

  let svg = {
    margin: "5px 0 -3px 0",
    fill: gray,
    opacity: "0.7",
    marginBottom: "10px",
  };

  let scroll_mention = {
    position: "absolute",
    width: "100%",
    bottom: "0",
    fontSize: "14px",
    textAlign: "center",
    fontFamily: '"mon200"',
  };

  let h3 = {
    margin: "0",
    color: "white",
    opacity: "0.8",
    height: "20px",
  };

  //MARK:---------------------------------------------------------------------------------------------------

  let p2 = {
    fontSize: "15px",
    marginTop: "10px",
    transition: "all .4s ease",
    fontFamily: '"mon300"',
    lineHeight: "22px",
  };

  let h12 = {
    fontSize: "40px",
    margin: "0",
    transition: "all .4s ease",
    fontFamily: '"mon500"',
  };

  return (
    <Media queries={{ small: { minWidth: 1040 } }}>
      {(matches) =>
        matches.small ? (
          <div id="home" style={home}>
            <div style={intro_div}>
              <h1 style={h1}>
                Hi,
                <br /> it's<span> Nitin </span>
              </h1>
              <p style={p}>
                I'm a Web, Ios and Android Engineer who helps <br />
                to turn ideas into accessible experiences.
              </p>
            </div>
            <img style={coding_img} src={Img}></img>
            <footer style={scroll_mention}>
              <h3 style={h3}>start scrolling</h3>
              <svg width="140" height="3" style={svg}>
                <rect width="140" height="3"></rect>
              </svg>
            </footer>
          </div>
        ) : (
          <div style={home}>
            <div style={intro_div}>
              <h1 style={h12}>
                Hi,
                <br /> it's<span> Nitin </span>
              </h1>
              <p style={p2}>
                I'm a Web, Ios and Android Engineer who helps <br />
                to turn ideas into accessible experiences.
              </p>
            </div>
            <footer style={scroll_mention}>
              <h3 style={h3}>start scrolling</h3>
              <svg width="140" height="3" style={svg}>
                <rect width="140" height="3"></rect>
              </svg>
            </footer>
          </div>
        )
      }
    </Media>
  );
}

export default Home;
