import React from 'react';
import '../style/testimonial.css';

import tesimonialImg from "../assets/testimonials.png"
import qotation from "../assets/Quotemarks-right.png"
import profile from "../assets/profile.jpg"

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="testimonial-image">
          <img src='https://images.unsplash.com/photo-1690099613077-8415129aa4ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Testimonial" className="testimonial-main-image" />
        </div>
        <div className="testimonial-text">
          <h2>What Brisbane says about <span className="highlight">Master Mowers ?</span></h2>
          <p className="testimonial-quote">
          Brought in my Honda lawn mower that wouldn’t start and they found the problem quickly. The team did a proper diagnosis, explained everything in simple terms, and gave me a clear quote before starting. They cleaned the carburettor, checked the spark plug, and completed a full mower service and tune-up. I had it running the same day, and now it starts first pull and cuts clean again. Fair pricing, fast turnaround, and genuinely professional mower repair in Brisbane — highly recommend
          </p>
          <div className="testimonial-author">
            <img src={profile} alt="Author" className="author-image" />
            <div>
              <h3>Daniel R. </h3>
              <p className="author-title">Brisbane Northside</p>
            </div>
            <img src={qotation} alt="Author" className="quotes" />
          </div>
        </div>
    </section>
  );
};

export default Testimonial;