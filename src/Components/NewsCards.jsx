import React, { useState } from "react";
import "./NewsCards.css";
import data from "../data/newscards";
import { Link } from "react-router-dom";
import worldGreen from "../icons/world-green.svg";

const NewsCards = () => {
  const [cards, setCards] = useState(data);
  const [noOfCards, setNoOfCards] = useState(12);

  const loadMore = () => {
    setNoOfCards(noOfCards + 4);
  };

  const sliced = data.slice(0, noOfCards);
  return (
    <>
      <div className="newsCards-container">
        <div className="grid-cards f-c">
          {sliced.map((card, index) => {
            const { logoText, title, image, date } = card;

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
                        <img src={worldGreen} alt="" />
                        <p className="bold logotext dark">{logoText}</p>
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
