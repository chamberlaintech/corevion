import React, { useState } from "react";
import "./CapCard.css";

const CapCard = ({
  icon: Icon,
  title,
  text,
  iconColor,
  borderColor,
  shadow,
  hoverShadow,
  scale,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cap-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: `2px solid ${borderColor}`,
        boxShadow: isHovered ? hoverShadow : shadow,
        transform: isHovered ? `scale(${scale})` : "scale(1)",
        transition:
          "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "transform, box-shadow",
      }}
    >
      <div className="cap-card-content">
        <div className="content-icon">
          <Icon
            className="icon"
            style={{
              color: iconColor,
              transition: "color 0.3s ease",
            }}
          />
        </div>
        <div className="content-text">
          <h5 className="h5-text">{title}</h5>
          <p className="body-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CapCard;
