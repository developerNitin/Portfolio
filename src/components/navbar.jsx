import React, { useState } from "react";

function Navbar() {
  const [link, setLink] = useState(true);
  const [Rect, setRect] = useState({
    x1: "11",
    y1: "13",
    x2: "11",
    y2: "27",
    w: "20",
  });

  // const [linkHoverr1, setLinkhover1] = useState({
  //   color: "white",
  // });
  // const [linkHover2, setLinkhover2] = useState({
  //   color: "white"
  // });
  // const [linkHover3, setLinkhover3] = useState({
  //   color: "white"
  // });
  // const [linkHover4, setLinkhover4] = useState({
  //   color: "white"
  // });
  // const [linkHover5, setLinkhover5] = useState({
  //   olor: "white"
  // });

  // function Linkhover1() {
  //   setLinkhover1({
  //     color: "rgb(155, 120, 222)",
  //   });
  // }
  // function Linkhoverout1() {
  //   setLinkhover1({
  //     color: "white",
  //   });
  // }
  // function Linkhover2() {
  //   setLinkhover2({
  //     color: "rgb(155, 120, 222)"
  //   })
  // }
  // function Linkhoverout2() {
  //   setLinkhover2({
  //     color: "white"
  //   })
  // }
  // function Linkhover3() {
  //   setLinkhover3({
  //     color: "rgb(155, 120, 222)"
  //   })
  // }
  // function Linkhoverout3() {
  //   setLinkhover3({
  //     color: "white"
  //   })
  // }
  // function Linkhover4() {
  //   setLinkhover4({
  //     color: "rgb(155, 120, 222)"
  //   })
  // }
  // function Linkhoverout4() {
  //   setLinkhover4({
  //     color: "white"
  //   })
  // }
  // function Linkhover5() {
  //   setLinkhover5({
  //     color: "rgb(155, 120, 222)"
  //   })
  // }
  // function Linkhoverout5() {
  //   setLinkhover5({
  //     color: "white"
  //   })
  // }

  function visible() {
    setLink(true);
    document.querySelector("#links").style.visibility = "hidden";
    document.querySelector(".btn-rect5").style.visibility = "visible";
    let bun_rect_1 = document.querySelector(".bun-rect-1");
    let bun_rect_2 = document.querySelector(".bun-rect-2");
    bun_rect_1.style.transform = "rotate(0)";
    bun_rect_1.style.WebkitTransform = "rotate(0)";
    bun_rect_2.style.transform = "rotate(0)";
    bun_rect_2.style.WebkitTransform = "rotate(0)";
    setRect({
      x1: "11",
      y1: "13",
      x2: "11",
      y2: "27",
      w: "20",
    });
  }

  function hidden() {
    setLink(false);
    document.querySelector("#links").style.visibility = "visible";
    document.querySelector(".btn-rect5").style.visibility = "hidden";
    let bun_rect_1 = document.querySelector(".bun-rect-1");
    let bun_rect_2 = document.querySelector(".bun-rect-2");
    bun_rect_1.style.transform = "rotate(45deg)";
    bun_rect_1.style.WebkitTransform = "rotate(45deg)";
    bun_rect_2.style.transform = "rotate(-45deg)";
    bun_rect_2.style.WebkitTransform = "rotate(-45deg)";
    setRect({
      x1: "19",
      y1: "-1",
      x2: "-12",
      y2: "29",
      w: "23",
    });
  }

  function rect(x1, y1, x2, y2, w) {
    return (
      <svg
        height="40"
        width="40"
        style={bunBurger_svg}
        onMouseEnter={bunBurger_hover_svg}
        onMouseLeave={bunBurger_hoverout_svg}
        className="bunburger_svg"
      >
        <rect
          className="bun-rect-1"
          height="2"
          width={w}
          rx="1"
          x={x1}
          y={y1}
        ></rect>
        <rect
          style={{ opacity: ".8" }}
          className="btn-rect5"
          height="2"
          width="17"
          rx="1"
          x="14"
          y="20"
        ></rect>
        <rect
          className="bun-rect-2"
          height="2"
          width={w}
          rx="1"
          x={x2}
          y={y2}
        ></rect>
      </svg>
    );
  }

  function li(href, name, style, func1, func2) {
    return (
      <li className="link-btn" style={links_ul_li}>
        <a
          href={href}
          style={style}
          className={name}
          onMouseOver={func1}
          onMouseOut={func2}
        >
          {name}
          <svg
            style={links_ul_li_svg}
            height="2"
            width="20"
            className="links_ul_li_a_svg_hover"
          >
            <rect rx="1" height="2" width="20"></rect>
          </svg>
        </a>
      </li>
    );
  }

  // var btns = document.querySelectorAll(".link-btn");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }

  let navbar = { backgroundColor: "inherit" };
  let links = {
    height: "380px",
    width: "217px",
    right: "0",
    position: "fixed",
    visibility: "hidden",
    zIndex: "100",
    backgroundColor: "#363138",
  };
  let links_ul = {
    height: "255px",
    width: "173.16px",
    fontSize: "17px",
    listStyle: "none",
    fontFamily: '"mon400"',
    padding: "0",
    textAlign: "right",
    position: "absolute",
    top: "70px",
    right: "15px",
  };
  let links_ul_li = { height: "51px" };
  let links_ul_li_a1 = {
    letterSpacing: "1px",
    padding: "12px 10px",
    textDecoration: "none",
    color: "white",
  };
  let links_ul_li_a2 = {
    letterSpacing: "1px",
    padding: "12px 10px",
    textDecoration: "none",
    color: "white",
  };
  let links_ul_li_a3 = {
    letterSpacing: "1px",
    padding: "12px 10px",
    textDecoration: "none",
    color: "white",
  };
  let links_ul_li_a4 = {
    letterSpacing: "1px",
    padding: "12px 10px",
    textDecoration: "none",
    color: "white",
  };
  let links_ul_li_a5 = {
    letterSpacing: "1px",
    padding: "12px 10px",
    textDecoration: "none",
    color: "white",
  };
  let links_ul_li_svg = {
    position: "absolute",
    fill: "white",
    right: "-23px",
    marginTop: "10px",
  };

  let bun_sun = {
    width: "96px",
    height: "44px",
    top: "0",
    right: "0",
    position: "fixed",
    padding: "15px 15px 0px 0",
    zIndex: "200",
    textAlign: "right",
  };
  let sun = {
    opacity: "0.7",
    height: "40px",
    width: "40px",
    borderStyle: "none",
    backgroundColor: "inherit",
    padding: "0",
    top: "16px",
    position: "absolute",
    display: "block",
    right: "60px",
  };
  let sun_svg = { backgroundColor: "inherit", fill: "white" };
  function sun_hover_svg() {
    document.querySelector(".sun_svg").style.fill = "#9b78de";
  }
  function sun_hoverout_svg() {
    document.querySelector(".sun_svg").style.fill = "white";
  }
  let bunBurger = {
    opacity: "0.9",
    height: "40px",
    width: "40px",
    padding: "0",
    borderStyle: "none",
    backgroundColor: "inherit",
  };
  let bunBurger_svg = {
    backgroundColor: "inherit",
    fill: "white",
    WebkitTransform: "all 0.3s ease",
    transform: "all 0.3s ease",
  };
  function bunBurger_hover_svg() {
    document.querySelector(".bunburger_svg").style.fill = "#9b78de";
  }
  function bunBurger_hoverout_svg() {
    document.querySelector(".bunburger_svg").style.fill = "white";
  }

  return (
    <nav style={navbar}>
      <div style={bun_sun}>
        <button style={sun}>
          <svg
            height="27"
            width="25"
            className="sun_svg"
            style={sun_svg}
            onMouseEnter={sun_hover_svg}
            onMouseLeave={sun_hoverout_svg}
          >
            <circle cx="12.8" cy="14" r="4"></circle>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="11.5"
              y="5.9"
              transform="rotate(-180 12.5 5.9)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="12"
              y="22"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="16.4"
              y="15.1"
              transform="rotate(-90 18.2 13)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="6.9"
              y="11.6"
              transform="rotate(90 5.2 11.6)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="15.6"
              y="20.1"
              transform="rotate(-45 15.6 17.6)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="7.6"
              y="6.2"
              transform="rotate(135 7.6 7.2)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="15.4"
              y="9.1"
              transform="rotate(-135 16.8 8.3)"
            ></rect>
            <rect
              className="svg-sun-ray"
              height="5"
              width="1.5"
              rx="1"
              x="8.6"
              y="17.3"
              transform="rotate(45 6.6 16.3)"
            ></rect>
          </svg>
        </button>
        <button style={bunBurger} onClick={link ? hidden : visible}>
          {rect(Rect.x1, Rect.y1, Rect.x2, Rect.y2, Rect.w)}
        </button>
      </div>
      <div id="links" style={links}>
        <ul id="myLinks" style={links_ul}>
          <li className="link-btn" style={links_ul_li}>
            <a
              href="#home"
              style={links_ul_li_a1}
              // onMouseOver={Linkhover1()}
              // onMouseOut={Linkhoverout1()}
            >
              intro
              <svg
                style={links_ul_li_svg}
                height="2"
                width="20"
                className="links_ul_li_a_svg_hover"
              >
                <rect rx="1" height="2" width="20"></rect>
              </svg>
            </a>
          </li>
          {li("#work", "work", links_ul_li_a2)}
          {li("#skills", "skills", links_ul_li_a3)}
          {li("#about", "about", links_ul_li_a4)}
          {li("#touch", "contact", links_ul_li_a5)}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
