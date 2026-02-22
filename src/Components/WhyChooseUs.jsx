import React from "react";
import { useNavigate } from "react-router-dom";
import Garage5 from "../Assets/Images/Garageimg5.webp";
import "../Assets/CSS/Components/WhyChooseUs.css";

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="wcu">
      <div className="wcu-container">
        {/* IMAGE */}
        <div className="wcu-imageWrap">
          <div className="wcu-imageBox">
            <img src={Garage5} alt="Master Mowers team" className="wcu-image" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="wcu-content">
          <h2 className="wcu-title">Why Choose Us?</h2>

          <p className="wcu-subtitle">
            Brisbane homeowners, landscapers, and commercial operators choose
            Master Mowers because we deliver fast turnaround times, clear
            communication, and equipment that’s workshop-tested before it leaves
            our hands.
          </p>

          <div className="wcu-cards">
            <div className="wcu-card">
              <div className="wcu-cardTitle">Expert Engine Specialists</div>
              <div className="wcu-cardText">
                Skilled Brisbane mower and small engine specialists.
              </div>
            </div>

            <div className="wcu-card">
              <div className="wcu-cardTitle">Fast Turnaround Repairs</div>
              <div className="wcu-cardText">
                Quick turnaround with minimal downtime.
              </div>
            </div>

            <div className="wcu-card">
              <div className="wcu-cardTitle">Quality Workmanship</div>
              <div className="wcu-cardText">
                Durable parts and reliable workmanship.
              </div>
            </div>

            <div className="wcu-card">
              <div className="wcu-cardTitle">Honest Pricing</div>
              <div className="wcu-cardText">
                Transparent quotes and fair Brisbane rates.
              </div>
            </div>
          </div>

          <button className="wcu-btn" onClick={() => navigate("/about")}>
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}