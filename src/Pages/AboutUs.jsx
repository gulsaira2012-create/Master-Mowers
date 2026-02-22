import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import HeroHandyman from "../Components/HeroHandyman";
import Footer from "../Components/Footer";
import FinanceHero from "../Components/FinanceHero";
import WhyChooseUs  from "../Components/WhyChooseUs";
// import AnimatedTestimonials from "../Components/AnimatedTestimonials";
import AboutUsCards from "../Components/aboutusCards";
import Seo from "../Components/Seo"


export default function ContactInfo(){
    return(
        <>
        <Seo
                title="About Master Mowers"
                description="Learn about Master Mowers, Brisbane’s trusted lawn mower and small engine repair specialists delivering reliable repairs, servicing, and honest advice across Brisbane and Logan."
              />
                <Navbar/>
                <HeroHandyman/>
                <AboutUsCards />
                <WhyChooseUs />
                {/* <AnimatedTestimonials/> */}
                <FinanceHero/>
                <Footer/>
        </>
    )
}

