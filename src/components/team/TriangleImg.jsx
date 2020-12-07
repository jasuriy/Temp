import React from "react";

const TriangleImg = ({ img }) => {
  return (
    <div className="image-div square d-flex align-items-center">
      <div className="pic">
        <img src={img} alt="" className=" img-fluid" />
      </div>
    </div>
  );
};

export default TriangleImg;
