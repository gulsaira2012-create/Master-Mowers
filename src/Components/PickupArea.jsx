// PickupArea.jsx — "Pickup & Delivery" info with the suburbs we collect from.
import { Link } from "react-router-dom";
import "../Assets/CSS/Components/PickupArea.css";
import { PHONE_DISPLAY, PHONE_TEL } from "./contactLinks";

const BENEFITS = [
  { icon: "fas fa-stethoscope", text: "Free diagnostic check on every machine" },
  { icon: "fas fa-clock", text: "Most repairs back in 1–3 business days" },
  { icon: "fas fa-calendar-check", text: "Open 7 days, including Sundays" },
];

const SUBURBS = [
  "Meadowbrook",
  "Loganlea",
  "Slacks Creek",
  "Springwood",
  "Underwood",
  "Kingston",
  "Waterford",
  "Waterford West",
  "Bethania",
  "Shailer Park",
  "Daisy Hill",
  "Marsden",
  "Logan Central",
  "Woodridge",
];

export default function PickupArea() {
  // On a page that already has the quote form, scroll to it; otherwise go to the Contact page's form.
  function bookPickup(e) {
    const form = document.getElementById("quote");
    if (form) {
      e.preventDefault();
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className="pa-section" aria-labelledby="pa-title">
      <div className="pa-container">
        <div className="pa-content">
          <div className="pa-kicker">
            <span className="pa-dot" aria-hidden="true" />
            <span>Pickup &amp; Delivery</span>
          </div>

          <h2 id="pa-title" className="pa-title">
            Can’t get your mower to us? We’ll come and get it.
          </h2>

          <p className="pa-text">
            Broken mower too heavy for the car? We pick it up, fix it, test it and bring it back,
            ready to mow.
          </p>

          <ul className="pa-benefits">
            {BENEFITS.map((b) => (
              <li key={b.text} className="pa-benefit">
                <span className="pa-benefitIcon" aria-hidden="true">
                  <i className={b.icon} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>

          <div className="pa-actions">
            <Link className="pa-btn pa-btnPrimary" to="/contact#quote" onClick={bookPickup}>
              Book a pickup
            </Link>
            <a className="pa-btn pa-btnOutline" href={PHONE_TEL}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="pa-card">
          <h3 className="pa-cardTitle">Suburbs we collect from</h3>
          <ul className="pa-suburbs">
            {SUBURBS.map((s) => (
              <li key={s} className="pa-pill">
                {s}
              </li>
            ))}
          </ul>
          <p className="pa-note">
            Not on the list? <a href={PHONE_TEL}>Call us</a> — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
