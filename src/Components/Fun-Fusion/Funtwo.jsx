import React from "react";
import "./Funtwo.css";

const FunFusionWelcome = () => {
  return (
    <div className="fun-fusion-container">
      {/* Left Section */}
      <div className="text-section">
        <span className="tag">Culinary Adventures</span>
        <h1 className="title">Discover the Art of Cooking</h1>
        <p className="description">
          Embark on a delightful journey through flavors and techniques. From traditional 
          recipes to modern fusion, explore the wonderful world of culinary arts with us. 
          Let's make every meal an adventure!
        </p>
        <button className="cta-button">
          Start Your Culinary Journey
        </button>
      </div>

      {/* Right Section */}
      <div className="game-section">
        {/* Enhanced Snake-like Curved Ribbon */}
        <svg className="curved-ribbon" viewBox="0 20 300 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B4513', stopOpacity: 1 }} />
            </linearGradient>
            <path
              id="curve"
              d="M 150,0 
                 C 250,100 50,200 150,300
                 C 250,400 50,500 150,600
                 C 250,700 50,800 150,800"
              fill="transparent"
            />
          </defs>
          <path 
            d="M 150,0 
               C 250,100 50,200 150,300
               C 250,400 50,500 150,600
               C 250,700 50,800 150,800" 
            className="ribbon-path"
          />
          <text className="ribbon-text">
            <textPath href="#curve" startOffset="50%">
              <animate
                attributeName="startOffset"
                from="100%"
                to="-100%"
                dur="20s"
                repeatCount="indefinite"
              />
              Taste the Magic • Cook with Love • Savor the Moments • 
              Taste the Magic • Cook with Love • Savor the Moments • 
              Taste the Magic • Cook with Love • Savor the Moments
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default FunFusionWelcome;
