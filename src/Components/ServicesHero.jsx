import React from "react";
import "../style/serviceHero.css";
import { NavLink } from "react-router-dom";

export default function ServiceHero(){
    return(
        <div className="serviceHero-bg">
        <div className="serviceHero-container">
        <h1>Our <span className='red'>Services</span></h1>
        <p><NavLink to="/" className="link">Home</NavLink>/Services /Kitchen</p>
        </div>
      </div>
    )
}