import React from "react";
import "./VideoGrid.css";

export default function VideoGrid({ videos = [], handleVideoSelect }) {
  if (!Array.isArray(videos) || videos.length === 0) {
    return <div className="no-results">No videos found. Try another search!</div>;
  }

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div
          key={video.id?.videoId || video.id}
          className="video-card"
          onClick={() => handleVideoSelect(video)}
        >
          <img
            src={video.snippet?.thumbnails?.medium?.url || ""}
            alt={video.snippet?.title || "Video"}
            className="video-thumbnail"
          />
          <h4>{video.snippet?.title || "No title available"}</h4>
        </div>
      ))}
    </div>
  );
}
