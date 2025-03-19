// Aboutone.jsx
import React, { memo } from "react";CD
import "./About.css";

const images = [
  { id: 'maggiebowl', src: () => import('../Images/Ingrdients/maggiebowl.jpg') },
  { id: 'fries', src: () => import('../Images/Ingrdients/fries.jpg') },
  { id: 'cholle', src: () => import('../Images/Ingrdients/cholle.jpg') },
  { id: 'panipuri', src: () => import('../Images/Ingrdients/panipuri.jpg') },
  { id: 'patashe', src: () => import('../Images/Ingrdients/patashe.jpg') },
  { id: 'chatore', src: () => import('../Images/Ingrdients/chatore.jpg') },
  { id: 'thandi', src: () => import('../Images/Ingrdients/thandi.jpg') },
  { id: 'kulfi', src: () => import('../Images/Ingrdients/kulfi.jpg') },
  { id: 'ice', src: () => import('../Images/Ingrdients/ice.jpg') },
  { id: 'icecream', src: () => import('../Images/Ingrdients/icecream.jpg') }
];

const WAVE_PATH = "M0,96 C150,150 350,0 600,100 C850,200 1050,0 1200,96 L1200,220 L0,220 Z";
const VIEW_BOX = "0 0 1200 220";

const Image = memo(({ src, index }) => (
  <img
    src={src}
    alt={`Dish ${index + 1}`}
    className={`image img${index + 1}`}
    loading="lazy"
    decoding="async"
  />
));

Image.displayName = 'Image';

const About = memo(() => {
  return (
    <div className="about-container">
      <div className="wave-section">
        <div className="wave-container">
          <div className="background-overlay">
          <h1 className="About-text">About Us</h1>
          </div>

          <svg
            className="wave-svg"
            viewBox={VIEW_BOX}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={WAVE_PATH} fill="#fff" />
          </svg>

          <div className="image-container">
            {images.map((image, index) => (
              <Image
                key={image.id}
                src={require(`../Images/Ingrdients/${image.id}.jpg`)}
                index={index}
                
              />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
