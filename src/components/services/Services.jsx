import React from "react";
import "../services/Services.css";
import apple from "../images/apple.png";
import desktoplogo from "../images/desktoplogo.png";
import server from "../images/server.png";
import android from "../images/android.png";
import weblogo from "../images/weblogo.png";
import hardware from "../images/hardware.png";
const Services = () => {
  return (
    <div
      id="service"
      className="services container-fluid"
      style={{ paddingTop: "1px" }}
    >
      <div className="services_title">
        <h3>Services</h3>
        <p>We are always ready to help you </p>
      </div>
      <div className="row  service_column">
        <div className="col-sm-12 col-md-6 col-lg-3 service_row ">
          <div className="row">
            <img className="img-responsive " src={weblogo} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card card-class">
              <div className="card-body">
                <h5 className="card-title titleCard ">Web Development</h5>
                <p className="card-text  textCard">
                  We can offer several types of web-services which includes
                  designing web-site, creating plugins and changing front/back
                  side of applications
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service_row">
          <div className="row">
            <img className="img-responsive" src={android} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title titleCard">Android Development</h5>
                <p className="card-text textCard">
                  iParent is one of the best projects of our android developers.
                  Besides making service, providing applications. they can work
                  in many other fields too.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service_row">
          <div className="row">
            <img className="img-responsive" src={apple} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title titleCard">iOS Development</h5>
                <p className="card-text textCard">
                  Our iOS developers can make any application according to the
                  customers' requirements and work in the field of iOS just like
                  profesionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row service_column">
        <div className="col-sm-12 col-md-6 col-lg-3 service_row">
          <div className="row">
            <img className="img-responsive" src={desktoplogo} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title titleCard">Desktop Development</h5>
                <p className="card-text textCard">
                  We can offer several types of web-services which includes
                  designing web-site, creating plugins and changing front/back
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service_row">
          <div className="row">
            <img className="img-responsive" src={server} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title titleCard">Server Side Solutions </h5>
                <p className="card-text textCard">
                  iParent is one of the best projects of our android developers.
                  Besides making service, providing applications. they can work
                  in
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 service_row">
          <div className="row">
            <img className="img-responsive" src={hardware} alt="Card" />
          </div>
          <div className="row" style={{ marginTop: "70px" }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title titleCard">Hardware Development</h5>
                <p className="card-text textCard">
                  Our iOS developers can make any application according to the
                  customers' requirements and work in the field of
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
