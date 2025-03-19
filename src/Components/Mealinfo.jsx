import react from react
import Mealinfo from './Mealinfo.css'
const TestimonialCard = memo(({ testimonial }) => {
  return (
    <div 
      className={`testimonial-card ${testimonial.highlight ? "highlighted" : ""}`}
    >
      <div className="testimonial-header">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-image"
          loading="lazy"
          width="50"
          height="50"
        />
        <div className="testimonial-info">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
      </div>
      <p className="testimonial-review">{testimonial.review}</p>
      <StarRating rating={testimonial.rating} />
    </div>
  );
});
