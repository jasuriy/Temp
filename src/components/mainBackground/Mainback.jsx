import React from "react";
import computerImage1 from "../images/computerImage1.png";
import "../mainBackground/MainBack.css";

const MainBack = () => {
  return (
    <div className="mainback">
      <div className="main_picture">
        <img
          className="backpic responsive"
          src={computerImage1}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MainBack;
