import React, { useState, useEffect } from 'react';
import './Cooking.css';

import participant1 from '../Cookoff/R.webp';
import vegfry from '../Cookoff/vegfry.jpeg';
import mugcake from '../Cookoff/mugcake.jpeg';
import vegroll from '../Cookoff/vegroll.jpeg';
import Quickpasta from '../Cookoff/Quickpasta.jpeg';
import bananaoat from '../Cookoff/bananaoat.jpeg';
import coconut from '../Cookoff/coconut.jpeg';

const Timer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            setIsCompleted(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
    setIsCompleted(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div className="timer-container">
      <div className={`timer-display ${isRunning ? 'running' : ''} ${isCompleted ? 'completed' : ''}`}>
        <div className="time-digits">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="timer-progress" style={{
          '--progress': `${((initialMinutes * 60 + initialSeconds) - (minutes * 60 + seconds)) / (initialMinutes * 60 + initialSeconds) * 100}%`
        }}></div>
      </div>
      <div className="timer-controls">
        {!isRunning ? (
          <button className="timer-button start" onClick={startTimer} disabled={isCompleted}>
            <span className="button-icon">▶</span>
            Start
          </button>
        ) : (
          <button className="timer-button pause" onClick={pauseTimer}>
            <span className="button-icon">⏸</span>
            Pause
          </button>
        )}
        <button className="timer-button reset" onClick={resetTimer}>
          <span className="button-icon">↺</span>
          Reset
        </button>
      </div>
      {isCompleted && (
        <div className="timer-complete">
          Time's up! Your dish should be ready!
        </div>
      )}
    </div>
  );
};

const dishes = [
  {
    name: "Vegetable Stir Fry",
 
    image: vegfry,
    ingredients: ["Carrots", "slicedBell peppers (any color)", "slicedBroccoli florets",
      
       "Soy sauce (1-2 tbsp)",
      
      "Garlic, minced",
      
    "  Oil (for cooking)"],
    instructions: [
      "Chop all vegetables into bite-sized pieces.",
      "Heat a wok or large pan on high heat, add a little oil.",
      "Sauté minced garlic until fragrant (about 30 seconds).",
      "Toss in the vegetables and stir-fry on high heat for about 5 minutes.",
      "Add soy sauce, mix well, and cook for an additional 1-2 minutes.",
      "Serve hot as a side dish or over steamed rice."
    ],
    cookingTime: { minutes: 10, seconds: 0 }
  },
  {
    name: "Chocolate Mug Cake",
    image: mugcake,
    ingredients: ["4 tbsp all-purpose flour","2 tbsp cocoa powder","2 tbsp sugar","1/4 tsp baking powder","3 tbsp milk","1 tbsp oil","A few drops of vanilla extract (optional)",],
    instructions: [
      "In a microwave-safe mug, mix all the dry ingredients (flour, cocoa powder, sugar, and baking powder).",


      "Stir in the milk, oil, and vanilla extract until smooth.",
      
      "Microwave for about 1-2 minutes (timing depends on your microwave).",
      
     "Let it cool for a minute, then enjoy your warm, gooey cake directly from the mug!.",
    ],
    cookingTime: { minutes: 10, seconds: 0 }
  },

  {
    name: "Mini Vegetable Rolls",
    image:vegroll,
    ingredients: ["Spring roll sheets","Grated carrots","Chopped cabbage","Soy sauce","Oil (for frying)",],
    instructions: [
      "Mix grated carrots, chopped cabbage, and soy sauce.",

"Fill the spring roll sheets with the mixture and roll them tightly.",

"Fry in hot oil until golden brown and serve with a dip.",
    ],
    cookingTime: { minutes: 15, seconds: 0 }
  },
  {
    name: "Quick Pesto Pasta",
    image: Quickpasta,
    ingredients: ["Cooked pasta (any type)","Basil pesto sauce (store-bought or homemade)"," Cherry tomatoes (halved)", "Olive oil"," Grated cheese (optional)",],
    instructions: [
      "Heat olive oil in a pan, sauté cherry tomatoes for 2 minutes.",

      "Add the cooked pasta and mix in the pesto sauce.",
      "Sprinkle with cheese and serve warm.",
    ],
    cookingTime: { minutes: 10, seconds: 0 }
  
  },
  {
    name: "Banana-Oats Smoothie",
    image: bananaoat,
    ingredients: [" 1 ripe banana","2tbsp oats"," cup milk (or almond milk)","Honey (optional)"],
    instructions: [
    " Blend banana, oats, milk, and honey until smooth.",

"Pour into a glass and enjoy a healthy, creamy smoothie.",
    ],
    cookingTime: { minutes: 5, seconds: 0 }
  },
  {
    name: "Coconut Ladoo",
    image:coconut,
    ingredients: ["1 cup desiccated coconut","1/2 cup condensed milk","Cardamom powder",],
    instructions: [
     "Mix coconut, condensed milk, and cardamom powder in a bowl.",

      "Shape the mixture into small balls and roll them in coconut for garnish.",
    ],
    cookingTime: { minutes: 15, seconds: 0 }
  }
];

export default function CookingChallenge() {
  const [loadedImages, setLoadedImages] = useState({
    participant1: false,
    participant2: false
  });
  const [randomDish, setRandomDish] = useState(dishes[Math.floor(Math.random() * dishes.length)]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = (imageName) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  const generateRandomDish = async () => {
    setIsLoading(true);
    
    document.querySelector('.dish-container').classList.add('fade-out');
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let newDish;
    do {
      newDish = dishes[Math.floor(Math.random() * dishes.length)];
    } while (newDish.name === randomDish.name);
    
    setRandomDish(newDish);
    setIsLoading(false);
    
    const container = document.querySelector('.dish-container');
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    
    setTimeout(() => {
      container.classList.remove('fade-in');
    }, 500);
  };

  return (
    <div className="challenge-container">
      <div className="background-layer"></div>
      <div className="top-section">
      {/* Left Side: Text */}
      <div className="text-content">
        <h1>
          Set Your Life <br />
          <span className="highlight">Beautiful</span> Through <br />
          <span className="bold">Cooking</span>
        </h1>
        <p>
          Join the Cooking Challenge! Get a random dish, cook it, and have fun!
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="image-container">
        <img src={participant1} alt="Cooking Challenge" />
      </div>
    </div>
      <div className="random-dish-section">
        <div className="section-header">
          <h2>Today's Random Dish</h2>
          <button 
            className={`generate-button ${isLoading ? 'loading' : ''}`}
            onClick={generateRandomDish}
            disabled={isLoading}
            aria-label="Generate new random dish"
          >
            <span className="button-text">
              {isLoading ? 'Generating...' : 'New Recipe'}
            </span>
            <span className="button-icon">↻</span>
          </button>
        </div>
        <div className="dish-container">
          <div className="dish-image">
            <img src={randomDish.image} alt={randomDish.name} />
            <Timer 
              initialMinutes={randomDish.cookingTime.minutes} 
              initialSeconds={randomDish.cookingTime.seconds} 
            />
          </div>
          <div className="dish-info">
            <h3 className="dish-name">{randomDish.name}</h3>
            <div className="dish-details">
              <div className="ingredients">
                <h4>Ingredients</h4>
                <ul>
                  {randomDish.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h4>Instructions</h4>
                <ol>
                  {randomDish.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}