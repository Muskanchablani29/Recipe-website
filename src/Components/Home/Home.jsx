import React from "react";
import "./Home.css";
import HomePage from "./Homepage/Home";
import HomeChallenge from "./Homepage/Homechallenge";
import Step from './Homepage/Step'
import HomeChef from "./Homepage/Chef";
import Whyus from './Homepage/Whyus';
import Jhatpat from './Homepage/Jhathpat';
function Home() {
    return (
      <>
      <HomePage/>
    <Step/>
      <HomeChallenge />
      <Jhatpat />
      
      <Whyus />
      <HomeChef />
      </>
    );
  }
  
  export default Home;
  