import React, { useState } from "react";
import "./Technology.css";
import PulseRing from "../PulseRing/PulseRing";
import shell from "../../assets/Shell.png";
import stabilizer from "../../assets/stabilizer.png";

const Technology = () => {
  const [decrypted, setDecrypted] = useState(false);

  const handleDecrypt = () => {
    setDecrypted(true);
  };

  return (
    <div className="technology section-padding flex-center">
      <div className="technology-heading">
        <h2 className="h2-text">The Technology They Tried to Bury</h2>
        <p className="subheading-text">
          Explore the hidden architecture of the Corevion Singularity Engine
        </p>
      </div>
      <div className="technology-content flex-center">
        <div className="technology-reactor">
          <div className="technology-reactor-image">
            <PulseRing />
          </div>
          <div className="technology-reactor-text">
            <h4 className="h4-text">CORE PULSE REACTOR</h4>
            <p className="body-text">
              Generates undampened quantum energy surges at 13.6Hz, stabilized
              via synthetic flux rings
            </p>
          </div>
        </div>
        <div className="technology-shell flex-center">
          <div className="technology-shell-left">
            <h6 className="h6-text">AI NODE-12</h6>
            <h6 className="h6-text">FLEX POINT: ACTIVE</h6>
          </div>
          <div className="technology-shell-img">
            <img src={shell} alt="shell" />
          </div>
          <div className="technology-shell-right">
            <h6 className="h6-text">RING STABILITY: OK</h6>
            <h6 className="h6-text">FIELD TEMP: 207K</h6>
          </div>
        </div>
        <div className="technology-stabilizer">
          <div className="technology-stabilizer-text">
            <h4 className="h4-text">Q-STABILIZER NODE GRID</h4>
            <p className="body-text">
              Auto-recalibrates atomic distortions with 99.9993% accuracy.
              Requires no external input
            </p>
          </div>
          <div className="technology-stabilizer-img">
            <img src={stabilizer} alt="" />
          </div>
        </div>
        <div className="technology-terminal flex-center">
          <div className="technolgy-terminal-container">
            <div className="technology-terminal-upper">
              <div className="technology-terminal-upper-dots">
                <div className="dot1" />
                <div className="dot2" />
                <div className="dot3" />
              </div>
              <div className="technology-terminal-upper-text">
                <p className="label-text">Terminal log</p>
              </div>
            </div>
            <div className="technology-terminal-lower">
              <div className="technology-terminal-lower-text">
                <p className="terminal-text">
                  Log #728-B: “Stabilization exceeded all simulations. This
                  changes everything.”
                </p>
                <p className="terminal-text">
                  Log #729:{" "}
                  <span className="redacted-pulse-red">[REDACTED]</span> has
                  authorized field testin has authorized field testing in Sector
                  3X.
                </p>
                {decrypted && (
                  <p className="terminal-text revealed-text">
                    REVEALED: Field data confirms breach of dimensional
                    threshold.
                  </p>
                )}
              </div>
              {!decrypted && (
                <div className="technology-terminal-lower-button">
                  <button className="input-text" onClick={handleDecrypt}>
                    {">>"} DECRYPT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
