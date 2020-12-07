import React from "react";
import "../timeline/Timeline.css";
import ourfirstlogo from "../images/ourfirstlogo.png";
import rectangle from "../images/rectangle.png";
import azamaka from "../images/azamaka.png";
import repead5 from "../images/repead5.png";
import afterazamaka from "../images/afterazamaka.png";
import sherzod from "../images/sherzod.png";
import aftersherzod from "../images/aftersherzod.png";
import safecity from "../images/safecity.png";
import repead3 from "../images/repead3.png";
import firstLogoNew from "../images/firstLogoNew.png";
import creationofFizmasoftNew from "../images/creationofFizmasoftNew.png";
import presentationNew from "../images/presentationNew.png";
import realeseOfNew from "../images/realeseOfNew.png";
import safeCityNew from "../images/safeCityNew.png";
import releaseOfParentNew from "../images/releaseOfParentNew.png";
const TimelineNew = () => {
  return (
    <div id="timeline" className="container-fluid" style={{ width: "70%" }}>
      <div className="timeline-header ">
        <h1>Timeline11 </h1>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 timelineMain">
          <div className="row">
            <p className="creationofizmasoft text-justify">
              The FizmaSoft Team created in <br></br>Tashkent in 2016.<br></br>
              Since then the Team has been leading a lot of tech-projects
              successfully...
            </p>
          </div>
          <div className="row">
            <div style={{ position: "relative" }}>
              <img className="ourfirstlogo" alt="Logo" src={firstLogoNew} />
              {/* <div className="littleText">
                <p>in 2016</p>
                <h3>OUR FIRST LOGO</h3>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div style={{ position: "relative" }}>
            <img className="azamaka" alt="Logo" src={creationofFizmasoftNew} />
            {/* <div className="littleTextAzamaka">
              <p>in 2016</p>
              <h3>CREATION OF FIZMASOFT</h3>
            </div> */}
          </div>
          <div style={{ position: "relative" }}>
            <img className="afterazamaka" alt="Logo" src={presentationNew} />
            {/* <div className="littleTextAfterAzamaka">
              <p>in 2016</p>
              <h3>CREATION OF FIZMASOFT</h3>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div style={{ position: "relative" }}>
            <img className="sherzod" alt="sherzod" src={realeseOfNew} />
            {/* <div className="littleTextSherzod">
              <p>in 2016</p>
              <h3>RELEASE OF</h3>
            </div> */}
          </div>
          <div style={{ position: "relative" }}>
            <img className="safecity" alt="Logo" src={releaseOfParentNew} />
            {/* <div className="littleTextLastPic">
              <p>in 2016</p>
              <h3>RELEASE OF</h3>
            </div> */}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 timelineMain">
          <div className="row">
            <div style={{ position: "relative" }}>
              <img className="parentcontrol" alt="Logo" src={safeCityNew} />
              {/* <div className="littleTextParentcontrl">
                <p>in 2016</p>
                <h3>RELEASE OF</h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineNew;
