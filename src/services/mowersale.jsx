import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import MrFixBlogCta from "../Components/MrFixBlogCta";
import StickyBenefitsSection from "../Components/StickyBenefitsSection";
import FinanceHero from "../Components/FinanceHero";
import Footer from "../Components/Footer";



export default function ContactInfo(){
    return(
        <>
                <Navbar/>
                <MrFixBlogCta/>
                <StickyBenefitsSection/>
                <FinanceHero/>
                <Footer/>
        </>
    )
}

