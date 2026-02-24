import { Link } from "react-router-dom";
import servicemower2 from  "../Assets/Images/servicemower2.webp"
import servicemower1 from  "../Assets/Images/servicemower1.webp"
import servicemower3 from  "../Assets/Images/servicemower3.webp"

import "../Assets/CSS/Components/Services.css"

export default function ServicesSection() {

  return (
    <section className="ss-wrap">
      <div className="ss-container">
        {/* Header */}
        <div className="ss-top">
          <div className="ss-kicker">
            <span className="ss-dot" />
            <span>Our Services</span>
          </div>

          <div className="ss-headRow">
            <h2 className="ss-title">
              Reliable mower repairs<br />servicing Brisbane trusts.
            </h2>

            <Link className="ss-btn" to="/services">
              View All Services →
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="ss-grid">
          {/* Left */}
          <div className="ss-card" >
            <div className="ss-img">
              <img
                src={servicemower2}
                alt=""
              />
            </div>
            <div className="ss-body">
              <h3>Lawn Mower Repair Specialists</h3>
              <p>
                Brisbane lawn mower repair specialists providing best services ever you want
              </p>
              {/* <span>Learn more →</span> */}
            </div>
          </div>

          {/* Center */}
          <div className="ss-highlight" >
            <div className="ss-highlightTop">
              <h3>Small Engine Repair Services</h3>
              <div className="ss-line" />
              <p>
                Brisbane small engine repair specialists providing reliable mower engine repairs.
              </p>
              {/* <span>Learn more →</span> */}
            </div>

            <div className="ss-highlightImg">
              <img
                src={servicemower3}
                alt=""
              />
            </div>
          </div>

          {/* Right */}
          <div className="ss-card" >
            <div className="ss-img">
              <img
                src={servicemower1}
                alt=""
              />
            </div>
            <div className="ss-body">
              <h3>Landscape Equipment Repairs</h3>
              <p>
                Brisbane landscape equipment repairs for chainsaws, hedge trimmers, blowers, whipper snippers, brush cutters.
              </p>
              {/* <span>Learn more →</span> */}
            </div>
          
          </div>
          <Link className="ss-btn-mob" to="/services">
              View All Services →
            </Link>
        </div>
      </div>
    </section>
  );
}

