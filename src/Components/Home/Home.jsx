import React from "react";
import "./Home.css";
import HomePage from "./Homepage/Home";
import HomeChallenge from "./Homepage/Homechallenge";
import HomeChef from "./Homepage/Chef";
import Whyus from './Homepage/Whyus';
import Jhatpat from './Homepage/Jhathpat';
function Home() {
    return (
      <>
      <HomePage />
      <HomeChallenge />
      <HomeChef />
      <Whyus />
      <Jhatpat />
      </>
    );
  }
  
  export default Home;
  