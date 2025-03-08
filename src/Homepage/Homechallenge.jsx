import React, { useState } from "react";
import "./ChallengeZone.css";
import { motion } from "framer-motion";
import { FaGamepad, FaSpinner, FaUtensils } from "react-icons/fa";

const challenges = [
  {
    title: "Dot Game",
    description: "Connect the dots and score big!",
    icon: <FaGamepad size={40} />, // Icon
    action: "Dot Game Coming Soon!",
  },
  {
    title: "Mystery Challenge",
    description: "Take on a surprise challenge!",
    icon: <FaSpinner size={40} />, // Icon
    action: "Spin the Wheel Coming Soon!",
  },
  {
    title: "Cooking Challenge",
    description: "Create magic with mystery ingredients.",
    icon: <FaUtensils size={40} />, // Icon
    action: "Cooking Challenge Coming Soon!",
  },
];

const ChallengeZone = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="challenge-zone" className="challenge-zone">
      <h2 className="zone-title">Khao Khelo Challenge Zone</h2>
      <div className="challenge-container">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            className={`card ${selected === index ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(index)}
          >
            <div className="icon">{challenge.icon}</div>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            {selected === index && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => alert(challenge.action)}
              >
                Play Now
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeZone;