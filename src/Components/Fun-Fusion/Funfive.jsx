import React, { useEffect, useState } from 'react';
import './Funfive.css';
import image1 from './KitchenJughad/image4.jpeg';
import image2 from './KitchenJughad/image2.jpeg';
import image3 from './KitchenJughad/image4.jpeg';
import image4 from './KitchenJughad/image6.jpg';
// Import background images for info boxes
import quickEasyBg from './KitchenJughad/Salt.jpeg';
import smartHacksBg from './KitchenJughad/burnt.jpeg';
import communityBg from './KitchenJughad/Salt.jpeg';

export default function KitchenJhugad() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kitchen-container">
      {/* Left Image with Auto Scroll */}
      <div className="left-image">
        <img 
          src={images[currentImageIndex]} 
          alt="Cooking" 
          className="main-image"
        />
        <div className="button-group">
          <button className="explore-more ">Explore More</button>
        </div>
      </div>
      
      {/* Right Content */}
      <div className="right-content">
        <h1 className="title">Discover Innovative Kitchen Hacks</h1>
        <p className="description">
          Welcome to Kitchen Jhugad, your go-to place for smart and creative cooking solutions. 
          Explore quick recipes, time-saving techniques, and genius cooking tricks to make your 
          kitchen experience more enjoyable and hassle-free.
        </p>
        <button className="book-now">Start Cooking →</button>
        
        <div className="info-boxes">
          <div className="info-box" style={{ backgroundImage: `url(${quickEasyBg})` }}>
            <div className="icon">🕒</div>
            <h3>Quick & Easy</h3>
            <p>Find simple yet delicious recipes that can be made in minutes.</p>
          </div>
          <div className="info-box" style={{ backgroundImage: `url(${smartHacksBg})` }}>
            <div className="icon">💡</div>
            <h3>Smart Hacks</h3>
            <p>Discover kitchen shortcuts to save time and effort.</p>
          </div>
          <div className="info-box" style={{ backgroundImage: `url(${communityBg})` }}>
            <div className="icon">👥</div>
            <h3>Community Recipes</h3>
            <p>Join a community of home chefs sharing their best tips and recipes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
