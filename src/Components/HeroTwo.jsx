import React from "react";
import "./HeroTwo.css";
import hero from "../images/admission-image3.jpg";
import whiteWorld from "../icons/world-white.svg";

const HeroTwo = () => {
  return (
    <>
      <section className="hero-two-div">
        <div className="hero-two-image-div">
          <img src={hero} alt="" />
        </div>
        <div className="hero-two-image-content">
          <div className="snippet">
            <img src={whiteWorld} alt="" />
            <p>Spotlight</p>
          </div>
          <div>
            <h1>
              The 3rd Edition of UDUS News Bulletin is out and can be accessed
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;
