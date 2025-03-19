import React, { useState, useEffect } from "react";
import VideoGrid from "./SearchRecipes/VideoGrid";
import "./SearchDish.css";
import { FiSearch } from "react-icons/fi";
import { Sliders, XCircle } from "lucide-react";

export default function SearchDish() {
  const [dishName, setDishName] = useState("");
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeMeal, setActiveMeal] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    duration: "",
    rating: "",
    views: "",
  });

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // Fetch Videos
  const handleSearch = async (mealType = "") => {
    if (!dishName.trim()) return;

    try {
      let query = `${dishName} ${mealType} recipe`;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}&maxResults=10`
      );
      const data = await response.json();

      if (data.items?.length > 0) {
        setVideos(data.items);
        setFilteredVideos(data.items);
      } else {
        setVideos([]);
        setFilteredVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Handle Meal Type Selection
  const handleMealTypeClick = (type) => {
    setActiveMeal(type);
    handleSearch(type);
  };

  // Toggle Filter Visibility
  const toggleFilters = () => setShowFilters(!showFilters);

  // Apply Filters
  const applyFilters = () => {
    let filtered = [...videos];

    // Filter by duration
    if (filters.duration) {
      filtered = filtered.filter((video) => {
        const duration = parseInt(video.snippet.title.match(/\d+/g)?.[0] || "0");
        if (filters.duration === "short" && duration <= 10) return true;
        if (filters.duration === "medium" && duration > 10 && duration <= 30) return true;
        if (filters.duration === "long" && duration > 30) return true;
        return false;
      });
    }

    // Filter by views (mock views here for demo purpose)
    if (filters.views === "highest") {
      filtered = filtered.slice().sort(() => Math.random() - 0.5); // Simulate highest views
    }

    // Filter by rating (mock rating logic here)
    if (filters.rating === "highest") {
      filtered = filtered.slice().reverse(); // Simulate rating filter
    }

    setFilteredVideos(filtered.slice(0, 4)); // Limit to 3 or 4 after filtering
  };

  // Clear Filters
  const clearFilters = () => {
    setFilteredVideos(videos);
    setFilters({
      duration: "",
      rating: "",
      views: "",
    });
  };

  // Handle Video Select to Show on Top
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="search-container">
      {/* Search Bar */}
      <div className="search-header">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by food name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(activeMeal)}
          />
        </div>
      </div>

      {/* Meal Type Options */}
      <div className="meal-type-options">
        {["Breakfast", "Lunch", "Dinner"].map((meal) => (
          <button
            key={meal}
            className={`meal-btn ${activeMeal === meal ? "active" : ""}`}
            onClick={() => handleMealTypeClick(meal)}
          >
            {meal}
          </button>
        ))}
      </div>

      {/* Filter Button */}
      <div className="filter-toggle">
        <button className="filter-btn" onClick={toggleFilters}>
          <Sliders size={20} /> {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {filteredVideos.length < videos.length && (
          <button className="clear-btn" onClick={clearFilters}>
            <XCircle size={20} /> Remove Filters
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="filter-options">
          <select
            value={filters.duration}
            onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
          >
            <option value="">Select Duration</option>
            <option value="short">Short (≤ 10 min)</option>
            <option value="medium">Medium (10 - 30 min)</option>
            <option value="long">Long (≥ 30 min)</option>
          </select>

          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          >
            <option value="">Sort by Rating</option>
            <option value="highest">Highest to Lowest</option>
          </select>

          <select
            value={filters.views}
            onChange={(e) => setFilters({ ...filters, views: e.target.value })}
          >
            <option value="">Sort by Views</option>
            <option value="highest">Most Views</option>
          </select>

          <button className="apply-btn" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      )}

      {/* Selected Video Embed */}
      {selectedVideo && (
        <div className="selected-video-container">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title={selectedVideo.snippet.title}
            className="selected-video"
            allowFullScreen
          />
        </div>
      )}

      {/* Video Grid */}
      <VideoGrid videos={filteredVideos} handleVideoSelect={handleVideoSelect} />
    </div>
  );
}
