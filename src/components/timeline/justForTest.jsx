import React from "react";
import "../timeline/justForTestCss.css";
import firstLogoNew from "../images/firstLogoNew.png";
import creationofFizmasoftNew from "../images/creationofFizmasoftNew.png";
import presentationNew from "../images/presentationNew.png";
import realeseOfNew from "../images/realeseOfNew.png";
import releaseOfParentNew from "../images/releaseOfParentNew.png";
import safeCityNew from "../images/safeCityNew.png";

const JustForTest = () => {
  return (
    <div>
      <div id="timeline" className="timeline-header ">
        <h1>Timeline </h1>
      </div>
      <div className="row timeline-main-div d-flex justify-content-center container-fluid">
        <div className="row" style={{ flexDirection: "column" }}>
          <div className="about-fizmasoft">
            <h5>
              Fizmasoft, Uzbek company<br></br> offering various IT services
              <br></br> founded in Tashkent in 2013
            </h5>
          </div>
          <div className="box">
            <div className="imgBox">
              <img
                className="firstlogo img-fluid"
                alt="Logo"
                src={firstLogoNew}
              />
            </div>
            <div className="content ">
              <h3>Our First Logo</h3>
              <div className="hover-card">
                <div className="profile">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                    Magni, harum! Libero, quos! Expedita eius deserunt numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="imgBox2">
              <img
                className="sherzodaka img-fluid"
                alt="sherzod"
                src={realeseOfNew}
              />
            </div>
            <div className="content2 ">
              <h3>Project Demos</h3>
              <div className="hover-card2">
                <div className="profile2">
                  <p className="text-center2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                    Magni, harum! Libero, quos! Expedita eius deserunt numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="imgBox3">
              <img
                className=" parentcontr img-fluid"
                alt="parentCont"
                src={releaseOfParentNew}
              />
            </div>
            <div className="content3 ">
              <h3>Children Watch</h3>
              <div className="hover-card3">
                <div className="profile3">
                  <p className="text-center3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                    Magni, harum! Libero, quos! Expedita eius deserunt numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ flexDirection: "column" }}>
          <div className="box4">
            <div className="imgBox4">
              <img
                className="creation-fizmasoft img-fluid"
                alt="Logo"
                src={creationofFizmasoftNew}
              />
            </div>
            <div className="content4 ">
              <h3>About Fizmasoft</h3>
              <div className="hover-card4">
                <div className="profile4">
                  <p className="text-center4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="box5">
            <div className="imgBox5">
              <img
                className="presentationNew img-fluid"
                alt="Logo"
                src={presentationNew}
              />
            </div>
            <div className="content5 ">
              <h3>Presentations</h3>
              <div className="hover-card5">
                <div className="profile5">
                  <p className="text-center5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                    Magni
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box6">
            <div className="imgBox6">
              <img className="safeCityNew" alt="Logo" src={safeCityNew} />
            </div>
            <div className="content6 ">
              <h3>Safe City</h3>
              <div className="hover-card6">
                <div className="profile6">
                  <p className="text-center6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    reprehenderit impedit, odio inventore necessitatibus natus,
                    beatae quibusdam eius exercitationem est optio blanditiis.
                    Magni, harum! Libero, quos! Expedita eius deserunt numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForTest;
