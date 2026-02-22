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
            title="Mower Repair & Servicing Brisbane | Master Mowers"
            description="Expert lawn mower repair, small engine diagnostics, servicing, blade sharpening, and garden equipment repairs in Brisbane. Workshop-tested, reliable, and affordable."
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

