// TestimonialsSmooth.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../style/testimonials.css";

const TESTIMONIALS = [
  {
    name: "Lita",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "Fast service and honest advice. My device was fixed the same day and it looks brand new.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "Stephen George",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "Very professional team. Clear pricing, quick turnaround, and great communication.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Mia Carter",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "Super friendly staff. They explained everything simply and the repair quality is perfect.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Noah Williams",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "I loved how smooth the process was. Dropped it off, got updates, picked it up—done.",
    avatar: "https://i.pravatar.cc/120?img=56",
  },
  {
    name: "Ava Johnson",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "Great value for money. The repair was quick and the warranty gave me peace of mind.",
    avatar: "https://i.pravatar.cc/120?img=8",
  },
  {
    name: "Ethan Brown",
    role: "Customer",
    company: "Naples Repairs",
    text:
      "Top quality work. Clean finish and the device is running perfectly again. Highly recommended!",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];

const MOD = (n, m) => ((n % m) + m) % m;

const getPerView = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3; // desktop
  if (window.innerWidth >= 768) return 2;  // tablet
  return 1;                                // mobile
};

export default function TestimonialsSmooth() {
  const [perView, setPerView] = useState(getPerView());

  // index is the "track index", including the leading clone
  const [index, setIndex] = useState(perView); // start after leading clones
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  const timerRef = useRef(null);

  // Update perView on resize
  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Build track with clones (for seamless loop)
  // We clone last perView items at the start, and first perView items at the end.
  const trackItems = useMemo(() => {
    const head = TESTIMONIALS.slice(0, perView);
    const tail = TESTIMONIALS.slice(-perView);
    return [...tail, ...TESTIMONIALS, ...head];
  }, [perView]);

  // Reset index when perView changes (keep it stable)
  useEffect(() => {
    setAnimate(false);
    setIndex(perView); // first real slide
    requestAnimationFrame(() => setAnimate(true));
  }, [perView]);

  // Auto slide
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Seamless looping
  useEffect(() => {
    const realCount = TESTIMONIALS.length;
    const endOfReal = perView + realCount;

    if (index === endOfReal) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(perView);
        requestAnimationFrame(() => setAnimate(true));
      }, 420);
      return () => clearTimeout(t);
    }

    if (index === 0) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(perView + realCount - 1);
        requestAnimationFrame(() => setAnimate(true));
      }, 420);
      return () => clearTimeout(t);
    }
  }, [index, perView]);

  // Dots (based on "real" index)
  const realIndex = useMemo(() => {
    const realCount = TESTIMONIALS.length;
    return MOD(index - perView, realCount);
  }, [index, perView]);

  const pages = useMemo(() => {
    return Math.ceil(TESTIMONIALS.length / perView);
  }, [perView]);

  const currentPage = useMemo(() => {
    return Math.floor(realIndex / perView);
  }, [realIndex, perView]);

  const goToPage = (p) => {
    setAnimate(true);
    setIndex(perView + p * perView);
  };

  // translate percentage based on perView
  const translatePct = (index * 100) / perView;

  return (
    <section
      className="ts-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        backgroundImage:
          "linear-gradient(rgba(247,247,247,0.92), rgba(247,247,247,0.92)), url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=70')",
      }}
    >
      <div className="ts-container">
        <div className="ts-header">
          <h2>WHAT OUR CUSTOMERS SAID</h2>
          <p>
            Trusted by customers for fast turnaround, clear pricing, and
            professional service.
          </p>
        </div>

        <div className="ts-viewport">
          <div
            className={`ts-track ${animate ? "is-anim" : ""}`}
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {trackItems.map((t, i) => (
              <div
                className="ts-slide"
                key={`${t.name}-${i}`}
                style={{ width: `${100 / perView}%` }}
              >
                <article className="ts-card">
                  <div className="ts-avatar">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} />
                    ) : (
                      <span>{t.name.trim()[0].toUpperCase()}</span>
                    )}
                  </div>

                  <div className="ts-body">
                    <p className="ts-text">“{t.text}”</p>
                    <p className="ts-meta">
                      <strong>{t.name}</strong>, {t.role}{" "}
                      <span className="ts-dot">•</span> {t.company}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="ts-dots" aria-label="Testimonial pagination">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`ts-dotbtn ${i === currentPage ? "is-active" : ""}`}
              onClick={() => goToPage(i)}
              aria-label={`Go to testimonials ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
