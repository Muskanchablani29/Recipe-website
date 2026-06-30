import React, { memo, useState, useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import "./Abouttwo.css";
import girl1 from "./GirlsImages/girl1.jpg";
import girl2 from "./GirlsImages/girl2.jpg";
import girl3 from "./GirlsImages/girl3.jpg";
import girl4 from "./GirlsImages/girl4.jpg";
import girl5 from "./GirlsImages/girl5.jpg";
import girl6 from "./GirlsImages/girl6.jpg";

const staticTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: girl1,
    text: "The recipes I found here transformed my cooking experience. Everything is so well explained!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Home Chef",
    image: girl2,
    text: "I love how detailed the instructions are. It's helped me improve my cooking skills.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: girl3,
    text: "This website is my go-to resource for finding new recipes. The variety is outstanding!",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Restaurant Owner",
    image: girl4,
    text: "As a professional chef, I'm impressed by the quality of recipes shared here.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Cooking Instructor",
    image: girl5,
    text: "The step-by-step guides are perfect for teaching my students!",
  },
  {
    id: 6,
    name: "James Martinez",
    role: "Food Photographer",
    image: girl6,
    text: "The presentation of recipes is absolutely stunning. Great attention to detail!",
  },
];

const StarRating = memo(({ rating }) => {
  if (!rating) return null;
  return (
    <div className="testimonial-stars-kirti">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
          ★
        </span>
      ))}
    </div>
  );
});

const TestimonialCard = memo(({ testimonial, isActive }) => {
  const avatarUrl = testimonial.image
    ? testimonial.image
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        testimonial.name
      )}&background=f97316&color=fff&size=80&bold=true`;

  return (
    <div className={`testimonial-card-kirti ${isActive ? "active" : ""}`}>
      <div className="testimonial-image-kirti">
        <img src={avatarUrl} alt={testimonial.name} />
      </div>
      <div className="testimonial-content-kirti">
        {testimonial.rating && <StarRating rating={testimonial.rating} />}
        <p className="testimonial-text-kirti">{testimonial.text}</p>
        <h3 className="testimonial-name-kirti">{testimonial.name}</h3>
        <p className="testimonial-role-kirti">{testimonial.role}</p>
      </div>
    </div>
  );
});

const Testimonials = memo(() => {
  const slidesToShow = 3;
  const userReviews = useSelector((state) => state.reviews.reviews);

  const allTestimonials = useMemo(
    () => [...staticTestimonials, ...userReviews],
    [userReviews]
  );

  // Build: [clone of last N] + [real items] + [clone of first N]
  // We clone slidesToShow items on each side so the loop seam is always off-screen
  const slides = useMemo(() => {
    const total = allTestimonials.length;
    if (total === 0) return [];
    const cloneCount = slidesToShow;
    const leadingClones = allTestimonials.slice(total - cloneCount).map((t, i) => ({
      ...t,
      _key: `lead-${i}`,
    }));
    const trailingClones = allTestimonials.slice(0, cloneCount).map((t, i) => ({
      ...t,
      _key: `trail-${i}`,
    }));
    return [...leadingClones, ...allTestimonials, ...trailingClones];
  }, [allTestimonials]);

  // Start at the first real item (index = cloneCount inside `slides`)
  const cloneCount = slidesToShow;
  const [currentIndex, setCurrentIndex] = useState(cloneCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  const totalSlides = allTestimonials.length;

  // Whenever allTestimonials changes (new review added), reset to first real slide
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(cloneCount);
  }, [totalSlides, cloneCount]);

  // Re-enable transition after a silent reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitioning(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (totalSlides === 0) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [totalSlides]);

  // After transition ends, silently jump if we've entered the clone zone
  const handleTransitionEnd = () => {
    // Entered trailing clones → jump back to real start
    if (currentIndex >= cloneCount + totalSlides) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount);
    }
    // Entered leading clones → jump to real end
    if (currentIndex < cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount + totalSlides - 1);
    }
  };

  const slideWidthPercent = 100 / slidesToShow;

  return (
    <div className="testimonials-container-kirti">
      <h2 className="testimonials-title-kirti">What Our Clients Are Saying</h2>
      <p className="testimonials-subtitle-kirti">Reviews &amp; Feedback</p>

      <div className="testimonials-slider-kirti">
        <div
          className="testimonials-slides-container-kirti"
          style={{
            transform: `translateX(${-currentIndex * slideWidthPercent}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((testimonial, index) => {
            // Determine if this slide maps to an "active" real position
            const realIndex = (index - cloneCount + totalSlides * 10) % totalSlides;
            const isActive =
              realIndex >= (currentIndex - cloneCount) % totalSlides &&
              realIndex < ((currentIndex - cloneCount) % totalSlides) + slidesToShow;

            return (
              <div
                key={testimonial._key || `${testimonial.id}-${index}`}
                className="testimonials-slide-kirti"
              >
                <TestimonialCard testimonial={testimonial} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

StarRating.displayName = "StarRating";
TestimonialCard.displayName = "TestimonialCard";
Testimonials.displayName = "Testimonials";

export default Testimonials;
