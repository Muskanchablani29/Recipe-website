import React from 'react';
import animation from '../ImageHome/Ani.gif';
import { NavLink } from 'react-router-dom';
import './Chef.css';

export default function ShareRecipe() {
  return (
    <div className="share-page bg-yellow-100 text-yellow-900 flex justify-center items-center min-h-screen p-6">
      <div className="share-main flex flex-col md:flex-row items-center bg-yellow-50 p-6 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Left Section - Image */}
        <div className="left-section flex-1 flex justify-center">
          <img 
            src={animation} 
            alt="Cooking Animation" 
            className="main-animation w-64 h-64"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="right-section flex-1 flex flex-col items-start p-6">
          <header className="header-section mb-4">
            <h1 className="text-3xl font-bold">Share Your Recipe</h1>
            <p className="subtitle-share text-lg">Inspire others with your culinary creations</p>
          </header>
          <div className="action-section">
            <NavLink to="/Shareas"><button className="primary-button bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
              Start Sharing
            </button></NavLink>
            <p className="action-text mt-2 text-yellow-800">Join our cooking community today!</p>
          </div>
        </div>
      </div>
    </div>
  );
}