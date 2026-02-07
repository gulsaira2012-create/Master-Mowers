import React from 'react';
import GoogleMapComponent from './Components/googleMap';
import { NavLink } from "react-router-dom";
import './style/contactUs.css';

import Navbar from "./Components/navbar"
import Footer from './Components/footer';

import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
    <Navbar/>

    <div className="contact-us-bg">
      <div className="contact-container1">
      <h1>Contact <span className='red'>Us</span></h1>
      <p><NavLink to="/" className="link">Home</NavLink>/Contact Us</p>
      </div>
    </div>
    <section className="contact-us">
      <div className="contact-container">
        <div className="contact-info1">
          <h2>Find Us on map</h2>
          <p>Located in Perth, Australia</p>
          <div className="map">
            <GoogleMapComponent />
          </div>
          <div className="contact-details">
            <div className="address">
              <h3><IoLocationSharp className='contact-icon-large'/>Address:</h3>
              <p>Perth Australia</p>
            </div>
            <div className="phone">
              <h3><FaPhone className='contact-icon-large'/>Phone:</h3>
              0470339477
            </div>
            <div className="email">
              <h3><MdEmail className='contact-icon-large'/>Email:</h3>
              <p> iti.aba1@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Write Us</h2>
          <p>Contact us and we will get back to you at our earliest</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Need Help with</option>
                <option value="service1">Service1</option>
                <option value="service2">Service2</option>
                <option value="service3">Service3</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Write your message.." required></textarea>
            </div>
            <button type="submit" className='conButton'>Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default ContactUs;
