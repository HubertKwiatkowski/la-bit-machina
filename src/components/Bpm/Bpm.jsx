import React, { useState } from "react";
import { Up, Down } from "../../icons";

import "./Bpm.css";

const Bpm = () => {
  const [bpm, setBpm] = useState(120);

  return (
    <div className="bpm-wrapper">
      <div className="controls">
        <div className="controls-btn"
          onClick={() => {
            setBpm(bpm + 1);
          }}
        >
          <Up />
        </div>
        <div
          onClick={() => {
            if (bpm <= 0) {
            } else setBpm(bpm - 1);
          }}
        >
          <Down />
        </div>
      </div>
      <div className="bpm-counter">
        <p>
          <span className="bpm-value">{bpm}</span> bpm
        </p>
      </div>
    </div>
  );
};

export default Bpm;
