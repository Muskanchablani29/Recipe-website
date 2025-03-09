import React, { useState, useEffect } from 'react';
import image1 from "./Jhatpat-recipes/image1.png";
import image2 from "./Jhatpat-recipes/image2.png";
import image3 from "./Jhatpat-recipes/image3.png";
import image4 from "./Jhatpat-recipes/image4.png";
import image5 from "./Jhatpat-recipes/image5.png";
import image6 from "./Jhatpat-recipes/image6.png";
import image7 from "./Jhatpat-recipes/image7.png";
import image8 from "./Jhatpat-recipes/image8.png";
import "./Funthree.css";

export default function Funthree() {
  const [activeIndex, setActiveIndex] = useState(0);

  const recipes = [
    { image: image1, name: "Recipe 1", description: "Delicious and quick meal." },
    { image: image2, name: "Recipe 2", description: "Easy to cook on the go." },
    { image: image3, name: "Recipe 3", description: "Tasty and healthy." },
    { image: image4, name: "Recipe 4", description: "Perfect for travelers." },
    { image: image5, name: "Recipe 5", description: "Quick & simple." },
    { image: image6, name: "Recipe 6", description: "A delight for food lovers." },
    { image: image7, name: "Recipe 7", description: "A must-try dish." },
    { image: image8, name: "Recipe 8", description: "Savory & delicious." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % recipes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="jhatpat-recipe">
      <div className="curved-background">
        <svg className="wavy-line" viewBox="0 0 600 200">
          <path
            id="wavyPath"
            d="M50,150 Q150,50 250,150 T450,150"
            fill="transparent"
            stroke="#F4A261"
            strokeWidth="4"
          />
          <text className="flowing-text">
            <textPath href="#wavyPath" startOffset="0%" className="animated-text">
              • Quick & Tasty Recipes • Quick & Tasty Recipes • Quick & Tasty Recipes •
            </textPath>
          </text>
        </svg>
      </div>
      <div className="jhatpat-recipe-container">
        <div className="curved-images">
          {recipes.map((recipe, index) => (
            <img
              key={index}
              src={recipe.image}
              alt={recipe.name}
              className={`image image${index + 1} ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="jhatpat-recipe-text">
        <h2>Explore Our Services</h2>
        <p>Quick & Tasty Recipes for Travelers</p>
      </div>
    </div>
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
    </>
  );
}
