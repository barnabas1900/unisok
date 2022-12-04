import React from "react";
import "./Joe.css";
import JoeImage from "../images/BGImage.jpg";
import passport from "../images/admissionPassport.png";
import arrowWhite from "../icons/arrow-right-white.svg";

const Joe = () => {
  window.addEventListener("scroll", () => {
    const backgroundImage = document.querySelector(".Joe-Image");
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
      ".Joe-background-image-content"
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
      <div className="Joe-Image-Container">
        <div className="Joe-background-image">
          <img src={JoeImage} alt="" className="Joe-Image" />
        </div>
        <div className="Joe-background-image-content">
          <img src={passport} alt="" className="passport-image" />
          <p className="medium">
            Ultrices cursus dui luctus ultricies porttitor porta. Facilisi amet
            tempus sit molestie. Semper sed rhoncus venenatis nulla sed ultrices
            quis maecenas fermentum. Ullamcorper rhoncus bibendum enim etiam
            gravida enim, tempor est fames. Et arcu, metus vitae quam hac vulput
          </p>
          <div className="Joe-content-name">
            <div className="Joe-names">
              <p className="medium">John Doe Adams</p>
              <p>John Doe Adams</p>
            </div>
            <div className="Joe-content-cta">
              <p className="bold">More</p>
              <img src={arrowWhite} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joe;
