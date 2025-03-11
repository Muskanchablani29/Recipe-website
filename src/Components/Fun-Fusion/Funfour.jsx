import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Funfour.css";
import image1 from "./KitchenJughad/Salt.jpeg";
import image2 from "./KitchenJughad/burnt.jpeg";
import image3 from "./KitchenJughad/Salt.jpeg";

const images = [image1, image2, image3, image1, image2]; // Add more images as needed
const texts = ["meal plans", "delivery", "every", "fresh food", "healthy"]; // Added more text items

export default function KitchenJugaad() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.touches[0].clientX;

    if (Math.abs(diff) > 50) {
      setIndex((prev) => (prev + (diff > 0 ? 1 : -1) + images.length) % images.length);
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="kitchen-jugaad-container" 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={() => setTouchStart(null)}
    >
      <div className="content-slider">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            className="slide-container"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="image-container">
              <motion.div
                className="image-wrapper"
                style={{
                  transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                }}
              >
                <img 
                  src={images[index]} 
                  alt="Kitchen Jugaad" 
                  className="image-jugaad" 
                />
              </motion.div>
            </div>

            <motion.div 
              className="text-display"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="slide-text">{texts[index]}</h2>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="navigation-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="category-buttons">
        <button>Bowls</button>
        <button>Soups</button>
        <button>Drinks</button>
      </div>
    </div>
  );
}
