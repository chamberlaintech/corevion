import React from "react";
import "./StandardCard.css";

const StandardCard = ({ data }) => {
  return (
    <div className="standard-card">
      <h6 className="h6-text">STANDARD POWER UNITS</h6>
      <ul className="standard-list">
        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <li className="standard-item">
                <div className="standard-left">
                  <span className="cardmenu-text standard-left-label">
                    {item.label}
                  </span>
                </div>
                <div className="standard-right">
                  <span className="mediumbody-text standard-right-value">
                    {item.standard}
                  </span>
                </div>
              </li>
              {index < data.length - 1 && (
                <div className="standard-card-divider" />
              )}
            </React.Fragment>
          );
        })}
        <div className="standard-card-divider" />
      </ul>
    </div>
  );
};

export default StandardCard;
