import React from "react";
import step1 from "../Revalimage/Search.jpg";
import step2 from "../Revalimage/filters.webp";
import step3 from "../Revalimage/select.png";
import step4 from "../Revalimage/meal.jpeg";
import "./Step.css"; // Import CSS

export default function Step() {
  const steps = [
    { id: 1, image: step1, title: "Search the recipe", arcPosition: "bottom" },
    { id: 2, image: step2, title: "Filter according", arcPosition: "top" },
    { id: 3, image: step3, title: "Select your dish", arcPosition: "bottom" },
    { id: 4, image: step4, title: "Enjoy Your Meal", arcPosition: "top" },
  ];

  return (
    <div className="step-container">
      <h2 className="step-title">How it Work</h2>
      <div className="underline"></div>

      <div className="steps-wrapper">
        {steps.map((step) => (
          <div key={step.id} className={`step-box ${step.arcPosition}`}>
            {/* Arc */}
            <div className="arc">
              <div className="step-number">{step.id}</div>
            </div>

            {/* Show text above image for steps 3 & 4 */}
            {(step.id === 3 || step.id === 4) && <h3 className="step-text">{step.title}</h3>}

            {/* Step Image */}
            <div className="step-image">
              <img src={step.image} alt={step.title} />
            </div>

            {/* Show text below image for steps 1 & 2 */}
            {(step.id === 1 || step.id === 2) && <h3 className="step-text">{step.title}</h3>}
          </div>
        ))}
      </div>
    </div>
  );
}