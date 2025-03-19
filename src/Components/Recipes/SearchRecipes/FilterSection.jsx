// /components/FilterSection/FilterSection.jsx
import React, { useState } from "react";
import "./FilterSection.css";

export default function FilterSection({ resetFilters }) {
  const [selectedCategory, setSelectedCategory] = useState("Popular");
  const [selectedMealType, setSelectedMealType] = useState("All");

  return (
    <div className="filter-section">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="filter-dropdown"
      >
        <option value="Popular">Popular</option>
        <option value="Newest">Newest</option>
        <option value="Top Rated">Top Rated</option>
      </select>

      <select
        value={selectedMealType}
        onChange={(e) => setSelectedMealType(e.target.value)}
        className="filter-dropdown"
      >
        <option value="All">All Meal Types</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>

      <button onClick={resetFilters} className="filter-button">
        Reset Filters
      </button>
    </div>
  );
}
