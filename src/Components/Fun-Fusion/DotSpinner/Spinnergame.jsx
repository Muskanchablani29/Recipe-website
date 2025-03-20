import { useState } from "react";
import { motion } from "framer-motion";
import "./SpinnerGame.css";

// List of dishes
const dishes = [
  "Pizza", "Sushi", "Burger", "Pasta", "Tacos", "Salad", "Ramen", "Steak", "Curry", "Sandwich",
  "Dumplings", "Biryani", "BBQ", "Noodles", "Fajitas", "Soup", "Ice Cream", "Samosa", "Pancakes", "Kebab"
];

export default function RandomDishSpinner() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Function to spin the wheel
  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * dishes.length);
    const degreesPerDish = 360 / dishes.length;
    const newRotation = rotation + 1800 + randomIndex * degreesPerDish;

    setRotation(newRotation);

    setTimeout(() => {
      setSelectedDish(dishes[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="spinner-container">
      {/* Header Text */}
      <div className="spinner-header">
        🍽️ Confused what to eat? Let the wheel decide! 🎯
      </div>

      <div className="spinner-wrapper">
        {/* Animated Spinner with rotation */}
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="spinner"
        >
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="dish"
              style={{
                transform: `rotate(${(index * 360) / dishes.length}deg)`,
              }}
            >
              <div
                className="dish-label"
                style={{
                  transform: `rotate(${(360 / dishes.length) / 3}deg)`,
                }}
              >
                {dish}
              </div>
            </div>
          ))}
        </motion.div>
        <div className="spin-pointer"></div>
      </div>

      <div className="spin-btn-container">
        <button className="spin-btn" onClick={spinWheel} disabled={isSpinning}>
          {isSpinning ? "Spinning..." : "Spin"}
        </button>
      </div>

      {selectedDish && (
        <div className="selected-dish">
          🍲 Random Dish Selected: <strong>{selectedDish}</strong>
        </div>
      )}
    </div>
  );
}