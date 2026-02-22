import React, { useEffect, useState } from "react";
import "../Assets/CSS/Components/HeroHandyman.css";
import mower4 from "../Assets/Images/mower4.webp";

export default function HeroHandyman() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // after first paint, trigger animation
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={`hh-hero ${mounted ? "is-mounted" : ""}`}>
      <div className="hh-inner">
        {/* WATERMARK */}
        <div className="hh-watermark" aria-hidden="true">
          Master Mowers
        </div>

        {/* LEFT */}
        <div className="hh-left">
          <h1 className="hh-title hh-reveal" style={{ "--d": "0ms" }}>
            Master Mowers
            <br />
            EXPERT CARE
          </h1>

          <p className="hh-sub hh-reveal" style={{ "--d": "120ms" }}>
            At Master Mowers, we’re more than just a repair shop we’re a Brisbane-based team passionate about keeping your equipment running at its best. With honest advice, quality workmanship, and reliable service, we help homeowners and professionals power through every job with confidence.
          </p>
          
          {/* TODO : when the backend server is set for forwarding email */}
          {/* <form
            className="hh-form hh-reveal"
            style={{ "--d": "240ms" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="hh-input" type="email" placeholder="Enter your email" />
            <button className="hh-btn" type="submit">
              SUBMIT NOW
            </button>
          </form> */}

          <div className="hh-contact hh-reveal" style={{ "--d": "360ms" }}>

            <div className="hh-contactText">
              <div className="hh-contactLabel">Get a question about our services?</div>
              <div className="hh-phone">+0456497787</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hh-right">
          <div className="hh-imageCard hh-reveal" style={{ "--d": "480ms" }}>
            <img
              className="hh-image"
              src={mower4}
              alt="Handyman"
            />
          </div>

          <div className="hh-verified hh-reveal" style={{ "--d": "600ms" }}>
            <div className="hh-verifiedTop">
              {/* <span className="hh-check" aria-hidden="true">
                ✓
              </span> */}
              <span className="hh-verifiedTitle">Trusted and Verified</span>
            </div>

            <div className="hh-stars" aria-label="5 star rating">
              ★★★★★
            </div>

            {/* <div className="hh-reviewText">5k+ Client reviews</div> */}
          </div>

        </div>
      </div>
    </section>
  );
}