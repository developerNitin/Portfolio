import React, { useState } from "react";
import reading from "./img/reading.svg";
import Media from "react-media";

function Touch() {
  let [color, setcolor] = useState({
    link1: "inherit",
    link2: "inherit",
    link3: "inherit",
  });
  let [label1, setLabel1] = useState({
    font1: "15px",
    top1: "0px",
    color1: "white",
  });
  let [label2, setLabel2] = useState({
    font1: "15px",
    top1: "0px",
    color1: "white",
  });
  let [label3, setLabel3] = useState({
    font1: "15px",
    top1: "0px",
    color1: "white",
  });
  function hover1() {
    setcolor({
      link1: "#45385c",
    });
  }
  function hover2() {
    setcolor({
      link2: "#45385c",
    });
  }
  function hover3() {
    setcolor({
      link3: "#45385c",
    });
  }
  function hoverout() {
    setcolor({
      link1: "inherit",
      link2: "inherit",
      link3: "inherit",
    });
  }
  function focus1() {
    setLabel1({
      font1: "10px",
      top1: "-10px",
      color1: "rgb(155, 120, 222)"
    });
  }
  function focus2() {
    setLabel2({
      font1: "10px",
      top1: "-10px",
      color1: "rgb(155, 120, 222)",
    });
  }
  function focus3() {
    setLabel3({
      font1: "10px",
      top1: "-10px",
      color1: "rgb(155, 120, 222)",
    });
  }
  let touch = {
    height: "100vh",
    backgroundColor: "#424043",
    scrollSnapAlign: "start",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
  };
  let sub_touch = { height: "70vh", width: "100%", position: "absolute" };
  let contact_heading = {
    width: "100%",
    height: "30vh",
    display: "flex",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    position: "absolute",
  };
  let contact_heading_div = {
    margin: "0",
    fontFamily: '"mon500"',
    position: "absolute",
    width: "550px",
    bottom: "10vh",
    zIndex: "1",
  };
  let contact_heading_div_h1 = {
    fontSize: "50px",
    margin: "0 0 10px 0",
    color: "#9b78de",
  };
  let contact_heading_div_p = {
    fontFamily: '"mon400"',
    color: "white",
    fontSize: "20px",
    margin: "0",
  };
  let contact_heading__before = {
    content: '""',
    position: "absolute",
    display: "block",
    zIndex: "0",
    width: "650px",
    height: "380px",
    top: "13vh",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    backgroundColor: "#2e2a2f",
  };
  let contact_form = {
    height: "45vh",
    margin: "0",
    width: "100%",
    bottom: "0",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    position: "absolute",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form = {
    display: "block",
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form_div = { width: "550px" };
  let contact_form_form_label1 = {
    color: label1.color1,
    opacity: "0.9",
    fontFamily: '"mon500"',
    pointerEvents: "none",
    fontSize: label1.font1,
    top: label1.top1,
    position: "absolute",
    letterSpacing: "0.5px",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form_label2 = {
    color: label2.color1,
    opacity: "0.9",
    fontFamily: '"mon500"',
    pointerEvents: "none",
    fontSize: label2.font1,
    top: label2.top1,
    position: "absolute",
    letterSpacing: "0.5px",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form_label3 = {
    color: label3.color1,
    opacity: "0.9",
    fontFamily: '"mon500"',
    pointerEvents: "none",
    fontSize: label3.font1,
    top: label3.top1,
    position: "absolute",
    letterSpacing: "0.5px",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form__input_div1 = {
    margin: "0",
    display: "inline-block",
    width: "44%",
    position: "relative",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form__input_div2 = {
    float: "right",
    margin: "0",
    display: "inline-block",
    width: "44%",
    position: "relative",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  //let contact_form_form__input_div1_focus_within__input_label1={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  //let contact_form_form__input_div2_focus_within__input_label2={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  let contact_form_form__input_div3 = {
    margin: "15px 0 0 0",
    position: "relative",
    width: "100%",
  };
  //let contact_form_form__input_div3_focus_within__input_label3={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  let contact_form_form_top2_input = {
    border: "none",
    borderBottom: "2px solid #9b78de",
    width: "100%",
    backgroundColor: "inherit",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    height: "30px",
    margin: "0",
    fontSize: "20px",
    color: "white",
    paddingBottom: "6px",
    borderRadius: "0px !important",
    marginBottom: "30px",
    outline: "0",
  };
  let contact_form_form_bottom_input = {
    border: "none",
    borderBottom: "2px solid #9b78de",
    width: "100%",
    backgroundColor: "inherit",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    outline: "0",
    height: "30px",
    margin: "0",
    fontSize: "20px",
    color: "white",
    paddingBottom: "6px",
    borderRadius: "0px !important",
  };
  //let contact_form_form_input_focus={"outline":"0 }
  let contact_form_form_button = {
    width: "120px",
    height: "37px",
    color: "#2e2a2f",
    fontFamily: '"mon600"',
    fontSize: "16px",
    backgroundColor: "#9b78de",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    border: "none",
    padding: "0",
    borderRadius: "3px",
    marginTop: "3%",
  };
  let contact_form__social_links = {
    width: "550px",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    height: "10vh",
    fontFamily: '"mon300"',
    opacity: ".9",
  };
  let contact_form__social_links_a1 = {
    marginRight: "16px",
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid #9b78de",
    backgroundColor: color.link1,
  };
  let contact_form__social_links_a2 = {
    marginRight: "16px",
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid #9b78de",
    backgroundColor: color.link2,
  };
  let contact_form__social_links_a3 = {
    marginRight: "16px",
    color: "white",
    textDecoration: "none",
    borderBottom: "1px solid #9b78de",
    backgroundColor: color.link3,
  };
  let contact_form__social_links_a__before = {
    content: '""',
    display: "block",
    position: "absolute",
    width: "53px",
    opacity: "0.2",
    height: "5px",
    marginTop: "17px",
    backgroundColor: "#9b78de",
  };
  //let contact_form__social_links_a_hover={"backgroundColor":"#45385c"}
  let reading_touch_img = {
    position: "absolute",
    width: "550px",
    textAlign: "right",
    bottom: "15vh",
    pointerEvents: "none",
  };
  let reading_touch_img_img = { width: "120px" };

  //MARK:---------------------------------------------------------------------------------------------------

  let contact_heading_div2 = {
    margin: "0",
    fontFamily: '"mon500"',
    position: "absolute",
    width: "290px",
    bottom: "11vh",
    zIndex: "1",
  };
  let contact_heading_div_h12 = {
    fontSize: "46px",
    margin: "0",
    color: "#9b78de",
  };
  let contact_heading_div_p2 = {
    fontFamily: '"mon400"',
    fontSize: "19px",
    color: "white",
    opacity: ".8",
    margin: "0 0 -5px 0",
  };
  let contact_heading__before2 = {
    width: "330px",
    height: "350px",
    top: "12vh",
    content: '""',
    position: "absolute",
    display: "block",
    zIndex: "0",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    backgroundColor: "#2e2a2f",
  };
  let contact_form_form_div2 = { content: "", width: "290px", paddingTop: "10px"};
  let contact_form_form__input_div12 = {
    content: "",
    margin: "0",
    display: "inline-block",
    width: "42%",
    marginRight: "10%",
    position: "relative",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  let contact_form_form__input_div22 = {
    content: "",
    margin: "0",
    display: "inline-block",
    width: "42%",
    position: "relative",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
  };
  //let contact_form_form__input_div1_focus_within__input_label12={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  //let contact_form_form__input_div2_focus_within__input_label22={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  let contact_form_form__input_div32 = {
    content: "",
    margin: "15px 0 0 0",
    position: "relative",
    width: "100%",
  };
  //let contact_form_form__input_div3_focus_within__input_label32={"top":"-10px","fontSize":"11px","color":"#9b78de"}
  let contact_form_form_top2_input2 = {
    content: "",
    border: "none",
    borderBottom: "2px solid #9b78de",
    width: "100%",
    backgroundColor: "inherit",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    height: "20px",
    margin: "0",
    fontSize: "20px",
    color: "white",
    paddingBottom: "10px",
    borderRadius: "0px",
    marginBottom: "20px",
    outline: "0",
  };
  let contact_form_form_bottom_input2 = {
    content: "",
    border: "none",
    borderBottom: "2px solid #9b78de",
    width: "94%",
    backgroundColor: "inherit",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    height: "20px",
    margin: "0",
    fontSize: "20px",
    color: "white",
    paddingBottom: "10px",
    borderRadius: "0px",
    outline: "0",
  };
  let contact_form_form_button2 = {
    content: "",
    width: "90px",
    height: "37px",
    color: "#2e2a2f",
    fontFamily: '"mon600"',
    fontSize: "15px",
    backgroundColor: "#9b78de",
    WebkitTransition: "all 0.3s ease",
    transition: "all 0.3s ease",
    border: "none",
    padding: "0",
    borderRadius: "3px",
    marginTop: "2%",
  };
  let contact_form__social_links2 = {
    content: "",
    width: "290px",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    height: "12vh",
    fontFamily: '"mon300"',
    opacity: ".9",
  };

  return (
    <Media queries={{ small: { minWidth: 700 } }}>
      {(matches) =>
        matches.small ? (
          <div style={touch}>
            <div style={sub_touch}>
              <div style={contact_heading}>
                <span style={contact_heading__before}></span>
                <div style={contact_heading_div}>
                  <h1 style={contact_heading_div_h1}>Let's talk</h1>
                  <p style={contact_heading_div_p}>
                    Ask us anything or just say hi
                  </p>
                </div>
              </div>
              <div style={contact_form}>
                <form style={contact_form_form}>
                  <div style={contact_form_form_div}>
                    <div style={contact_form_form__input_div1}>
                      <label style={contact_form_form_label1}>NAME</label>{" "}
                      <input
                        style={contact_form_form_top2_input}
                        type="text"
                        required
                        onFocus={focus1}
                      ></input>
                    </div>
                    <div style={contact_form_form__input_div2}>
                      <label style={contact_form_form_label2}>EMAIL</label>
                      <input
                        style={contact_form_form_top2_input}
                        type="email"
                        required
                        onFocus={focus2}
                      ></input>{" "}
                    </div>
                    <br />
                    <div style={contact_form_form__input_div3}>
                      <label style={contact_form_form_label3}>MESSAGE</label>{" "}
                      <input
                        style={contact_form_form_bottom_input}
                        type="text"
                        required
                        onFocus={focus3}
                      ></input>{" "}
                    </div>
                    <br />
                    <button type="submit" style={contact_form_form_button}>
                      SEND
                    </button>
                  </div>
                </form>
                <div style={contact_form__social_links}>
                  <a
                    href="https://github.com/developerNitin"
                    style={contact_form__social_links_a1}
                    onMouseEnter={hover1}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    github
                  </a>
                  <a
                    href="#"
                    style={contact_form__social_links_a2}
                    onMouseEnter={hover2}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    twitter
                  </a>
                  <a
                    href="mailto:nitin.birdi@icloud.com"
                    style={contact_form__social_links_a3}
                    onMouseEnter={hover3}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    e-mail
                  </a>
                </div>
                <div style={reading_touch_img}>
                  <img src={reading} style={reading_touch_img_img}></img>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={touch}>
            <div style={sub_touch}>
              <div style={contact_heading}>
                <span style={contact_heading__before2}></span>
                <div style={contact_heading_div2}>
                  <h1 style={contact_heading_div_h12}>Let's talk</h1>
                  <p style={contact_heading_div_p2}>
                    Ask us anything or just say hi
                  </p>
                </div>
              </div>
              <div style={contact_form}>
                <form style={contact_form_form}>
                  <div style={contact_form_form_div2}>
                    <div style={contact_form_form__input_div12}>
                      <label style={contact_form_form_label1}>NAME</label>{" "}
                      <input
                        style={contact_form_form_top2_input2}
                        type="text"
                        required
                        onFocus={focus1}
                      ></input>
                    </div>
                    <div style={contact_form_form__input_div22}>
                      <label style={contact_form_form_label2}>EMAIL</label>
                      <input
                        style={contact_form_form_top2_input2}
                        type="email"
                        required
                        onFocus={focus2}
                      ></input>{" "}
                    </div>
                    <br />
                    <div style={contact_form_form__input_div32}>
                      <label style={contact_form_form_label3}>MESSAGE</label>{" "}
                      <input
                        onFocus
                        style={contact_form_form_bottom_input2}
                        type="text"
                        required
                        onFocus={focus3}
                      ></input>{" "}
                    </div>
                    <br />
                    <button type="submit" style={contact_form_form_button2}>
                      SEND
                    </button>
                  </div>
                </form>
                <div style={contact_form__social_links2}>
                  <a
                    href="https://github.com/developerNitin"
                    style={contact_form__social_links_a1}
                    onMouseEnter={hover1}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    github
                  </a>
                  <a
                    href="#"
                    style={contact_form__social_links_a2}
                    onMouseEnter={hover2}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    twitter
                  </a>
                  <a
                    href="mailto:nitin.birdi@icloud.com"
                    style={contact_form__social_links_a3}
                    onMouseEnter={hover3}
                    onMouseLeave={hoverout}
                  >
                    <span style={contact_form__social_links_a__before}></span>
                    e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Media>
  );
}

export default Touch;
