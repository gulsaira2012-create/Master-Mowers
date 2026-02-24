import Garage1 from "../Assets/Images/Garageimg1.webp";
import "../Assets/CSS/Components/AboutSection.css";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="mm-hero">
      <div className="mm-hero-container">
        {/* LEFT CONTENT */}
        <div className="mm-hero-left">
          <span className="mm-hero-badge">
            Brisbane’s Mower Experts
          </span>

          <h1 className="mm-hero-heading">
            Professional <br />
            Mower Repairs <br />
            You Can Trust
          </h1>

          <p className="mm-hero-paragraph">
            Master Mowers is a trusted Brisbane mower repair and small engine specialist delivering reliable repairs, servicing,
            and quality second-hand mower sales. We focus on honest advice, fast turnaround, and dependable workmanship for homeowners, landscapers, and commercial clients across Brisbane.
          </p>

          <div className="mm-hero-buttons">
            <Link to="/contact"><button className="mm-hero-primaryBtn">
              Book a Repair
            </button>
            </Link>
            <Link to="/services">
            <button className="mm-hero-secondaryBtn">
              View Services
            </button>
            </Link>
            
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mm-hero-imageWrap">
          <div className="mm-hero-imageBox">
            <img
              src={Garage1}
              alt="Brisbane lawn mower repair specialist"
              className="mm-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}