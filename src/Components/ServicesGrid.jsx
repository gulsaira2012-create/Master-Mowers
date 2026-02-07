import React, { useState } from "react";
import '../style/ServicesGrid.css'


const DEFAULT_SERVICES = [
  { id: "lawn-mowers", title: "Lawn Mowers", desc: "Push & self-propelled mower repairs", icon: "🌱" },
  { id: "ride-on-mowers", title: "Ride-On Mowers", desc: "Complete servicing & repairs", icon: "🚜" },
  { id: "cylinder-mowers", title: "Cylinder Mowers", desc: "Professional blade sharpening", icon: "✂️" },
  { id: "chainsaws", title: "Chainsaws", desc: "Expert chainsaw servicing", icon: "🌲" },

  { id: "hedge-trimmers", title: "Hedge Trimmers", desc: "Precision trimmer repairs", icon: "🍃" },
  { id: "brush-cutters", title: "Brush Cutters", desc: "Heavy-duty brush cutter service", icon: "🪓" },
  { id: "pressure-washers", title: "Pressure Washers", desc: "Complete pressure washer repairs", icon: "🧼" },
  { id: "generators", title: "Generators", desc: "Generator maintenance & repair", icon: "⚡" },

  { id: "concrete-saws", title: "Concrete Saws", desc: "Construction equipment servicing", icon: "🔨" },
  { id: "dam-pumps", title: "Dam Pumps", desc: "Pump repairs & maintenance", icon: "💧" },
  { id: "mulchers", title: "Mulchers", desc: "Mulcher servicing & repairs", icon: "♻️" },
  { id: "all-equipment", title: "All Equipment", desc: "Plus many more small engines", icon: "🧰" },
];

export default function ServicesGrid({
  services = DEFAULT_SERVICES,
  onServiceClick,
  defaultActiveId = "ride-on-mowers",
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  const handleClick = (service) => {
    setActiveId(service.id);
    if (typeof onServiceClick === "function") onServiceClick(service);
    // If you want navigation, you can do it here:
    // window.location.href = `/services/${service.id}`;
  };

  return (
    <section className="services">
      <div className="services__container">
        <header className="services__header">
          <h2 className="services__title">
            Expert Repair &amp; Servicing for All Small Engine <br />
            Equipment
          </h2>
          <p className="services__subtitle">
            From routine maintenance to complex mechanical faults, our experienced <br />
            technicians have you covered
          </p>
        </header>

        <div className="services__grid" role="list">
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`serviceCard ${activeId === s.id ? "serviceCard--active" : ""}`}
              onClick={() => handleClick(s)}
              role="listitem"
              aria-pressed={activeId === s.id}
            >
              <div className="serviceCard__icon" aria-hidden>
                {s.icon}
              </div>

              <div className="serviceCard__content">
                <div className="serviceCard__title">{s.title}</div>
                <div className="serviceCard__desc">{s.desc}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="services__footer">
          <button className="services__cta" type="button">
            View All Services <span className="services__arrow" aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
