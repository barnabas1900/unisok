import React, { useRef, useState } from "react";
import "./NewsPageHeader.css";
import logo from "../icons/logo.svg";
import search from "../icons/search.svg";
import { Link } from "react-router-dom";
import closeButton from "../icons/close-btn.svg";
import Hamburger from "../icons/Hamburger.svg";

const NewsPageHeader = () => {
  const [show, setShow] = useState({ display: "none" });
  const navRef = useRef();

  const handleClick = () => {
    navRef.current.classList.toggle("responsive-nav");
    setShow(!show);
  };

  return (
    <>
      {/*MOBILE AND TABLET HEADER */}
      <header className="mobile-tablet-header-newspage f-c">
        <Link to="/">
          <div className="mobile-tablet-logo-newspage">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <nav ref={navRef} className="mobile-tablet-search-close-newspage">
          <nav className="mobile-tablet-navbar-newspage">
            <div className="search-close-div-newspage">
              <div className="mobile-tablet-search-div-newspage">
                <img src={search} alt="search" className="search-svg" />
                <p>Search</p>
              </div>
              <div
                className="mobile-tablet-close-div-newspage"
                onClick={handleClick}
              >
                <img src={closeButton} alt="close" />
                <p>Close</p>
              </div>
            </div>

            <div className="mobile-tablet-dropdown-newspage f-c">
              <nav className="mobile-tablet-upper-dropdown-newspage">
                <Link to="/newspage" className="mobile-tablet-link-newspage">
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
              <nav className="mobile-tablet-lower-dropdown-newspage">
                <p>For More Information:</p>
                <div className="lower-dropdown-nav-newspage">
                  <a href="#">UDUS SIS</a>
                  <a href="#">Donations</a>
                  <a href="#">Family</a>
                  <a href="#">Scholarships</a>
                  <a href="#">Contact-Us</a>
                </div>
                <button className="lower-dropdown-button-newspage">
                  COVID-19
                </button>
              </nav>
            </div>
          </nav>
        </nav>
        {show && (
          <div className="search-hamburger-div-newspage">
            <div className="mobile-tablet-searchtwo-div-newspage">
              <img src={search} alt="search" className="search2-svg" />
              <p>Search</p>
            </div>
            <div
              className="mobile-tablet-hambuger-div-newspage"
              onClick={handleClick}
            >
              <img src={Hamburger} alt="hamburger" />
              <p>Menu</p>
            </div>
          </div>
        )}
      </header>

      {/*DESKTOP HEADER */}
      <div className="hero-background-two-newspage"></div>
      <div className="desktop-background-newspage a-c">
        <header className="desktop-header-newspage f-c">
          <div className="desktop-logo-uppernav-newspage">
            <Link to="/">
              <div className="desktop-logo-newspage">
                <img src={logo} alt="" />
              </div>
            </Link>
            <nav className="upper-nav-newspage">
              <a href="#">Administration</a>
              <a href="#">UDUS Mail</a>
              <a href="#">Alumni</a>
              <a href="#">OER</a>
              <a href="#">UDUS LMS</a>
              <a href="#">UDUS SIS</a>
              <a href="#">Donations</a>
              <div className="search-div-newspage">
                <img src={search} alt="" />
                <a href="#">Search</a>
              </div>
            </nav>
          </div>
          <nav className="lower-nav-newspage">
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

export default NewsPageHeader;
