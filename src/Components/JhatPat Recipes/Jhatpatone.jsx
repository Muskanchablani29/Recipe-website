import React, { memo } from "react";
import './Jhatpatone.css';
 import pizabg from './pizabg.jpg';




const CulinaryBanner = memo(() => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <h2 className="banner-title">
            Welcome To <span className="highlight">Jhatpat</span> Recipe
          </h2>
          <p className="banner-description">
            Discover amazing recipes and cooking techniques
          </p>
        </div>
        <div className="banner-image">
          <img 
            src={pizabg } 
            alt="Culinary Background"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});

CulinaryBanner.displayName = 'CulinaryBanner';

export default CulinaryBanner;
