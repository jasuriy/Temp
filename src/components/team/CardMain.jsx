import React from "react";
import CardCore from "./CardCore";
import teamInfo from "../team/teamInfo.js";

const CardMain = () => {
  return (
    <div>
      {teamInfo.map((info) => {
        return (
          <CardCore
            personName={info.personName}
            jobTitle={info.jobTitle}
            img={info.img}
            cardText={info.cardText}
            teamInfo={teamInfo}
          />
        );
      })}
    </div>
  );
};

export default CardMain;
