import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Company Name</h3>
          <p className="footer-description">
            Creating amazing experiences since 2023
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-links">
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Street Name</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <button className="social-btn">Facebook</button>
            <button className="social-btn">Twitter</button>
            <button className="social-btn">Instagram</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
