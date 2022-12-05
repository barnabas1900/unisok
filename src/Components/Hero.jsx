import React from "react";
import "./Hero.css";
import hero from "../images/hero.jpg";
import caret from "../icons/caret.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
        <div className="image-content">
          <h1>WELCOME TO USMANU DANFODIYO UNIVERSITY SOKOTO.</h1>
          <p className="medium">The most peaceful university in Nigeria</p>
        </div>
        <a href="">
          <div className="learn-more-div">
            <p className="bolder-white">Learn More</p>
            <img src={caret} alt="" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Hero;
