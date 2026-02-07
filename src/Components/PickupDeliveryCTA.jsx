import React from 'react';
import '../style/PickupDeliveryCTA.css' 

const PickupDeliveryCTA = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__grid">
          {/* Left */}
          <div className="cta__left">
            <div className="cta__pill">CONVENIENT SERVICE</div>

            <h2 className="cta__title">
              Pick-Up &amp; Delivery <br />
              Service Available
            </h2>

            <p className="cta__desc">
              We understand your time is valuable. That&apos;s why we offer
              convenient pick-up and delivery for ride-on mowers across
              Brisbane&apos;s south side.
            </p>

            <div className="cta__features">
              <div className="ctaFeature">
                <div className="ctaFeature__icon" aria-hidden>
                  🗺️
                </div>
                <div className="ctaFeature__text">
                  <div className="ctaFeature__heading">Local Service Area</div>
                  <div className="ctaFeature__sub">
                    Servicing all of Brisbane&apos;s south side
                  </div>
                </div>
              </div>

              <div className="ctaFeature">
                <div className="ctaFeature__icon" aria-hidden>
                  🕒
                </div>
                <div className="ctaFeature__text">
                  <div className="ctaFeature__heading">Hassle-Free Process</div>
                  <div className="ctaFeature__sub">
                    We collect, repair, and return your equipment
                  </div>
                </div>
              </div>

              <div className="ctaFeature">
                <div className="ctaFeature__icon" aria-hidden>
                  🛡️
                </div>
                <div className="ctaFeature__text">
                  <div className="ctaFeature__heading">Safe &amp; Reliable</div>
                  <div className="ctaFeature__sub">
                    Your equipment is in trusted hands
                  </div>
                </div>
              </div>
            </div>

            <button className="ctaBtn">
              <span className="ctaBtn__icon" aria-hidden>
                📅
              </span>
              Schedule a Pick-Up
            </button>
          </div>

          {/* Right */}
          <div className="cta__right">
            <div className="cta__imageCard">
              {/* Replace with your image path */}
              <img
                src="https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1644399565002_lawn-mower-repair.jpg"
                alt="Lawn mower ready for pick-up and delivery service"
                className="cta__image"
              />
            </div>

            <div className="ctaBadge">
              <div className="ctaBadge__icon" aria-hidden>
                🚚
              </div>
              <div className="ctaBadge__title">Same Day</div>
              <div className="ctaBadge__sub">Pick-Up Option</div>
            </div>

            {/* Decorative corner icons */}
            <div className="cta__decor cta__decor--truck" aria-hidden>
              🚚
            </div>
            <div className="cta__decor cta__decor--home" aria-hidden>
              🏠
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupDeliveryCTA;