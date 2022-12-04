import React from "react";
import "./Prof.css";
import BGImageTwo from "../images/BGImageTwo.jpg";
import passport from "../images/admissionPassport.png";
import arrowWhite from "../icons/arrow-right-white.svg";

const Prof = () => {
  window.addEventListener("scroll", () => {
    const backgroundImage = document.querySelector(".Prof-Image");
    const backgroundImagePosition = backgroundImage.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (backgroundImagePosition < screenPosition) {
      backgroundImage.classList.add("blur");
    } else {
      backgroundImage.classList.remove("blur");
    }
  });

  window.addEventListener("scroll", () => {
    const imageContent = document.querySelector(
      ".Prof-background-image-content"
    );
    const imageContentPosition = imageContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (imageContentPosition < screenPosition) {
      imageContent.classList.add("opacity");
    } else {
      imageContent.classList.remove("opacity");
    }
  });
  return (
    <>
      <div className="Prof-image-container">
        <div className="Prof-background-image">
          <img src={BGImageTwo} alt="" className="Prof-Image" />
        </div>
        <div className="Prof-background-image-content">
          <img src={passport} alt="" className="passport-image" />
          <p className="medium">
            The Usmanu Danfodiyo University, Sokoto (formerly University of
            Sokoto) is one of the four Universities established by the Federal
            Government of Nigeria in September 1975 , at which time three
            University Colleges (now full-fledged Universities) were
            established.
          </p>
          <div className="Prof-content-name">
            <div className="Prof-names">
              <p className="medium">Prof. L.S Bilbis </p>
              <p>Vice Chancellor & Chairman</p>
            </div>
            <div className="Prof-content-cta">
              <p className="bold">More</p>
              <img src={arrowWhite} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prof;
