// FusionHero.jsx
import "../Assets/CSS/Components/fusionHero.css";
import heroimg1 from "../Assets/Images/heroimg1.webp";
import heroimg2 from "../Assets/Images/heroimg2.webp";
import mowers1 from "../Assets/Images/mowers1.webp";
import mowers2 from "../Assets/Images/mowers2.webp";
import tools from "../Assets/Images/Tools.webp";
import garage from "../Assets/Images/garage.webp";
import { Link } from "react-router-dom";
import rideon from "../Assets/Images/rideon.webp";
import ridemower from "../Assets/Images/ridemower.webp";
import smallengine from "../Assets/Images/smallengine.webp";
import repairingshop from "../Assets/Images/repairingshop.webp";

export default function FusionHero() {
  const colUp = [
    { src: heroimg1, h: 150 },
    { src: repairingshop, h: 180 },
    { src: mowers1, h: 220 },
    { src: smallengine, h: 170 },
  ];

  const colDown = [
    { src: tools, h: 150 },
    { src: rideon, h: 220 },
    { src: garage, h: 180 },
    { src: ridemower, h: 170 },
  ];

  return (
    <section className="fh-hero">
      {/* ✅ ADDED CONTAINER HERE */}
        <div className="fh-container">
          <div className="fh-grid">

            {/* LEFT */}
            <div className="fh-left">
              <div className="fh-pill">
                <span className="fh-pillIcon">✦</span>
                <span className="fh-pillText">Your Mower’s Second Chance</span>
              </div>

              <h2 className="fh-title">
                Brisbane's Trusted Mower Repair
                <br />
                & small engine Specialists
              </h2>

              <p className="fh-subtitle">
                Professional Brisbane lawn mower repairs, ride-on mower servicing, zero-turn mower repairs, and small engine diagnostics. We provide commercial mower maintenance.
              </p>

              <div className="fh-ctaRow">
                <Link to="/about">
                  <button className="fh-primaryBtn">Get Started Now</button>
                </Link>

                <button className="fh-secondaryBtn"></button>
              </div>
            </div>

            {/* CENTER */}
            <div className="fh-divider" />

            {/* RIGHT */}
            <div className="fh-right">
              <div className="fh-marqueeWrap">
                <div className="fh-cols">

                  <div className="fh-col">
                    <div className="fh-colDotted" />
                    <div className="fh-marquee fh-marqueeUp">
                      <ImagesColumn items={colUp} />
                      <ImagesColumn items={colUp} />
                    </div>
                  </div>

                  <div className="fh-col">
                    <div className="fh-colDotted" />
                    <div className="fh-marquee fh-marqueeDown">
                      <ImagesColumn items={colDown} />
                      <ImagesColumn items={colDown} />
                    </div>
                  </div>

                </div>

                <div className="fh-fadeTop" />
                <div className="fh-fadeBottom" />
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}

function ImagesColumn({ items }) {
  return (
    <div className="fh-stack">
      {items.map((it, idx) => (
        <div key={idx} className="fh-card" style={{ height: `${it.h}px` }}>
          <img className="fh-img" src={it.src} alt="" loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  );
}