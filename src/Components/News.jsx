import React, { useState } from "react";
import "./News.css";
import data from "../data/news";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import news4 from "../images/news4.jpg";
import news5 from "../images/news5.jpg";
import hero from "../images/hero.jpg";
import greenWorldIcon from "../icons/world-green.svg";
import whiteWorldIcon from "../icons/world-white.svg";
import { Link } from "react-router-dom";

const News = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <section className="news-container">
        {/*MOBILE HEADER*/}
        <div className="news-header f-c">
          <h2>NEWS & EVENTS</h2>
          <h6 className="medium">
            Stories about people, research and innovation across the School
          </h6>
        </div>
        {/*MOBILE AND TABLET CARDS*/}
        <div className="mobile-news-cards f-c">
          {cards.map((card, index) => {
            const { image, logoText, title } = card;
            return (
              <article>
                <picture className="news-picture">
                  <a href="#">
                    <div className="article-image-div">
                      <img src={image} alt="" className="mobile-news-image" />
                    </div>
                  </a>
                </picture>
                <figure>
                  <div className="mobile-card-logo">
                    <img src={greenWorldIcon} alt="" />
                    <p className="bold">{logoText}</p>
                  </div>
                  <p className="bolder-dark">{title}</p>
                  <p className="mobile-date small">Friday, March 25th, 2022</p>
                </figure>
              </article>
            );
          })}
        </div>

        {/*DESKTOP CARDS*/}
        <div className="tablet-desktop-cards f-c">
          {/*1*/}
          <article>
            <Link to="/newsarticle">
              {" "}
              <figure>
                <picture>
                  <a href="">
                    <div className="desktop-image-div">
                      <img src={news1} alt="" />
                    </div>
                  </a>
                </picture>
                <div className="news-Card-content">
                  <div className="tablet-desktop-logo">
                    <img src={whiteWorldIcon} alt="" />
                    <p>Spotlight</p>
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
              <figure className="other-figure-div">
                <picture>
                  <a href="">
                    <div className="other-image-div">
                      <img src={news2} alt="" className="other-images" />
                    </div>
                  </a>
                </picture>
                <div className="news-card-content">
                  <div className="tablet-desktop-logo">
                    <img src={greenWorldIcon} alt="" />
                    <p className="bold">Events</p>
                  </div>
                  <p className="bolder-dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </p>
                  <p className="tablet-desktop-date small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
          {/*3*/}
          <article>
            <Link to="/newsarticle">
              <figure>
                <picture>
                  <a href="">
                    <div className="other-image-div">
                      <img src={news3} alt="" className="other-images" />
                    </div>
                  </a>
                </picture>
                <div className="news-card-content">
                  <div className="tablet-desktop-logo">
                    <img src={greenWorldIcon} alt="" />
                    <p className="bold">Events</p>
                  </div>
                  <p className="bolder-dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </p>
                  <p className="tablet-desktop-date small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
          {/*4*/}
          <article>
            <Link to="/newsarticle">
              <figure>
                <picture>
                  <a href="">
                    <div className="other-image-div">
                      <img src={news4} alt="" className="other-images" />
                    </div>
                  </a>
                </picture>
                <div className="news-card-content">
                  <div className="tablet-desktop-logo">
                    <img src={greenWorldIcon} alt="" />
                    <p className="bold">Events</p>
                  </div>
                  <p className="bolder-dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </p>
                  <p className="tablet-desktop-date small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
          {/*5*/}
          <article>
            <Link to="/newsarticle">
              {" "}
              <figure>
                <picture>
                  <a href="">
                    <div className="other-image-div">
                      <img src={news5} alt="" className="other-images" />
                    </div>
                  </a>
                </picture>
                <div className="news-card-content">
                  <div className="tablet-desktop-logo">
                    <img src={greenWorldIcon} alt="" />
                    <p className="bold">Events</p>
                  </div>
                  <p className="bolder-dark">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </p>
                  <p className="tablet-desktop-date small">
                    Friday, March 25th, 2022
                  </p>
                </div>
              </figure>
            </Link>
          </article>
          {/*6*/}
          <article>
            <Link to="/newsarticle">
              <figure>
                <picture>
                  <a href="">
                    <div className="desktop-image-div">
                      <img src={hero} alt="" />
                    </div>
                  </a>
                </picture>
                <div className="news-Card-content">
                  <div className="tablet-desktop-logo">
                    <img src={whiteWorldIcon} alt="" />
                    <p>Spotlight</p>
                  </div>
                  <h6 className="h6-bold">
                    The 3rd Edition of UDUS News Bulletin is out and can be
                    accessed
                  </h6>
                </div>
              </figure>
            </Link>
          </article>
        </div>

        <div className="dark-button news-button bold f-c">Read More</div>
      </section>
    </>
  );
};

export default News;
