import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          {/* <img src="path/to/logo.png" alt="Logo" className="footer-logo" /> */}
          <h1 className='footer-logo'>Master Mowers</h1>
          <p>With over 10 years of experience, Master Tiling Perth transforms spaces with exceptional craftsmanship, innovative designs, and outstanding customer service.</p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
     
        <div className="footer-section services">
          <h4>Services</h4>
          <ul>
            <li><a href="./services">Kitchen</a></li>
            <li><a href="/service2">Floor</a></li>
            <li><a href="/service3">Exterior</a></li>
            <li><a href="/service4">Bathroom</a></li>
            <li><a href="/service4">Wall</a></li>
            <li><a href="/service4">Waterproofing</a></li>
          </ul>
        </div>
        <div className="footer-section quick-links">
          <h4>Contacts</h4>
          <ul>
            <li>123 Down Town main road,<br></br>Perth, Australia</li>
            <li><strong>Phone:</strong><a href="tel:+0470339477"> +0470339477</a></li>
            <li><strong>Email:</strong><a href="mailto:iti.aba1@yahoo.com"> iti.aba1@yahoo.com</a></li>
          </ul>
        </div>
        {/* <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Get Updated" />
            <button type="submit" className='footer'>➔</button>
          </form>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
        </div>
        <p>© 2024 Shaheen Solutions. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
