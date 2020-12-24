import React from "react";
import "../headerNavs/HeaderNavs.css";

const HeaderNavs = () => {
  return (
    <div className="navHeader">
      <ul>
        <li className="col-12 col-sm-2 col-md-2  socials">
          <a href="https://www.facebook.com/fizmasoft.uz/">FACEBOOK</a>
        </li>
        <li className="col-12 col-sm-2 col-md-2  socials">
          <a href="https://instagram.com/fizmasoft?igshid=lxjfsvhmu6f4">
            INSTAGRAM
          </a>
        </li>
        <li className="col-12 col-sm-2 col-md-2  socials">
          <a href="https://t.me/a_rakhimjonov">TELEGRAM</a>
        </li>
        <li className="col-12 col-sm-2 col-md-2  socials">
          <a href="https://www.linkedin.com/company/fizmasoft/?originalSubdomain=uz">
            LinkedIn
          </a>
        </li>
        <li className="col-12 col-sm-2 col-md-2  socials">
          <a href="mailto://fizmasoft@gmail.com">GMAIL</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavs;
