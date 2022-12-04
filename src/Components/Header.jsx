import React, { useState } from "react";
import "./Header.css";
import logo from "../images/uduLogo.png";
import udus from "../icons/udus.png";
import search from "../icons/search.svg";
import hamburger from "../icons/Hamburger.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {/*MOBILE AND TABLET HEADER */}
      <header className="mobile-tablet-header f-c">
        <Link to="/">
          {" "}
          <div className="mobile-tablet-logo">
            <img src={logo} alt="logo" />
            <img src={udus} alt="logo" />
          </div>
        </Link>
        <div className="mobile-tablet-search-hamburger">
          <div className="mobile-tablet-search-div">
            <img src={search} alt="search" className="search-svg" />
            <p>Search</p>
          </div>
          <div className="mobile-tablet-hamburger-div" onClick={handleClick}>
            <img src={hamburger} alt="hamburger" />
            <p>Menu</p>
          </div>
        </div>
      </header>
      {show && (
        <div className="mobile-tablet-dropdown f-c">
          <nav className="mobile-tablet-upper-dropdown">
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
              <a href="#">Contact Us</a>
            </div>
            <button className="lower-dropdown-button">COVID-19</button>
          </nav>
        </div>
      )}

      {/*DESKTOP HEADER */}
      <div className="desktop-background a-c">
        <header className="desktop-header f-c">
          <div className="desktop-logo-uppernav">
            <Link to="/">
              <div className="desktop-logo">
                <img src={logo} alt="" />
                <img src={udus} alt="" />
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
