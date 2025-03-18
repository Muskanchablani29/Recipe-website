import React from 'react';
import './SmartChef.css';

const RecipeDisplay = ({ recipe, selectedDish, type, onNextStep, currentStep }) => {
  if (type === 'Full Recipe') {
    return (
      <div className="recipe-display">
        <h3>{selectedDish}</h3>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.fullRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4>Instructions:</h4>
        <ol>
          {recipe.fullRecipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  }

  if (type === 'Step by Step') {
    return (
      <div className="step-display">
        <h4>Step {currentStep + 1} of {recipe.steps.length}:</h4>
        <p>{recipe.steps[currentStep]}</p>
        {currentStep < recipe.steps.length - 1 && (
          <button 
            className="next-step-button" 
            onClick={onNextStep}
          >
            Next Step →
          </button>
        )}
        {currentStep === recipe.steps.length - 1 && (
          <div className="recipe-complete">
            <p>🎉 Recipe completed! Enjoy your {selectedDish}!</p>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default React.memo(RecipeDisplay);
