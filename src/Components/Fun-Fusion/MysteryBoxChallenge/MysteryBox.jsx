// MysteryBoxChallenge.jsx
import React, { useState, useEffect } from "react";
import "./MysteryBox.css";
import mysteryBoxImg from "./MysteryBox.png";
import { mainIngredientImages, additionalIngredientImages } from "./IngredientsImages";

// Main and Additional Ingredients Array
const mainIngredientsList = [
  "Paneer", "Bread", "Corn", "Rice", "Tofu", "Pasta",
  "Quinoa", "Lentils", "Soybean", "Mushroom", "Avocado"
];

const additionalIngredientsList = [
  "Tomato", "Onion", "Garlic", "Pepper", "Cheese", "Spinach",
  "Carrot", "Potato", "Ginger", "Lettuce", "Cabbage",
  "Bell Pepper", "Chili", "Olives", "Zucchini", "Mint", "Parsley",
  "Cucumber", "Lemon", "Broccoli", "Cauliflower", "Peas", "Radish"
];

// Get Random Ingredients
const getRandomIngredients = (list, count) => {
  const shuffled = list.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function MysteryBoxChallenge() {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [showNames, setShowNames] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);
  const [rating, setRating] = useState(null);

  // Handle Box Click Logic
  const handleBoxClick = (index) => {
    if (selectedBoxes.length < 3 && !selectedBoxes.includes(index)) {
      const newSelection = [...selectedBoxes, index];
      setSelectedBoxes(newSelection);

      let newIngredient = "";

      if (newSelection.length === 1) {
        // First box - select from main ingredients
        const mainIngredient = getRandomIngredients(mainIngredientsList, 1)[0];
        newIngredient = mainIngredient;
      } else {
        // Second & Third box - select from additional ingredients
        const additionalIngredient = getRandomIngredients(
          additionalIngredientsList.filter((item) => !ingredients.includes(item)),
          1
        )[0];
        newIngredient = additionalIngredient;
      }

      setIngredients([...ingredients, newIngredient]);

      // Show ingredient name after 2s delay
      setTimeout(() => {
        setShowNames((prev) => ({ ...prev, [newIngredient]: true }));
      }, 2000);
    }
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      generateRandomRating();
    }
  };

  // Generate Random Rating
  const generateRandomRating = () => {
    const randomRating = Math.floor(Math.random() * 5) + 1;
    setRating(randomRating);
  };

  return (
    <div className="mystery-box-container">
      {/* Welcome Section */}
      <h2 className="welcome-heading">🎁 Welcome to the Mystery Box Challenge!</h2>
      <p className="about-text">
        Select <strong>3 mystery boxes</strong> to reveal ingredients. Create a dish using these ingredients, upload an image, and get a rating!
      </p>

      {/* Mystery Box Grid */}
      <div className="box-grid-mystery">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className={`box-mystery ${selectedBoxes.includes(index) ? "selected" : ""}`}
            onClick={() => handleBoxClick(index)}
          >
            {selectedBoxes.includes(index) ? (
              <div className="ingredient-container">
                <img
                  src={
                    mainIngredientImages[ingredients[selectedBoxes.indexOf(index)]] ||
                    additionalIngredientImages[ingredients[selectedBoxes.indexOf(index)]] ||
                    mysteryBoxImg
                  }
                  alt="Ingredient"
                  className="ingredient-img"
                />
                {showNames[ingredients[selectedBoxes.indexOf(index)]] && (
                  <p className="ingredient-name fade-in">
                    {ingredients[selectedBoxes.indexOf(index)]}
                  </p>
                )}
              </div>
            ) : (
              <img src={mysteryBoxImg} alt="Mystery Box" className="box-img" />
            )}
          </div>
        ))}
      </div>

      {/* Selected Ingredients */}
      {ingredients.length === 3 && (
        <div className="ingredient-section">
          <h3>🎉 Ingredients Revealed:</h3>
          <div className="ingredient-list">
            {ingredients.map((ingredient, idx) => (
              <div key={idx} className="ingredient-item">
                <img
                  src={
                    mainIngredientImages[ingredient] ||
                    additionalIngredientImages[ingredient]
                  }
                  alt={ingredient}
                  className="ingredient-img"
                />
                {showNames[ingredient] && (
                  <p className="ingredient-name fade-in">{ingredient}</p>
                )}
              </div>
            ))}
          </div>

          {/* Image Upload Section */}
          <div className="upload-section">
            <h4>📸 Upload Your Dish Image:</h4>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {uploadedImage && (
              <div className="preview">
                <img src={uploadedImage} alt="Dish Preview" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rating Display */}
      {rating && (
        <div className="rating-section">
          <h4>⭐️ Your Dish Rating:</h4>
          <p>{rating} / 5</p>
        </div>
      )}
    </div>
  );
}
