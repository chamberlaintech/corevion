import React from "react";
import "./Capabilities.css";
import { capabilities } from "../../constants/data";
import CapCard from "../CapCard/CapCard";

const Capabilities = () => {
  return (
    <div className="capabilities section-padding flex-center">
      <div className="capabilities-heading">
        <h2 className="h2-text">Core Capabilities</h2>
        <p className="subheading-text">
          Explore the revolutionary features that make Corevion the pinnacle of
          next-generation energy systems
        </p>
      </div>
      <div className="capabilities-content flex-center">
        {capabilities.map((cap, index) => {
          return (
            <CapCard
              key={index}
              icon={cap.icon}
              title={cap.title}
              text={cap.text}
              iconColor={cap.iconColor}
              borderColor={cap.borderColor}
              shadow={cap.shadow}
              hoverShadow={cap.hoverShadow}
              scale={cap.scale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Capabilities;
