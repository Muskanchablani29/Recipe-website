import React, { useState } from "react";
import "./Recipetwo.css";

const ingredients = [
  "Tomato", "Chicken", "Paneer", "Mushroom", "Egg", "Spinach", "Carrot", "Beef", "Fish", "Potato",
  "Garlic", "Onion", "Peas", "Corn", "Cheese", "Lettuce", "Cabbage", "Cucumber", "Pumpkin", "Lemon",
  "Orange", "Apple", "Banana", "Ginger", "Broccoli", "Cauliflower", "Pepper", "Zucchini", "Radish", "Beetroot",
  "Yogurt", "Milk", "Butter", "Almonds", "Walnuts", "Peanuts", "Tofu", "Lamb", "Pork", "Turkey",
  "Shrimp", "Crab", "Lobster", "Clams", "Oats", "Rice", "Quinoa", "Barley", "Chickpeas", "Lentils"
];

const dishes = {
  Tomato: ["Tomato Soup", "Tomato Pasta", "Bruschetta"],
  Chicken: ["Grilled Chicken", "Chicken Curry", "Chicken Sandwich"],
  Paneer: ["Paneer Butter Masala", "Paneer Tikka", "Palak Paneer"],
  Mushroom: ["Mushroom Risotto", "Stuffed Mushrooms", "Mushroom Soup"],
  Egg: ["Scrambled Eggs", "Omelette", "Egg Curry"],
  Spinach: ["Spinach Smoothie", "Palak Paneer", "Spinach Salad"],
};

const IngredientDishSelector = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showDishes, setShowDishes] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Toggle ingredient selection
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Show dishes when Next button is clicked
  const handleNext = () => {
    setShowDishes(true);
  };

  // Fetch and prioritize dishes based on selection order
  const getDishes = () => {
    let suggestedDishes = [];
    selectedIngredients.forEach((ingredient) => {
      if (dishes[ingredient]) {
        suggestedDishes = [...suggestedDishes, ...dishes[ingredient]];
      }
    });
    return [...new Set(suggestedDishes)]; // Remove duplicates while maintaining order
  };

  return (
    <div className="container full-width">
      <h1 className="title">Select Ingredients</h1>
      <div className="ingredient-list">
        {(showMore ? ingredients : ingredients.slice(0, 20)).map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => toggleIngredient(ingredient)}
            className={`ingredient-button ${
              selectedIngredients.includes(ingredient) ? "selected" : ""
            }`}
          >
            {ingredient}
          </button>
        ))}
      </div>
      {!showMore && (
        <button
          className="show-more-button"
          onClick={() => setShowMore(true)}
        >
          Show More
        </button>
      )}
      <button
        className="next-button"
        onClick={handleNext}
        disabled={selectedIngredients.length === 0}
      >
        Next
      </button>
      {showDishes && (
        <div className="dish-list">
          <h2 className="dish-title">Suggested Dishes:</h2>
          <div className="dish-grid full-width">
            {getDishes().map((dish, index) => (
              <div key={index} className="dish-card">
                <img
                  src={`https://source.unsplash.com/300x200/?${dish}`}
                  alt={dish}
                  className="dish-image"
                />
                <p className="dish-name">{dish}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientDishSelector;
