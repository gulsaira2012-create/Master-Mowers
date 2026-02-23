// FusionHero.jsx
import "../Assets/CSS/Components/fusionHero.css";
import heroimg1 from "../Assets/Images/heroimg1.webp";
import heroimg2 from "../Assets/Images/heroimg2.webp";
import mowers1 from "../Assets/Images/mowers1.webp"
import mowers2 from "../Assets/Images/mowers2.webp"
import tools from "../Assets/Images/tools.webp"

export default function FusionHero() {
  // ✅ ONLY images in the cards (no text UI cards at all)
  const colUp = [
    { src: heroimg1, h: 150 },
    { src: heroimg2, h: 180 },
    { src: mowers1, h: 220 },
    { src: mowers2, h: 170 },
  ];

  const colDown = [
    { src: tools, h: 150 },
    { src: "https://images.unsplash.com/photo-1671543565338-8b22a87b8359?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", h: 180 },
    { src: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", h: 220 },
    { src: "https://images.unsplash.com/photo-1748893790747-fc2646924cbe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", h: 170 },
  ];

  return (
    <section className="fh-hero">
      <div className="fh-container">
        <div className="fh-grid">
          {/* LEFT */}
          <div className="fh-left">
            <div className="fh-pill">
              <span className="fh-pillIcon" aria-hidden="true">
                ✦
              </span>
              <span className="fh-pillText">Your Mower’s Second Chance </span>
              {/* <span className="fh-pillScribble" aria-hidden="true">
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                  <path
                    d="M2 9c4-5 8-7 12-7 5 0 8 2 12 7"
                    stroke="#17352E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 9c4 5 8 7 12 7 5 0 8-2 12-7"
                    stroke="#17352E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span> */}
            </div>

            <h2 className="fh-title">
              Master Mowers
              <br />
              Powering Your
              <br />
              Machine
            </h2>

            <p className="fh-subtitle">
             Professional Brisbane lawn mower repairs, ride-on mower servicing, zero-turn mower repairs, and small engine diagnostics. We provide commercial mower maintenance, blade sharpening, carburetor cleaning, and quality refurbished mowers for sale in Brisbane with fast turnaround and reliable performance.
            </p>

            <div className="fh-ctaRow">
              <button className="fh-primaryBtn">Get Started Now</button>

              <button className="fh-secondaryBtn">
                {/* <span className="fh-playCircle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M10 8l7 4-7 4V8z" fill="currentColor" />
                  </svg>
                </span> */}
                {/* <span className="fh-watchText">Watch demo</span>
                <span className="fh-watchTime">2 min</span> */}
              </button>
            </div>
          </div>

          {/* CENTER dotted divider */}
          <div className="fh-divider" aria-hidden="true" />

          {/* RIGHT */}
          <div className="fh-right">
            <div className="fh-marqueeWrap">
              <div className="fh-cols">
                {/* Column UP */}
                <div className="fh-col">
                  <div className="fh-colDotted" aria-hidden="true" />
                  <div className="fh-marquee fh-marqueeUp">
                    <ImagesColumn items={colUp} />
                    <ImagesColumn items={colUp} />
                  </div>
                </div>

                {/* Column DOWN */}
                <div className="fh-col">
                  <div className="fh-colDotted" aria-hidden="true" />
                  <div className="fh-marquee fh-marqueeDown">
                    <ImagesColumn items={colDown} />
                    <ImagesColumn items={colDown} />
                  </div>
                </div>
              </div>

              <div className="fh-fadeTop" aria-hidden="true" />
              <div className="fh-fadeBottom" aria-hidden="true" />
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
