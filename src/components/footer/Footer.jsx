import React from "react";
//import Mapping from "./Mapping";
import "../footer/Footer.css";
import support3 from "../images/support3.svg";
import logoWhite from "../images/logoWhite.png";
import location from "../images/location.png";
const Footer = () => {
  return (
    <div id="contact" className="footerMain">
      <div className="d-flex justify-content-center w-100 footerUpper2">
        <div className="row fotterUpper ">
          <div className="col-md-6 ">
            <p>
              If you could not find the information you were looking for,
              <br></br>call or contact us
            </p>
          </div>
          <div className="col-md-6">
            <div className="row justify-content-center  lowwerPhone">
              <img
                src={support3}
                className="iconImage"
                style={{ color: "white" }}
              />
              <p
                className="phone"
                style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
              >
                (90)777 77 07
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lastFooter">
        <div className="row footerAll">
          <div className="col-sm-12 col-md-12 col-lg-3 lastp1">
            <img src={logoWhite} alt="whitelogo" />
            <h3 style={{ fontWeight: "lighter" }}>
              FIZMA<span style={{ fontWeight: "bold" }}>SOFT</span>
            </h3>
            <h6 className="text-align-center">IDEA IMPLEMENT RESULT</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 lastp2">
            <div>
              <h5>SERVICES</h5>
            </div>
            <div className="row footerLinks ">
              <div className="col-sm-12  col-md-6 col-lg-6 d-flex justify-content-end list1">
                <ul className="footer-ul">
                  <a href="webdev">
                    <li>Web Developing</li>
                  </a>
                  <a href="iosdev">
                    <li>IOS Developing</li>
                  </a>
                  <a href="serverdev">
                    <li>Server Solutions</li>
                  </a>
                </ul>
              </div>
              <div className="col-sm-12  col-md-6 col-lg-6 d-flex justify-content-start  list2">
                <ul className="footer-ul">
                  <a href="harddev">
                    <li>Hardware Solutions</li>
                  </a>
                  <a href="desktopdev">
                    <li>Desktop Developing</li>
                  </a>
                  <a href="androiddev">
                    <li>Android Developing</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 lastp3">
            <h5>OUR LOCATION</h5>
            <img src={location} />
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
