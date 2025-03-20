import React from "react";


import './Hacks.css'
import Garlics from "../Images/Garlics.jpeg";
import Bread from "../Images/bread.jpeg";
import Herbs from "../Images/herbs.jpeg";
import Onions from "../Images/Onion.jpeg";
import Banana from "../Images/banana.jpeg";
import Blender from "../Images/Blender.jpg";

const KitchenHacks = () => {
  const hacks = [
    { title: "Peel Garlic Easily", description: "Place a garlic bulb in a jar, shake it vigorously, and watch the cloves separate easily.", image: Garlics },
    { title: "Revive Stale Bread", description: "Sprinkle some water on stale bread and bake it at 350°F for 5-10 minutes to make it fresh again.", image: Bread},
    { title: "Keep Herbs Fresh", description: "Store fresh herbs in a glass of water and cover with a plastic bag to extend their shelf life.", image: Herbs },
    { title: "Prevent Onions from Making You Cry", description: "Chill onions in the freezer for 10 minutes before chopping to reduce irritation.", image: Onions },
    { title: "Ripen Bananas Quickly", description: "Bake unripe bananas at 300°F for 15-20 minutes to soften them instantly.", image: Banana },
     { title: "Clean a Blender Easily", description: "Fill your blender with warm water and a drop of dish soap, then blend for 30 seconds and rinse.", image: Blender }
  ];
  return (
    <div className="kitchen-hacks-container">
      <h1 className="kitchen-hacks-title">Kitchen Hacks</h1>
      <div className="hacks-grid">
        {hacks.map((hack, index) => (
          <div key={index} className="hack-card">
            <img src={hack.image} alt={hack.title} className="hack-image" />
            <h2 className="hack-title">{hack.title}</h2>
            <p className="hack-description">{hack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenHacks;