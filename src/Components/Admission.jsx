import React, { useState } from "react";
import data from "../data/admission";
import "./Admission.css";
import ctaArrow from "../icons/purple-arrow.svg";

const Academic = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <div className="admission-container f-c">
        {/*ACADEMIC HEADER*/}
        <div className="admission-header">
          <h2>ADMISSION</h2>
          <h6 className="medium">
            Preparing students to make meaningful contributions as engaged
            citizens and leaders in a complex world
          </h6>
        </div>

        {/*ACADEMIC CARDS*/}
        <div className="admission-card">
          {data.map((card, index) => {
            const { image, title, desc, cta } = card;

            return (
              <article className="admission-article">
                <figure>
                  <picture>
                    <a href="#">
                      <img src={image} alt="" className="admission-image" />
                    </a>
                  </picture>
                  <div className="admission-article-content">
                    <h6 className="h6-bold">{title}</h6>
                    <p>{desc}</p>
                    <div className="admission-cta">
                      <p className="bold">{cta}</p>
                      <img src={ctaArrow} alt="" className="ctaArrow" />
                    </div>
                  </div>
                </figure>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Academic;
