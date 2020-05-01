import React, { useState } from "react";
import "./css/skills.css";

function Skills() {
  const colorCollection = {
    gray: "rgb(65, 60, 68)",
    darkGray: "rgb(46, 42, 47)",
    pruple: "rgb(155, 120, 222)",
    blue: "rgb(82, 233, 208)",
    yellow: "rgb(223, 185, 72)"
  };
  const [color, setColor] = useState({
    btn1: "inherit",
    btn2: "#e2e2e2",
    btn3: "#e2e2e2"
  });

  const [backgroundColor, setBackgroundColor] = useState({
    btn1: colorCollection.pruple,
    btn2: "inherit",
    btn3: "inherit"
  });

  const [stars, setStars] = useState({
    Group1: true,
    Group2: false,
    Group3: false
  });

  function btn1onCLick() {
    setColor({
      btn1: "inherit",
      btn2: "#e2e2e2",
      btn3: "#e2e2e2"
    });
    
    setBackgroundColor({
      btn1: colorCollection.pruple,
      btn2: "inherit",
      btn3: "inherit",
    });
    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: 0}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";

    setStars({
      Group1: true,
      Group2: false,
      Group3: false
    });
  }

  function btn2onCLick() {
    setColor({
      btn2: "inherit",
      btn1: "#e2e2e2",
      btn3: "#e2e2e2"
    });
    setBackgroundColor({
      btn2: colorCollection.blue,
      btn3: "inherit",
      btn1: "inherit",
    });

    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: 0}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: .5}";

    setStars({
      Group1: false,
      Group2: true,
      Group3: false
    });
  }

  function btn3onCLick() {
    setColor({
      btn3: "inherit",
      btn2: "#e2e2e2",
      btn1: "#e2e2e2"
    });
    setBackgroundColor({
      btn1: "inherit",
      btn2: "inherit",
      btn3: colorCollection.yellow
    });

    const styleEle1 = document.body.appendChild(
      document.createElement("style")
    );
    styleEle1.innerHTML = ".btn1-skills:before {opacity: .5}";
    const styleElem2 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem2.innerHTML = ".btn2-skills:before {opacity: .5}";
    const styleElem3 = document.body.appendChild(
      document.createElement("style")
    );
    styleElem3.innerHTML = ".btn3-skills:before {opacity: 0}";

    setStars({
      Group1: false,
      Group2: false,
      Group3: true
    });
  }

  function button(name, btnclass, Color, bcolor, onClick) {
    return (
      <button
        className={btnclass}
        style={{
          color: Color,
          backgroundColor: bcolor,
          "position":"relative","width":"140px","height":"37px","padding":"8px 0px","marginBottom":"32px","fontSize":"18px","borderStyle":"none","textAlign":"center","borderRadius":"3px","fontFamily":"\"mon600\"","zIndex":"2"
        }}
        onClick={onClick}
      >
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
      WebkitTransition:"all 0.7s ease",
      transition:"all 0.7s ease"
    };
    const svg = {
      width: "15px",
      height: "15px",
      WebkitTransition:"all 0.7s ease",
      transition:"all 0.7s ease"
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
          marginLeft: "20px"
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

  let skills={"paddingTop":"35vh","background":"#2e2a2f"}
  let skills__sub_skills={"height":"100vh","width":"100vw","WebkitBoxPack":"center","MsFlexPack":"center","justifyContent":"center"}
  let skills_heading={"textAlign":"center"}
  let skills_heading__skills_name={"fontFamily":"\"mon600\"","fontSize":"100px","letterSpacing":"5px","color":"#e2e2e2","margin":"0"}
  let skills_heading_p={"fontSize":"16px","fontFamily":"\"mon400\"","margin":"0","color":"white","opacity":"0.6"}
  let dots_list_container={"display":"flex","WebkitBoxOrient":"horizontal","WebkitBoxDirection":"normal","MsFlexDirection":"row","flexDirection":"row","WebkitBoxPack":"center","MsFlexPack":"center","justifyContent":"center"}
  let dots_list1={"padding":"0","margin":"0","width":"370px","height":"280px","display":"flex","listStyle":"none","WebkitBoxPack":"center","MsFlexPack":"center","justifyContent":"center","color":"white"}
  let sub_skills_container={"display":"flex","WebkitBoxPack":"center","MsFlexPack":"center","justifyContent":"center","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column"}
  let sub_skills_list1={"width": "115px","listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let sub_skills_list2={width: "100px","listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let sub_skills_list3={marginRight: "20px","listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let sub_skills_list4={"listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let sub_skills_list5={width: "80px" ,"listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let sub_skills_list6={width: "50px" ,"listStyle":"none","fontSize":"16px","fontFamily":"\"Mon400\"","padding":"5px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column","textAlign":"left"}
  let Star={"fontSize":"14px","margin":"7px"}
  let btn_skills_list={ "marginTop":"64px","display":"flex","WebkitBoxOrient":"vertical","WebkitBoxDirection":"normal","MsFlexDirection":"column","flexDirection":"column"}
  let dots_list2={"padding":"0","margin":"0","width":"370px","height":"280px","display":"flex","listStyle":"none","WebkitBoxPack":"center","MsFlexPack":"center","justifyContent":"center","color":"white"}
  let skillwithstar__subskillwithstar={"WebkitTransition":"all .7s ease","transition":"all .7s ease"}
  let btn_skills_focus={"outline":"0 !important"}
  let btn1_skills_hover={"color":"#9b78de"}
  let btn1_skills__before={"content":"\"\"","display":"block","position":"absolute","opacity":"0","width":"140px","height":"7px","marginTop":"15px","borderRadius":"2px","zIndex":"-2","backgroundColor":"#adadad"}
  let btn2_skills_hover={"color":"#52e9d0"}
  let btn2_skills__before={"content":"\"\"","display":"block","position":"absolute","opacity":"0.5","width":"140px","height":"7px","marginTop":"15px","borderRadius":"2px","zIndex":"-2","backgroundColor":"#adadad"}
  let btn3_skills_hover={"color":"#dfb948"}
  let btn3_skills__before={"content":"\"\"","display":"block","position":"absolute","opacity":"0.5","width":"140px","height":"7px","marginTop":"15px","borderRadius":"2px","zIndex":"-2","backgroundColor":"#adadad"}
  let iamongit={"color":"#e2e2e2","WebkitTextDecorationColor":"#ebc44d","textDecorationColor":"#ebc44d","WebkitTransition":"all .4s ease","transition":"all .4s ease"}
  let iamongit_hover={"backgroundColor":"#585026"}
  let iamongit__before={"content":"\"\"","display":"block","position":"absolute","width":"81px","opacity":"0.2","height":"4px","marginTop":"15px","backgroundColor":"yellow"}
  
  let skill_for_mobile={"display":"none","visibility":"hidden"}

  return (
    <div id="skills" style={skills}>
      <div id="sub-skills" style={skills__sub_skills}>
        <header className="skills-heading" style={skills_heading}>
          <h1 className="skills-name" style={skills_heading__skills_name}>skills</h1>
          <p style={skills_heading_p}>Take a sneak peek on Github.</p>
        </header>
        <div className="dots-list-container" style={dots_list_container}>
          <ul className="dots-list1" style={dots_list1}>
            <li className="sub-skills-container" style={sub_skills_container}>
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
            <li className="sub-skills-container" style={sub_skills_container}>
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
            <li className="sub-skills-container" style={sub_skills_container}>
              <ul style={ sub_skills_list3} className="sub-skills-list">
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
              btn1onCLick
            )}
            {button(
              "ios dev",
              "btn-skills btn2-skills",
              color.btn2,
              backgroundColor.btn2,
              btn2onCLick
            )}
            {button(
              "more",
              "btn-skills btn3-skills",
              color.btn3,
              backgroundColor.btn3,
              btn3onCLick
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
            <li className="sub-skills-container" style={sub_skills_container}>
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
            <li className="sub-skills-container" style={sub_skills_container}>
              <ul style={ sub_skills_list6} className="sub-skills-list">
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
                      marginLeft: "20px"
                    }}
                  >
                    {stars.Group3 ? (
                      <span>
                        <a
                          className="iamongit"
                          style={iamongit}
                          href="https://github.com/developerNitin"
                        >
                          on Github
                        </a>
                      </span>
                    ) : (
                      <span style={{ visibility: "hidden" }}>on Github</span>
                    )}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="skill-for-mobile">
          <div className="skill-list-for-mobile ul1-mobile">
            <ul>
              <h1 className="skill-mobile-h1">web dev</h1>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>React</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>HTML5</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>sass</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>NodeJS</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>jsES6</span>
              </li>
              <li>
                {Square("12px", colorCollection.pruple, "0px", "4")}
                <span>EJS</span>
              </li>
            </ul>
          </div>
          <div className="skill-list-for-mobile ul2-mobile">
            <ul className="">
              <h1 className="skill-mobile-h2">ios dev</h1>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>Swift</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>SwiftUI</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>UI</span>
              </li>
              <li>
                {Square("12px", colorCollection.blue, "0px", "4")}
                <span>on Github</span>
              </li>
            </ul>
          </div>
          <div className="skill-list-for-mobile ul3-mobile">
            <ul className="">
              <h1 className="skill-mobile-h3">more</h1>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>C_Lang</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>noSQL</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>MongoDB</span>
              </li>
              <li>
                {Square("12px", colorCollection.yellow, "0px", "4")}
                <span>Git</span>
              </li>
            </ul>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
