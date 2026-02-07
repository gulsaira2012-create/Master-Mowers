import React from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import Approach from "../Components/approach"
import serviceImg from "../assets/servicesTextImage.jpg"
import mower2 from "../assets/mower2.jpg"
import mower4 from "../assets/mower4.jpeg"
import stackImg from "../assets/stack.png"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import GetInTouch from "../Components/getInTouch"
import ServiceNav from"../Components/ServiceNav"
import ServiceHero from "../Components/ServicesHero";

import Ceramic from "../assets/ceramic.jpg"
import Marble from "../assets/tiles/marble.jpg"
import stone from "../assets/tiles/stone.jpg"
import Cement from "../assets/tiles/cement.jpg"
import Poroline from "../assets/tiles/porcelain.jpg"
import Quartz from "../assets/tiles/quartz.jpg"
import terracotta from "../assets/tiles/terracotta.jpg"
import terrazzo from "../assets/tiles/terrazzo.jpg"
import encaustic from "../assets/tiles/encaustic.jpg"
import "../style/service.css"

export default function Floor(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactUs');
  };

    return(
        <>
        <Navbar/>
        {/* hero section */}
        <div className="serviceHero-bg">
          <div className="serviceHero-container">
            <h1>Our <span className='red'>Services</span></h1>
            <p><NavLink to="/" className="link">Home</NavLink>/Services /Floor Refinishing</p>
          </div>
        </div>

         {/* service nav and right text  */}
        <div className="ser-container">
        <ServiceNav/>
        <div className="ser-text">
          <h2>Ride-On Mower Repairs Brisbane – Master Mowers </h2>
          <p>Master Mowers provides professional ride-on mower repairs in Brisbane for residential, commercial, and acreage equipment. We service all major brands of ride-on mowers, lawn tractors, and zero-turn mowers, delivering fast, reliable repairs you can trust. Our experienced technicians handle engine repairs, blade and deck issues, belt replacements, electrical faults, steering problems, and full mower servicing. Whether your ride-on mower won’t start, cuts unevenly, or has lost power, we diagnose and fix it efficiently. From routine maintenance to complex repairs, Master Mowers keeps your equipment running smoothly, extending its lifespan and performance. Book expert ride-on mower servicing in Brisbane today and get back to mowing with confidence.</p> 
          
        </div>
        </div>
        <Approach/>
        
        <section className="service-page">
        <div className="aboutus-content">
            <img src={mower4} alt="Main" className="about-main-image" />
            <div className="aboutus-text">
                <h1 className="mainTitle">Expert Ride-On Mower Repairs in Brisbane – Master Mowers</h1>
                <p className="about-description">
                At Master Mowers, we are Brisbane’s trusted specialists in ride-on mower repairs and servicing. With hands-on experience repairing commercial and residential mowers, we understand the demands of Brisbane conditions. Our workshop repairs ride-on mowers, zero-turn mowers, lawn tractors, and commercial mowing equipment with precision and care. We fix engine faults, transmission issues, cutting deck problems, electrical failures, and perform full servicing and preventative maintenance. Landscapers, acreage owners, and contractors across Brisbane rely on Master Mowers for fast turnaround and expert workmanship. When you need reliable mower repair experts in Brisbane, choose a team that keeps your equipment running at peak performance.
                </p>
                <button className="about-contact-btn" onClick={handleClick}>Conact Now</button>
            </div>
        </div>
        {/* <div className="itemConatiner">
          <h1 className="itemHeader">Types of Floor Tiling We Offer</h1>
          <p>We offer a wide range of floor tiling options to suit every style and space, including durable ceramic, elegant marble, and modern porcelain tiles. Each type is selected for its beauty and resilience, ensuring your floors are both stunning and built to last.</p>
        <div className="item1">
          <img src={Ceramic} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Ceramic</h3>
            <p>Ceramic tiles are a durable and versatile choice, perfect for both residential and commercial spaces. Available in a wide range of colors, patterns, and finishes, they are ideal for high-moisture areas like kitchens and bathrooms. Ceramic tiles are easy to clean and maintain, offering a practical solution that doesn’t sacrifice style.</p>
          </div>
        </div>
        <div className="item1">
          <img src={terracotta} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Terracotta</h3>
            <p>Terracotta tiles bring warmth and rustic charm to any space, with their rich, earthy tones and natural texture. Traditionally handmade, these tiles have a porous surface that requires sealing to protect against moisture. Terracotta is ideal for creating cozy, inviting interiors, particularly in kitchens, dining rooms, and outdoor patios..</p>
          </div>
        </div>
        <div className="item1">
          <img src={terrazzo} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Terrazzo</h3>
            <p>Terrazzo tiles are known for their unique, speckled appearance, created by embedding chips of marble, quartz, granite, or glass in a cement or resin base. They offer incredible durability and are resistant to water and stains, making them suitable for both interior and exterior applications. Terrazzo is also eco-friendly, as it often incorporates recycled materials, providing a stylish and sustainable flooring option.</p>
          </div>
        </div>
        <div className="item1">
          <img src={Cement} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Cement</h3>
            <p>Cement tiles are a bold and durable option, known for their vibrant patterns and colors. They are handmade, giving each tile a unique character, and are suitable for both floors and walls. Cement tiles are highly durable and develop a beautiful patina over time, making them perfect for areas that need both style and resilience.</p>
          </div>
        </div>
        <div className="item1">
          <img src={Poroline} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Porcelain</h3>
            <p>Porcelain tiles are a strong, dense option, known for their high resistance to moisture, stains, and scratches. Available in a variety of finishes, including those that mimic natural stone or wood, porcelain is ideal for high-traffic areas like hallways and commercial spaces. It’s also suitable for outdoor use, as it can withstand extreme weather conditions</p>
          </div>
        </div>
        <div className="item1">
          <img src={encaustic} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Encaustic</h3>
            <p>Encaustic tiles are known for their vibrant, intricate patterns that are inlaid into the body of the tile, rather than being painted or glazed on top. Made from cement, these tiles are durable and ideal for creating eye-catching designs in both modern and traditional spaces. Encaustic tiles are perfect for feature floors, walls, or even as decorative accents, adding a unique artistic touch to any room.</p>
          </div>
        </div>
        <div className="item1">
          <img src={stone} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Stone</h3>
            <p>Stone tiles, including options like limestone, granite, and travertine, bring a natural, timeless beauty to any space. Each stone tile is unique, with its own natural patterns and colors, adding a touch of elegance and durability. Stone tiles are perfect for both indoor and outdoor use, providing a high-end finish that’s resistant to wear and weathering</p>
          </div>
        </div>
        <div className="item1">
          <img src={Quartz} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Quartz</h3>
            <p>Quartz tiles offer a sleek, modern look with a high-gloss finish and uniform appearance. Engineered from natural quartz mixed with resins and pigments, these tiles are incredibly durable and non-porous, making them resistant to stains, scratches, and bacteria. Quartz tiles are a great choice for both contemporary and traditional settings, providing a sophisticated and low-maintenance flooring option.</p>
          </div>
        </div>
        <div className="item1">
          <img src={Marble} alt="" className="itemImg"/>
          <div className="itemText">
            <h3>Marble</h3>
            <p>Marble tiles exude luxury and sophistication, with their smooth, polished surface and intricate veining. They are an excellent choice for adding elegance to any room, whether it’s a bathroom, foyer, or living area. While marble requires regular maintenance to preserve its beauty, its timeless appeal makes it a popular choice for upscale interiors.</p>
          </div>
        </div>
        </div> */}

        </section>
        <GetInTouch/>
        <Footer/>
        </>
        
    )
}