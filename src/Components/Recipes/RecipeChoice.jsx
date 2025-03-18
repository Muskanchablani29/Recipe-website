// RecipeChoice.jsx
import React, { useState } from "react";
import "./RecipeChoice.css";
import SearchDish from "./SearchDish";
import Ingredients from "./Recipetwo";

export default function RecipeChoice() {
  const [option, setOption] = useState(null);

  const handleOptionSelect = (choice) => {
    setOption(choice);
  };

  return (
    <div className="recipe-choice-container">
      {!option ? (
        <div className="choice-box">
          <h2>How Do You Want to Search for Your Recipe?</h2>
          <div className="options">
            <div
              className="option-card abstract-shape"
              onClick={() => handleOptionSelect("ingredient")}
            >
              <img
                src="/images/ingredient.png"
                alt="Ingredient"
                className="option-image"
              />
              <h3>By Ingredient</h3>
              <p>Choose a main ingredient to get recipe suggestions.</p>
            </div>
            <div
              className="option-card abstract-shape"
              onClick={() => handleOptionSelect("dish")}
            >
              <img
                src="/images/dish.png"
                alt="Dish"
                className="option-image"
              />
              <h3>By Dish Name</h3>
              <p>Search for a specific dish by name.</p>
            </div>
          </div>
        </div>
      ) : option === "ingredient" ? (
        <div className="ingredient-section">
          <h2>Select Ingredients to Get Recipe Suggestions</h2>
          <Ingredients />
          <button onClick={() => setOption(null)} className="back-btn">
            Back
          </button>
        </div>
      ) : (
        <SearchDish goBack={() => setOption(null)} />
      )}
    </div>
  );
}
