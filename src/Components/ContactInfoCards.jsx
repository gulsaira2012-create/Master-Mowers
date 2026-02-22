import React, { useEffect, useRef, useState } from "react";
import "../Assets/CSS/Components/ContactInfoCards.css";
export default function ContactInfoCards() {
  const [mounted, setMounted] = useState(false);
  const didRunRef = useRef(false);

  useEffect(() => {
    // StrictMode-safe: run once
    if (didRunRef.current) return;
    didRunRef.current = true;

    // Paint stacked first, then animate to spread
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
  }, []);

  return (
    <section className="cic-section" aria-labelledby="cic-title">
      <div className="cic-container">
        <h2 id="cic-title" className="cic-title">
          Our contact information
        </h2>

        {/* Stage handles the animation positions */}
        <div className={`cic-stage ${mounted ? "is-mounted" : ""}`}>
          {/* Left */}
          <a href="#address" className="cic-card cic-left" aria-label="Our address">
            <div className="cic-iconBox" aria-hidden="true">
              <PinIcon />
            </div>
            <div className="cic-content">
              <h3 className="cic-h3">Our address</h3>
              <p className="cic-p">
                570 8th Ave, New York, NY 10018
                <br />
                United States
              </p>
            </div>
          </a>

          {/* Center */}
          <a href="#contact" className="cic-card cic-center" aria-label="Contact number">
            <div className="cic-iconBox cic-iconBox--light" aria-hidden="true">
              <HeadsetIcon />
            </div>
            <div className="cic-content">
              <h3 className="cic-h3 cic-h3--light">Contact number</h3>
              <p className="cic-p cic-p--light">
                +01 123 456 7890
                <br />
                info.support@gmail.com
              </p>
            </div>
          </a>

          {/* Right */}
          <a href="#hours" className="cic-card cic-right" aria-label="Opening hour">
            <div className="cic-iconBox" aria-hidden="true">
              <ClockIcon />
            </div>
            <div className="cic-content">
              <h3 className="cic-h3">Opening hour</h3>
              <p className="cic-p">
                Monday - Saturday: 9:00 - 10:00
                <br />
                Sunday: Closed
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* --- Icons (inline SVG so no libs) --- */
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="#FCF5E3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="#FCF5E3"
        strokeWidth="2"
      />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2"
        stroke="#023341"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z"
        stroke="#023341"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"
        stroke="#023341"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="#FCF5E3"
        strokeWidth="2"
      />
      <path
        d="M12 7v5l3 2"
        stroke="#FCF5E3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
