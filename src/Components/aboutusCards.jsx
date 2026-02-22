// AboutUsCards.jsx
import React, { useEffect, useRef, useState } from "react";
import "../Assets/CSS/Components/aboutusCards.css";
import { FaTools, FaSearch, FaCheckCircle } from "react-icons/fa";

export default function AboutUsCards() {
  const [mounted, setMounted] = useState(false);
  const didRunRef = useRef(false);

  useEffect(() => {
    if (didRunRef.current) return;
    didRunRef.current = true;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
  }, []);

  return (
    <section className="smc-section" aria-label="About us process cards">
      <div className="smc-container">
        <p className="smc-bottomText">
          Master Mowers delivers reliable Brisbane lawn mower repairs and small engine servicing with professionalism.
        </p>
        <div className={`smc-stage ${mounted ? "is-mounted" : ""}`}>

          {/* LEFT */}
          <div className="smc-card smc-left" role="article">
            <div className="smc-iconBox">
              <FaTools className="smc-icon" />
            </div>
            <div className="smc-content">
              <h3 className="smc-h3">General Repairs</h3>
              <p className="smc-p">
                Professional mower Repairs repairs done right the first time.
                
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className="smc-card smc-center" role="article">
            <div className="smc-iconBox smc-iconBox--light">
              <FaSearch className="smc-icon smc-icon--dark" />
            </div>
            <div className="smc-content">
              <h3 className="smc-h3 smc-h3--light">Diagnose & Inspect</h3>
              <p className="smc-p smc-p--light">
                Accurate diagnostics to identify
                issues before repair begins.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="smc-card smc-right" role="article">
            <div className="smc-iconBox">
              <FaCheckCircle className="smc-icon" />
            </div>
            <div className="smc-content">
              <h3 className="smc-h3">Test & Deliver</h3>
              <p className="smc-p">
               Profissional work fully workshop-tested before
                returning to the customer.
              </p>
            </div>
          </div>

        </div>

        
      </div>
    </section>
  );
}
