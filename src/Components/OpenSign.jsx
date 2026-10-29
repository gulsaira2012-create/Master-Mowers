// OpenSign.jsx — swinging shop tag fixed just under the header. It flips every
// 4 seconds between "We're open 7 days" and "Free inspection".
import { useEffect, useRef } from "react";
import "../Assets/CSS/Components/OpenSign.css";
import { PHONE_TEL } from "./contactLinks";

export default function OpenSign() {
  const ref = useRef(null);

  // Hang from the bottom of the sticky header, whatever height it ends up.
  useEffect(() => {
    const header = document.querySelector(".mm-header");
    if (!header || !ref.current) return;
    const place = () => {
      ref.current?.style.setProperty("--os-top", `${header.getBoundingClientRect().height}px`);
    };
    place();
    const ro = new ResizeObserver(place);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      className="os"
      href={PHONE_TEL}
      aria-label="Open 7 days, 9am to 6pm. Free inspection. Tap to call Master Mowers"
    >
      <span className="os-pin" aria-hidden="true" />
      <span className="os-swing" aria-hidden="true">
        <span className="os-string" />
        <span className="os-tag">
          <span className="os-flip">
            <span className="os-face os-front">
              <span className="os-hole" />
              <span className="os-l1">We’re</span>
              <span className="os-l2">
                <span className="os-live" />
                Open 7 days
              </span>
              <span className="os-l3">9am – 6pm</span>
            </span>

            <span className="os-face os-back">
              <span className="os-hole" />
              <span className="os-l1">Free</span>
              <span className="os-l2">Inspection</span>
              <span className="os-l3">Tap to call</span>
            </span>
          </span>
        </span>
      </span>
    </a>
  );
}
