// FusionHero.jsx
import "../Assets/CSS/Components/fusionHero.css";
import heroimg1 from "../Assets/Images/heroimg1.webp";
import heroimg2 from "../Assets/Images/heroimg2.webp";
import mowers1 from "../Assets/Images/mowers1.webp";
import mowers2 from "../Assets/Images/mowers2.webp";
import tools from "../Assets/Images/Tools.webp";
import garage from "../Assets/Images/garage.webp";
import rideon from "../Assets/Images/rideon.webp";
import ridemower from "../Assets/Images/ridemower.webp";
import smallengine from "../Assets/Images/smallengine.webp";
import repairingshop from "../Assets/Images/repairingshop.webp";
import { PHOTO_SMS } from "./contactLinks";
import OpenSign from "./OpenSign";

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
      <OpenSign />
      {/* ✅ ADDED CONTAINER HERE */}
        <div className="fh-container">
          <div className="fh-grid">

            {/* LEFT */}
            <div className="fh-left">
              <div className="fh-pill">
                <span className="fh-pillIcon">✦</span>
                <span className="fh-pillText">Your Mower’s Second Chance</span>
              </div>

              <h1 className="fh-title">
                Mower repairs in Logan & Brisbane's southside free diagnosis, most jobs done in 1–3 days
              </h1>

              <p className="fh-subtitle">
                Push mowers, ride-ons, zero-turns, whipper snippers and chainsaws, all brands. A local workshop in Meadowbrook, open 7 days, with pickup and delivery. Rated 5.0 ★ from 20 Google reviews.
              </p>

              <div className="fh-ctaRow">
                <a href="tel:+61423059481" aria-label="Call Master Mowers on +61 423 059 481">
                  <button className="fh-primaryBtn">Get a free quote</button>
                </a>

                <a className="fh-secondaryBtn fh-smsBtn" href={PHOTO_SMS}>
                  📷 Text us a photo of your mower
                </a>
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