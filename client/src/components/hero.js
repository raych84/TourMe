import React from "react";
import "../styles/Hero.css"
import Searchbar from "./Searchbar";


function Hero() {
  return (


    <div className="hero-image">

      <div className="hero-text">

        <h1>
          DISCOVER THE UNDISCOVERED
         </h1>
        <Searchbar />
      </div>

    </div>

  );
}


export default Hero;