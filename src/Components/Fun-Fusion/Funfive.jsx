// Funfive.jsx
import React, { useState, useEffect } from 'react';
import './Funfive.css';
import { NavLink } from 'react-router';
import Hacks from './KitchenJughad/burnt.jpeg'
import Fix from './KitchenJughad/Salt.jpeg'
import Tipsimg from './KitchenJughad/Tips.jpeg'

const Funfive = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const kitchenImages = [
    {
      url: Hacks,
      title: "Kitchen Hacks",
      description: "Innovative Ideas"
    },
    {
      url: Tipsimg,
      title: "Kitchen tips",
      description: "tips for kitchen"
    },
    {
      url: Fix,
      title: "Quick Fix",
      description: "Fix your Messed Food"
    }
  ];

  // Automatic image rotation
  useEffect(() => {
    const rotateImages = () => {
      setIsSliding(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % kitchenImages.length);
    };

    // Start the animation immediately
    rotateImages();

    // Set up the interval for subsequent rotations
    const intervalId = setInterval(rotateImages, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Handle sliding animation reset
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSliding(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="kitchen-container-muskan">
      <div className="left-image-muskan">
        <div className="main-container-muskan">
          <img
            src={kitchenImages[currentImageIndex].url}
            alt="Kitchen Design"
            className={`main-image-kitchen-muskan ${isSliding ? 'sliding-image-muskan' : ''}`}
          />
          <div className="main-image-content-muskan">
            <h2>{kitchenImages[currentImageIndex].title}</h2>
            <p>{kitchenImages[currentImageIndex].description}</p>
          </div>
          <div className="slide-indicators-muskan">
            {kitchenImages.map((_, index) => (
              <span
                key={index}
                className={`indicator-muskan ${currentImageIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="right-content-muskan">
        <div className="content-section-muskan">
          <h1 className="title-muskan">
            Discover Kitchen Hacks
          </h1>
          <p className="description-muskan">
            This page is all about clever kitchen hacks, innovative ideas, and resourceful ways to make the most of what you have. Missing an ingredient? We've got you covered. This is the space where creativity turns kitchen challenges into opportunities!
          </p>
          <NavLink to="/Hacks"><button className="book-now-muskan">
            Explore More Hacks
          </button></NavLink>
        </div>

        <div className="info-boxes-muskan">
          {kitchenImages.map((image, index) => (
            <div
              key={index}
              className={`info-box-muskan ${currentImageIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className={`content-wrapper-muskan ${
                currentImageIndex === index ? 'content-active' : ''
              }`}>
                <div className="icon-muskan">🏠</div>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Funfive;
