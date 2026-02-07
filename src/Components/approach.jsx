import React from 'react';
import '../style/approach.css';

import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineEngineering } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



const OurApproach = () => {
  return (
    <section className="our-approach">
      <div className="approach-content">
        <div className="approach-left">
          <div className="approach-text">
            <h1>Our approach and Processes</h1>
            <p>At Master Tiling Perth Company, we are committed to excellence and customer satisfaction.</p>
          </div>
        </div>
        <div className="approach-right">
          <div className="card">
          <MdOutlinePeopleAlt className="card-icon"/>
            <h3>Consultation & Design</h3>
            <p>We begin with a detailed consultation to understand your vision and guide you in selecting the perfect tiles that align with your style and space requirements, ensuring a cohesive and appealing design.</p>
          </div>
          <div className="card">
          <MdOutlineEngineering className="card-icon"/>
            <h3>Professional Installation</h3>
            <p>Our expert tilers prepare the surface meticulously, ensuring levelness, and apply tiles with precision, focusing on perfect alignment and smooth grout application.</p>
          </div>
          <div className="card">
          <IoMdCheckmarkCircleOutline className="card-icon"/>
            <h3>Finishing Touches</h3>
            <p>After installation, we meticulously grout, seal, and clean the tiles, ensuring every detail is perfected. This process leaves you with a flawlessly polished surface, ready for immediate use and long-lasting durability.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
