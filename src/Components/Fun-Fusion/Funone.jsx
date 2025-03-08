import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Funone.css";

const KheloKhaoSection = () => {
  const challenges = [
    { name: "Dot Spinner Game", path: "/dot-spinner", icon: "🎯" },
    { name: "Mystery Challenge", path: "/mystery-challenge", icon: "🕵️" },
    { name: "Cooking Challenge", path: "/cooking-challenge", icon: "🍳" },
  ];

  return (
    <div className="khelo-khao-container">
      <div className="khelo-khao-content">
        <h2 className="khelo-khao-title">Khelo Khao Challenges</h2>
        <div className="khelo-khao-grid">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="khelo-khao-card"
            >
              <div className="khelo-khao-icon">{challenge.icon}</div>
              <h3 className="khelo-khao-name">{challenge.name}</h3>
              <Link to={challenge.path} className="khelo-khao-button">
                Play Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KheloKhaoSection;
