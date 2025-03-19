import React from "react";
import './States.css'

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Curved Background with SVG */}
      <div className="absolute top-0 Left-0 w-2/3 h-2/3 -z-10">
      <h1>About us</h1>

<div className="kirti">
  
</div>

        <svg
          viewBox="0 0 500 200"
          preserveAspectRatio="xMinYMin meet"
          className="absolute top-0 right-0 w-full h-full"
        >
          <path d="M0,100 Q150,200 300,100 T600,100 L600,600 L0,600 Z" fill="#ff7f11" />
        </svg>
      </div>

      

      

     
      
     
    </div>
  );
};

export default HomePage;
