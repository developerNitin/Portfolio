import React, { useState } from "react";
import Media from "react-media";

function Skills() {
  const colorCollection = {
    gray: "rgb(65, 60, 68)",
    darkGray: "rgb(46, 42, 47)",
    pruple: "rgb(155, 120, 222)",
    blue: "rgb(82, 233, 208)",
    yellow: "rgb(223, 185, 72)",
  };
  const [color, setColor] = useState({
    btn1: "inherit",
    btn2: "#e2e2e2",
    btn3: "#e2e2e2",
  });

  const [buttonbefore, setButtonbefore] = useState({
    btn1: "0",
    btn2: "1",
    btn3: "1",
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: colorCollection.pruple,
    btn2: "inherit",
    btn3: "inherit",
  });

  const [stars, setStars] = useState({
    Group1: true,
    Group2: false,
    Group3: false,
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit",
      btn2: "#e2e2e2",
      btn3: "#e2e2e2",
    });

    setBackgroundColor({
      btn1: colorCollection.pruple,
      btn2: "inherit",
      btn3: "inherit",
    });

    setStars({
      Group1: true,
      Group2: false,
      Group3: false,
    });

    setButtonbefore({
      btn1: "0",
      btn2: "1",
      btn3: "1",
    });
  }

  function btn2onCLick() {
    setColor({
      btn2: "inherit",
      btn1: "#e2e2e2",
      btn3: "#e2e2e2",
    });
    setBackgroundColor({
      btn2: colorCollection.blue,
      btn3: "inherit",
      btn1: "inherit",
    });

    setStars({
      Group1: false,
      Group2: true,
      Group3: false,
    });

    setButtonbefore({
      btn1: "1",
      btn2: "0",
      btn3: "1",
    });
  }

  function btn3onCLick() {
    setColor({
      btn3: "inherit",
      btn2: "#e2e2e2",
      btn1: "#e2e2e2",
    });

    setBackgroundColor({
      btn1: "inherit",
      btn2: "inherit",
      btn3: colorCollection.yellow,
    });

    setStars({
      Group1: false,
      Group2: false,
      Group3: true,
    });

    setButtonbefore({
      btn1: "1",
      btn2: "1",
      btn3: "0",
    });
  }

  function button(name, btnclass, Color, bcolor, onClick, style, class_before) {
    return (
      <button
        className={btnclass}
        style={{
          color: Color,
          backgroundColor: bcolor,
          position: "relative",
          width: "140px",
          height: "37px",
          padding: "8px 0px",
          marginBottom: "32px",
          fontSize: "18px",
          borderStyle: "none",
          textAlign: "center",
          borderRadius: "3px",
          fontFamily: '"mon600"',
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <span className={class_before} style={style}></span>
        {name}
      </button>
    );
  }

  function Square(px, fill, xy, rx, op) {
    const rect = {
      width: px,
      height: px,
      fill: fill,
      x: xy,
      y: xy,
      opacity: op,
      WebkitTransition: "all 0.7s ease",
      transition: "all 0.7s ease",
    };
    const svg = {
      width: "15px",
      height: "15px",
      WebkitTransition: "all 0.7s ease",
      transition: "all 0.7s ease",
    };
    return (
      <svg style={svg}>
        <rect style={rect} rx={rx}></rect>
      </svg>
    );
  }

  function star(bool, color) {
    return (
      <span className="star" style={Star}>
        {bool
          ? Square("15px", color, "0px", "4", "1")
          : Square("6px", "rgb(173, 173, 173)", "5px", "1.5", ".4")}
      </span>
    );
  }

  function starName(name, starGroup) {
    return (
      <span
        className="skillwithstar"
        style={{
          display: "block",
          marginLeft: "20px",
        }}
      >
        {starGroup ? (
          <span className="subskillwithstar">{name}</span>
        ) : (
          <span style={{ visibility: "hidden" }}>{name}</span>
        )}
      </span>
    );
  }

  function starstar(margintop, marginLeft, group, name, bcolor) {
    return (
      <li style={{ marginTop: margintop, marginLeft: marginLeft }}>
        {star(group, bcolor)}
        {starName(name, group)}
      </li>
    );
  }

  let skills = { paddingTop: "35vh", background: "#2e2a2f" };
  let skills__sub_skills = {
    height: "100vh",
    width: "100vw",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
  };
  let skills_heading = { textAlign: "center" };
  let skills_heading__skills_name = {
    fontFamily: '"mon600"',
    fontSize: "100px",
    letterSpacing: "5px",
    color: "#e2e2e2",
    margin: "0",
  };
  let skills_heading_p = {
    fontSize: "16px",
    fontFamily: '"mon400"',
    margin: "0",
    color: "white",
    opacity: "0.6",
  };
  let dots_list_container = {
    display: "flex",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "row",
    flexDirection: "row",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
  };
  let dots_list1 = {
    padding: "0",
    margin: "0",
    width: "370px",
    height: "280px",
    display: "flex",
    listStyle: "none",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    color: "white",
  };
  let sub_skills_container = {
    display: "flex",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
  };
  let sub_skills_list1 = {
    width: "115px",
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let sub_skills_list2 = {
    width: "100px",
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let sub_skills_list3 = {
    marginRight: "20px",
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let sub_skills_list4 = {
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let sub_skills_list5 = {
    width: "80px",
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let sub_skills_list6 = {
    width: "50px",
    listStyle: "none",
    fontSize: "16px",
    fontFamily: '"Mon400"',
    padding: "5px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    textAlign: "left",
  };
  let Star = { fontSize: "14px", margin: "7px" };
  let btn_skills_list = {
    marginTop: "64px",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
  };
  let dots_list2 = {
    padding: "0",
    margin: "0",
    width: "370px",
    height: "280px",
    display: "flex",
    listStyle: "none",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    color: "white",
  };
  function btn_skills_focus() {
    document.getElementById("skills").style.outline = "none";
  }
  //let btn1_skills_hover={"color":"#9b78de"}
  let btn1_skills__before = {
    content: '""',
    display: "block",
    position: "absolute",
    opacity: buttonbefore.btn1,
    width: "140px",
    height: "7px",
    marginTop: "15px",
    borderRadius: "2px",
    zIndex: "-2",
    backgroundColor: "#6D6C6E",
  };
  //let btn2_skills_hover={"color":"#52e9d0"}
  let btn2_skills__before = {
    content: '""',
    display: "block",
    position: "absolute",
    opacity: buttonbefore.btn2,
    width: "140px",
    height: "7px",
    marginTop: "15px",
    borderRadius: "2px",
    zIndex: "-2",
    backgroundColor: "#6D6C6E",
  };
  //let btn3_skills_hover={"color":"#dfb948"}
  let btn3_skills__before = {
    content: '""',
    display: "block",
    position: "absolute",
    opacity: buttonbefore.btn3,
    width: "140px",
    height: "7px",
    marginTop: "15px",
    borderRadius: "2px",
    zIndex: "-2",
    backgroundColor: "#6D6C6E",
  };
  let iamongit = {
    color: "#e2e2e2",
    WebkitTextDecorationColor: "#ebc44d",
    textDecorationColor: "#ebc44d",
    WebkitTransition: "all .4s ease",
    transition: "all .4s ease",
  };
  function iamongit_hover() {
    document.querySelector(".iamongit").style.backgroundColor = "#585026";
  }
  function iamongit_hoverout() {
    document.querySelector(".iamongit").style.backgroundColor = "inherit";
  }
  let iamongit__before = {
    content: '""',
    display: "block",
    position: "absolute",
    width: "81px",
    opacity: "0.2",
    height: "4px",
    marginTop: "15px",
    backgroundColor: "yellow",
  };

 //MARK:---------------------------------------------------------------------------------------------------

  let skills2 = {
    paddingTop: "0vh",
    background: "#2e2a2f",
    minHeight: "100vh",
    paddingBottom: "20vh",
  };
  let skills_heading2 = {
    height: "50vh",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  let skills_name = {
    fontFamily: '"mon600"',
    fontSize: "64px",
    letterSpacing: "5px",
    color: "#e2e2e2",
    margin: "0",
  };
  let skills_heading_p2 = {
    fontSize: "16px",
    fontFamily: '"mon400"',
    margin: "0",
    color: "white",
    opacity: "0.6",
  };
  let skill_for_mobile = {
    display: "flex",
    visibility: "visible",
    WebkitBoxOrient: "horizontal",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "row",
    flexDirection: "row",
    overflowX: "scroll",
    padding: "25px 0 25px 8vw",
  };
  let skill_for_mobile__skill_list_for_mobile = {
    minWidth: "220px",
    padding: "0",
    margin: "0 80px 0 0",
  };
  let skill_for_mobile__skill_list_for_mobile_ul = {
    listStyle: "none",
    padding: "0",
    margin: "0",
  };
  let mobile_ul_h1 = {
    color: "white",
    fontFamily: '"mon600"',
    fontSize: "25px",
    opacity: "0.8",
  };
  let mobile_h1__after = {
    content: '""',
    position: "relative",
    display: "block",
    bottom: "10px",
    left: "-5px",
    height: "13px",
    width: "220px",
    zIndex: "-1",
    backgroundColor: "#9b78de",
    borderRadius: "4px",
  };
  let mobile_h2__after = {
    content: '""',
    position: "relative",
    display: "block",
    bottom: "10px",
    left: "-5px",
    height: "13px",
    width: "220px",
    zIndex: "-1",
    backgroundColor: "#52e9d0",
    borderRadius: "4px",
  };
  let mobile_h3__after = {
    content: '""',
    position: "relative",
    display: "block",
    bottom: "10px",
    left: "-5px",
    height: "13px",
    width: "220px",
    zIndex: "-1",
    backgroundColor: "#dfb948",
    borderRadius: "4px",
  };
  let mobile_ul_li = {
    marginBottom: "16px",
    fontSize: "16px",
    fontFamily: '"mon400"',
  };
  let mobile_ul_li_span = {
    paddingLeft: "10px",
    color: "white",
    opacity: "0.8",
  };
  let skill_for_mobile__shadow = {
    height: "290px",
    width: "100px",
    position: "absolute",
    zIndex: "2",
    right: "0",
    pointerEvents: "none",
    backgroundImage: "linear-gradient(to left, #2e2a2f, rgba(46, 42, 47, 0))",
    backgroundColor: "rgba(0, 0, 0, 0)",
  };

  return (
    <Media queries={{ small: { minWidth: 1010 } }}>
      {(matches) =>
        matches.small ? (
          <div id="skills" style={skills}>
            <div
              id="sub-skills"
              style={skills__sub_skills}
              onFocus={btn_skills_focus}
            >
              <header className="skills-heading" style={skills_heading}>
                <h1 className="skills-name" style={skills_heading__skills_name}>
                  skills
                </h1>
                <p style={skills_heading_p}>Take a sneak peek on Github.</p>
              </header>
              <div className="dots-list-container" style={dots_list_container}>
                <ul className="dots-list1" style={dots_list1}>
                  <li
                    className="sub-skills-container"
                    style={sub_skills_container}
                  >
                    <ul style={sub_skills_list1} className="sub-skills-list">
                      {starstar(
                        "100px",
                        "30px",
                        stars.Group1,
                        "React",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "10px",
                        "-40px",
                        stars.Group3,
                        "Guitar",
                        backgroundColor.btn3
                      )}
                      {starstar(
                        "15px",
                        "-10px",
                        stars.Group1,
                        "Mongoose",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "10px",
                        "37px",
                        stars.Group3,
                        "C_Lang^",
                        backgroundColor.btn3
                      )}
                    </ul>
                  </li>
                  <li
                    className="sub-skills-container"
                    style={sub_skills_container}
                  >
                    <ul style={sub_skills_list2} className="sub-skills-list">
                      {starstar(
                        "50px",
                        "20px",
                        stars.Group1,
                        "CSS5",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "70px",
                        "-10px",
                        stars.Group2,
                        "Swift",
                        backgroundColor.btn2
                      )}
                      {starstar(
                        "70px",
                        "40px",
                        stars.Group1,
                        "HTML5",
                        backgroundColor.btn1
                      )}
                    </ul>
                  </li>
                  <li
                    className="sub-skills-container"
                    style={sub_skills_container}
                  >
                    <ul style={sub_skills_list3} className="sub-skills-list">
                      {starstar(
                        "70px",
                        "20px",
                        stars.Group3,
                        "Rubix",
                        backgroundColor.btn3
                      )}
                      {starstar(
                        "45px",
                        "-20px",
                        stars.Group1,
                        "NodeJS",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "30px",
                        "20px",
                        stars.Group3,
                        "Git",
                        backgroundColor.btn3
                      )}
                    </ul>
                  </li>
                </ul>

                <div className="btn-skills-list" style={btn_skills_list}>
                  {button(
                    "web dev",
                    "btn-skills btn1-skills",
                    color.btn1,
                    backgroundColor.btn1,
                    btn1onCLick,
                    btn1_skills__before,
                    "btn1-skills-before1"
                  )}
                  {button(
                    "ios dev",
                    "btn-skills btn2-skills",
                    color.btn2,
                    backgroundColor.btn2,
                    btn2onCLick,
                    btn2_skills__before,
                    "btn1-skills-before2"
                  )}
                  {button(
                    "more",
                    "btn-skills btn3-skills",
                    color.btn3,
                    backgroundColor.btn3,
                    btn3onCLick,
                    btn3_skills__before,
                    "btn1-skills-before3"
                  )}
                </div>

                <ul className="dots-list2" style={dots_list2}>
                  <li
                    style={sub_skills_container}
                    className="sub-skills-container"
                  >
                    <ul className="sub-skills-list" style={sub_skills_list4}>
                      {starstar(
                        "100px",
                        "30px",
                        stars.Group2,
                        "UI",
                        backgroundColor.btn2
                      )}

                      {starstar(
                        "10px",
                        "0px",
                        stars.Group1,
                        "Express",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "50px",
                        "-30px",
                        stars.Group3,
                        "noSQL",
                        backgroundColor.btn3
                      )}
                    </ul>
                  </li>
                  <li
                    className="sub-skills-container"
                    style={sub_skills_container}
                  >
                    <ul style={sub_skills_list5} className="sub-skills-list">
                      {starstar(
                        "35px",
                        "-50px",
                        stars.Group3,
                        "MongoDB",
                        backgroundColor.btn3
                      )}
                      {starstar(
                        "105px",
                        "0px",
                        stars.Group2,
                        "SwiftUI",
                        backgroundColor.btn2
                      )}
                      {starstar(
                        "50px",
                        "0px",
                        stars.Group1,
                        "jsES6",
                        backgroundColor.btn1
                      )}
                    </ul>
                  </li>
                  <li
                    className="sub-skills-container"
                    style={sub_skills_container}
                  >
                    <ul style={sub_skills_list6} className="sub-skills-list">
                      {starstar(
                        "85px",
                        "-40px",
                        stars.Group1,
                        "EJS",
                        backgroundColor.btn1
                      )}
                      {starstar(
                        "45px",
                        "60px",
                        stars.Group1,
                        "sass",
                        backgroundColor.btn1
                      )}
                      <li style={{ marginTop: "55px", width: "130px" }}>
                        {star(stars.Group3, backgroundColor.btn3)}
                        <span
                          style={{
                            display: "block",
                            marginLeft: "20px",
                          }}
                        >
                          {stars.Group3 ? (
                            <span>
                              <a
                                className="iamongit"
                                style={iamongit}
                                onMouseOver={iamongit_hover}
                                onMouseOut={iamongit_hoverout}
                                href="https://github.com/developerNitin"
                              >
                                <span style={iamongit__before}></span>
                                on Github
                              </a>
                            </span>
                          ) : (
                            <span style={{ visibility: "hidden" }}>
                              on Github
                            </span>
                          )}
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div id="skills" style={skills2}>
            <div id="sub-skills" style={skills__sub_skills}>
              <header className="skills-heading" style={skills_heading2}>
                <h1 className="skills-name" style={skills_name}>
                  skills
                </h1>
                <p style={skills_heading_p2}>Take a sneak peek on Github.</p>
              </header>
              <div className="skill-for-mobile" style={skill_for_mobile}>
                <div
                  className="skill-list-for-mobile ul1-mobile"
                  style={skill_for_mobile__skill_list_for_mobile}
                >
                  <ul style={skill_for_mobile__skill_list_for_mobile_ul}>
                    <h1 className="skill-mobile-h1" style={mobile_ul_h1}>
                      web dev<span style={mobile_h1__after}></span>
                    </h1>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>React</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>HTML5</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>sass</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>NodeJS</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>jsES6</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.pruple, "0px", "4")}
                      <span style={mobile_ul_li_span}>EJS</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="skill-list-for-mobile ul2-mobile"
                  style={skill_for_mobile__skill_list_for_mobile}
                >
                  <ul
                    className=""
                    style={skill_for_mobile__skill_list_for_mobile_ul}
                  >
                    <h1 className="skill-mobile-h2" style={mobile_ul_h1}>
                      ios dev<span style={mobile_h2__after}></span>
                    </h1>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.blue, "0px", "4")}
                      <span style={mobile_ul_li_span}>Swift</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.blue, "0px", "4")}
                      <span style={mobile_ul_li_span}>SwiftUI</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.blue, "0px", "4")}
                      <span style={mobile_ul_li_span}>UI</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.blue, "0px", "4")}
                      <span style={mobile_ul_li_span}>on Github</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="skill-list-for-mobile ul3-mobile"
                  style={skill_for_mobile__skill_list_for_mobile}
                >
                  <ul
                    className=""
                    style={skill_for_mobile__skill_list_for_mobile_ul}
                  >
                    <h1 className="skill-mobile-h3" style={mobile_ul_h1}>
                      more <span style={mobile_h3__after}></span>
                    </h1>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.yellow, "0px", "4")}
                      <span style={mobile_ul_li_span}>C_Lang</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.yellow, "0px", "4")}
                      <span style={mobile_ul_li_span}>noSQL</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.yellow, "0px", "4")}
                      <span style={mobile_ul_li_span}>MongoDB</span>
                    </li>
                    <li style={mobile_ul_li}>
                      {Square("12px", colorCollection.yellow, "0px", "4")}
                      <span style={mobile_ul_li_span}>Git</span>
                    </li>
                  </ul>
                </div>
                <div className="shadow" style={skill_for_mobile__shadow}></div>
              </div>
            </div>
          </div>
        )
      }
    </Media>
  );
}

export default Skills;
