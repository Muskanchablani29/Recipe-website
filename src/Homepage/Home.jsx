import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";

// Import images
import Chilli from "../ImageHome/Chilli.png";
import Tomato from "../ImageHome/tomato.png";
import Onion from "../ImageHome/Onion.webp";
import Garlic from "../ImageHome/Garlic.webp";
import Paneer from "../ImageHome/Paneer.png";
import Broccoli from "../ImageHome/broccoli.png";
import Cucumber from "../ImageHome/Cucumber.webp";
import Finalimage from "../ImageHome/Finalimage.png";
import Finalimage2 from "../ImageHome/Finalimage2.webp";
const SteamEffect = () => {
  const steamRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    steamRefs.forEach((ref, index) => {
      gsap.to(ref.current, {
        y: -100,
        opacity: 0,
        repeat: -1,
        duration: 3,
        ease: "power1.inOut",
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div style={{ position: "absolute", top: "-50px", left: "50%", transform: "translateX(-50%)" }}>
      {steamRefs.map((ref, index) => (
        <div
          key={index}
          ref={ref}
          style={{
            width: "40px",
            height: "80px",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0) 80%)",
            opacity: 0.8,
            position: "absolute",
          }}
        ></div>
      ))}
    </div>
  );
};
// Floating ingredient component
const FloatingIngredient = ({ src, style }) => {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return <img ref={ref} src={src} alt="ingredient" className="floating" style={style} />;
};

// Main component
const Home = () => {
  return (
    <div className="home">
      {/* Floating Ingredients */}
      <FloatingIngredient src={Tomato} style={{ top: "10%", left: "2%" }} />
      <FloatingIngredient src={Broccoli} style={{ top: "30%", right: "5%" }} />
      <FloatingIngredient src={Onion} style={{ bottom: "10%", left: "5%" }} />
      <FloatingIngredient src={Garlic} style={{ bottom: "20%", right: "10%" }} />

      {/* Background and Text */}
      <div className="content">
        <h1 className="title">HEALTHY MOMMY RECIPES</h1>
        <p className="subtitle">5 Recipes Home Made For Mommy</p>
      </div>

      {/* Decorative White Strokes */}
      <div className="strokes stroke1"></div>
      <div className="strokes stroke2"></div>

      {/* Final Dish Images */}
      <img src={Finalimage} className="bowl bowl1" alt="Bowl 1" />
      <img src={Finalimage2} className="bowl bowl2" alt="Bowl 2" />
    </div>
  );
};

export default Home;
