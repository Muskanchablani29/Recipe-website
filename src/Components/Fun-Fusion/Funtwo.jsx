import React from "react";
import "./Funtwo.css";
import fun from "./Jhatpat-recipes/Fun.jpeg";
import fun1 from "./Jhatpat-recipes/fun.png";

const FunFusionWelcome = () => {
  return (
    <div className="fun-fusion-container">
      {/* Left Section */}
      <div className="text-section-muskan">
        <span className="tag-muskan">Quick & Delicious</span>
        <h1 className="title-fun-fusion-muskan">Welcome to the Fun and Fusion Zone!</h1>
        <p className="description">
        Step into a world where flavors collide and creativity knows no bounds. This is your go-to space for exploring the unexpected and embracing the joy of cooking. Whether you're a culinary adventurer or just looking to spice up your routine, we've got something special for everyone!
        </p>
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
              <stop offset="0%" style={{ stopColor: '#F7931E', stopOpacity: 0.9 }} />
              <stop offset="50%" style={{ stopColor: '#F7931E', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F7931e', stopOpacity: 0.9 }} />
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
              <textPath 
                href="#curve" 
                startOffset="0%" 
                dy="-10"
                className="moving-text"
                style={{ 
                  fontSize: "32px",
                  fontWeight: "bold",
                  fill: "#ffffff",
                  textAnchor: "middle",
                  dominantBaseline: "middle",
                  letterSpacing: "2px"
                }}
              >
                <animate
                  attributeName="startOffset"
                  from="100%"
                  to="-100%"
                  dur="30s"
                  repeatCount="indefinite"
                />
                • Badi Badi Baatein Aur Vada Pav Khaate • Mere Sapno ki Biryani Kab Aayegi Tu • Tu Chesse Badi Hain Mast Mast • Pizza Abhi Baaki Hain Mere Dost • Jaa Simran Jaa Kha Le Apna Tandoori Paneer Tikka • Dhokhe Khane Se Accha Hain Dkokhle Khao •  Badi Badi Baatein Aur Vada Pav Khaate • Mere Sapno ki Biryani Kab Aayegi Tu 
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
