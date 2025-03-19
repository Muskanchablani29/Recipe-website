// /components/SearchBox/SearchBox.jsx
import React from "react";
import "./SearchBox.css";

export default function SearchBox({ dishName, setDishName, handleSearch, loading }) {
  return (
    <div className="search-section">
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Search for any recipe..."
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
        <button type="submit" disabled={loading} className="search-button">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
}
