import React from "react";
import "./Tips.css";
import Store from '../Images/Store.jpeg';
import whitle from '../Images/whitle.jpeg';
import onionstore from '../Images/onionstore.jpeg';
import Brown from '../Images/Brown.jpeg';
import Spice from '../Images/Spices.jpeg';
import Nuts from '../Images/Nuts.jpeg';


const IngredientTips = () => {
  const tips = [
    { title: "Storing Fresh Herbs", description: "Wrap fresh herbs in a damp paper towel and store in an airtight container to keep them fresh longer.", image: Store },
    { title: "Reviving Wilted Greens", description: "Soak wilted greens in ice water for 10 minutes to restore their crispness.", image: whitle },
    { title: "Keeping Onions Fresh", description: "Store onions in a cool, dry place with good air circulation to prevent sprouting.", image: onionstore },
    { title: "Preventing Brown Sugar from Hardening", description: "Place a slice of bread or an apple slice in the container to keep brown sugar soft.", image: Brown },
    { title: "Extending Shelf Life of Spices", description: "Store spices in a cool, dark place away from heat and moisture to maintain their potency.", image: Spice },
    { title: "Keeping Nuts Fresh", description: "Store nuts in the freezer to prevent them from going rancid and maintain their freshness.", image: Nuts },
  ];

  return (
    <div className="ingredient-tips-container">
      <h1 className="ingredient-tips-title">Ingredient Tips</h1>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <img src={tip.image} alt={tip.title} className="tip-image" />
            <h2 className="tip-title">{tip.title}</h2>
            <p className="tip-description">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientTips;