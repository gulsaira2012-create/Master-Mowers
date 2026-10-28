// FindUs.jsx — "Find our workshop" map for customers dropping off a mower.
// Reuses the Contact page's heading/text/container classes from ContactInfoCards.css.
import "../Assets/CSS/Components/FindUs.css";
import { PHONE_TEL } from "./contactLinks";

const MAP_EMBED =
  "https://www.google.com/maps?q=Master+Mowers,+7+Faculty+Circuit,+Meadowbrook+QLD+4131&output=embed";
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Master+Mowers,+7+Faculty+Circuit,+Meadowbrook+QLD+4131&destination_place_id=ChIJidKTtGTNSYIR6I76Z0DffZY";

export default function FindUs() {
  return (
    <section className="fu-section" aria-labelledby="fu-title">
      <div className="cic-container">
        <h2 id="fu-title" className="cic-title fu-title">
          Find our workshop
        </h2>
        <p className="cic-p fu-sub">
          7 Faculty Circuit, Meadowbrook QLD 4131 · Open 7 days, 9am–6pm
        </p>

        <div className="fu-mapWrap">
          <iframe
            className="fu-map"
            src={MAP_EMBED}
            title="Master Mowers location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="fu-actions">
          <a
            className="fu-btn fu-btnPrimary"
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
          <a className="fu-btn fu-btnOutline" href={PHONE_TEL}>
            Call before you drop off
          </a>
        </div>
      </div>
    </section>
  );
}
