import React, { memo } from "react";
import "./About.css";
import maggiebowl from '../Images/Ingrdients/maggiebowl.jpg';
import fries from '../Images/Ingrdients/fries.jpg';
import cholle from '../Images/Ingrdients/cholle.jpg';
import panipuri from '../Images/Ingrdients/panipuri.jpg';
import patashe from '../Images/Ingrdients/patashe.jpg';
import chatore from '../Images/Ingrdients/chatore.jpg';
import thandi from '../Images/Ingrdients/thandi.jpg';
import kulfi from '../Images/Ingrdients/kulfi.jpg';
import ice from '../Images/Ingrdients/ice.jpg';
import icecream from '../Images/Ingrdients/icecream.jpg';

const images = [
  { id: 'maggiebowl', src: maggiebowl },
  { id: 'fries', src: fries },
  { id: 'cholle', src: cholle },
  { id: 'panipuri', src: panipuri },
  { id: 'patashe', src: patashe },
  { id: 'chatore', src: chatore },
  { id: 'thandi', src: thandi },
  { id: 'kulfi', src: kulfi },
  { id: 'ice', src: ice },
  { id: 'icecream', src: icecream }
];

const WAVE_PATH = "M0,96 C150,150 350,0 600,100 C850,200 1050,0 1200,96 L1200,220 L0,220 Z";
const VIEW_BOX = "0 0 1200 220";

const Image = memo(({ src, index }) => (
  <img
    src={src}
    alt={`Dish ${index + 1}`}
    className={`image-kirti img-kirti${index + 1}`}
    loading="lazy"
    decoding="async"
  />
));

Image.displayName = 'Image';

const About = memo(() => {
  return (
    <div className="about-container-kirti">
      <div className="wave-section-kirti">
        <div className="wave-container-kirti">
          <div className="background-overlay-kirti">
            <h1 className="About-text-kirti">About Us</h1>
          </div>

          <svg
            className="wave-svg-kirti"
            viewBox={VIEW_BOX}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={WAVE_PATH} fill="#fff" />
          </svg>

          <div className="image-container-kirti">
            {images.map((image, index) => (
              <Image
                key={image.id}
                src={image.src}
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