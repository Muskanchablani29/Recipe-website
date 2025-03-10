import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import './Home.css';
import Chilli from "../ImageHome/Chilli.png";
import Tomato from "../ImageHome/tomato.png";
import Onion from "../ImageHome/Onion.webp";
import Garlic from "../ImageHome/Garlic.webp";
import Plate from "../ImageHome/Plate.webp";
import Paneer from "../ImageHome/Paneer.png";
import broccoli from "../ImageHome/broccoli.png";
import Cucumber from "../ImageHome/Cucumber.webp";
import Finalimage from "../ImageHome/Finalimage.png";
import Finalimage2 from "../ImageHome/Finalimage2.webp";
import Food1 from "../ImageHome/food1.jpg";
import Food2 from "../ImageHome/food2.jpg";

const ingredients = [
  { name: "Plate", src: Plate, direction: "top" },
  { name: "Tomato", src: Tomato, direction: "right" },
  { name: "Chili", src: Chilli, direction: "bottom" },
  { name: "Onion", src: Onion, direction: "left" },
  { name: "Garlic", src: Garlic, direction: "topRight" },
  { name: "Paneer", src: Paneer, direction: "bottomLeft" },
];

const ingredients2 = [
  { name: "Plate", src: Plate, direction: "top" },
  { name: "Tomato", src: Tomato, direction: "right" },
  { name: "broccoli", src: broccoli, direction: "bottom" },
  { name: "Onion", src: Onion, direction: "left" },
  { name: "Cucumber", src: Cucumber, direction: "topRight" },
  { name: "Paneer", src: Paneer, direction: "bottomLeft" },
];

export default function Home() {
  // Animation states
  const [animationStep, setAnimationStep] = useState(0);
  // 0: First ingredients
  // 1: First final dish
  // 2: Second ingredients
  // 3: Second final dish

  // Timing constants (in milliseconds)
  const INGREDIENT_ANIMATION_TIME = ingredients.length * 500 + 2000; // Time for all ingredients to appear + buffer
  const DISH_DISPLAY_TIME = 3000; // Time to display each final dish

  useEffect(() => {
    let timer;
    
    // Set up the next animation step based on the current step
    if (animationStep === 0) {
      // After first ingredients animation, show first dish
      timer = setTimeout(() => {
        setAnimationStep(1);
      }, INGREDIENT_ANIMATION_TIME);
    } 
    else if (animationStep === 1) {
      // After showing first dish, start second ingredients
      timer = setTimeout(() => {
        setAnimationStep(2);
      }, DISH_DISPLAY_TIME);
    }
    else if (animationStep === 2) {
      // After second ingredients animation, show second dish
      timer = setTimeout(() => {
        setAnimationStep(3);
      }, INGREDIENT_ANIMATION_TIME);
    }
    else if (animationStep === 3) {
      // After showing second dish, restart the cycle
      timer = setTimeout(() => {
        setAnimationStep(0);
      }, DISH_DISPLAY_TIME);
    }
    
    return () => clearTimeout(timer);
  }, [animationStep]);

  // Function to get starting position based on direction
  const getDirectionalStartPosition = (direction) => {
    const distance = 1000;
    
    switch(direction) {
      case "top":
        return { x: 0, y: -distance };
      case "right":
        return { x: distance, y: 0 };
      case "bottom":
        return { x: 0, y: distance };
      case "left":
        return { x: -distance, y: 0 };
      case "topLeft":
        return { x: -distance, y: -distance };
      case "topRight":
        return { x: distance, y: -distance };
      case "bottomLeft":
        return { x: -distance, y: distance };
      case "bottomRight":
        return { x: distance, y: distance };
      default:
        return { x: 0, y: -distance };
    }
  };

  return (
    <div className="home-container">
      {/* Left Section - Content */}
      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading">Discover Delicious Recipes</h1>
          <p className="subheading">
            Explore our collection of mouthwatering dishes from around the world
          </p>
          <button className="cta-button">
            Browse Recipes
          </button>
        </motion.div>
      </div>

      {/* Right Section - Animation */}
      <div className="animation-section">
        <div className="animation-container">
          {/* First set of ingredients */}
          {animationStep === 0 &&
            ingredients.map((ingredient, index) => {
              const startPos = getDirectionalStartPosition(ingredient.direction);
              return (
                <motion.img
                  key={`${ingredient.name}-1-${animationStep}`}
                  src={ingredient.src}
                  alt={ingredient.name}
                  initial={{ 
                    x: startPos.x, 
                    y: startPos.y, 
                    opacity: 0,
                    scale: 0.3
                  }}
                  animate={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1, 
                    rotate: 360,
                    scale: 0.6
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: index * 0.5,
                    ease: "easeOut"
                  }}
                  className="ingredient-image"
                />
              );
            })}
          
          {/* First final dish */}
          {animationStep === 1 && (
            <motion.img
              key={`final-dish-1-${animationStep}`}
              src={Finalimage}
              alt="Final Dish"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="final-dish-image"
            />
          )}

          {/* Second set of ingredients */}
          {animationStep === 2 &&
            ingredients2.map((ingredient, index) => {
              const startPos = getDirectionalStartPosition(ingredient.direction);
              return (
                <motion.img
                  key={`${ingredient.name}-2-${animationStep}`}
                  src={ingredient.src}
                  alt={ingredient.name}
                  initial={{ 
                    x: startPos.x, 
                    y: startPos.y, 
                    opacity: 0,
                    scale: 0.3
                  }}
                  animate={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1, 
                    rotate: 360,
                    scale: 0.6
                  }}
                  transition={{ 
                    duration: 2.5,
                    delay: index * 0.5,
                    ease: "easeOut"
                  }}
                  className="ingredient-image"
                />
              );
            })}

          {/* Second final dish */}
          {animationStep === 3 && (
            <motion.img
              key={`final-dish-2-${animationStep}`}
              src={Finalimage2}
              alt="Final Dish 2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="final-dish-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}
