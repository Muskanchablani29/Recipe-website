import { useState } from "react";
import { motion } from "framer-motion";
import "./DotGame.css";

const dishes = [
  "Pizza", "Sushi", "Burger", "Pasta", "Tacos", "Salad", "Ramen", "Steak", "Curry", "Sandwich", "Dumplings", "Biryani", "BBQ", "Noodles", "Fajitas", "Soup", "Ice Cream", "Samosa", "Pancakes", "Kebab"
];

export default function RandomDishSpinner() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    const randomIndex = Math.floor(Math.random() * dishes.length);
    const degreesPerDish = 360 / dishes.length;
    const newRotation = 1800 + randomIndex * degreesPerDish;

    setRotation(newRotation);
    
    setTimeout(() => {
      setSelectedDish(dishes[randomIndex]);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="spinner-container">
      <div className="spinner-wrapper">
        <motion.div
          animate={{ rotate: rotation }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="spinner"
        >
          <div className="dishes">
            {dishes.map((dish, index) => (
              <div key={index} className="dish" style={{
                transform: `rotate(${(index * 360) / dishes.length}deg) translateY(-90px)`,
                transformOrigin: "center bottom",
                marginBottom: "8px"
              }}>
                {dish}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="spin-button">
          <button onClick={spinWheel} disabled={isSpinning}>Spin</button>
        </div>
        <div className="spin-pointer"></div>
      </div>
      {selectedDish && (
        <div className="recipe-video">
          <h2>{selectedDish} Recipe Videos</h2>
          <iframe
            width="500"
            height="280"
            src={`https://www.youtube.com/embed?listType=search&list=${selectedDish} recipe`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
