import React, { useState ,useEffect} from "react";
import './Hackstop.css'
import chefImage from "../Chef/tips.png";
import hackImage from "../Chef/hack.jpeg";
import tipImage from "../Chef/tip.jpeg";
import fixImage from "../Chef/fix.jpeg";
import Hacks from './Hacks';
import Tips from './Tips';
import QuickFix from './Quick';

export default function TipsHacks() {
  
  const [activeSection, setActiveSection] = useState(null);

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'hacks':
        return <Hacks />;
      case 'tips':
        return <Tips />;
      case 'quickFix':
        return <QuickFix />;
      default:
        return null;
    }
  };
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className={`tips-hacks-container-lavina ${isVisible ? 'visible' : ''}`}>

    <div className="tips-hacks-container-lavina">
      {/* Left Text Section */}
      <div className="left-section-lavina">
        <p className="subheading-lavina">Kitchen Jugaad Unleashed</p>
        <h1 className="heading-lavina">Quick hacks, smart recipes, and tasty solutions for every occasion</h1>
      </div>
</div>
      {/* Green Background Section */}
      <div className="green-section-lavina">
        {/* Images Inside Green Section */}
        <div className="image-container-lavina">
          <div className="section-wrapper-lavina">
            <div 
              className={`image-box-lavina ${activeSection === 'hacks' ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === 'hacks' ? null : 'hacks')}
            >
              <img src={hackImage} alt="Kitchen Hacks" />
              <p>Kitchen Hacks</p>
            </div>
          </div>
          <div className="section-wrapper-lavina">
            <div 
              className={`image-box-lavina ${activeSection === 'tips' ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === 'tips' ? null : 'tips')}
            >
              <img src={tipImage} alt="Tips" />
              <p>Tips</p>
            </div>
          </div>
          <div className="section-wrapper-lavina">
            <div 
              className={`image-box-lavina ${activeSection === 'quickFix' ? 'active' : ''}`}
              onClick={() => setActiveSection(activeSection === 'quickFix' ? null : 'quickFix')}
            >
              <img src={fixImage} alt="Quick Fix" />
              <p>Quick Fix</p>
            </div>
          </div>
        </div>

        {/* Chef Image on Right Side */}
        <img src={chefImage} alt="Chef" className="chef-image-lavina" />
      </div>

      {/* Full-Width Content Section BELOW the Green Section */}
      {activeSection && (
        <div className="full-width-content-lavina">
          {renderContent()}
        </div>
      )}
    </div>
  );
}