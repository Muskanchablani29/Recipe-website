import React from "react";
import "./ChallengeZone.css";
import fair from "../Image/fair.png";
import FunPlay from "../Image/dish.png";

export default function FunZone() {
  return (
    <div className="funzone-container">
      {/* Left Section (formerly Right): Fun Zone Description */}
      <div className="funzone-text">
        <h2 className="funzone-title">🔥 Welcome to the Fun Zone! 🔥</h2>
        <p className="funzone-description">
          Dive into the <strong>ultimate food adventure!</strong> 🎉 Spin the wheel to get a surprise dish,
          unlock the <strong>mystery box</strong> for a secret recipe, or take on the <strong>cooking challenge</strong>.
          Let's make cooking exciting and fun! 🍽️✨
        </p>
      </div>

      {/* Right Section (formerly Left): Chef with Dish on Plate */}
      <div className="funzone-image-wrapper">
        <img src={fair} alt="Chef Holding Plate" className="funzone-main-image" />
        <img src={FunPlay} alt="Dish on Plate" className="funzone-icon funzone-dish" />
      </div>
    </div>
  );
}
