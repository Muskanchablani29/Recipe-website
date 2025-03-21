// Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";
import Image1 from "../Image/Noodle.jpeg";
import Image2 from "../Image/Panveg.png";
import Image3 from "../Image/Pizza.jpeg";
import Image4 from "../Image/salad.jpeg";
import Image5 from "../Image/Sweet.jpeg";
import { NavLink } from 'react-router-dom';

const images = [Image1, Image2, Image3, Image4, Image5];

export default function Home() { 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container-lavina">
      {/* Background Elements */}
      <div className="background-effects">
        <div className="gradient-circle circle1"></div>
        <div className="gradient-circle circle2"></div>
        <div className="gradient-circle circle3"></div>
      </div>

      {/* Waves */}
      <div className="waves">
        <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,160 C320,300,420,240,720,200 C1020,160,1120,280,1440,250" fill="none" stroke="#ff6b00" strokeWidth="2" strokeOpacity="0.3"/>
        </svg>
        <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,200 C320,280,420,180,720,160 C1020,140,1120,240,1440,200" fill="none" stroke="#ff6b00" strokeWidth="2" strokeOpacity="0.2"/>
        </svg>
        <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,240 C320,220,420,120,720,140 C1020,160,1120,200,1440,180" fill="none" stroke="#ff6b00" strokeWidth="2" strokeOpacity="0.1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="text-section-home">
        <div className="text-content-home">
          <h3>Find Your Best Cooking Recipes</h3>
          <h1>
            Discover <span className="bold-home">Delicious</span> Recipes
          </h1>
          <p>
            Explore a world of culinary delights with our handpicked collection of 
            mouthwatering recipes from around the globe. Start your cooking journey today!
          </p>
          <div className="buttons">
            <NavLink to="/Recipe"><button className="learn-more">
              <span>Explore Recipes</span>
              <i className="fas fa-arrow-right"></i>
            </button></NavLink>
            
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Recipes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Chefs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="image-section">
        <div className="image-wrapper">
          <div className="circle-background"></div>
          <div className="sparkles-container">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`sparkle sparkle${i + 1}`}></div>
            ))}
          </div>
          <img 
            src={images[index]} 
            alt="Food" 
            className="food-image"
          />
          <div className="floating-elements">
            <div className="floating-card card1">
              <i className="fas fa-star"></i>
              <span>Best Rated Recipes</span>
            </div>
            <div className="floating-card card2">
              <i className="fas fa-award"></i>
              <span>Quality Video</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        {[...Array(3)].map((_, i) => (
          <svg key={i} className={`leaf leaf${i + 1}`} viewBox="0 0 24 24">
            <path fill="#ff6b00" d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.23,6.23,0,0,0,1.75,3.75C8,8,17,8,17,8Z"/>
          </svg>
        ))}
      </div>
    </div>
  );
}
