import React from "react";
import { useNavigate } from 'react-router-dom';
import heroImage from "../assets/tilerImg.png"

import overlay from "../assets/heroVer2.jpg"
import { BsBricks } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";

import "../style/heroVer2.css"




export default function HeroVer2(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/AboutUs');
    };
  
    return (
    <div className="hero-container-new">
        <div className="text-content-new">
        <p className="hero-subtitle-new">welcome to <span className="color-change">Master Tilers Perth</span></p>
            <h1 className="hero-title-new">Transform Your Space with Premium Tiling Services</h1>
            <button className="cta-button-new" onClick={handleClick}>Get to know more</button>
        </div>
        {/* <div className="image-content-new">
            <img src={heroImage} alt="Tiling service in action" className="side-image-new"/>
        </div> */}
        <div className="right-content-container">
      <img src={heroImage} alt="Tile Worker" className="hero-image1" />
      <div className="label top-left">
      <GrUserWorker className="large-icon"/><br></br><span>Expert Craftsmanship</span>
      </div>
      <div className="label bottom-right">
      <BsBricks className="large-icon"/><br></br>
        <span>Premiume Materials</span>
      </div>
    </div>
      <img src={overlay} alt="Tiling service in action" className="hero-overlay"/>
      
    </div>
    )
}