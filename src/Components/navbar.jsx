import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu,IoPhonePortraitOutline} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import logo2 from "../assets/logo2.png"
import "../style/navbar.css";


const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactUs');
  };

  
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const getNavLinkClassName = ({ isActive }) => (isActive ? "nav__link active-link" : "nav__link");
  return (
    <header className="header ">
      
            <ul className="contact__item">
                <li className="navItem">
                    <a href="mailto:iti.aba1@yahoo.com">
                    <MdOutlineMail className="icon-large"/>iti.aba1@yahoo.com
                    </a>
                </li>

                <li className="navItem">
                <a href="tel:0470339477">
                <IoPhonePortraitOutline className="icon-large"/>0470339477
                </a>
                </li>
                
            </ul>
       

      <nav className="nav container">

        {/* LOGO */}
        <NavLink to="/" className="nav__logo">
          {/* MASTER MOWERS */}
          <img className="logoimg" src={logo2} alt="logo" />
        </NavLink>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu">

          <ul className="nav__list">

            <li className="nav__item">
              <NavLink to="/" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>

            <li className="nav__item dropdown" onClick={toggleDropdown}>
              <span className="nav__link pointer">Services <IoIosArrowDown className="arrow"/></span>
              {showDropdown && (
                <ul className="dropdown__menu">
                  <li className="dropdown__item">
                    <NavLink to="/Kitchen" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Lawn Mower Repairs & Servicing
                    </NavLink>
                  </li>
                  <li className="dropdown__item">
                    <NavLink to="/floor" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Ride-On Mower Repairs
                    </NavLink>
                  </li>
                  <li className="dropdown__item">
                    <NavLink to="/service2" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Whipper Snipper & Brushcutter Repairs
                    </NavLink>
                  </li>
                  <li className="dropdown__item">
                    <NavLink to="/service3" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Leaf Blower Repairs & Servicing
                    </NavLink>
                  </li>
                  <li className="dropdown__item">
                    <NavLink to="/service3" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Hedge Trimmer Repairs
                    </NavLink>
                  </li>
                  
                  <li className="dropdown__item">
                    <NavLink to="/service3" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                      Chainsaw Repairs & Sharpening
                    </NavLink>
                  </li>
                  <li className="dropdown__item">
                    <NavLink to="/service3" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                     Small Engine Diagnostics & Repairs
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav__item">
              <NavLink to="/AboutUs" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                About
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/contactUs" className={getNavLinkClassName} onClick={closeMenuOnMobile}>
                Contact
              </NavLink>
            </li>

            <li className="nav__item">
              <button className="nav__cta" onClick={handleClick}> Get a free Qoute</button>

            </li>

          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>

        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;