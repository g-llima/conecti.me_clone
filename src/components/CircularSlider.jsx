import React, { useState, useEffect, useRef } from "react";
import "./styles/CircularSlider.css";

function CircularSlider({ value = 50 }) {
  const [innerValue, setInnerValue] = useState(1);
  const [loadAnimation, setLoadAnimation] = useState(0);

  window.addEventListener("scroll", () => {
    setLoadAnimation(window.scrollY);
  });


  useEffect(() => {
    if (loadAnimation >= 2300) {
      setTimeout(() => {
        if (innerValue < value) {
          setInnerValue(innerValue + 1);
        }
      }, 20);
    }

  }, [innerValue, loadAnimation]);

  return (
    <div>
      <div className="circularSlider__circle">
        <div className="circularSlider__circle__outer">
          <div className="circularSlider__circle__outer__inner">
            <div id="circularSliderNum">{innerValue}</div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          className="circularSlider__svg"
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
            style={{ strokeDashoffset: 505 - 472 * (innerValue / 100) }}
          />
        </svg>
      </div>
    </div>
  );
}

export default CircularSlider;
