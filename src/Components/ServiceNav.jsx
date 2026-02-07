import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../style/serviceNav.css'

const ServiceNav = () => {
  
    return (
        <div className="servicesNav-container">
          <h2>Our Services <span className="s-line"></span></h2>
          <nav className="service-nav">
            <ul>
              <li><NavLink to="/kitchen" className={({ isActive }) => (isActive ? 'active' : '')}>Kitchen</NavLink></li>
              <li><NavLink to="/floor" className={({ isActive }) => (isActive ? 'active' : '')}>Floor</NavLink></li>
              <li><NavLink to="/exterior" className={({ isActive }) => (isActive ? 'active' : '')}>Exterior</NavLink></li>
              <li><NavLink to="/commercial" className={({ isActive }) => (isActive ? 'active' : '')}>Commercial</NavLink></li>
              <li><NavLink to="/water" className={({ isActive }) => (isActive ? 'active' : '')}>Water Proofing</NavLink></li>
              <li><NavLink to="/bathroom" className={({ isActive }) => (isActive ? 'active' : '')}>Bathroom</NavLink></li>
            </ul>
          </nav>
        </div>
      );
};
export default ServiceNav;