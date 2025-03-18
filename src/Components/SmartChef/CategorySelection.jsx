import React from 'react';
import './SmartChef.css';

const CategorySelection = ({ categories, onCategorySelect }) => {
  return (
    <div className="options-container">
      <h4>Select a category:</h4>
      <div className="category-buttons">
        {Object.keys(categories).map(category => (
          <button 
            key={category} 
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CategorySelection);
