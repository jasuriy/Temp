import React from "react";
import "../projects/Projects.css";
import ourproject from "../images/ourproject.png";
import uztracking1 from "../images/uztracking1.png";
import faceconNew from "../images/faceconNew.png";

const ProjectsNew = () => {
  return (
    <div
      id="projects"
      className="container-fluid projects"
      style={{ width: "80%" }}
    >
      <div className="projects_title">
        <h3>Projects</h3>
        <p className="projects_titleP">What we have done so far ! </p>
      </div>
      <div className="row iparentTextImg">
        <div className="col-sm-12 col-md-8 ">
          <img
            className="iparent1 img-fluid  "
            style={{ maxWidth: "100%" }}
            src={ourproject}
            alt="iparent"
          />
        </div>
        <div className="col-sm-12 col-md-4 iparent1text">
          <h3>Our First Project iParent</h3>
          <div className="iparentparagraph">
            <p className=" text-justify">
              iParent app offers parents quick access to real-time school
              information about their child.<br></br>
              This includes everything from attandance records to exam results
              rewards and detension notifications access to reports and
              assassments.
            </p>
          </div>
          <div>
            {/* <a href="#" className="btn btn-primary disabled">
              More information
            </a> */}
          </div>
        </div>
      </div>
      <div className="row uztrackingText">
        <div className="col-sm-12 col-md-4">
          <h3>
            How do I track a package? <br></br>UzTracking!
          </h3>
          <div className="uztrackingParagraph">
            <p className="text-justify">
              iParent app offers parents quick access to real-time school
              information about their child<br></br>
              This includes everything from attandance records to exam results
              rewards and detension notifications access to reports and
              assassments.
            </p>
            {/* <a href="#" className="btn btn-primary disabled">
              More information
            </a> */}
          </div>
        </div>
        <div className="col-sm-12 col-md-8 uztrackingText">
          <img
            className="uztracking img-fluid "
            style={{ maxWidth: "100%" }}
            alt="uztracking"
            src={uztracking1}
          />
        </div>
      </div>
      <div className="row faceconTextImg">
        <div className="col-sm-12 col-md-8">
          <img
            className="facecon1 img-fluid "
            style={{ maxWidth: "100%" }}
            src={faceconNew}
            alt="facecon"
          />
        </div>
        <div className="col-sm-12 col-md-4 facecon1text">
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
            {/* <a href="#" className="btn btn-primary disabled">
              More information
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNew;
