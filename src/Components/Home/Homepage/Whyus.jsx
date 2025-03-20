// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Whyus.css";
import oip from "../Whyusimg/opi.jpeg";
import Oip2 from "../Whyusimg/OIP2.jpeg";
import oip4 from "../Whyusimg/oip4.jpg";
import oip5 from "../Whyusimg/OIP5.jpeg";
import oip6 from "../Whyusimg/chefbot-gpt.webp";

const content = [
  { image: oip, title: "A Recipe for Everyone" },
  { image: Oip2, title: "Fun Meets Flavor" },
  { image: oip4, title: "Heritage with a Twist" },
  { image: oip5, title: "Quick, Easy, and Smart" },
  { image: oip6, title: "Interactive and Innovative" },
];

const HeroSection = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="hero-section">
      {/* Diagonal Wave Backgrounds */}
      <div className="wave-container">
        {/* First Wave */}
        <svg 
          className="svg-background wave1" 
          viewBox="0 0 1440 800" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            fill="none"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1440,0 Q1200,200 1000,400 T500,600 T0,800"
          />
        </svg>
        
        {/* Second Wave */}
        <svg 
          className="svg-background wave2" 
          viewBox="0 0 1440 800" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            fill="none"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1440,50 Q1200,250 1000,450 T500,650 T0,850"
          />
        </svg>
      </div>

      {/* Heading with Animation */}
      <motion.h1
        className="hero-heading-choose"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        Why Choose Us?
      </motion.h1>

      {/* Images Grid with Animations */}
      <motion.div 
        className="hero-images"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {content.map((item, index) => (
          <motion.div
            className="image-container-whyus"
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="animated-image"
              initial={{ borderRadius: "40px" }}
              whileHover={{ 
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
              }}
            />
            <motion.p 
              className="image-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
