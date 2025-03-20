import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-section animate-fade-in">
          <h3>About Us</h3>
          <p>We create amazing recipes and culinary experiences for food lovers around the world.</p>
          <div className="social-icons">
            <div className="social-icon hover-float">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-icon hover-float">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="social-icon hover-float">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="footer-section animate-fade-in">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/recipes" className="hover-slide">Recipes</a></li>
            <li><a href="/categories" className="hover-slide">Categories</a></li>
            <li><a href="/blog" className="hover-slide">Blog</a></li>
            <li><a href="/about" className="hover-slide">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section animate-fade-in">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="/faq" className="hover-slide">FAQ</a></li>
            <li><a href="/contact" className="hover-slide">Contact</a></li>
            <li><a href="/privacy" className="hover-slide">Privacy Policy</a></li>
            <li><a href="/terms" className="hover-slide">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom animate-fade-up">
        <p>&copy; 2024 Recipe Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;