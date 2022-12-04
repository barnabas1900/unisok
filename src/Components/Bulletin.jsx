import React from "react";
import data from "../data/bulletin";
import "./Bulletin.css";
import purpleArrow from "../icons/purple-arrow.svg";

const Bulletin = () => {
  return (
    <>
      <div className="bulletin-container f-c">
        {/*BULLETIN HEADER*/}
        <div className="bulletin-header">
          <h2>BULLETINS</h2>
          <h6 className="medium">
            Download and read the official bulletin of the university
          </h6>
        </div>

        {/*BULLETIN CARDS*/}
        <div className="bulletin-cards">
          {data.map((card, index) => {
            const {
              image,
              udus,
              category,
              issue,
              logo,
              logoText,
              date,
              cta,
              ctaArrow,
            } = card;

            return (
              <article className="bulletin-article">
                <figure className="bulletin-figure">
                  <picture>
                    <a href="#">
                      <div className="bulletin-image-div">
                        <img src={image} alt="" className="bulletin-image" />
                      </div>
                    </a>
                  </picture>
                  <div className="bulletin-content">
                    <img src={udus} alt="" className="first-logo" />
                    <p className="uppercase">{category}</p>
                    <hr className="bulletin-hr" />
                    <p className="small bulletin-issue">{issue}</p>
                  </div>
                  <div className="bulletin-card-content">
                    <div className="logo-logoText">
                      <img src={logo} alt="" />
                      <img src={logoText} alt="" />
                    </div>
                    <p className="uppercase bulletin-date">{date}</p>
                    <div className="bulletin-cta">
                      <p className="bold">{cta}</p>
                      <img src={purpleArrow} alt="" />
                    </div>
                  </div>
                </figure>
              </article>
            );
          })}
        </div>

        {/*BULLETIN BUTTON*/}
        <button className="dark-button bold f-c bulletin-button">
          More Bulletins
        </button>
      </div>
    </>
  );
};

export default Bulletin;
