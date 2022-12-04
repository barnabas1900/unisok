import React, { useState } from "react";
import "./Research.css";
import data from "../data/research";
import institute from "../icons/institute.svg";
import library from "../icons/library.svg";
import money from "../icons/money-bag.svg";

const Research = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <div className="research-container f-c">
        {/*RESEARCH HEADER*/}
        <div className="research-header">
          <h2>RESEARCH</h2>
          <h6 className="medium">
            Driving discoveries vital to our world, our health, and our
            intellectual life
          </h6>
        </div>
        {/*RESEARCH POINTS*/}
        <div className="research-points">
          <hr className="hr" />
          <div className="research-point">
            <img src={institute} alt="" />
            <h5>INSTITUTE</h5>
            <p className="medium">Cross Disciplinary Boundaries</p>
          </div>
          <div className="research-point">
            <img src={library} alt="" />
            <h5>12 LIBRARIES</h5>
            <p className="medium">Cross Disciplinary Boundaries</p>
          </div>
          <div className="research-point">
            <img src={money} alt="" />
            <h5>$1.69 BILLION</h5>
            <p className="medium">Cross Disciplinary Boundaries</p>
          </div>
          <hr className="hr" />
        </div>
        {/*RESEARCH CARDS*/}
        <div className="research-cards">
          {cards.map((card, index) => {
            const { image, category, title } = card;

            return (
              <article key={index} className="research-article">
                <figure>
                  <picture className="research-picture">
                    <a href="#">
                      <div className="research-image-div">
                        <img
                          src={image}
                          alt=""
                          className="research-card-image"
                        />
                      </div>
                    </a>
                  </picture>
                  <div className="research-content">
                    <p className="small">{category}</p>
                    <h6 className="bolder-dark">{title}</h6>
                  </div>
                </figure>
              </article>
            );
          })}
        </div>
        <button className="dark-button bold research-button f-c">
          More About Research
        </button>
      </div>
    </>
  );
};

export default Research;
