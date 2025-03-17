import React from "react";
import "./Jhatpatone.css";
import mainImage from "../Home/Jhatpatimg/Jhatpat1.jpg"; // Replace with actual image path
import smallImage from "../Home/ImageHome/tomato.png"; // Replace with actual image path

const JhatpatTopPage = () => {
  return (
    <div className="jhatpat-top-container">
      <div className="jhatpat-content">
        <h2>
          Explore <span className="highlight">Jhatpat Recipes</span>
        </h2>
      </div>
      <div className="jhatpat-images">
        <img src={smallImage} alt="Small Dish" className="small-img" />
        <img src={mainImage} alt="Delicious Dish" className="main-img" />
      </div>
    </div>
  );
};

export default JhatpatTopPage;
