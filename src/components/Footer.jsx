import React, { useState } from 'react';

const Footer = () => {
    const [isDevMenuOpen, setIsDevMenuOpen] = useState(false);

    const toggleDevMenu = () => {
        setIsDevMenuOpen(!isDevMenuOpen);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="nav-logo">
                        <img src="/logo.svg" alt="Canva" className="logo" />
                        </div>
                    <div className="download-section">
                        <p>Download Canva for free</p>
                        <div className="download-buttons">
                            <button className="download-btn">Windows</button>
                            <button className="download-btn">Mac</button>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Latest launches</a></li>
                            <li><a href="#">Visual Suite</a></li>
                            <li><a href="#">Magic Studio</a></li>
                            <li><a href="#">Brand management</a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Print</a></li>
                            <li><a href="#">Apps Marketplace</a></li>
                            <li><a href="#">Affinity ↗</a></li>
                            <li><a href="#">Template library</a></li>
                            <li><a href="#">Design Trends</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">About Canva</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Careers ↗</a></li>
                            <li><a href="#">Social impact</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Case Studies</a></li>
                        </ul>
                        <h4 style={{ marginTop: '2rem' }}>Plans</h4>
                        <ul>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Pro</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Enterprise</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Higher education</a></li>
                            <li><a href="#">Nonprofits</a></li>
                            <li><a href="#">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Trust Centre</a></li>
                            <li><a href="#">Canva Safe AI</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Enterprise services</a></li>
                            <li><a href="#">Design School ↗</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                        <h4 style={{ marginTop: '2rem' }}>Community</h4>
                        <ul>
                            <li><a href="#">Canva Communities</a></li>
                            <li><a href="#">Creators</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Canva Represents Fund</a></li>
                            <li><a href="#">Content partners</a></li>
                            <li><a href="#">Business partner directory</a></li>
                            <li>
                                <button
                                    id="dev-menu-btn"
                                    className={`footer-dropdown-btn ${isDevMenuOpen ? 'active' : ''}`}
                                    onClick={toggleDevMenu}
                                >
                                    Canva Developers <span className="arrow-icon">▼</span>
                                </button>
                                <ul id="dev-submenu" className={`submenu ${isDevMenuOpen ? 'show' : ''}`}>
                                    <li><a href="#">API Documentation</a></li>
                                    <li><a href="#">Apps SDK</a></li>
                                    <li><a href="#">Design Extensions</a></li>
                                    <li><a href="#">Submit an App</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="social-links">
                        <button className="language-btn">🌐 English (India)</button>
                        <a href="#" className="social-icon">in</a>
                        <a href="#" className="social-icon">📷</a>
                        <a href="#" className="social-icon">f</a>
                        <a href="#" className="social-icon">P</a>
                        <a href="#" className="social-icon">𝕏</a>
                        <a href="#" className="social-icon">▶</a>
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <span>© 2026 All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
