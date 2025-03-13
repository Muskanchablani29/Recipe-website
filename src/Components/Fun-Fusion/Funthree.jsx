import React, { useState, useEffect, memo } from 'react';
import image1 from "./Jhatpat-recipes/image1.png";
import image2 from "./Jhatpat-recipes/image2.png";
import image3 from "./Jhatpat-recipes/image3.png";
import image4 from "./Jhatpat-recipes/image4.png";
import image5 from "./Jhatpat-recipes/image5.png";
import image6 from "./Jhatpat-recipes/image6.png";
import image7 from "./Jhatpat-recipes/image7.png";
import image8 from "./Jhatpat-recipes/image8.png";
import "./Funthree.css";

const RECIPES = [
  { image: image1, name: "Instant Noodle Stir-Fry", description: "Ready in 10 minutes, perfect for busy days.", cookingTime: "10 mins" },
  { image: image2, name: "Quick Sandwich Wrap", description: "Healthy and portable meal option.", cookingTime: "5 mins" },
  { image: image3, name: "5-Minute Smoothie Bowl", description: "Nutritious breakfast on the go.", cookingTime: "5 mins" },
  { image: image4, name: "Microwave Mug Pizza", description: "Personal pizza ready in minutes.", cookingTime: "3 mins" },
  { image: image5, name: "Instant Oatmeal Delight", description: "Quick & energizing breakfast.", cookingTime: "5 mins" },
  { image: image6, name: "3-Minute Egg Sandwich", description: "Perfect protein-rich snack.", cookingTime: "3 mins" },
  { image: image7, name: "Quick Veggie Salad", description: "Fresh and healthy option.", cookingTime: "7 mins" },
  { image: image8, name: "Instant Cup Pasta", description: "Convenient comfort food.", cookingTime: "5 mins" },
];

const RecipeImage = memo(({ recipe, index, isActive, onClick }) => (
  <div className={`recipe-card recipe-card${index + 1}`} onClick={onClick}>
    <img
      src={recipe.image}
      alt={recipe.name}
      className={`image image${index + 1} ${isActive ? 'glow' : ''}`}
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'placeholder-image.png';
      }}
    />
    {isActive && (
      <div className="recipe-info-box">
        <div className="info-box-arrow"></div>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <span className="cooking-time">⏱ {recipe.cookingTime}</span>
      </div>
    )}
  </div>
));



export default function Funthree() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % RECIPES.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleRecipeClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="jhatpat-recipe">
      <div className="background-wave">
        <svg viewBox="0 0 1200 300" className="background-svg">
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#8B4513', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#D2691E', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#A0522D', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          
          <path
            id="curve1"
            d="M50,50 C250,50 350,150 300,200 S50,250 400,250 S900,250 1150,200"
            fill="none"
            stroke="transparent"
          />
          
          <path
            id="curve2"
            d="M50,50 C250,50 350,150 300,200 S50,250 400,250 S900,250 1150,200"
            fill="none"
            stroke="transparent"
            transform="translate(1200,0)"
          />
          
          <text className="curved-text">
            <textPath href="#curve1" startOffset="0%" className="flowing-text text-path-1">
              Quick Recipes • Easy Meals • Travel-Friendly • Instant Food • 
            </textPath>
            <textPath href="#curve2" startOffset="0%" className="flowing-text text-path-2">
              Quick Recipes • Easy Meals • Travel-Friendly • Instant Food • 
            </textPath>
          </text>
        </svg>
      </div>

      <div className="jhatpat-recipe-container">
        <div className="curved-images">
          {RECIPES.map((recipe, index) => (
            <RecipeImage
              key={index}
              recipe={recipe}
              index={index}
              isActive={index === activeIndex}
              onClick={() => handleRecipeClick(index)}
            />
          ))}
        </div>
      </div>

      <div className="jhatpat-recipe-text">
        <h2>Quick & Easy Recipes</h2>
        <p>Perfect for Travelers and Busy People</p>
      </div>
    </div>
  );
}
