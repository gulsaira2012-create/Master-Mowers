import React, { useEffect, useMemo, useState } from "react";
import '../style/HeroSlider.css';
// import "../mower1.jpg"

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        image: "https://storage.googleapis.com/genibot2.appspot.com/images/66e07f91-c4a6-45d6-a20b-5dac7d43c2e1.png",
        kicker: "Master Mowers Brisbane",
        title: "Fast Mower Repairs & Servicing",
        desc:
          "From won’t-start issues to full tune-ups — we diagnose quickly, explain clearly, and get you mowing again fast.",
        primaryBtn: { text: "Get a Free Quote", href: "/quote" },
        secondaryBtn: { text: "Contact Us", href: "/contact" },
        // choose how text enters:
        titleAnim: "from-top",
        descAnim: "from-left",
      },
      {
        image:
          "https://images.unsplash.com/photo-1630709437016-ee675b9b29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        kicker: "Same-Day Service (When Available)",
        title: "Carb Cleaning • Tune-Ups • Blade Sharpening",
        desc:
          "Professional small engine service with honest pricing and quality workmanship. Bring your mower in today.",
        primaryBtn: { text: "View Services", href: "/services" },
        secondaryBtn: { text: "Call Now", href: "tel:0400000000" },
        titleAnim: "from-left",
        descAnim: "from-bottom",
      },
      {
        image:
          "https://images.unsplash.com/photo-1629335493555-207a26e4f756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        kicker: "Trusted Local Workshop",
        title: "Ride-On & Push Mower Repairs",
        desc:
          "We repair major brands and common faults: starting issues, stalling, belts, cables, blades and more.",
        primaryBtn: { text: "Book a Repair", href: "/book" },
        secondaryBtn: { text: "Get Directions", href: "/location" },
        titleAnim: "from-right",
        descAnim: "from-left",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  // auto-change every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [slides.length]);

  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActive((prev) => (prev + 1) % slides.length);

  return (
    <section className="hero">
      {slides.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            className={`hero-slide ${isActive ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={!isActive}
          >
            <div className="hero-overlay" />

            <div className="hero-content">
              <p className={`hero-kicker ${isActive ? "show" : ""}`}>
                {s.kicker}
              </p>

              <h1 className={`hero-title ${s.titleAnim} ${isActive ? "show" : ""}`}>
                {s.title}
              </h1>

              <p className={`hero-desc ${s.descAnim} ${isActive ? "show" : ""}`}>
                {s.desc}
              </p>

              <div className={`hero-actions ${isActive ? "show" : ""}`}>
                <a className="btn btn-primary" href={s.primaryBtn.href}>
                  {s.primaryBtn.text}
                </a>
                <a className="btn btn-secondary" href={s.secondaryBtn.href}>
                  {s.secondaryBtn.text}
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Optional arrows */}
      <button className="hero-arrow hero-arrow-left" onClick={goPrev} aria-label="Previous slide">
        ‹
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={goNext} aria-label="Next slide">
        ›
      </button>

      {/* Optional dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
