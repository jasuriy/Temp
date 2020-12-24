import React from "react";
import "../team/Team.css";
import insta from "../team/insta.png";
import gmail from "../team/gmail.png";
import telegram2 from "../team/telegram2.png";
import azamaka from "../images/azamaka.png";
import muhamadsher from "../images/muhamadsher.jpg";
import jaloliddin1 from "../images/jaloliddin1.png";
import kayrat from "../images/kayrat.jpg";
import oybek from "../images/oybek.jpg";
import abubakr from "../images/abubakr.jpg";
import baxodir from "../images/baxodir.jpg";
import humoyunmirzo from "../images/humoyunmirzo.jpg";
import TriangleImg from "./TriangleImg";
const Team = () => {
  return (
    <div id="team" className="teamMain container">
      <div className="teamHeader">
        <h1 className="teamHeading">Team</h1>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <TriangleImg img={azamaka} />
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Azamjon Rahimjonov</h5>
              <p className="card-job">CEO of Fizmasoft</p>
              <p className="card-text cardText">
                Sometimes the simplest are the hardest to find. So we created a
                new line for everday life. All Year round
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.instagram.com/ceo_of_fizmasoft/">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://fizmasoft@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="https://t.me/a_rakhimjonov">
                  <img src={telegram2} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={muhamadsher} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">
                Shermamatov Mukhammadsher
              </h5>
              <p className="card-job">Backend Developer</p>
              <p className="card-text cardText">
                Lead from the back and let others believe they are in front.
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://instagram.com/dj_usher">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://mr.muhammadsher@mail.ru">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="https://t.me/Dj_Usher">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={jaloliddin1} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Jaloliddin Boltaev</h5>
              <p className="card-job">Android Developer</p>
              <p className="card-text cardText">
                Sometimes the simplest are the hardest to find. So we created a
                new line for everday life. All Year round
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="@jeybi_me">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://codewithjeyallday@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="@jeybi22">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={kayrat} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Kayrat Urazov</h5>
              <p className="card-job">Data Analyst</p>
              <p className="card-text cardText">
                The best thing about a boolean is even if you are wrong, you are
                only off by a bit.
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.instagram.com/headcliff07/">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://ronin.kay0705@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="@KayOpenAI">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={oybek} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Beknazarov Oybek</h5>
              <p className="card-job">C# Developer</p>
              <p className="card-text cardText">
                Success begins with the importance of small things
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.instagram.com/doctoroybek7/">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://oybekbeknazarov0808@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="Beknazarov Oybek">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={abubakr} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Islomov Abu Bakr</h5>
              <p className="card-job">UI/UX Designer</p>
              <p className="card-text cardText">
                Don't be afraid to give up the good to go for the great !
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.instagram.com/islomov_1404/?utm_source=qr">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://abubakrislomov98@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="@islomov_official">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card d-flex">
            <div className="image-div">
              <TriangleImg img={baxodir} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Ramazonov Baxodir</h5>
              <p className="card-job">Python Developer</p>
              <p className="card-text cardText">
                Without data you are just another person with an opinion
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.facebook.com/ramazonov_baxodir">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://boxa.developer@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="@998977971790">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="card">
            <div className="image-div">
              <TriangleImg img={humoyunmirzo} />
            </div>
            <div className="card-body cartBody">
              <h5 className="card-title cardTitle">Dolimov Khumoyunmirzo</h5>
              <p className="card-job">Web Developer</p>
              <p className="card-text cardText">
                I'm a believer in luck. I find the harder I work, the more I
                have it.
              </p>
            </div>
            <div className="row socialLinks">
              <div className="socialLink">
                <a href="https://www.instagram.com/dalimovin/">
                  <img src={insta} alt="insta" />
                </a>
              </div>
              <div className="socialLink">
                <a href="mailto://humodalim@gmail.com">
                  <img src={gmail} alt="gmail" />
                </a>
              </div>
              <div className="socialLink">
                <a href="https://t.me/dolimoov">
                  <img src={telegram2} alt="telegram2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
