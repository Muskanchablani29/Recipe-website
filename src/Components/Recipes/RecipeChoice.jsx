// RecipeChoice.jsx
import React, { useState } from "react";
import "./RecipeChoice.css";
import SearchDish from "./SearchDish";
import Ingredients from "./Recipetwo";
import Dish from './Dishes/Dish28.jpeg'
import Ingredientsimg from './Dishes/Ingredients.png'

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
            {/* Option 1 - Search by Ingredient */}
            <div
              className="option-card"
              onClick={() => handleOptionSelect("ingredient")}
            >
              <img
                src={Ingredientsimg}
                alt="Ingredient"
                className="option-image"
              />
              <h3>By Ingredient</h3>
              <p>Choose a main ingredient to get recipe suggestions.</p>
            </div>
            {/* Option 2 - Search by Dish Name */}
            <div
              className="option-card"
              onClick={() => handleOptionSelect("dish")}
            >
              <img
                src={Dish}
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
