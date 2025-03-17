// Funfive.jsx
import React, { useState, useEffect } from 'react';
import './Funfive.css';

const Funfive = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const kitchenImages = [
    {
      url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
      title: "Modern Kitchen",
      description: "Sleek and contemporary design"
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      title: "Classic Kitchen",
      description: "Traditional elegance"
    },
    {
      url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7",
      title: "Rustic Kitchen",
      description: "Warm and inviting space"
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
    <div className="kitchen-container">
      <div className="left-image">
        <div className="main-container">
          <img
            src={kitchenImages[currentImageIndex].url}
            alt="Kitchen Design"
            className={`main-image-kitchen ${isSliding ? 'sliding-image' : ''}`}
          />
          <div className="main-image-content">
            <h2>{kitchenImages[currentImageIndex].title}</h2>
            <p>{kitchenImages[currentImageIndex].description}</p>
          </div>
          <div className="slide-indicators">
            {kitchenImages.map((_, index) => (
              <span
                key={index}
                className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="content-section">
          <h1 className="title">
            Discover Kitchen Hacks
          </h1>
          <p className="description">
            This page is all about clever kitchen hacks, innovative ideas, and resourceful ways to make the most of what you have. Missing an ingredient? We've got you covered. This is the space where creativity turns kitchen challenges into opportunities!
          </p>
          <button className="book-now">
            Explore More Hacks
          </button>
        </div>

        <div className="info-boxes">
          {kitchenImages.map((image, index) => (
            <div
              key={index}
              className={`info-box ${currentImageIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className={`content-wrapper ${
                currentImageIndex === index ? 'content-active' : ''
              }`}>
                <div className="icon">🏠</div>
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
