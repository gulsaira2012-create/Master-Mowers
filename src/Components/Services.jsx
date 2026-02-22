import React from "react";
import { Link } from "react-router-dom";
import servicemower2 from  "../Assets/Images/servicemower2.webp"
import servicemower1 from  "../Assets/Images/servicemower1.webp"
import servicemower3 from  "../Assets/Images/servicemower3.webp"
export default function ServicesSection() {

  return (
    <section className="ss-wrap">
      <div className="ss-container">
        {/* Header */}
        <div className="ss-top">
          <div className="ss-kicker">
            <span className="ss-dot" />
            <span>Our Services</span>
          </div>

          <div className="ss-headRow">
            <h2 className="ss-title">
              Reliable mower repairs<br />servicing Brisbane trusts.
            </h2>

            <Link className="ss-btn" to="/services">
              View All Services →
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="ss-grid">
          {/* Left */}
          <div className="ss-card" >
            <div className="ss-img">
              <img
                src={servicemower2}
                alt=""
              />
            </div>
            <div className="ss-body">
              <h3>Lawn Mower Repair Specialists</h3>
              <p>
                Brisbane lawn mower repair specialists providing best services ever you want
              </p>
              {/* <span>Learn more →</span> */}
            </div>
          </div>

          {/* Center */}
          <div className="ss-highlight" >
            <div className="ss-highlightTop">
              <h3>Small Engine Repair Services</h3>
              <div className="ss-line" />
              <p>
                Brisbane small engine repair specialists providing reliable mower engine repairs.
              </p>
              {/* <span>Learn more →</span> */}
            </div>

            <div className="ss-highlightImg">
              <img
                src={servicemower3}
                alt=""
              />
            </div>
          </div>

          {/* Right */}
          <div className="ss-card" >
            <div className="ss-img">
              <img
                src={servicemower1}
                alt=""
              />
            </div>
            <div className="ss-body">
              <h3>Landscape Equipment Repairs</h3>
              <p>
                Brisbane landscape equipment repairs for chainsaws, hedge trimmers, blowers, whipper snippers, brush cutters.
              </p>
              {/* <span>Learn more →</span> */}
            </div>
          </div>
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

const css = `
/* ===== THEME ===== */
.ss-wrap {
  --dark: #023341;
  --orange: #FD5E02;
  --cream: #FCF5E3;

  background: var(--dark);
  padding: 56px 16px 64px;
}

.ss-container {
  max-width: 1120px;
  margin: 0 auto;
}

/* ===== HEADER ===== */
.ss-kicker {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--cream);
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 10px;
}

.ss-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 0 6px rgba(253, 94, 2, 0.25);
}

.ss-headRow {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.ss-title {
  color: var(--cream);
  font-size: clamp(20px, 2vw, 38px);
  font-weight: 700;
  line-height: 1.05;
  margin: 0;
}

.ss-btn {
  background: var(--cream);
  color: var(--dark);
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

/* ===== GRID ===== */
.ss-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: 1fr 1.05fr 1fr;
  gap: 18px;
  align-items: stretch;
}

/* ===== SIDE CARDS (SMALLER) ===== */
.ss-card {
  transform: scale(0.94);
  background: rgba(252, 245, 227, 0.05);
  border-radius: 22px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 22px 60px rgba(0,0,0,0.25);
  transition: transform 0.2s ease;
}

.ss-card:hover {
  transform: scale(0.94) translateY(-4px);
}

.ss-img {
  height: 220px;
  padding: 10px;
}

.ss-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  // filter: grayscale(100%);
}

.ss-body {
  padding: 16px 18px 20px;
  color: var(--cream);
}

.ss-body h3 {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 900;
}

.ss-body p {
  font-size: 13.5px;
  line-height: 1.6;
  opacity: 0.75;
  margin-bottom: 14px;
}

.ss-body span {
  color: var(--orange);
  font-weight: 800;
  font-size: 13px;
}

/* ===== CENTER CARD (SMALLER BUT STILL EMPHASIZED) ===== */
.ss-highlight {
  transform: scale(0.96);
  background: #FD5E02;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 32px 90px rgba(0,0,0,0.35);
  text-decoration: none;
  transition: transform 0.2s ease;
  // opacity: 0.75;
}

.ss-highlight:hover {
  transform: scale(0.96) translateY(-4px);
}

.ss-highlightTop {
  padding: 18px;
  color: var(--cream);
}

.ss-highlightTop h3 {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 12px;
}

.ss-line {
  height: 1px;
  background: rgba(252,245,227,0.3);
  margin-bottom: 12px;
}

.ss-highlightTop p {
  font-size: 13.5px;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 14px;
}

.ss-highlightTop span {
  font-weight: 800;
  font-size: 13px;
}

.ss-highlightImg {
  height: 210px;
  padding: 10px;
}

.ss-highlightImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .ss-grid {
    grid-template-columns: 1fr;
  }

  .ss-card,
  .ss-highlight {
    transform: scale(1);
  }
}
`;
