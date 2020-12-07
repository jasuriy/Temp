import React from "react";
import "../timeline/TimeLineCards.css";
import ourfirstlogo from "../images/ourfirstlogo.png";
import uztracking from "../images/uztracking.png";
import azamaka from "../images/azamaka.png";
import afterazamaka from "../images/afterazamaka.png";

const TimeLineCards = () => {
  return (
    <div id="timeline" className="cardTitle">
      <div className="timeline">
        <h1>Timeline </h1>
      </div>
      <div className="container">
        <div className="cards back-image"></div>
      </div>
    </div>
  );
};
export default TimeLineCards;
