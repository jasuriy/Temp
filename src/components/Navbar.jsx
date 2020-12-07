import React from "react";
import "./Navbar.css";
import newLogo from "./images/newLogo.JPG";

const Navbar = () => {
  return (
    <div>
      <div className="container logovscall">
        <div className="row">
          <div className="col-sm-12 col-md-12  logodiv">
            <img src={newLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
