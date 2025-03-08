import React from "react";
import { motion } from "framer-motion";
import "./Funtwo.css";

const FunFusionHeader = () => {
  return (
    <div className="fun-fusion-container">
      <motion.h1 
        className="fun-fusion-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🎉 Welcome to Fun Fusion! 🎉
      </motion.h1>
      <motion.p 
        className="fun-fusion-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Play, Cook & Enjoy with Khelo Khao Jathpat Challenges & Kitchen Jugaad Recipes!
      </motion.p>
      <div className="fun-fusion-content">
        <motion.div 
          className="fun-fusion-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="fun-fusion-section-title">🌟 What is Fun Fusion?</h2>
          <p className="fun-fusion-text">
            Step into an exciting world of quick cooking challenges and creative kitchen hacks!
            Whether you love experimenting with mystery ingredients or discovering time-saving tricks, this is for you!
          </p>
        </motion.div>

        <motion.div 
          className="fun-fusion-box"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="fun-fusion-section-title">🔥 What Can You Do Here?</h2>
          <ul className="fun-fusion-list">
            <li><strong>Khelo Khao Jathpat Challenges</strong> – Play interactive cooking games & challenges!</li>
            <li><strong>Kitchen Jugaad Recipes</strong> – Explore smart and creative recipe hacks!</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FunFusionHeader;
