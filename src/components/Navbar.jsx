import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ onLoginClick, user, onLogout }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const exploreSection = document.getElementById('explore-section');
      const offset = exploreSection ? exploreSection.offsetTop : 400; // Fallback offset

      // 1. Determine Sticky State (triggered after Hero/Explore)
      if (currentScrollY > offset - 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // 2. Determine Visibility (Smart Scroll)
      if (currentScrollY > lastScrollY.current && currentScrollY > offset) {
        // Scrolling DOWN & past the threshold -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP or at the top -> Show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    // setIsMobileMenuOpen(!isMobileMenuOpen); 
    // Re-implementing mobile menu state locally or prop if needed, 
    // treating it as local state properly as per previous file content
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav
      className={`navbar ${isSticky ? 'sticky' : ''} ${!isVisible ? 'hidden' : ''}`}
      id="navbar"
    >
      <div className="nav-container">
        <div className="nav-logo">
          <button
            className="hamburger"
            id="hamburger-btn"
            onClick={handleMobileToggle}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path>
            </svg>
          </button>

          {/* Logo - Using text fallback if image fails, but sticking to requested structure */}
          <img src="/logo.svg" alt="Canva" className="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li className="dropdown">
            <a href="#">Design Spotlight
              <svg className="chevron-down" viewBox="0 0 24 24" width="12" height="12">
                <path d="M12 16l-6-6h12z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Help</a></li>
        </ul>

        <div className="nav-actions">
          {!user ? (
            <div id="auth-buttons" className="auth-buttons">
              <button className="nav-btn btn-signup-simple">Sign up</button>
              <button
                className="btn-primary btn-login-purple"
                id="login-btn"
                onClick={onLoginClick}
              >
                Log in
              </button>
            </div>
          ) : (
            <div id="user-profile" className="user-profile">
              <span className="user-avatar">👤</span>
              <span id="user-name" className="user-name">{user.name}</span>
              <button
                id="logout-btn"
                className="btn-primary btn-login-purple"
                onClick={onLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
