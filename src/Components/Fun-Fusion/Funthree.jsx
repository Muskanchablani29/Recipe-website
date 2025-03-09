import React from 'react'
import image1 from "./Jhatpat-recipes/image1.png"
import image2 from "./Jhatpat-recipes/image2.png"
import image3 from "./Jhatpat-recipes/image3.png"
import image4 from "./Jhatpat-recipes/image4.png"
import image5 from "./Jhatpat-recipes/image5.png"
import image6 from "./Jhatpat-recipes/image6.png"
import image7 from "./Jhatpat-recipes/image7.png"
import image8 from "./Jhatpat-recipes/image8.png"
import "./Funthree.css"

export default function Funthree() {
  return (
    <>
    <div className="jhatpat-recipe">
      <div className="jhatpat-recipe-container">
        <div className="images">
          <div className="image">
            <img src={image1} alt="" />
          </div>
          <div className="image">
            <img src={image2} alt="" />
          </div>
          <div className="image">
            <img src={image3} alt="" />
          </div>
          <div className="image">
            <img src={image4} alt="" />
          </div>
          <div className="image">
            <img src={image5} alt="" />
          </div>
          <div className="image">
            <img src={image6} alt="" />
          </div>
          <div className="image">
            <img src={image7} alt="" />
          </div>
          <div className="image">
            <img src={image8} alt="" />
          </div>
        </div>
        <div className="jhatpat-recipe-content">
          <h2 className="jhatpat-recipe-title">Jhatpat Recipe</h2>
          <p className="jhatpat-recipe-description">
            Running out of time? Try our quick and easy recipes that will save you time without compromising on taste. 
            From 5-minute snacks to 30-minute meals, we've got you covered. 
            Let's make cooking fun and hassle-free!
          </p>
          <button className="jhatpat-recipe-cta">Discover Quick Recipes</button>
        </div>
      </div>
    </div>
    </>
  )
}
