import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "./Funone.css";

const KheloKhaoSection = () => {
  const navigate = useNavigate();
  const challenges = [
    { name: "Dot Game", path: "/dot-game", icon: "🎯", description: "Sharpen your reflexes and accuracy in the dot game challenge!" },
    { name: "Mystery Box", path: "/mystery-box", icon: "🕵️", description: "Uncover the secrets hidden within the mystery box!" },
    { name: "Cooking Challenge", path: "/cooking-challenge", icon: "🍳", description: "Test your culinary skills with exciting cooking tasks!" },
  ];

  return (
    <div className="khelo-khao-container">
      <div className="khelo-khao-content">
        <div className="khelo-khao-grid">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="khelo-khao-card"
              onClick={() => navigate(challenge.path)}
            >
              <div className="khelo-khao-icon">{challenge.icon}</div>
              <h3 className="khelo-khao-name">{challenge.name}</h3>
              <p className="khelo-khao-description">{challenge.description}</p>
              <div className="khelo-khao-arrow">➡️</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KheloKhaoSection;
