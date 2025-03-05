import React from "react";
import ContactContainer from "../components/templates/ContactContainer";
import HeroContainer from "../components/templates/HeroContainer"
import AboutContainer from "../components/templates/AboutContainer"
import Navbar from "../components/templates/NavBar";
import Footer from "../components/templates/Footer";
import "../css/founderview.css";

function FounderView() {
  return (
    <div className="user-founder-container">
      <Navbar />
      <div className="user-founder-wrapper">
        <HeroContainer />
        <AboutContainer />
        <ContactContainer />
      </div>
      <div className="container3">
        <Footer />
      </div>
    </div>
  );
}

export default FounderView;
