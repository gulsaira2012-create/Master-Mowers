import React, { useMemo } from "react";
import "../Assets/CSS/Components/BrandMarquee.css"
import Brandlogo1 from "../Assets/Images/brandlogo1.webp"; // Replace with your actual logo paths
import Brandlogo2 from "../Assets/Images/brandlogo2.webp";
import Brandlogo3 from "../Assets/Images/brandlogo3.webp";
import Brandlogo4 from "../Assets/Images/brandlogo5.webp";
import Brandlogo5 from "../Assets/Images/brandlogo6.webp";

export default function BrandMarquee() {
  // Replace these with your real logo paths later
  const logos = useMemo(
    () => [
      { alt: "Brand 1", src: Brandlogo1 },
      { alt: "Brand 2", src: Brandlogo2 },
      { alt: "Brand 3", src: Brandlogo3 },
      { alt: "Brand 4", src: Brandlogo4 },
      { alt: "Brand 5", src: Brandlogo5 },
    ],
    []
  );

  // Duplicate for seamless loop
  const loopLogos = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section className="brandMarquee">
      <div className="brandMarquee__inner">
        {/* Left text */}
        <div className="brandMarquee__left">
          <h3 className="brandMarquee__title">
            The company 
            <br />
            we keep
          </h3>
        </div>

        {/* Vertical divider */}
        <div className="brandMarquee__divider" aria-hidden="true" />

        {/* Right marquee */}
        <div className="brandMarquee__right">
          <div className="brandMarquee__fade brandMarquee__fade--left" />
          <div className="brandMarquee__fade brandMarquee__fade--right" />

         <div className="brandMarquee__viewport">
  <div className="brandMarquee__track" role="list" aria-label="Brand logos">
    {loopLogos.map((item, idx) => (
      <div className="brandMarquee__card" role="listitem" key={`${item.alt}-${idx}`}>
        <img className="brandMarquee__logo" src={item.src} alt={item.alt} />
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
BrandMarquee