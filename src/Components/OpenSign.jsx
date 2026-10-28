// OpenSign.jsx — swinging "We're open 7 days" shop tag for the hero.
// Positioned absolutely, so the parent needs position: relative.
import "../Assets/CSS/Components/OpenSign.css";
import { PHONE_TEL } from "./contactLinks";

export default function OpenSign() {
  return (
    <a
      className="os"
      href={PHONE_TEL}
      aria-label="Open 7 days, 9am to 6pm. Tap to call Master Mowers"
    >
      <span className="os-pin" aria-hidden="true" />
      <span className="os-swing" aria-hidden="true">
        <span className="os-string" />
        <span className="os-tag">
          <span className="os-hole" />
          <span className="os-l1">We’re</span>
          <span className="os-l2">
            <span className="os-live" />
            Open 7 days
          </span>
          <span className="os-l3">9am – 6pm</span>
        </span>
      </span>
    </a>
  );
}
