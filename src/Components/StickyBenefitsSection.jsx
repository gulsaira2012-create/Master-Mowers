import React from "react";
import "../Assets/CSS/Pages/StickyBenefitsSection.css";

export default function StickyBenefitsSection() {
  const serviceLinks = [
    "Lawn Mower Repair Specialists",
    "Small Engine Repair Services",
    "Maintenance & Tune-Up Services",
    "Landscape Equipment Repairs",
    "Mower Sales & Equipment Supply",
  ];

  return (
    <section className="sb-wrap">
      <div className="sb-container">
        {/* LEFT */}
        <main className="sb-main">
          <div className="sb-heroImage" />

          <h2 className="sb-title">Lawn Mower Repair Specialists</h2>

          <p className="sb-sub">
            Brisbane lawn mower repair specialists delivering professional ride-on mower repairs, push mower servicing,
            zero-turn mower repairs, and commercial mower maintenance across Brisbane. We provide expert small engine
            diagnostics, carburetor cleaning, blade sharpening, belt replacements, oil changes, and fast, reliable
            Brisbane mower repairs for residential and commercial clients.
          </p>

          <div className="sb-steps">
            <div className="sb-step">
              <div className="sb-iconPill">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  alt="Diagnose & Inspect"
                  className="sb-iconImg"
                />
              </div>
              <h4>Diagnose & Inspect</h4>
              <p>We run full diagnostics to pinpoint engine, fuel, blade, and electrical issues accurately.</p>
            </div>

            <div className="sb-step">
              <div className="sb-iconPill">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  alt="Repair & Service"
                  className="sb-iconImg"
                />
              </div>
              <h4>Repair & Service</h4>
              <p>We complete repairs, part replacements, servicing, and performance tuning with care.</p>
            </div>

            <div className="sb-step">
              <div className="sb-iconPill">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                  alt="Test & Deliver"
                  className="sb-iconImg"
                />
              </div>
              <h4>Test & Deliver</h4>
              <p>Every mower is workshop-tested for smooth starts, clean cuts, and reliable performance.</p>
            </div>
          </div>
        </main>

        {/* RIGHT (STICKY) */}
        <aside className="sb-aside">
          <div className="sb-stickyStack">
            <div className="sb-ctaCard">
              <div className="sb-ctaOverlay" />
              <div className="sb-ctaContent">
                <h3>
                  Any questions? <br /> Let’s talk
                </h3>
                <button className="sb-ctaBtn">CONTACT US</button>
              </div>
            </div>

            <div className="sb-listCard">
              {serviceLinks.map((item) => (
                <button key={item} className="sb-listRow" type="button">
                  <span>{item}</span>
                  <span className="sb-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
