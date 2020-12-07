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
const Timeline = () => {
  return (
    <div id="timeline" className="container">
      <div className="timeline ">
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
              <img className="ourfirstlogo" alt="Logo" src={ourfirstlogo} />
              <img
                className="ourfirstlogo2"
                alt="ourfirstlogo"
                src={rectangle}
              />
              <div className="littleText">
                <p>in 2016</p>
                <h3>OUR FIRST LOGO</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div style={{ position: "relative" }}>
            <img className="repeatAzamaka" alt="repeat" src={repead5} />
            <img className="azamaka" alt="Logo" src={azamaka} />
            <img className="azamaka2" alt="azamaka2" src={rectangle} />
            <div className="littleTextAzamaka">
              <p>in 2016</p>
              <h3>CREATION OF FIZMASOFT</h3>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img className="afterazamaka" alt="Logo" src={afterazamaka} />
            <img
              className="afterazamaka2"
              alt="afterazamaka2"
              src={rectangle}
            />
            <div className="littleTextAfterAzamaka">
              <p>in 2016</p>
              <h3>CREATION OF FIZMASOFT</h3>
            </div>
          </div>
        </div>
      </div>
      {/*next 3 timelines  */}
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div style={{ position: "relative" }}>
            <img className="repeadsherzod" alt="sherzodrepead" src={repead5} />
            <img className="sherzod" alt="sherzod" src={sherzod} />
            <img className="sherzod2" alt="sherzod2" src={rectangle} />
            <div className="littleTextSherzod">
              <p>in 2016</p>
              <h3>RELEASE OF</h3>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img className="safecity" alt="Logo" src={safecity} />
            <img className="safecity2" alt="safecity2" src={rectangle} />
            <div className="littleTextLastPic">
              <p>in 2016</p>
              <h3>RELEASE OF</h3>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 timelineMain">
          <div className="row">
            <div style={{ position: "relative" }}>
              <img className="parentcontrol" alt="Logo" src={aftersherzod} />
              <img
                className="parentcontrol2"
                alt="ourfirstlogo"
                src={rectangle}
              />
              <div className="littleTextParentcontrl">
                <p>in 2016</p>
                <h3>RELEASE OF</h3>
              </div>
              <img className="repead3" alt="repead3" src={repead3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
