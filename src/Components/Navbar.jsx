import { useEffect, useRef, useState } from "react";
import Logo from "../Assets/Images/Logo.webp";
import { NavLink } from "react-router-dom";
import "../Assets/CSS/Components/Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef(null);

  // close everything on Esc
  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // close mobile if resized to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 900) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <header className="mm-header">
        <div className="mm-container-nav">
          <a href="/" className="mm-brand">
            <img src={Logo} alt="Master Mowers Logo" className="mm-logo" />
            <span className="mm-brandText">MASTER MOWERS</span>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="mm-hamburger"
          >
            ☰
          </button>

          {/* Desktop nav */}
          <nav className="mm-desktop-nav" ref={wrapRef}>
            <NavLink to="/" className="mm-link">
              Home
            </NavLink>

            <NavLink to="/services" className="mm-link">
              Services
            </NavLink>

            <NavLink to="/about" className="mm-link">
              About
            </NavLink>

            <NavLink to="/contact" className="mm-link">
              Contact
            </NavLink>

            <a href="/contact" className="mm-cta">
              Get a Quote <span className="mm-ctaArrow">›</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div className="mm-overlay" onClick={closeMobile} />

          <div className="mm-mobilePanel" role="dialog" aria-modal="true">
            <div className="mm-mobileInner">
              <div className="mm-mobileTopRow">
                <div className="mm-mobileBrand">
                  <img
                    src={Logo}
                    alt="Master Mowers Logo"
                    className="mm-logo mm-logo--sm"
                  />
                  <span className="mm-brandText mm-brandText--sm">
                    MASTER MOWERS
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="mm-closeBtn"
                >
                  ✕
                </button>
              </div>

              <div className="mm-mobileLinks">
                <NavLink to="/" className="mm-mobileLink" onClick={closeMobile}>
                  <span>Home</span>
                </NavLink>

                <NavLink
                  to="/services"
                  className="mm-mobileLink"
                  onClick={closeMobile}
                >
                  <span>Services</span>
                </NavLink>

                <NavLink
                  to="/about"
                  className="mm-mobileLink"
                  onClick={closeMobile}
                >
                  <span>About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="mm-mobileLink"
                  onClick={closeMobile}
                >
                  <span>Contact</span>
                </NavLink>

                <a
                  href="/contact"
                  className="mm-mobileCTA"
                  onClick={closeMobile}
                >
                  Get a Quote <span className="mm-ctaArrow">›</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}