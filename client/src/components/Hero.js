import React from "react";
import "../styles/Hero.css"
import SearchBar from "../pages/SearchBar";


function Hero() {
  return (


    <div className="hero-image">

      <div className="hero-text">

        <h1>
          DISCOVER THE UNDISCOVERED
         </h1>
        <SearchBar />
      </div>

    </div>

  );
}


export default Hero;
