import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="f-c error-page-div">
      <span className="error-header">Oops!</span>
      <span className="page-not-found">404-PAGE NOT FOUND</span>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable
      </p>
      <Link to="/">
        <button className="error-button bold">RETURN TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
