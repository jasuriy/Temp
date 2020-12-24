import React from "react";
import "../partners/Partners.css";
import repead3 from "../images/repead3.png";
import ablsoftlogo from "../images/ablsoftlogo.png";
import smartbase from "../images/smartbase.png";
const Partners = () => {
  return (
    <div className="partnersMain">
      <div className="container partnersHeader">
        <h3>Partners</h3>
        <p className="partnership">Partnership is the key of improvement!</p>
        <div className="row partnersRow" style={{ marginBottom: "8rem" }}>
          <div className="col-sm-12 col-md-6">
            <img className="ablsoft" src={ablsoftlogo} />
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="smartbase" src={smartbase} />
          </div>
        </div>
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <img
            src={repead3}
            style={{ width: "9rem", justifyContent: "flex-end" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
