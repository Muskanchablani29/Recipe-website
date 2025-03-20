// Aboutfour.jsx
import image1 from '../Images/Ingrdients/chef.jpg';
import image2 from '../Images/Ingrdients/kitchn.jpg';
import './Aboutfour.css';

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us-kirti">
      {/* Left Side - Image Section */}
      <div className="image-section-kirti">
        <img
          src={image1}
          alt="Food Preparation"
          className="main-image-kirti"
          loading="lazy"
        />
        <div className="floating-image-kirti">
          <img 
            src={image2} 
            alt="Food Close-up" 
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Side - Text Section */}
      <div className="content-section-kirti">
        <h2 className="subtitle-aboutfour-kirti">WHY CHOOSE US</h2>
        <h3 className="title-kirti">Why we are the best</h3>
        <p className="description-kirti">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* Features */}
        <div className="features-kirti">
          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              🍽️
            </div>
            <div>
              <h4 className="feature-title-kirti">Food Recipe</h4>
            </div>
          </div>

          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              🏡
            </div>
            <div>
              <h4 className="feature-title-kirti">Challenge-Zone</h4>
            </div>
          </div>

          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              👨‍🍳
            </div>
            <div>
              <h4 className="feature-title-kirti">Smart Chefs</h4>
            </div>
          </div>

          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              ⭐
            </div>
            <div>
              <h4 className="feature-title-kirti">Fun-Zone</h4>
            </div>
          </div>

          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              🚚
            </div>
            <div>
              <h4 className="feature-title-kirti">Jhatpat Recipe</h4>
            </div>
          </div>

          <div className="feature-item-kirti">
            <div className="feature-icon-kirti">
              📱
            </div>
            <div>
              <h4 className="feature-title-kirti">Kitchen Hacks</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
