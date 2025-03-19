import React from 'react';
import './SmartChef.css';

const RecipeDisplay = ({ recipe, selectedDish, type, onNextStep, currentStep, totalSteps }) => {
  // Add console.log to debug the incoming data
  console.log('Recipe Data:', recipe);
  console.log('Type:', type);

  if (type === 'Full Recipe') {
    if (!recipe?.fullRecipe) {
      return <div className="recipe-display error">
        <p>Full recipe details are not available.</p>
      </div>;
    }

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
      <div className="recipe-display">
        <h4>{selectedDish}</h4>
        <div className="step-display">
          <p>Step {currentStep + 1} of {totalSteps}</p>
          <p>{recipe.steps[currentStep]}</p>
          {currentStep < totalSteps - 1 && (
            <button onClick={onNextStep} className="next-step-button">
              Next Step
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="recipe-display">
        <h4>{selectedDish}</h4>
        <div className="full-recipe">
          {recipe.fullRecipe}
        </div>
      </div>
    );
  }
};

export default React.memo(RecipeDisplay);

