import { useEffect, useRef } from "react";
import "../Assets/CSS/Components/StackCardsSection.css";
// import { useNavigate } from "react-router-dom";
import Garageimg5 from "../Assets/Images/Garageimg5.webp";
import mower2 from "../Assets/Images/mower2.webp";
import Garageimg3 from "../Assets/Images/Garageimg3.webp";
import mower3 from "../Assets/Images/mower3.webp";
import Garageimg1 from "../Assets/Images/Garageimg1.webp";

export default function Service2SectionInner() {
  const sectionRef = useRef(null);
  const spacerRef = useRef(null);
  // const navigate = useNavigate();

  // const handleClick = (page) => {
  //   navigate(page);
  // };

  const items = [
    {
      img: Garageimg1,
      title: "lawn Mower Repair Specialist",
      href: "/services/lawn-mower-repair-brisbane",
      desc:
        "Brisbane lawn mower repair specialists providing ride-on mower repairs, push mower servicing, zero-turn mower repairs, commercial mower maintenance, small engine diagnostics, blade sharpening, fast Brisbane repairs.",
      bullets: [
        "Ride-On Mower Repairs",
        "Push / Walk-Behind Mower Repairs",
        "Zero-Turn Mower Repairs",
        "Commercial Mower Repairs",
      ],
    },
    {
      img: mower2,
      title: "Small Engine Repair Services",
      href: "/services/small-engine-repair-brisbane",
      desc:
        "Brisbane small engine repair specialists providing carburetor cleaning, fuel system repairs, ignition diagnostics, starter motor repairs, chainsaw repairs, whipper snipper servicing, reliable mower engine repairs.",
      bullets: [
        "Small Engine Diagnostics",
        "Starter Motor Repairs",
        "Ignition System Repairs",
      ],
    },
    {
      img: Garageimg5,
      title: "Maintenance & Tune-Up Services",
      href: "/services/mower-maintenance-brisbane",
      desc:
        "Brisbane mower maintenance and tune-up services including oil changes, spark plug replacement, air filter cleaning, blade sharpening, belt adjustments, preventative servicing, seasonal lawn mower servicing.",
      bullets: [
        "Mower Servicing & Tune-Ups",
        "Oil Change & Filter Replacement",
        "Blade Sharpening & Balancing",
        "Air Filter Replacement",
      ],
    },
    {
      img: mower3,
      title: "Landscape Equipment Repairs",
      href: "/services/garden-equipment-repair-brisbane",
      desc:
        "Brisbane landscape equipment repairs for whipper snippers, hedge trimmers, chainsaws, leaf blowers, pressure washers, brush cutters and small engines. Fast diagnostics, carburetor repairs, blade sharpening, commercial equipment servicing, reliable Brisbane repair specialists.",
      bullets: [
        "Whipper Snipper Repairs",
        "Hedge Trimmer Repairs",
        "Chainsaw Repairs",
        "Leaf Blower Repairs",
        "Pressure Washer Repairs",
      ],
    },
    {
      img: Garageimg3,
      title: "Mower Sales & Equipment Supply",
      href: "/services/mower-sales-brisbane",
      desc:
        "Master Mowers offers quality second-hand mowers for sale in Brisbane, including refurbished ride-on mowers, push mowers, and zero-turn mowers. Fully serviced, workshop-tested, affordable lawn mowers with expert small engine inspections and reliable performance.",
      bullets: [
        "Second-Hand Mower Sales",
        "Replacement Blades & Belts",
        "Engine Parts & Accessories",
        "Refurbished Mowers",
        "Spare Parts Supply",
      ],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(section.getElementsByClassName("stack-card"));
    if (!cards.length) return;

    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    // ✅ Mobile: normal cards (no sticky stack effect)
    if (isMobile) {
      cards.forEach((c) => (c.style.transform = "none"));
      if (spacerRef.current) spacerRef.current.style.height = "0px";
      return;
    }

    // ✅ Desktop: sticky stack effect
    const cardTop = 120; // must match CSS top
    const marginY = 28;
    let cardHeight = cards[0].offsetHeight;

    const measure = () => {
      cardHeight =
        cards[0].getBoundingClientRect().height || cards[0].offsetHeight;
    };

    const setSpacerHeight = () => {
      if (!spacerRef.current) return;
      measure();
      const runway = Math.max(
        0,
        Math.round((cards.length - 1) * (cardHeight * 0.45 + marginY))
      );
      spacerRef.current.style.height = `${runway}px`;
    };

    const animate = () => {
      const top = section.getBoundingClientRect().top;

      cards.forEach((card, i) => {
        const scroll = cardTop - top - i * (cardHeight + marginY);

        if (scroll > 0) {
          const rawScale = (cardHeight - scroll * 0.05) / cardHeight;
          const scale = Math.max(0.88, Math.min(1, rawScale));
          card.style.transform = `translateY(${marginY * i}px) scale(${scale})`;
        } else {
          card.style.transform = `translateY(${marginY * i}px) scale(1)`;
        }
      });
    };

    const onScroll = () => requestAnimationFrame(animate);

    setSpacerHeight();
    animate();

    const onLoad = () => {
      setSpacerHeight();
      requestAnimationFrame(animate);
    };
    window.addEventListener("load", onLoad);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setSpacerHeight);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setSpacerHeight);
    };
  }, []);

  return (
    <section className="service-2-section section-padding stack-section" ref={sectionRef}>
      <div className="container">
        <div className="stack-cards">
          {items.map((it, idx) => (
            <div
              className={`stack-card service-item-grid ${idx % 2 === 0 ? "theme-a" : "theme-b"}`}
              key={idx}
            >
              {/* IMAGE */}
              <div className="service-image-block">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>

              {/* CONTENT */}
              <div className="service-content-block">
                <h2 className="service-item-title">
                  {it.title}
                </h2>

                <p className="service-dec">{it.desc}</p>

                <ul className="service-list">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {/* TODO: Add form validation */}
                {/* <button onClick={() => handleClick(it.href)} className="stack-btn">
                  VIEW DETAILS <span className="arrow">→</span>
                </button> */}
              </div>
            </div>
          ))}

          {/* spacer runway (desktop only) */}
          <div ref={spacerRef} className="stack-spacer" />
        </div>
      </div>
    </section>
  );
}
