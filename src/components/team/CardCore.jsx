import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import React from "react";
import "../team/Team.css";

const CardCore = ({ img, personName, jobTitle, cardText }) => {
  return (
    <div className="card_main">
      <div className="image-div square d-flex align-items-center">
        <div className="pic">
          <img src={img} alt="" className=" img-fluid" />
        </div>
      </div>
      <h5 className="person_name">{personName}</h5>
      <p className="job_title">{jobTitle}</p>
      <p className="card-text">{cardText}</p>
    </div>
  );
};

export default CardCore;
