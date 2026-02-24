// MrFixBlogCta.jsx
import React from "react";
import "../Assets/CSS/Components/MrFixBlogCta.css";
import handyman from "../Assets/Images/handyman.png";
import { Link } from "react-router-dom";

export default function MrFixBlogCta() {
  const handleScrollDown = () => {
    // change this target id if you want
    const el = document.querySelector("#blog");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="mrfixCta">
      <div className="mrfixCta__inner">
        {/* ✅ MOBILE TOP BAR (matches screenshot vibe) */}
        <div className="mrfixCta__mobileBar" aria-hidden="true">
          <div className="mrfixCta__brand">
            <span className="mrfixCta__brandIcon" />
            <span className="mrfixCta__brandText">Mrfix</span>
          </div>
          <button className="mrfixCta__burger" type="button" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* HERO PANEL */}
        <div className="mrfixCta__hero">
          <div className="mrfixCta__top">
            <h2 className="mrfixCta__title">
              Master Services for <br />
              every Engine
            </h2>

            <div className="mrfixCta__artWrap" aria-hidden="true">
              <img className="mrfixCta__art" src={handyman} alt="" draggable="false" />
            </div>
          </div>

          {/* ✅ Mobile arrow centered under the heading (like screenshot) */}
          <button className="mrfixCta__downBtn" type="button" onClick={handleScrollDown} aria-label="Scroll down">
            <span className="mrfixCta__downIcon">Contact</span>
          </button>
        </div>

        {/* DESKTOP LINE */}
        <div className="mrfixCta__line" />

        {/* CONTENT PANEL (desktop layout stays same) */}
        <div className="mrfixCta__bottom">
          <a className="mrfixCta__blog" href="/contact">
            Contact Us
          </a>
          
          

          <span className="mrfixCta__vline" />

          <p className="mrfixCta__text">
            Have a question or need mower repairs in Brisbane? We’re here to help. Whether it’s servicing, repairs, or
            second-hand mower sales, Master Mowers delivers reliable solutions with friendly local service.
          </p>

          <button className="mrfixCta__btn" type="button" onClick={handleScrollDown} aria-label="Scroll down">
            <span className="mrfixCta__btnIcon">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
