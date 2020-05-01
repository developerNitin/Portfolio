import React from "react";
import Media from "react-media";

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
    background: "linear-gradient(-4.5deg, #424043 84vh, #2e2a2f 16vh)",
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
    marginTop: "5%",
    marginLeft: "-2%",
    height: "7vh",
    marginBottom: "14vh",
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

  let about_heading2 = {
    marginTop: "0 !important",
    marginLeft: "-2%",
    height: "7vh",
    marginBottom: "14vh",
  };

  let about_heading_h12 = {
    fontSize: "30px",
    margin: "0",
    marginLeft: "7px",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
  };
  let about_heading_h22 = {
    fontSize: "30px",
    margin: "0",
    marginLeft: "10px",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
  };
  let about_heading_h32 = {
    fontSize: "30px",
    margin: "0",
    color: "#9b78de",
    fontFamily: '"mon600"',
    WebkitTransform: "rotate(-5deg)",
    transform: "rotate(-5deg)",
  };
  let about_p2 = {
    width: "94%",
    fontSize: "18px",
    lineHeight: "27px",
    fontFamily: '"mon300"',
    margin: "50px 0 0 30px",
  };

  return (
    <Media queries={{ small: { minWidth: 700 } }}>
      {(matches) =>
        matches.small ? (
          <div id="about" style={about}>
            <div className="about-heading" style={about__about_heading}>
              <h1 style={about__about_heading_h1}>Aff,</h1>{" "}
              <h2 style={about__about_heading_h2}>Yin enim ut dia...</h2>
              <h3 style={about__about_heading_h3}>Nibh's ac eiusmo</h3>
            </div>

            <p style={about_p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Natoque penatibus et magnis dis parturient. Sed libero enim sed
              faucibus. Orci nulla pellentesque dignissim enim sit amet
              venenatis.
              <br />
              <br /> Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a
              diam maecenas sed enim ut sem viverra aliquet. Lacus luctus
              accumsan tortor posuere ac ut. Tincidunt au
              <br />
              <br />
              Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a diam
              maecenas sed enim ut sem viverra aliquet. Lacus luctus accumsan
              tortor posuere ac ut. Tincidunt au{" "}
            </p>
          </div>
        ) : (
          <div id="about" style={about}>
            <div className="about-heading" style={about_heading2}>
              <h1 style={about_heading_h12}>Aff,</h1>{" "}
              <h2 style={about_heading_h22}>Yin enim ut dia...</h2>
              <h3 style={about_heading_h32}>Nibh's ac eiusmo</h3>
            </div>

            <p style={about_p2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Natoque penatibus et magnis dis parturient. Sed libero enim sed
              faucibus. Orci nulla pellentesque dignissim enim sit amet
              venenatis.
              <br />
              <br /> Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a
              diam maecenas sed enim ut sem viverra aliquet. Lacus luctus
              accumsan tortor posuere ac ut. Tincidunt au
              <br />
              <br />
              Nibh sed pulvinar proin gravida hendrerit lectus. Mauris a diam
              maecenas sed enim ut sem viverra aliquet. Lacus luctus accumsan
              tortor posuere ac ut. Tincidunt au{" "}
            </p>
          </div>
        )
      }
    </Media>
  );
}

export default About;
