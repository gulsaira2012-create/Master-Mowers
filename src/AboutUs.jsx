import React from "react"
import { NavLink } from "react-router-dom"

import Navbar from "./Components/navbar"
import ChooseUs from "./Components/chooseUs"
import GetInTouch from "./Components/getInTouch"
import Footer from "./Components/footer"
import AboutUs from "./Components/about"
import StatusSection from "./Components/status";
import Testimonial from "./Components/testimonial";

import About2 from "./assets/about2.jpg"

import "./style/aboutus.css"

export default function About(){
    return(
        <>
        <Navbar/>
        <div className="about-us-bg">
            <div className="about-hero-container">
                <h1>About <span className='red'>Us</span></h1>
                <p><NavLink to="/" className="link">Home</NavLink>/About Us</p>
            </div>
        </div>
        
        <section className="about-page">
     
      <AboutUs/>
        <ChooseUs/>
           <div className="aboutus-content">
            
            <div className="about-us-text">
                <h1 className="mainTitle">Premium Tiling at Competitive Prices, No Quality Sacrificed</h1>
                <p className="about-description">
                Experience top-notch tiling services that combine affordability with excellence. We believe in delivering premium quality without cutting corners, ensuring that you receive the best value for your investment. Whether it's a small home project or a large commercial space, our commitment to quality remains unwavering, all while offering competitive prices that suit your budget. With us, you get the perfect blend of cost-effectiveness and superior craftsmanship.
                </p>
            </div>
            <img src="https://images.unsplash.com/photo-1637269820082-d4ad72e2ad75?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Main" className="about-main-image" />
      </div>
      <h1 className="work-process">Our Work Process</h1>
      <div className="grids">
        <div className="tile">
            <h3>Initial Consultation</h3>
            <p>We begin by understanding your vision, needs, and preferences during an in-depth consultation. This allows us to tailor our approach to meet your specific requirements.</p>
        </div>
        <div className="tile">
            <h3>Design and Planning</h3>
            <p>Our team works closely with you to create a detailed plan, selecting the perfect tiles, patterns, and layouts. We provide expert guidance to help you make informed decisions that enhance the beauty and functionality of your space.</p>
        </div>
        <div className="tile">
            <h3>Accurate Quoting</h3>
            <p>We provide a clear and detailed quote, outlining all costs upfront. Our transparent pricing ensures there are no surprises along the way. </p>
        </div>
        <div className="tile">
            <h3>Installation</h3>
            <p>Our skilled tilers get to work, executing the plan with precision and care. We pay close attention to every detail, ensuring a flawless finish.</p>
        </div>
      </div>
        </section>
        <Testimonial/>
        <StatusSection/>
        <GetInTouch/>
        <Footer/>
        </>
    )
}

