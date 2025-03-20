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
    <div className={`testimonial-card-kirti ${isActive ? 'active' : ''}`}>
      <div className="testimonial-image-kirti">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content-kirti">
        <p className="testimonial-text-kirti">{testimonial.text}</p>
        <h3 className="testimonial-name-kirti">{testimonial.name}</h3>
        <p className="testimonial-role-kirti">{testimonial.role}</p>
      </div>
    </div>
  );
});

const Testimonials = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  // Create an extended array with duplicates for smooth infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="testimonials-container-kirti">
      <h2 className="testimonials-title-kirti">What Our Clients Are Saying</h2>
      <p className="testimonials-subtitle-kirti">Reviews & Feedback</p>
      
      <div className="testimonials-slider-kirti">
        <div 
          className="testimonials-slides-container-kirti"
          style={{
            transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${index}`}
              className="testimonials-slide-kirti"
            >
              <TestimonialCard 
                testimonial={testimonial}
                isActive={
                  (index % testimonials.length) >= currentIndex && 
                  (index % testimonials.length) < currentIndex + slidesToShow
                }
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
