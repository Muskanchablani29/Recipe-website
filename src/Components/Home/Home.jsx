import React from "react";
import "./Home.css";

function Home() {
    return (
      <div className="page-container">
        <div className="hero-section">
          <h1>Welcome to Our Recipe Website</h1>
          <p>Discover amazing recipes and cooking tips</p>
        </div>
  
        <div className="content-section">
          <h2>Featured Recipes</h2>
          <div className="grid-container">
            {/* Add your recipe cards here */}
          </div>
        </div>
  
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Recipes</div>
          </div>
          {/* Add more stats */}
        </div>
  
        <div className="cta-section">
          <h2>Ready to Start Cooking?</h2>
          <p>Join our community and share your recipes</p>
          <a href="#" className="cta-button">Get Started</a>
        </div>
      </div>
    );
  }
  
  export default Home;
  