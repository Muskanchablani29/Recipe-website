// Aboutfour.jsx
import image1 from '../Images/Ingrdients/chef.jpg';
import image2 from '../Images/Ingrdients/kitchn.jpg';
import './Aboutfour.css';

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      {/* Left Side - Image Section */}
      <div className="image-section">
        <img
          src={image1}
          alt="Food Preparation"
          className="main-image"
          loading="lazy"
        />
        <div className="floating-image">
          <img 
            src={image2} 
            alt="Food Close-up" 
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Side - Text Section */}
      <div className="content-section">
        <h2 className="subtitle-aboutfour">WHY CHOOSE US</h2>
        <h3 className="title">Why we are the best</h3>
        <p className="description">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* Features */}
        <div className="features">
          <div className="feature-item">
            <div className="feature-icon">
              🍽️
            </div>
            <div>
              <h4 className="feature-title">Food Recipe</h4>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              🏡
            </div>
            <div>
              <h4 className="feature-title">Challenge-Zone</h4>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              👨‍🍳
            </div>
            <div>
              <h4 className="feature-title">Smart Chefs</h4>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              ⭐
            </div>
            <div>
              <h4 className="feature-title">Fun-Zone</h4>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              🚚
            </div>
            <div>
              <h4 className="feature-title">Jhatpat Recipe</h4>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              📱
            </div>
            <div>
              <h4 className="feature-title">Kitchen Hacks</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
