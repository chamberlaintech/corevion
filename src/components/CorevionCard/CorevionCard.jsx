import React from "react";
import "./CorevionCard.css";

const CorevionCard = ({ data }) => {
  return (
    <div className="corevion-card">
      <h6 className="h6-text">COREVION</h6>
      <ul className="corevion-list">
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li className="corevion-item">
                <div className="corevion-left">
                  <span className="cardmenu-text corevion-left-label">
                    {item.label}
                  </span>
                </div>
                <div className="corevion-right">
                  <span className="boldbody-text corevion-right-value">
                    {item.corevion}
                  </span>
                </div>
              </li>
              {index < data.length - 1 && (
                <div className="corevion-card-divider" />
              )}
            </React.Fragment>
          );
        })}
        <div className="corevion-card-divider" />
      </ul>
    </div>
  );
};

export default CorevionCard;
