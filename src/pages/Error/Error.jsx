import React from "react";
import "./Error.css";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="error section-padding flex-center">
      <div className="error-heading">
        <h2 className="h2-text">ERROR 404</h2>
        <p className="subheading-text">Core signal not found</p>
      </div>
      <div className="error-button">
        <Link to="/">
          <button className="primary-button">Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
