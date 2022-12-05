import React, { useRef, useState } from "react";
import "./Header.css";
import logo from "../icons/logo.svg";
import search from "../icons/search.svg";
import { Link } from "react-router-dom";
import closeButton from "../icons/close-btn.svg";
import Hamburger from "../icons/Hamburger.svg";

const Header = () => {
  const [show, setShow] = useState({ display: "none" });
  const navRef = useRef();

  const handleClick = () => {
    navRef.current.classList.toggle("responsive-nav");
    setShow(!show);
  };

  return (
    <>
      {/*MOBILE AND TABLET HEADER */}
      <header className="mobile-tablet-header f-c">
        <Link to="/">
          <div className="mobile-tablet-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <nav ref={navRef} className="mobile-tablet-search-close">
          <nav className="mobile-tablet-navbar">
            <div className="search-close-div">
              <div className="mobile-tablet-search-div">
                <img src={search} alt="search" className="search-svg" />
                <p>Search</p>
              </div>
              <div className="mobile-tablet-close-div" onClick={handleClick}>
                <img src={closeButton} alt="close" />
                <p>Close</p>
              </div>
            </div>

            <div className="mobile-tablet-dropdown f-c">
              <nav className="mobile-tablet-upper-dropdown">
                <Link to="/newspage" className="mobile-tablet-link">
                  <a
                    href="#"
                    className="link"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    News
                  </a>
                </Link>
                <a href="#">Bulletin</a>
                <a href="#">Research</a>
                <a href="#">Journals</a>
                <a href="#">Academics</a>
                <a href="#">Admissions</a>
                <a href="#">TetFund</a>
                <a href="#">About</a>
                <a href="#">Administration</a>
                <a href="#">OER</a>
                <a href="#">Alumni</a>
                <a href="#">UDUS LMS</a>
              </nav>
              <nav className="mobile-tablet-lower-dropdown">
                <p>For More Information:</p>
                <div className="lower-dropdown-nav">
                  <a href="#">UDUS SIS</a>
                  <a href="#">Donations</a>
                  <a href="#">Family</a>
                  <a href="#">Scholarships</a>
                  <a href="#">Contact-Us</a>
                </div>
                <button className="lower-dropdown-button">COVID-19</button>
              </nav>
            </div>
          </nav>
        </nav>
        {show && (
          <div className="search-hamburger-div">
            <div className="mobile-tablet-search2-div">
              <img src={search} alt="search" className="search2-svg" />
              <p>Search</p>
            </div>
            <div className="mobile-tablet-hambuger-div" onClick={handleClick}>
              <img src={Hamburger} alt="hamburger" />
              <p>Menu</p>
            </div>
          </div>
        )}
      </header>

      {/*DESKTOP HEADER */}
      <div className="desktop-background a-c">
        <header className="desktop-header f-c">
          <div className="desktop-logo-uppernav">
            <Link to="/">
              <div className="desktop-logo">
                <img src={logo} alt="" />
              </div>
            </Link>
            <nav className="upper-nav">
              <a href="#">Administration</a>
              <a href="#">UDUS Mail</a>
              <a href="#">Alumni</a>
              <a href="#">OER</a>
              <a href="#">UDUS LMS</a>
              <a href="#">UDUS SIS</a>
              <a href="#">Donations</a>
              <div className="search-div">
                <img src={search} alt="" />
                <a href="#">Search</a>
              </div>
            </nav>
          </div>
          <nav className="lower-nav">
            <Link to="/newspage">
              <a href="#">News</a>
            </Link>
            <a href="#">Bulletin</a>
            <a href="#">Research</a>
            <a href="#">Journals</a>
            <a href="#">Academics</a>
            <a href="#">Admissions</a>
            <a href="#">TetFund</a>
            <a href="#">About</a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
