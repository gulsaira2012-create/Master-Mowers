import React from 'react';
import '../style/heroVer2.css';

const NewheroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          {/* Left */}
          <div className="hero__left">
            <h1 className="hero__title">
              Reliable Small <br />
              Engine Repairs <br />
              You Can Trust
            </h1>

            <p className="hero__subtitle">
              Family-owned specialists servicing Brisbane&apos;s <br />
              south side
            </p>

            <p className="hero__desc">
              From lawn mowers to chainsaws, we provide honest, dependable repairs
              for all your small engine equipment. Expert servicing with
              convenient pick-up &amp; delivery available.
            </p>

            <div className="hero__buttons">
              <button className="btn btn--primary">
                <span className="btn__icon" aria-hidden>
                  📞
                </span>
                Call Now
              </button>

              <button className="btn btn--outline">
                <span className="btn__icon" aria-hidden>
                  🧾
                </span>
                Request a Quote
              </button>
            </div>

            <div className="hero__badges">
              <div className="badge">
                <span className="badge__check">✓</span> Family Owned
              </div>
              <div className="badge">
                <span className="badge__check">✓</span> Expert Technicians
              </div>
              <div className="badge">
                <span className="badge__check">✓</span> Brisbane South Side
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hero__right">
            <div className="hero__imageCard">
              {/* replace with your image path */}
              <img
                src="https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1644399565002_lawn-mower-repair.jpg"
                alt="Technician repairing a lawn mower"
                className="hero__image"
              />
            </div>

            <div className="pickup">
              <div className="pickup__icon" aria-hidden>
                🚚
              </div>
              <div className="pickup__text">
                <div className="pickup__title">Pick-Up &amp;</div>
                <div className="pickup__title">Delivery</div>
                <div className="pickup__sub">Available</div>
              </div>
            </div>

            <div className="hero__glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewheroSection;