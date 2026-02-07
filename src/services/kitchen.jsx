import React from "react";
import { useNavigate } from 'react-router-dom';

import Approach from "../Components/approach"
import serviceImg from "../assets/servicesTextImage.jpg"
import stackImg from "../assets/stack.png"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import GetInTouch from "../Components/getInTouch"
import ServiceNav from"../Components/ServiceNav"
import ServiceHero from "../Components/ServicesHero";

import Tile1 from "../assets/tile1.jpg"
import Tile2 from "../assets/tile2.jpg"
import Tile3 from "../assets/tile3.jpg"

import "../style/service.css"

export default function Kitchen(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactUs');
  };

    return(
        <>
        <Navbar/>
        <ServiceHero/>
        <ServiceNav/>
        <Approach/>
        
        <section className="service-page">
            <div className="textBox">
                <div className="boxText">
                <h1>Ride-On Mower Repairs</h1>
                <p>
                Master Mowers provides professional ride-on mower repairs in Brisbane for residential, commercial, and acreage equipment. We service all major brands of ride-on mowers, lawn tractors, and zero-turn mowers, delivering fast, reliable repairs you can trust. Our experienced technicians handle engine repairs, blade and deck issues, belt replacements, electrical faults, steering problems, and full mower servicing. Whether your ride-on mower won’t start, cuts unevenly, or has lost power, we diagnose and fix it efficiently. From routine maintenance to complex repairs, Master Mowers keeps your equipment running smoothly, extending its lifespan and performance. Book expert ride-on mower servicing in Brisbane today and get back to mowing with confidence.
                </p>
                </div>
        <img src={stackImg} alt="" />
            </div>
        <div className="aboutus-content1">
            <img src={serviceImg} alt="Main" className="about-main-image1" />
            <div className="aboutus-text1">
                <h1 className="mainTitle1">Trusted Kitchen Tilers in Perth for Your Home</h1>
                <p className="about-description1">
                When it comes to kitchen tiling in Perth, trust our skilled team to deliver impeccable results. We combine years of experience with a commitment to quality, ensuring your kitchen not only looks stunning but also stands the test of time. From design to installation, we’re here to bring your vision to life with precision and care.
                </p>
                <button className="about-contact-btn1" onClick={handleClick}>Conact Now</button>
            </div>
        </div>
        <div className="itemConatiner">
          <h1 className="itemHeader">Materials we Use</h1>
          <p>At Zuhak Tiling Company, we prioritize quality by using only the finest materials, including top-grade tiles, durable adhesives, and resilient grouts. Each material is meticulously selected from trusted suppliers to ensure both aesthetic appeal and long-lasting performance. Whether it's natural stone, ceramic, or eco-friendly options, our materials are chosen to elevate your space. We believe that the foundation of a beautiful and enduring finish starts with the best materials. Our commitment to quality ensures that your project will stand the test of time.</p>
        <div className="item1">
          <img src={Tile1} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Ceramic</h3>
            <p>We believe each client is unique, and so are their needs. Our approach is to listen closely, understand the specific requirements, and provide customized solutions that deliver beyond expectations.</p>
          </div>
        </div>
        <div className="item1">
          <img src={Tile2} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Terracotta</h3>
            <p>We believe each client is unique, and so are their needs. Our approach is to listen closely, understand the specific requirements, and provide customized solutions that deliver beyond expectations.</p>
          </div>
        </div>
        <div className="item1">
          <img src={Tile3} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Stone</h3>
            <p>We believe each client is unique, and so are their needs. Our approach is to listen closely, understand the specific requirements, and provide customized solutions that deliver beyond expectations.</p>
          </div>
        </div>
        </div>

        </section>
        <GetInTouch/>
        <Footer/>
        </>
        
    )
}