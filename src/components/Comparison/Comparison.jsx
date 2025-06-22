import React from "react";
import "./Comparison.css";
import { comparison } from "../../constants/data";
import CorevionCard from "../CorevionCard/CorevionCard";
import StandardCard from "../StandardCard/StandardCard";

const Comparison = () => {
  return (
    <div className="comparison section-padding flex-center">
      <div className="comparison-heading">
        <h2 className="h2-text">Engineered to Eclipse Everything</h2>
        <p className="subheading-text">
          Compare the unmatched capabilities of COREVION with outdated energy
          units and see the future unfold
        </p>
      </div>
      <div className="comparison-content flex-center">
        <CorevionCard data={comparison} />
        <StandardCard data={comparison} />
      </div>
    </div>
  );
};

export default Comparison;
