import React from "react";
import "./Funtwo.css";
import fun from "./Jhatpat-recipes/Fun.jpeg";
import fun1 from "./Jhatpat-recipes/fun.png";

const FunFusionWelcome = () => {
  return (
    <div className="fun-fusion-container">
      {/* Left Section */}
      <div className="text-section">
        <span className="tag">Explore & Innovate</span>
        <h1 className="title">Unleash Creativity with Fusion</h1>
        <p className="description">
          Step into a world where creativity knows no bounds. Discover innovative 
          blends of art, music, and technology that inspire and excite. Join us 
          in redefining the boundaries of fun and fusion!
        </p>
        <button className="cta-button">
          Begin Your Creative Journey
        </button>
      </div>

      {/* Right Section */}
      <div className="game-section">
        <svg 
          className="curved-ribbon" 
          viewBox="0 0 800 950" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#A0522D', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8B4513', stopOpacity: 0.9 }} />
            </linearGradient>
            <path
              id="curve"
              d="M 100,0 
                 C 150,200 150,300 150,400
                 S 150,600 300,700
                 S 600,750 800,600
                 S 900,300 900,0"
              fill="transparent"
            />
          </defs>
          <g className="ribbon-group">
            <path 
              d="M 100,0 
                 C 150,200 150,300 150,400
                 S 150,600 300,700
                 S 600,750 800,600
                 S 900,300 900,0"
              className="ribbon-path"
              stroke="url(#ribbonGradient)"
              strokeWidth="45"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="transparent"
            />
            <text className="ribbon-text">
              <textPath href="#curve" startOffset="50%" className="moving-text">
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="100%"
                  dur="20s"
                  repeatCount="indefinite"
                />
                Tu Chesse Badi hain Mast Mast • Badi Badi Baatein Aur Vada Pav Khaate • Pizza Abhi Baaki Hain Mere Dost • mere Sapno ki Biryani Kab Aayegi Tu  
              </textPath>
            </text>
          </g>
        </svg>
        <img src={fun1} alt="Fusion Art" className="overlay-image" />
      </div>
    </div>
  );
};

export default FunFusionWelcome;
