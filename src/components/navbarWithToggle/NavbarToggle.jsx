import React, { useEffect } from "react";
import "../navbarWithToggle/NavbarToggle.css";
import { Link, animatedScroll as scroll } from "react-scroll";

var onClickedList = {
  0: "service",
  1: "projects",
  2: "timeline",
  3: "team",
  4: "contact",
};

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function world(id) {
  let linkTo = elmYPosition(onClickedList[id]);
  window.scrollTo(0, linkTo - 97);
}

const NavbarToggle = () => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    let header = document.getElementById("navBar");
    const iconbutton = document.querySelector(".menu-btn");
    if (window.pageYOffset >= 347) {
      header.classList.add("sticky");
      header.classList.add("shadow-sm");
      header.style.opacity = 0.75;
      header.style.marginBottom = "-40px";
      header.style.padding = "0";
    } else {
      header.classList.remove("sticky");
      header.classList.remove("shadow-sm");
      header.style.marginBottom = "-40px";
      header.style.padding = "0";
    }
  };
  return (
    <div>
      {/* <Dialog />
      <HeaderNavs />
      <Navbar /> */}
      <header className="navbar sticky-top navbar-light" id="navBar">
        <div className="mobileNav d-md-flex sticky-top justify-content-center">
          <input className="menu-btn" type="checkbox" id="menu-btn"></input>
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li className="menu-link">
              <Link
                activeClass="active"
                onClick={(e) => world("0")}
                duration={3000}
              >
                <a href="#service">SERVICES</a>
              </Link>
            </li>
            <li className="menu-link">
              <Link
                activeClass="active"
                onClick={(e) => world("1")}
                duration={3000}
              >
                <a href="#projects">PROJECTS</a>
              </Link>
            </li>
            <li className="menu-link">
              <Link
                activeClass="active"
                onClick={(e) => world("2")}
                duration={3000}
              >
                <a href="#timeline">TIMELINE</a>
              </Link>
            </li>
            <li className="menu-link">
              <Link
                activeClass="active"
                onClick={(e) => world("3")}
                duration={3000}
              >
                <a href="#team">TEAM</a>
              </Link>
            </li>
            <li className="menu-link">
              <Link
                activeClass="active"
                onClick={(e) => world("4")}
                duration={3000}
              >
                <a href="#contact">CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavbarToggle;
