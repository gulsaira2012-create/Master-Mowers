import React from 'react';
import '../style/chooseUs.css';

const OurSatisfaction = () => {
  return (
    <section className="our-satisfaction">
        <div className="satisfaction-text">
          <p className='short'>why Choose Us</p>
          <h1 className="titleChoose">Our Dedication to Your Satisfaction</h1>
          <p className="chooseUs-description">
          Choose hello us for expert craftsmanship, top-quality materials, and personalized service that turns your tiling vision into reality. With a commitment to detail, timely completion, and customer satisfaction, we deliver durable and stunning results for every project. Trust our experienced team to enhance your space with precision and care.
          </p>
          <div className="ratings">
            <div className="rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <p><strong>4.9 / 5 rating</strong></p>
              <p>Quality</p>
            </div>
            <div className="rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <p><strong>4.8 / 5 rating</strong></p>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="satisfaction-details">
          <div className="detail">
            <span className="icon"><i class="fa-solid fa-user-nurse"></i></span>
            <div>
              <h2>Expert Craftsmanship</h2>
              <p>
              Our skilled tilers bring years of experience and precision to every project, ensuring flawless tile installations that stand the test of time.
              </p>
            </div>
          </div>
          <div className="detail">
            <span className="icon"><i class="fa-solid fa-medal"></i></span>
            <div>
              <h2>Quality Materials</h2>
              <p>
              We use only the highest quality tiles and adhesives, sourced from trusted suppliers, to guarantee long-lasting and beautiful results.
              </p>
            </div>
          </div>
          <div className="detail">
            <span className="icon"><i class="fa-solid fa-clock"></i></span>
            <div>
              <h2>Timely Completion</h2>
              <p>
              We respect your time and strive to complete every project within the agreed timeline, without compromising on quality.
              </p>
            </div>
          </div>
     
        </div>
    </section>
  );
};

export default OurSatisfaction;
