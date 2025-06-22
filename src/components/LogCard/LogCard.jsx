import React from "react";
import "./LogCard.css";

const LogCard = ({ date, title, text, button }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "STABLE":
        return "log-button stable-pulse";
      case "ALERT":
        return "log-button alert-pulse";
      case "TESTING":
        return "log-button testing-pulse";
      case "REDACTED":
        return "log-button redacted-pulse";
      default:
        return "log-button";
    }
  };

  return (
    <div className="logcard">
      <div className="logcard-heading">
        <p className="footer-text">{date}</p>
        <h6 className="boldbody-text">{title}</h6>
      </div>
      <div className="logcard-text">
        <p className="terminal-text" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      </div>
      <div className="logcard-button">
        <p className={getStatusClass(button)}>{button}</p>
      </div>
    </div>
  );
};

export default LogCard;
