import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Recipetop.css";
import Dish1 from './Dishes/Dish1.jpeg';
import Dish2 from './Dishes/Dish2.jpeg';
import Dish3 from './Dishes/Dish3.jpeg';
import Dish4 from './Dishes/Dish4.jpeg';
import Dish5 from './Dishes/Dish5.jpg';
import Dish6 from './Dishes/Dish6.jpeg';
import Dish7 from './Dishes/Dish7.jpg';
import Dish8 from './Dishes/Dish8.jpeg';
import Dish9 from './Dishes/Dish9.jpg';
import Dish10 from './Dishes/Dish10.jpeg';
import Dish11 from './Dishes/Dish11.jpeg';
import Dish12 from './Dishes/Dish12.jpeg';
import Dish13 from './Dishes/Dish13.jpg';
import Dish14 from './Dishes/Dish14.jpeg';
import Dish15 from './Dishes/Dish15.jpeg';
import Dish16 from './Dishes/Dish16.jpg';
import Dish17 from './Dishes/Dish17.jpeg';
import Dish18 from './Dishes/Dish18.jpeg';
import Dish19 from './Dishes/Dish19.jpg';
import Dish20 from './Dishes/Dish20.jpeg';
import Dish21 from './Dishes/Dish21.jpeg';
import Dish22 from './Dishes/Dish22.jpeg';
import Dish23 from './Dishes/Dish23.jpeg';
import Dish24 from './Dishes/Dish24.avif';
import Dish25 from './Dishes/Dish25.jpeg';
import Dish26 from './Dishes/Dish26.jpeg';
import Dish27 from './Dishes/Dish27.jpeg';


// Create an array of local images
const localImages = [
  Dish1, Dish2, Dish3, Dish4, Dish5, Dish6, Dish7, Dish8, Dish9, Dish10,
  Dish11, Dish12, Dish13, Dish14, Dish15, Dish16, Dish17, Dish18, Dish19, Dish20,
  Dish21, Dish22, Dish23, Dish24, Dish25, Dish26, Dish27
];

export default function RecipeTop() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % localImages.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="recipe-top-container">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${localImages[currentImageIndex]})` }}
      />
      
      <motion.div 
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="image-track"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {localImages.map((image, index) => (
            <motion.div
              key={index}
              className="image-container-Recipetop"
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={image}
                alt={`Recipe ${index + 1}`}
                className="slider-image"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="content-overlay">
        <h1 className="Recipes-heading">Discover Delicious Recipes</h1>
        {/* <p className="Recipes-paragraph">Explore our collection of mouth-watering dishes from around the world</p> */}
      </div>
    </div>
  );
}
