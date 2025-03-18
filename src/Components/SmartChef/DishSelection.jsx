import React from 'react';
import './SmartChef.css';

const DishSelection = ({ category, dishes, onDishSelect }) => {
  return (
    <div className="options-container">
      <h4>Here are all dishes in {category}:</h4>
      <div className="dishes-grid">
        {dishes.map(dish => (
          <button
            key={dish}
            className="dish-button"
            onClick={() => onDishSelect(dish)}
          >
            {dish}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DishSelection);
