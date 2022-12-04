import React, { useState } from "react";
import "./NewsCards.css";
import data from "../data/newscards";
import { Link } from "react-router-dom";
import admission1 from "../images/admission-image1.jpg";
import admission2 from "../images/admission-image2.jpg";
import admission3 from "../images/admission-image3.jpg";
import whiteWorld from "../icons/world-white.svg";
import worldGreen from "../icons/world-green.svg";

const NewsCards = () => {
  const [cards, setCards] = useState(data);
  const [noOfCards, setNoOfCards] = useState(4);

  const loadMore = () => {
    setNoOfCards(noOfCards + 4);
  };

  const sliced = data.slice(0, noOfCards);
  return (
    <>
      <div className="newsCards-container">
        <div className="newsCards-header a-c">
          <h2>NEWS & EVENTS</h2>
          <h6 className="medium">
            Stories about people, research and innovation across the School
          </h6>
        </div>
        <div className="top-cards f-c">
          {/*1*/}
          <article>
            <Link to="/newsarticle">
              <figure>
                <picture>
                  <a href="">
                    <img src={admission1} alt="" className="first-image" />
                  </a>
                </picture>
                <div className="first-card">
                  <div className="first-card-tablet-desktop-logo">
                    <img src={whiteWorld} alt="" />
                    <p className="white bold">Events</p>
                  </div>
                  <h6 className="h6-bold">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </h6>
                </div>
              </figure>
            </Link>
          </article>
          {/*2*/}
          <article>
            <Link to="/newsarticle">
              <figure>
                <picture>
                  <a href="">
                    <img
                      src={admission2}
                      alt=""
                      className="other-cards-image"
                    />
                  </a>
                </picture>
                <div className="newsCard-content">
                  <div className="tablet-desktop-logo">
                    <img src={worldGreen} alt="" />
                    <p>Events</p>
                  </div>
                  <h6 className="h6-bold dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </h6>
                  <p className="tablet-desktop-date dark small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
          {/*3*/}
          <article>
            <Link to="/newsarticle">
              {" "}
              <figure>
                <picture>
                  <a href="">
                    <img
                      src={admission3}
                      alt=""
                      className="other-cards-image"
                    />
                  </a>
                </picture>
                <div className="newsCard-content">
                  <div className="tablet-desktop-logo">
                    <img src={worldGreen} alt="" />
                    <p>Events</p>
                  </div>
                  <h6 className="h6-bold dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </h6>
                  <p className="tablet-desktop-date dark small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
        </div>
        <div className="grid-cards f-c">
          {sliced.map((card, index) => {
            const { logo, logoText, title, image, date } = card;

            return (
              <article key={index} className="newsCards-article">
                <Link to="/newsarticle">
                  {" "}
                  <figure>
                    <picture>
                      <a href="#">
                        <div className="newsCards-image-div">
                          <img src={image} alt="" className="newsCard-image" />
                        </div>
                      </a>
                    </picture>
                    <div className="grid-card-content">
                      <div className="grid-card-logo">
                        <img src={logo} alt="" />
                        <p className="bold logotext">{logoText}</p>
                      </div>
                      <h6 className="medium dark">{title}</h6>
                      <p className="small dark">{date}</p>
                    </div>
                  </figure>
                </Link>
              </article>
            );
          })}
        </div>
        <button
          className="dark-button bold f-c newsCard-button"
          onClick={loadMore}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default NewsCards;
