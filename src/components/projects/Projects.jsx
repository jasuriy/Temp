import React from "react";
import "../projects/Projects.css";
import iparent from "../images/iparent.png";
import uztracking from "../images/uztracking.png";
import rectangle from "../images/rectangle.png";
import repead5 from "../images/repead5.png";
import facecon1 from "../images/facecon1.png";
import cargo from "../images/cargo.jpg";
import firstProjectLittle from "../images/firstProjectLittle.png";
import uzTrackingLittle from "../images/uzTrackingLittle.png";
import faceconLittle from "../images/faceconLittle.png";

const Projects = () => {
  return (
    <div id="projects" className="container-fluid projects">
      <div className="projects_title">
        <h3>Projects11</h3>
        <p>What we have done so far ! </p>
      </div>
      <div className="row iparentTextImg">
        <div className="col-sm-12 col-md-6 ">
          <img className="repeadIparent " src={repead5} alt="repeadIparent" />
          <img
            className="iparent1 img-fluid "
            style={{ maxWidth: "100%" }}
            src={iparent}
            alt="iparent"
          />
          <img className="iparentRectangle " src={rectangle} alt="rectangle" />
          <img
            src={firstProjectLittle}
            alt="firstProjectLittle"
            className="firstProjectLittle "
          />
        </div>
        <div className="col-sm-12 col-md-6 iparent1text">
          <h3>Our First Project iParent</h3>
          <div className="iparentparagraph">
            <p className=" text-justify">
              iParent app offers parents quick access to real-time school
              information about their child<br></br>
              <br></br>This includes everything from attandance records to exam
              results rewards and detension notifications access to reports and
              assassments. <br></br>
            </p>
            <a href="#" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
      <div className="row uztrackingText">
        <div className="col-sm-12 col-md-6">
          <h3>
            How do I track a package? <br></br>UzTracking!
          </h3>
          <div className="uztrackingParagraph">
            <p className="text-justify">
              iParent app offers parents quick access to real-time school
              information about their child<br></br>
              <br></br>This includes everything from attandance records to exam
              results rewards and detension notifications access to reports and
              assassments. <br></br>
            </p>
            <a href="#" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 uztrackingText">
          <img
            className="uztracking img-fluid"
            style={{ maxWidth: "100%" }}
            src={cargo}
            alt="uztracking"
          />
          <img
            className="uzTrackingRepead"
            src={repead5}
            alt="uzTrackingRepead"
          />
          <img
            className="uzTrackingRectangle"
            src={rectangle}
            alt="uzTrackingRectangle"
          />
          <img
            src={uzTrackingLittle}
            alt="uzTrackingLittle"
            className="uzTrackingLittle"
          />
        </div>
      </div>
      <div className="row faceconTextImg">
        <div className="col-sm-12 col-md-6">
          <img
            className="facecon1 img-fluid"
            style={{ maxWidth: "100%" }}
            src={facecon1}
            alt="facecon"
          />
          <img src={faceconLittle} alt="faceLittle" className="faceconLittle" />
          <img
            src={rectangle}
            alt="faceconRectangle"
            className="faceconRectangle"
          />
          <img src={repead5} alt="faceconRepead" className="faceconRepead" />
        </div>
        <div className="col-sm-12 col-md-6 facecon1text">
          <h3>
            FaceCon - Intelligent<br></br> Identification System
          </h3>
          <div className="faceconparagraph">
            <p className="text-justify">
              FaceCon is the first national software product designed to solve a
              complex of tasks related to face recognition. FaceCon consists of
              a recognition system core, a face capture and primary image
              processing module, an identity and verification module, a database
              module, and an interface module.<br></br>
            </p>
            <a href="#" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
