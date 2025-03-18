// SearchDish.jsx
import React, { useState } from "react";
import "./SearchDish.css";

export default function SearchDish({ goBack }) {
  const [dishName, setDishName] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("API Key available:", !!process.env.REACT_APP_YOUTUBE_API_KEY);

  // Make sure you have this in your .env file
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!API_KEY) {
      setError("YouTube API key is missing. Please check your environment variables.");
      return;
    }

    if (dishName.trim() === "") {
      setError("Please enter a dish name.");
      return;
    }

    setLoading(true);
    setError(null);
    setVideos([]);

    try {
      const searchQuery = encodeURIComponent(`${dishName} recipe cooking`);
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${searchQuery}&type=video&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "YouTube API error");
      }

      if (data.items && data.items.length > 0) {
        setVideos(data.items);
      } else {
        setError("No videos found for this recipe.");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError(`Failed to fetch videos: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <h2>Find Your Favorite Recipe Videos</h2>
        
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Search for any recipe..."
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" disabled={loading} className="search-button">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Searching for delicious recipes...</div>}

        {videos.length > 0 && (
          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id.videoId} className="video-card">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <div className="thumbnail-container">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="video-thumbnail"
                    />
                    <div className="play-icon">▶</div>
                  </div>
                  <div className="video-info">
                    <h3>{video.snippet.title}</h3>
                    <p className="channel-name">{video.snippet.channelTitle}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}

        <button onClick={goBack} className="back-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}
