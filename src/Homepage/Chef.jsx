// HeroSection.jsx
import React from "react";
import "./Chef.css";
import chefImage from "../Chef/chef.webp"; // Update with your actual image path

const HeroSection = () => {
  return (
    <section className="chef-section">
      {/* Left Content */}
      <div className="content-left">
        <h1>
          Enjoy Your <span className="highlight1">Delicious</span> Food{" "}
          <span className="emoji">🎁</span>
        </h1>
        <p>
        Delicious Discoveries Await!" Unleash your inner chef with recipes designed to inspire and delight. From simple everyday meals to creative culinary adventures, every dish is a journey of flavor and fun
        </p>
      
      </div>

      {/* Right Image with Floating Labels */}
      <div className="content-right">
        {/* Background Shape */}
        <div className="background-shape"></div>
        <div className="outer-circle"></div>
        <div className="chef-background"></div>
        <div className="decorative-line line-1"></div>
        <div className="decorative-line line-2"></div>
        {/* Chef Image */}
        <img src={chefImage} alt="Chef" className="chef-image" />

        {/* Floating Labels */}
        <div className="info-badge discount-badge">
          <p>
          Your Culinary Companion
          </p>
        </div>

        <div className="info-badge delivery-badge">
          <p>
          Quick, Easy, and Smart</p>
        </div>

        <div className="info-badge review-badge">
          <p>
            <strong>Happy Customer</strong>
            <br />
            ⭐ 4.9 (5095 reviews)
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
