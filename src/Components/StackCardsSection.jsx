import { useEffect, useRef } from "react";
import "../Assets/CSS/Components/StackCardsSection.css";
// import { useNavigate } from "react-router-dom";
import Garageimg5 from "../Assets/Images/Garageimg5.webp";
import mower2 from "../Assets/Images/mower2.webp";
import Garageimg3 from "../Assets/Images/Garageimg3.webp";
import mower3 from "../Assets/Images/mower3.webp";
import Garageimg1 from "../Assets/Images/Garageimg1.webp";
import mowerview from "../Assets/Images/mowerview.webp";
import repairing from "../Assets/Images/repairingshop.webp";
import smallengine from "../Assets/Images/smallengine.webp";

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
      title: "Lawn Mower Repair & Servicing Brisbane",
      href: "/services/lawn-mower-repair-brisbane",
      desc:
        "Lawn mower repair Brisbane and lawn mower servicing Brisbane for push mowers, ride on mowers, and zero turns. We provide mower service Brisbane, small engine repair Brisbane, blade sharpening, oil changes, and diagnostics. Trusted mower repair near me servicing Honda, Victa, and all major brands with fast turnaround and pickup options.",
      bullets: [
        "Ride-On Mower Repairs",
        "Push Mower Repairs",
        "Zero-Turn Mower Repairs",
        "Commercial Mower Repairs",
      ],
    },
   
    {
      img: mowerview,
      title: "Maintenance & Zero Turn Mower Repairs Brisbane.",
      href: "/services/mower-maintenance-brisbane",
      desc:
        "Zero turn mower repairs Brisbane and zero turn mower service Brisbane with expert mower maintenance Brisbane for residential and commercial machines. We handle ride on mower repairs Brisbane, zero turn servicing near me, blade sharpening, engine diagnostics, and full maintenance. Reliable mower repair Brisbane with fast turnaround, quality parts, and optional pickup and delivery across Brisbane.",
      bullets: [
        "Mower Servicing & Tune-Ups",
        "Oil Change & Filter Replacement",
        "Blade Sharpening & Balancing",
        "Air Filter Replacement",
      ],
    },
    
    {
      img: Garageimg5 ,
      title: "Whipper Snipper & Line Trimmer Repair Brisbane",
      href: "/services/garden-equipment-repair-brisbane",
      desc:
        "Whipper Snipper & Line Trimmer Repair Brisbane experts providing fast, reliable servicing for all brands and models. Our Whipper Snipper & Line Trimmer Repair Brisbane service includes diagnostics, engine tuning, line feed repairs, and full maintenance to keep your equipment running like new. Trust our professional Whipper Snipper & Line Trimmer Repair Brisbane team for quality workmanship and quick turnaround across Brisbane.",
      bullets: [
        "Whipper Snipper Repairs",
        "Hedge Trimmer Repairs",
        "Chainsaw Repairs",
        "Leaf Blower Repairs",
        "Pressure Washer Repairs",
      ],
    },
    {
      img: repairing,
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
     {
      img: smallengine,
      title: "Small Engine Repair Services",
      href: "/services/small-engine-repair-brisbane",
      desc:
        "Small engine repair Brisbane including chainsaw repair Brisbane, whipper snipper repair Brisbane, line trimmer repair, leaf blower repair, and mower repair Brisbane. Servicing Honda, Victa, STIHL and more. Fast, reliable small engine service near you with pickup and delivery available.",
      bullets: [
        "Small Engine Diagnostics",
        "Starter Motor Repairs",
        "Leaf blowers & garden vacuums",
        "Chainsaws & hedge trimmers",
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
