import React from "react";
import "../footer/Footer.css";
import support3 from "../images/support3.svg";
import logoWhite from "../images/logoWhite.png";

const Footer = () => {
  return (
    <div id="contact" className="footerMain">
      <div className="d-flex justify-content-center w-100 footerUpper2">
        <div className="row fotterUpper ">
          <div className="col-md-6 luboy">
            <p className="contactInfo">
              If you could not find the information you were looking for,
              <br></br>call or contact us
            </p>
          </div>
          <div className=" row col-md-6 d-inline">
            <div className="row justify-content-center  lowwerPhone">
              <img
                alt="smth"
                src={support3}
                className="iconImage"
                style={{ color: "white" }}
              />
              <p
                className="phone"
                style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}
              >
                (55) 502 04 04
              </p>
            </div>
            <div>
              <p className="info">
                <i
                  style={{ paddingLeft: "0.2rem", paddingTop: "0.5rem" }}
                  id="email-icon"
                  className="fa fa-envelope fa-2x fa-fw  email-class"
                  aria-hidden="true"
                ></i>
                info@fizmasoft.uz
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lastFooter">
        <div className="row footerAll">
          <div className="col-sm-12 col-md-12 col-lg-3 lastp1">
            <img src={logoWhite} alt="whitelogo" />
            <h3 style={{ fontWeight: "lighter", marginTop: "10px" }}>
              FIZMA<span style={{ fontWeight: "bold" }}>SOFT</span>
            </h3>
            <h6 className="text-align-center">IDEA IMPLEMENT RESULT</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 lastp2">
            <div>
              <h5>SERVICES</h5>
            </div>
            <div className="row footerLinks ">
              <div className="col-sm-12  col-md-6 col-lg-6 d-flex justify-content-center list1">
                <ul className="footer-ul">
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-chrome pr-2" aria-hidden="true"></i>
                      Web Developing
                    </li>
                  </a>
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-apple pr-2" aria-hidden="true"></i>IOS
                      Developing
                    </li>
                  </a>
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-server pr-2" aria-hidden="true"></i>
                      Server Solutions
                    </li>
                  </a>
                </ul>
              </div>
              <div className="col-sm-12  col-md-6 col-lg-6 d-flex justify-content-center  list2">
                <ul className="footer-ul">
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-gears pr-2" aria-hidden="true"></i>
                      Hardware Solutions
                    </li>
                  </a>
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-laptop pr-2" aria-hidden="true"></i>
                      Desktop Developing
                    </li>
                  </a>
                  <a href="#service" className="footer-list-item">
                    <li>
                      <i className="fa fa-android pr-2" aria-hidden="true"></i>
                      Android Developing
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 lastp3">
            {/* <h5>OUR LOCATION</h5> */}
            <div>
              <iframe
                title={"mapIframe"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.768822046612!2d69.22027016314354!3d41.3507172590699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaadd09c7aab98704!2sFizmasoft!5e0!3m2!1sen!2s!4v1607663081489!5m2!1sen!2s"
                width="80%"
                height="45%"
                frameBorder="0"
                style={{
                  border: "0",
                  margin: "4px",
                  marginTop: "5rem",
                  overflow: "hidden",
                }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
