import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import "./mealcards.css";


const TestimonialCard = ({ name, review, rating, highlighted, onDelete }) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg transition-all ${
        highlighted ? "bg-orange-500 text-white scale-105" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mb-4"></div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm mt-2">{review}</p>
        <div className="flex mt-3">
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${highlighted ? "text-white" : "text-yellow-500"}`}
              fill={highlighted ? "white" : "#facc15"}
            />
          ))}
        </div>
        <button
          onClick={onDelete}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          aria-label="Delete Testimonial"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const TestimonialForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
    highlighted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.review.trim()) return;
    onSubmit({ ...formData, id: Date.now() });
    setFormData({ name: "", review: "", rating: 5, highlighted: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-lg"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Review:
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-lg"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-lg"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm font-bold">
          <input
            type="checkbox"
            name="highlighted"
            checked={formData.highlighted}
            onChange={handleChange}
            className="mr-2"
          />
          Highlight this review
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Testimonial
      </button>
    </form>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials(savedTestimonials);
  }, []);

  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const addTestimonial = (newTestimonial) => {
    setTestimonials((prev) => [...prev, newTestimonial]);
  };

  const deleteTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Clients Are Saying</h2>
      <TestimonialForm onSubmit={addTestimonial} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            onDelete={() => deleteTestimonial(testimonial.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
