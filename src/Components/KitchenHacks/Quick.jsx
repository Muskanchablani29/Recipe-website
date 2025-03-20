import React from "react";
import "./Quick.css";
import Salty from "../Images/Salty.jpeg";
import Revivebread from "../Images/Revivebread.jpeg";
import sugar from "../Images/sugar.jpeg";
import Pastasiticking from "../Images/Pastasiticking.jpeg";
import Fruirt from "../Images/Fruirt.jpeg";
import Slipping from "../Images/Slipping.jpeg";


const QuickFix = () => {
  const fixes = [
    { title: "Fix Over-Salted Soup", description: "Add a raw potato to absorb excess salt, then remove it before serving.", image: Salty },
    { title: "Revive Stale Bread", description: "Sprinkle some water on the bread and warm it in the oven for a few minutes.", image: Revivebread },
    { title: "Soften Hardened Brown Sugar", description: "Place a damp paper towel in the container and microwave for 20 seconds.", image: sugar },
    { title: "Prevent Pasta from Sticking", description: "Add a little olive oil to the boiling water before adding pasta.", image: Pastasiticking },
    { title: "Ripen Fruit Faster", description: "Place unripe fruit in a paper bag with a banana overnight.", image: Fruirt },
    { title: "Stop Cutting Board from Slipping", description: "Place a damp towel under your cutting board to keep it stable while chopping.", image:Slipping}
  ];

  return (
    <div className="quickfix-container">
      <h1 className="quickfix-title">Quick Fixes</h1>
      <div className="fixes-grid">
        {fixes.map((fix, index) => (
          <div key={index} className="fix-card">
            <img src={fix.image} alt={fix.title} className="fix-image" />
            <h2 className="fix-title">{fix.title}</h2>
            <p className="fix-description">{fix.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickFix;