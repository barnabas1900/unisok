import React, { useState } from "react";
import data from "../data/academic";
import "./Academic.css";
import ctaArrow from "../icons/purple-arrow.svg";

const Academic = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <div className="academic-container f-c">
        {/*ACADEMIC HEADER*/}
        <div className="academic-header">
          <h2>ACADEMICS</h2>
          <h6 className="medium">
            Preparing students to make meaningful contributions as engaged
            citizens and leaders in a complex world
          </h6>
        </div>

        {/*ACADEMIC CARDS*/}
        <div className="academics-card">
          {data.map((card, index) => {
            const { image, title, desc, cta } = card;

            return (
              <article className="academic-article">
                <figure>
                  <picture>
                    <a href="#">
                      <img src={image} alt="" className="academic-image" />
                    </a>
                  </picture>
                  <div className="academic-article-content">
                    <h6 className="h6-bold">{title}</h6>
                    <p>{desc}</p>
                    <div className="academics-cta">
                      <p className="bold">{cta}</p>
                      <img src={ctaArrow} alt="" className="ctaArrow" />
                    </div>
                  </div>
                </figure>
              </article>
            );
          })}
        </div>

        {/*SEVEN SCHOOLS*/}
        <div className="seven-schools-div">
          <h6 className="h6-bold">
            Seven schools in which to pursue your passions
          </h6>
          <div className="medium seven-schools-links">
            <a href="#">Medicine</a>
            <a href="#">Law</a>
            <a href="#">Humanities & Sciences</a>
            <a href="#">Arts</a>
            <a href="#">Health</a>
            <a href="#">Engineering</a>
            <a href="#">Business</a>
          </div>
          <button className="green-button bold f-c">More Academics</button>
        </div>
      </div>
    </>
  );
};

export default Academic;
