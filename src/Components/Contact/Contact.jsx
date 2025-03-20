import React, { useState,useEffect } from 'react';
import Conimg from '../Chef/Conimg.jpg';
import Map from '../Chef/Map.jpeg';
import hacks from '../Chef/hacks.jpg'
import battle from '../Chef/battle.jpg'
import tech from '../Chef/tech.jpg'
import './Contact.css';


export default function Contact() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data to console
    console.log('Form Submission Data:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);

    // Show success message
    alert('Message sent successfully!');

    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div className="page-container-contact">
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            {/* Front Side - Contact Us */}
            <div className="flip-card-front">
              <div className="contact-content">
                <div className="image-section" onClick={handleFlip}>
                  <img src={Conimg} alt="Contact" className="contact-image" />
                </div>
                <div className="text-section">
                  <h1 className="title-contact">Contact Us</h1>
                  <p className="subtitle-contact">Click the image to get in touch with us</p>
                </div>
              </div>
            </div>

            {/* Back Side - Get in Touch */}
            <div className="flip-card-back">
              <div className="contact-content">
                <div className="form-section-contact">
                  <h1 className="title-contact">Get in Touch</h1>
                  <form onSubmit={handleSubmit} className="contact-form-contact">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input-field-contact"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="input-field-contact"
                      required
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="input-field-contact textarea"
                      required
                    />
                    <button type="submit" className="submit-button">
                      Send Message
                    </button>
                  </form>
                  <div className="social-links">
                    <span className="link-hover">Instagram</span>
                    <span className="link-hover">Facebook</span>
                    <span className="link-hover">Twitter</span>
                  </div>
                </div>
                <div className="image-section" onClick={handleFlip}>
                  <img src={Conimg} alt="Contact" className="contact-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Additional Content Section */}
      <div className="additional-content">
        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title-contact">Our Specialties</h2>
          <div className="features-grid-contact">
            <div className="feature-card-contact">
              <div className="feature-icon-contact">👨‍🍳</div>
              <h3>Smart  Chef</h3>
              <p>Book a personal chef for your special occasions</p>

            </div>
            <div className="feature-card-contact">
              <div className="feature-icon-contact">⏳</div>
              <h3>Quick Recipes</h3>
              <p> Recipes for creating quick meals</p>

            </div>
            <div className="feature-card-contact">
              <div className="feature-icon-contact">🎮</div>
              <h3>Fun-Zone</h3>
              <p>Where food meets fun – games, trivia, challenges</p>
             
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section-contact">
          <div className="stats-container">
            <div className="stat-item-contact">
              <span className="stat-number">15+</span>
              <p>Expert Chefs</p>
            </div>
            <div className="stat-item-contact">
              <span className="stat-number">1000+</span>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item-contact">
              <span className="stat-number">50+</span>
              <p>Signature Dishes</p>
            </div>
            <div className="stat-item-contact">
              <span className="stat-number">10+</span>
              <p>Years Experience</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2 className="section-title">Our Kitchen Stories</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={hacks} alt="Kitchen" className="gallery-img" />
              <div className="gallery-overlay">
                <h3>Kitchen Hacks & Tips:</h3>
                <p>Share quick tips

</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={battle} alt="Cooking" className="gallery-img" />
              <div className="gallery-overlay">
                <h3>Chef’s Challenge:</h3>
                <p>Create content around a fun in-house challenge</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={tech} alt="Dishes" className="gallery-img" />
              <div className="gallery-overlay">
                <h3>Tech-Savvy Cooking:</h3>
                <p></p>
              </div>
            </div>
          </div>
        </section>
<section class="find-us-section">
  <div class="find-us-container">
    <div class="location-info">
      <div class="info-card">
        <div class="info-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <h3>Our Location</h3>
        <p>123 Recipe Street, Foodie District</p>
        <p>Culinary City, CC 12345</p>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <i class="fas fa-phone-alt"></i>
        </div>
        <h3>Contact Info</h3>
        <ul class="contact-list">
          <li><i class="fas fa-phone"></i> (555) 123-4567</li>
          <li><i class="fas fa-envelope"></i> info@recipe.com</li>
        </ul>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <i class="fas fa-clock"></i>
        </div>
        <h3>Business Hours</h3>
        <ul class="hours-list">
          <li><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
          <li><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
          <li><span>Sunday</span> <span>Closed</span></li>
        </ul>
      </div>

      <div class="info-card">
        <div class="info-icon">
          <i class="fas fa-share-alt"></i>
        </div>
        <h3>Follow Us</h3>
        <div className="social-links">
      <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
      <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
    </div>

      </div>
    </div>

    <div class="map-container">
      <img src={Map} alt="Location Map" class="location-map-image"/>
      <div class="map-overlay">
        <button class="directions-btn">
          <i class="fas fa-directions"></i>
          Get Directions
        </button>
      </div>
    </div>
  </div>
</section>

    <div className="visme-container">
          <div className="visme-form">
          <div class="visme_d" data-title="Customer Service Form" data-url="ojkzq837-customer-service-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="119780">
          </div>
        </div>
      </div>


       
      </div>
    </>
  );
}