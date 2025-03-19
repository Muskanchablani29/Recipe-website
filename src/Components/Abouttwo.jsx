import React, { memo, useState, useEffect } from "react";
import './Abouttwo.css';
import girl1 from './GirlsImages/girl1.jpg';
import girl2 from './GirlsImages/girl2.jpg';
import girl3 from './GirlsImages/girl3.jpg';
import girl4 from './GirlsImages/girl4.jpg';
import girl5 from './GirlsImages/girl5.jpg';
import girl6 from './GirlsImages/girl6.jpg';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: girl1,
    text: "The recipes I found here transformed my cooking experience. Everything is so well explained!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Chef",
    image: girl2,
    text: "I love how detailed the instructions are. It's helped me improve my cooking skills."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: girl3,
    text: "This website is my go-to resource for finding new recipes. The variety is outstanding!"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Restaurant Owner",
    image: girl4,
    text: "As a professional chef, I'm impressed by the quality of recipes shared here."
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Cooking Instructor",
    image: girl5,
    text: "The step-by-step guides are perfect for teaching my students!"
  },
  {
    id: 6,
    name: "James Martinez",
    role: "Food Photographer",
    image: girl6,
    text: "The presentation of recipes is absolutely stunning. Great attention to detail!"
  }
];

const TestimonialCard = memo(({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{testimonial.text}</p>
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-role">{testimonial.role}</p>
      </div>
    </div>
  );
});

const Testimonials = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Are Saying</h2>
      <p className="testimonials-subtitle">Reviews & Feedback</p>
      
      <div className="testimonials-slider">
        <div 
          className="testimonials-slides-container" 
          style={{ 
            transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonials-slide"
            >
              <TestimonialCard 
                testimonial={testimonial} 
                isActive={index === currentIndex || 
                         index === (currentIndex + 1) % testimonials.length || 
                         index === (currentIndex + 2) % testimonials.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';
Testimonials.displayName = 'Testimonials';

export default Testimonials;
