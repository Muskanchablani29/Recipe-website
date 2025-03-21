// Funfour.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import "./Funfour.css";

import image1 from './Jhatpat-recipes/image1.png'
import image2 from './Jhatpat-recipes/image2.png'
import image3 from './Jhatpat-recipes/image3.png'
import image4 from './Jhatpat-recipes/image4.png'
import image5 from './Jhatpat-recipes/image5.png'
import image6 from './Jhatpat-recipes/image6.png'
import image7 from './Jhatpat-recipes/image7.png'
import image8 from './Jhatpat-recipes/image8.png'
import image9 from './Jhatpat-recipes/image5.png'
import image10 from '../Recipes/Recipestwo/garlic bread.jpg'
import { NavLink } from "react-router";

const allRecipes = [
  { image: image1, title: "BhelPuri", desc: "Spicy and crunchy snack made with potatoes, chickpeas, and spices." },
  { image: image2, title: "Sandwich", desc: "Grilled Bread with Stuffed Vegies"},
  { image: image3, title: "Burger", desc: "Bread Bun with Stuffed Vegetables inside it" },
  { image: image4, title: "Kurkure Chaat", desc: "Cripsy Kurkure with Spices and Chaat Masala" },
  { image: image5, title: "Bread Rolls", desc: "Bread rolls with stuffed Vegies" },
  { image: image6, title: "Monaco Bites", desc: "Monaco Biscuit with Having Spices and Vegetable on Top of it" },
  { image: image7, title: "Fruit Parfait", desc: "Layered yogurt, fresh fruits, and crunchy granola." },
  { image: image8, title: "Pasta Primavera", desc: "Creamy Italian pasta loaded with fresh veggies." },
  { image: image9, title: "Veggie Wrap", desc: "Soft tortilla filled with fresh veggies and dressing." },
  { image: image10, title: "Garlic Bread", desc: "Crispy and buttery garlic bread, perfect side dish!" },
];

const RecipeSlider = () => {
  return (
    <div className="recipe-slider">
      <h2 className="title">Explore <span className="text-highlight">JhatPat Recipes</span></h2>
      <p className="subtitle">Welcome to Jhatpat Recipes, where we serve up dishes that are fast, flavorful, and fuss-free! From 10-minute snacks to hearty meals ready in no time, we've got you covered.</p>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        className="swiper-container"
      >
        {allRecipes.map((recipe, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slide-card">
              <img src={recipe.image} alt={recipe.title} className="slide-image" />
              <div className="slide-content">
                <h3 className="slide-title">{recipe.title}</h3>
                <p className="slide-desc">{recipe.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavLink to="/Jhatpat"><button className="see-all">See All</button></NavLink>
    </div>
  );
};

export default RecipeSlider;