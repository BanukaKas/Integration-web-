import React from "react";
import heroImg from "../../assets/heroBanner.png";

function HeroContainer() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p>Founder's view</p>
      </div>
      <div className="hero-img">
        <img src={heroImg} />
      </div>
    </div>
  );
}

export default HeroContainer;
