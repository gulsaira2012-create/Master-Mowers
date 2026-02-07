import React from 'react';
import '../style/about.css';
import { useNavigate } from 'react-router-dom';
import mower2 from "../assets/mower2.jpg"
import mower4 from "../assets/mower4.jpeg"

import aboutUsImage from "../assets/about.png"

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactUs');
  };
  return (
    <section className="why-section">
      <div className="why-container">
        <header className="why-header">
          <h2>Why Choose Master Mowers?</h2>
          <p>When your equipment breaks down, you need repairs you can rely on</p>
        </header>

        <div className="why-grid">
          {/* LEFT: images */}
          <div className="why-images">
            <div className="why-imageCard">
              <img
                src={mower2}
                alt="Technician repairing equipment"
              />
            </div>

            <div className="why-imageCard">
              <img
                src={mower4}
                alt="Small engine equipment"
              />
            </div>
          </div>

          {/* RIGHT: cards */}
          <div className="why-cards">
            <WhyCard
              title="Family Owned & Local"
              text="As a family-owned business right here in Brisbane's south side, we treat every customer like a neighbour. Your equipment matters to us because your satisfaction matters to us."
              icon="👪"
            />
            <WhyCard
              title="Experienced Technicians"
              text="Our skilled team has years of hands-on experience with all types of small engine equipment. From simple tune-ups to complex mechanical repairs, we've seen it all."
              icon="🔧"
            />
            <WhyCard
              title="Honest & Dependable"
              text="No hidden fees, no unnecessary repairs. We give you straight answers and honest advice about what your equipment needs. Our reputation is built on trust and quality workmanship."
              icon="🤝"
            />
            <WhyCard
              title="Safety-Focused Service"
              text="Your safety is our priority. Every repair is performed to the highest standards, ensuring your equipment runs safely and efficiently when it leaves our workshop."
              icon="🛡️"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ title, text, icon }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <div className="why-cardBody">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutUs;
