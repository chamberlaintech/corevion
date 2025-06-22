import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { RiGithubLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer footer-padding">
      <div className="footer-left flex-center">
        <div className="footer-left-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-left-text flex-center">
          <p className="input-text">
            Core status: <span className="text-green">[ STABLE ]</span>
          </p>
          <div className="circle-green" />
        </div>
      </div>
      <div className="footer-center flex-center">
        <div className="footer-center-terminal">
          <p className="footer-text">
            {">"}_ run corevion-diagnostics<span className="underline">_</span>
          </p>
        </div>
      </div>
      <div className="footer-right flex-center">
        <div className="footer-right-links">
          <ul>
            <li className="input-text">
              <Link to="/">Home</Link>
            </li>
            <li className="input-text">
              <Link to="store">Store</Link>
            </li>
            <li className="input-text">
              <Link to="logs">Logs</Link>
            </li>
            <li className="input-text">
              <Link to="about">About</Link>
            </li>
            <li className="input-text">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-right-bottom flex-center">
          <div className="footer-right-bottom-logos flex-center">
            <RiGithubLine />
            <RiTwitterXLine />
            <RiDiscordLine />
          </div>
          <div className="footer-right-bottom-text">
            <p className="footer-text">
              User Authenticated: <span className="guest-text">GUEST</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
