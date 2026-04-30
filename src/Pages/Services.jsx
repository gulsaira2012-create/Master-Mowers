import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import MrFixBlogCta from "../Components/MrFixBlogCta";
import StackCardsSection from "../Components/StackCardsSection";
import BrandMarquee from "../Components/BrandMarquee";
import FinanceHero from "../Components/FinanceHero";
import Footer from "../Components/Footer";
import Seo from "../Components/Seo"



export default function ContactInfo(){
    return(
        <>
            <Seo
            title="Mower Services and Repair Brisbane | all brands| Master Mowers"
            description="Full services & repair for all mower brands in Brisbane. Honda, Victa, Hasqvarna, Toro, John Deere, Cub Cadet, Ryobi, Stihl, Briggs & Stratton. Expert diagnostics, repairs, maintenance for all mower types. Book online."
            />
            <Navbar/>
            <MrFixBlogCta/>
            <StackCardsSection/>
            <BrandMarquee/>
            <FinanceHero/>
            <Footer/>
        </>
    )
}

