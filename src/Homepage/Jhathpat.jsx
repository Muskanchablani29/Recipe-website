// Jhathpat.jsx
import React, { useState, useEffect } from "react";
import "./Jhathpat.css";
import Jhapat1 from "../Jhatpatimg/Jhatpat1.jpg";
import Jhapat2 from "../Jhatpatimg/Jhatpat2.webp";
import Jhapat3 from "../Jhatpatimg/Jhatpat3.webp";

const content = [
  { image: Jhapat1, title: "Look for a BANGER Food" },
  { image: Jhapat2, title: "Discover Amazing Recipes" },
  { image: Jhapat3, title: "Cook with Passion" }
];

export default function Jhathpat() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = currentIndex === 0 ? content.length - 1 : currentIndex - 1;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === content.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="jhathpat">
      {/* Left Content */}
      <div className="jhathpat__content">
        <h2 className="jhathpat__title">
          {content[currentIndex].title.split('BANGER').map((part, index) => 
            index === 0 ? (
              <React.Fragment key={index}>
                {part}<span className="highlight">BANGER</span>
              </React.Fragment>
            ) : part
          )}
        </h2>
        <p className="jhathpat__desc">
          Look for opportunities to take your time and pick up our delicious,
          one must say, Banger food recipes to make your life even more
          colorful!
        </p>
      </div>

      {/* Right Side - Images */}
      <div className="jhathpat__images">
        {content.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Food ${index + 1}`}
            className={`jhathpat__img 
              ${index === currentIndex ? 'active' : ''} 
              ${index === previousIndex ? 'previous' : ''}`}
          />
        ))}
      </div>


      <div className="floating-dots"></div>
    </div>
  );
}
