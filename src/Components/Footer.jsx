import React, { useState } from "react";
import "./Footer.css";
import uduLogo from "../icons/uduLogo.svg";
import udus from "../icons/udus.svg";
import data from "../data/footer";
import { Link } from "react-router-dom";

const Footer = () => {
  const [cards, setCards] = useState(data);
  return (
    <div className="a-c footer-container">
      <section className="footer-section f-c">
        <Link to="/">
          <div className="footer-logo">
            <img src={uduLogo} alt="" />
            <img src={udus} alt="" />
          </div>
        </Link>

        <div className="footer-grid">
          {cards.map((card) => {
            const { id, heading, links } = card;

            return (
              <article key={id} className="footer-links">
                <p className="bolder-dark">{heading}</p>
                {links.map((link) => {
                  return (
                    <a key={links} href="">
                      {link}
                    </a>
                  );
                })}
              </article>
            );
          })}
        </div>
      </section>
      <div className="footer-snippets-container">
        <div className="footer-snippets f-c">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Non-Discrimination</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
