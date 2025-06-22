import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero-padding flex-center hero">
      <div className="hero-text flex-center">
        <h1 className="h1-text">UNLOCK THE INFINITE</h1>
        <p className="subheading-text">
          The world’s first contained energy singularity
        </p>
        <div className="hero-buttons">
          <Link to="/about">
            <button className="primary-button">Discvover the Core</button>
          </Link>
          <Link to="/store">
            <button className="secondary-button">Secure One</button>
          </Link>
        </div>
      </div>
      <div className="hero-image flex-center">
        <img src={hero} alt="hero" />
      </div>
      <div className="hero-details">
        <h6 className="h6-text">Quantum Diagnostics: STABLE</h6>
        <div className="line" />
        <h6 className="h6-text">Containment Integrity: 99.87%</h6>
      </div>
    </div>
  );
};

export default Hero;
