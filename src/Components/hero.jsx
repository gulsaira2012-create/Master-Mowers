import React from 'react';
import '../style/hero.css';
import HeroImage from "../assets/hero.jpg"
const HeroSection = () => {
  return (
    <section className="hero-section">
       <div className="bg"></div>
      <div className="content">
        <div className="text-content">
          <h1 className="title">Transform Your Space with Premium Tiling Services</h1>
          <p className="subtitle">Transforming Spaces with Quality Tiling Solutions</p>
          <button className="cta-button">Get a Free Quote</button>
        </div>
        <div className="image-content">
          <img className="hero-image" src={HeroImage} alt="Bedroom with premium tiling" />
          <div className="orientation-text">Book an orientation with <strong>Zuhak Tiling</strong></div>
        </div>
       
      </div>
      
    </section>
  );
};

export default HeroSection;
