import React, { useState, useEffect } from "react";
import "./ChallengeZone.css";
import dishImage from "../Revalimage/dish.png"; // Your uploaded image

export default function Homechallenge() {
  const [confetti, setConfetti] = useState([]);
  const [fireworks, setFireworks] = useState([]);
  const [balloons, setBalloons] = useState([]);

  // Generate Confetti
  const generateConfetti = () => {
    const confettiArray = [];
    for (let i = 0; i < 50; i++) {
      confettiArray.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: `${Math.random() * 10 + 5}px`
      });
    }
    setConfetti(confettiArray);
  };

  // Generate Fireworks
  const generateFireworks = () => {
    const fireworkArray = [];
    for (let i = 0; i < 5; i++) {
      fireworkArray.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 50}vh`,
        size: `${Math.random() * 40 + 20}px`
      });
    }
    setFireworks(fireworkArray);
  };

  // Generate Balloons
  const generateBalloons = () => {
    const balloonArray = [];
    for (let i = 0; i < 10; i++) {
      balloonArray.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
      });
    }
    setBalloons(balloonArray);
  };

  useEffect(() => {
    generateConfetti();
    generateFireworks();
    generateBalloons();

    const confettiInterval = setInterval(generateConfetti, 3000);
    const fireworksInterval = setInterval(generateFireworks, 5000);
    const balloonInterval = setInterval(generateBalloons, 7000);

    return () => {
      clearInterval(confettiInterval);
      clearInterval(fireworksInterval);
      clearInterval(balloonInterval);
    };
  }, []);

  return (
    <div className="fun-zone-container">
      <h1 className="title-funzone">🎉 Welcome to the Fun Zone! 🎉</h1>

      <div className="spin-wheel">
        <img src={dishImage} alt="Spin Wheel" className="wheel-image" />
      </div>

      <button className="spin-button-home">🎡 Spin the Wheel!</button>

      <div className="fun-buttons">
        <button className="fun-button">🔥 Mystery Challenge</button>
        <button className="fun-button">🍳 Cooking Challenge</button>
      </div>

      <p className="fun-tagline">"Let the wheel decide your next adventure! 🌟"</p>

      {/* Confetti */}
      <div className="confetti-container">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="confetti"
            style={{
              left: piece.left,
              animationDuration: piece.animationDuration,
              backgroundColor: piece.backgroundColor,
              width: piece.size,
              height: piece.size
            }}
          ></div>
        ))}
      </div>

      {/* Fireworks */}
      <div className="fireworks-container">
        {fireworks.map((firework) => (
          <div
            key={firework.id}
            className="firework"
            style={{
              left: firework.left,
              top: firework.top,
              width: firework.size,
              height: firework.size
            }}
          ></div>
        ))}
      </div>

      {/* Balloons */}
      <div className="balloon-container">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="balloon"
            style={{
              left: balloon.left,
              animationDuration: balloon.animationDuration,
              backgroundColor: balloon.color
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}