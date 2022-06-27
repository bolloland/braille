import React from "react";
import "../styles/braille-container.css";
import "../images/blackdot.PNG";
import { useState } from "react";
import letters from "../braille-data/seed";
import { DOT_DATA } from "../constants";

const BrailleContainer = () => {
  const [dots, setDots] = useState(DOT_DATA);

  const switchColor = (dot) => {
    let newDots = [...dots];
    let newDot;

    if (!dot.value) {
      newDot = {
        name: dot.name,
        value: true,
        text: "blue",
      };
    } else {
      newDot = {
        name: dot.name,
        value: false,
        text: "black",
      };
    }

    const idx = dots.indexOf(dot);
    newDots.splice(idx, 1, newDot);
    setDots(newDots);
  };

  return (
    <div className="braille-container">
      {dots &&
        dots.map((dot) => {
          return (
            <button
              key={dot.name}
              className="dot"
              value={dot.value}
              onClick={() => switchColor(dot)}
            >
              {dot.text}
            </button>
          );
        })}
    </div>
  );
};

export default BrailleContainer;
