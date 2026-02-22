// AnimatedTestimonials.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../Assets/CSS/Components/AnimatedTestimonials.css";


export default function AnimatedTestimonials() {
  const testimonials = useMemo(
    () => [
      {
        quote:
          "My push mower wouldn’t start and I needed it fixed quickly. Master Mowers diagnosed the issue fast,  Honest pricing and excellent Brisbane service. Highly recommended.",
        name: "Tamar Mendelson",
        designation: "Local Customer",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "We rely on our equipment daily, so downtime isn’t an option. Master Mowers Reliable commercial mower maintenance in Brisbane. We’ll definitely use them again.",
        name: "Joe Charlescraft",
        designation: "Commercial Operator",
        src: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "My ride-on mower had fuel system issues and inconsistent performance. Master Mowers provided proper diagnostics, Best small engine repair service in Brisbane.",
        name: "Martina Edelweist",
        designation: "Homeowner",
        src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "Purchased a refurbished ride-on mower — fully serviced and great value. Very trustworthy team. fully satisfied with the quality.",
        name: "Aiden Ross",
        designation: "Landscaper",
        src: "https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?q=80&w=1103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [quoteKey, setQuoteKey] = useState(0);

  const intervalRef = useRef(null);
  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
      setQuoteKey((k) => k + 1);
    }, 4000); // ✅ 4 seconds
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % testimonials.length);
    setQuoteKey((k) => k + 1);
    stopAutoplay();
  };

  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    setQuoteKey((k) => k + 1);
    stopAutoplay();
  };

  const active = testimonials[activeIndex];

  // small circular “stacked” avatar transforms
  const getAvatarStyle = (index) => {
    // compute nearest offsets in a circular way
    const n = testimonials.length;
    const raw = index - activeIndex;
    const alt = raw > 0 ? raw - n : raw + n;
    const offset = Math.abs(alt) < Math.abs(raw) ? alt : raw;

    const abs = Math.abs(offset);
    const zIndex = 50 - abs;

    const opacity = index === activeIndex ? 1 : 0.75;
    const scale = Math.max(0.75, 1 - abs * 0.12);

    // only show “neighbors” shifted; far ones fade/scale
    let x = 0;
    let y = 0;
    let rot = 0;

    if (offset === -1) {
      x = -38;
      y = -14;
      rot = 10;
    } else if (offset === 1) {
      x = 38;
      y = 14;
      rot = -10;
    } else if (abs >= 2) {
      y = 22;
      x = offset < 0 ? -18 : 18;
      rot = offset < 0 ? 6 : -6;
    }

    return {
      zIndex,
      opacity,
      transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rot}deg)`,
    };
  };

  return (
    <section className="mmT-wrap" aria-label="Testimonials">
      <div className="mmT-container">
        {/* ✅ Whole testimonial bordered card */}
        <div className="mmT-card">
          <div className="mmT-grid">
            {/* LEFT: circular image stack */}
            <div className="mmT-avatars" aria-hidden="true">
              {testimonials.map((t, idx) => (
                <img
                  key={t.src + idx}
                  src={t.src}
                  alt={t.name}
                  className="mmT-avatar"
                  style={getAvatarStyle(idx)}
                  loading="lazy"
                />
              ))}
            </div>

            {/* RIGHT: content */}
            <div className="mmT-content">
              <div>
                <h3 className="mmT-name">{active.name}</h3>
                <p className="mmT-role">{active.designation}</p>

                <p className="mmT-quote" key={quoteKey}>
                  {active.quote.split(" ").map((word, i) => (
                    <span
                      className="mmT-word"
                      style={{ animationDelay: `${i * 20}ms` }}
                      key={i}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </p>
              </div>

              <div className="mmT-arrows">
                <button
                  type="button"
                  className="mmT-arrow mmT-prev"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="mmT-arrow mmT-next"
                  onClick={goNext}
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* optional small footer line inside the bordered card */}
          <div className="mmT-footnote">
            Open 7 Days • 9:00 AM – 9:00 PM • Brisbane
          </div>
        </div>
      </div>
    </section>
  );
}
