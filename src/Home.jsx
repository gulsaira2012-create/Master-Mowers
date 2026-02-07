import React from "react";
import Navbar from "./Components/navbar"
import Slider from "./Components/slider"
import About from "./Components/about"
import ChooseUs from "./Components/chooseUs"
import Gallery from "./Components/gallery"
// import Testimonial from "./Components/testimonial";
import GetInTouch from "./Components/getInTouch";
import Footer from "./Components/footer"
import StatusSection from "./Components/status";
import PickupDeliveryCTA from "./Components/PickupDeliveryCTA";
import ServicesGrid from "./Components/ServicesGrid";
import HeroSlider from "./Components/HeroSlider";
import Testimonials from "./Components/testimonials";
import TwoCards from "./Components/tailSample";

export default function Home(){
    return(
        <>
        <Navbar/>
        <HeroSlider/>
        <TwoCards/>
        {/* <Slider/> */}
        <PickupDeliveryCTA/>
        <About/>
        <ServicesGrid/>
        <Testimonials/>
        {/* <ChooseUs/> */}
        {/* <Gallery/> */}
        {/* <Testimonial/> */}
        <StatusSection/>
        <GetInTouch/>
        <Footer/>
        </>
    )
}