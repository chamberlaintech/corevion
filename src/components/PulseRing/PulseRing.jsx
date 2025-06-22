import React from "react";
import "./PulseRing.css";

const PulseRing = () => (
  <div className="pulse-wrapper">
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      className="pulse-svg"
    >
      <defs>
        <filter
          id="blur"
          x="0"
          y="0"
          width="420"
          height="420"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur" />
        </filter>
      </defs>
      <g filter="url(#blur)">
        <circle cx="210" cy="210" r="160" className="pulse-ring-1" />
        <circle cx="210" cy="210" r="120" className="pulse-ring-2" />
        <circle cx="210" cy="210" r="80" className="pulse-ring-3" />
        <circle cx="210" cy="210" r="40" className="pulse-ring-4" />
        <circle cx="210" cy="210" r="20" className="pulse-ring-5" />
      </g>
    </svg>
  </div>
);

export default PulseRing;
