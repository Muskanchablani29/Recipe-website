import React, { useMemo, useCallback, useState, Suspense } from "react";
import "./JhatpatTop.css";
import salad from "./Salad.jpg";
import nacho from "./Nachos.jpg";
import chimchi from "./Kimchi.jpeg";
import buddhabowl from "./Buddhabowl.jpeg";
import choclatemousse from "./ChoclateMouse.jpg" ;
import pasta from "./pasta.jpg";
import mezze from "./mezze.jpg";
import powersalad from "./PoweSalad.jpg";
import spicy from "./spicy.jpg";
import Tiramisu from "./Buddhabowl.jpeg";  
import MushroomRisotto from "./Kimchi.jpeg";  
import GreekChickenSouvlaki from "./Buddhabowl.jpeg";
import AvocadoToastwithEggs from "./mezze.jpg";
import HomemadeSushiRolls from "./Salad.jpg";
import KetoCauliflowerRiceBowl from "./PoweSalad.jpg";
import BruschettaPlatter from "./PoweSalad.jpg";
import LemonCheesecake from "./Buddhabowl.jpeg";
import MediterraneanCouscous from "./Kimchi.jpeg";
import BeefStirFry from "./spicy.jpg";  
import CapreseSalad from "./mezze.jpg";


const RECIPES = Object.freeze([
  {
    id: 1,
    title: "Fresh Salad with Tahini Sauce",
    image: salad,
    
    category: "Salads & Sides",
    
  },
  {
    id: 2,
    title: "Chili con Carne with Nachos",
    image: nacho,
   
    category: "Main Courses",
    
  },
  {
    id: 3,
    title: "Korean Kimchi Bowl",
    image: chimchi,
   
    category: "International Flavors",
    
  },
  {
    id: 4,
    title: "Vegetarian Buddha Bowl",
    image: buddhabowl,
    
    category: "Vegetarian Delights",
    
  },
  {
    id: 5,
    title: "Dark Chocolate Mousse",
     image: choclatemousse,
    
    category: "Desserts & Sweets",
    
  },
  {
    id: 6,
    title: "Quick Pasta Primavera",
    image: pasta,
    
    category: "Quick & Easy Super",
    
  },
  {
    id: 7,
    title: "Mediterranean Mezze Platter",
    image: mezze,
    
    category: "Appetizers",
    
  },
  {
    id: 8,
    title: "Quinoa Power Bowl",
    image: powersalad,
   
    category: "Healthy Eats",
    
  },
  {
    id: 9,
    title: "Spicy Thai Green Curry",
    image: spicy,
    
    category: "International Flavors",
    
  },
  {
    id: 10,
    title: "Classic Tiramisu",
    image: Tiramisu,
    
    category: "Desserts & Sweets",
    
  },
  {
    id: 11,
    title: "Mushroom Risotto",
    image: MushroomRisotto,
    
    category: "Vegetarian Delights",
   
  },
  {
    id: 12,
    title: "Greek Chicken Souvlaki",
    image: GreekChickenSouvlaki,
    
    category: "Main Courses",
    
  },
  {
    id: 13,
    title: "Avocado Toast with Eggs",
    image: AvocadoToastwithEggs,
   
    category: "Quick & Easy Super",
   
  },
  {
    id: 14,
    title: "Homemade Sushi Rolls",
    image: HomemadeSushiRolls,
    
    category: "International Flavors",
   
  },
  {
    id: 15,
    title: "Keto Cauliflower Rice Bowl",
    image: KetoCauliflowerRiceBowl,
    
    category: "Healthy Eats",
   
  },
  {
    id: 16,
    title: "Bruschetta Platter",
    image: BruschettaPlatter,
    
    category: "Appetizers",
    
  },
  {
    id: 17,
    title: "Lemon Cheesecake",
    image: LemonCheesecake,
   
    category: "Desserts & Sweets",
    
  },
  {
    id: 18,
    title: "Mediterranean Couscous",
    image: MediterraneanCouscous,
    
    category: "Salads & Sides",
   
  },
  {
    id: 19,
    title: "Beef Stir-Fry",
    image: BeefStirFry,
   
    category: "Quick & Easy Super",
   
  },
  {
    id: 20,
    title: "Caprese Salad",
    image: CapreseSalad,
    
    category: "Salads & Sides",
    
  }
]);

const CATEGORIES = Object.freeze([
  "All Types",
  "Appetizers",
  "Main Courses",
  "Salads & Sides",
  "Vegetarian Delights",
  "International Flavors",
  "Desserts & Sweets",
  "Healthy Eats",
  "Quick & Easy Super"
]);

const CategoryButton = React.memo(({ category, isActive, onClick }) => (
  <button 
  className={'category-button' + (isActive ? ' active' : '')}
    onClick={onClick}
  >
    {category}
  </button>
));

const RecipeCard = React.memo(({ recipe, onRecipeClick }) => {
  const handleClick = useCallback(() => {
    onRecipeClick(recipe);
  }, [recipe.id, onRecipeClick]);

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img 
          loading="lazy"
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-image"
        />
        {/* <div className="recipe-time">
          <i className="far fa-clock"></i> {recipe.time}
        </div> */}
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          {/* <span className="recipe-tag">{recipe.tag} views</span> */}
          <span className="recipe-category">{recipe.category}</span>
        </div>
        <button className="recipe-button" onClick={handleClick}>
          See Complete Recipe
        </button>
      </div>
    </div>
  );
});

const LoadingSkeleton = () => (
  <div className="recipe-card skeleton">
    <div className="recipe-image-container skeleton"></div>
    <div className="recipe-content">
      <div className="skeleton-title skeleton"></div>
      <div className="skeleton-meta skeleton"></div>
      <div className="skeleton-button skeleton"></div>
    </div>
  </div>
);

const JhatpatRecipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Types");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecipeClick = useCallback((recipe) => {
    console.log(`Viewing recipe: ${recipe.title}`);
    // Add your recipe view logic here
  }, []);

  const handleCategoryClick = useCallback((category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setSearchQuery("");
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setIsLoading(true);
    setSearchQuery(event.target.value);
    setSelectedCategory("All Types");
    // Simulate loading
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const filteredRecipes = useMemo(() => {
    let filtered = RECIPES;

    if (selectedCategory !== "All Types") {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const categoryButtons = useMemo(() => (
    CATEGORIES.map((category) => (
      <CategoryButton
        key={category}
        category={category}
        isActive={selectedCategory === category}
        onClick={() => handleCategoryClick(category)}
      />
    ))
  ), [selectedCategory, handleCategoryClick]);

  const recipeGrid = useMemo(() => (
    <div className="recipe-grid">
      {isLoading ? (
        Array(8).fill(null).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))
      ) : filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <RecipeCard 
            key={recipe.id}
            recipe={recipe}
            onRecipeClick={handleRecipeClick}
            style={{ '--i': index + 1 }}
          />
        ))
      ) : (
        <div className="no-results">
          No recipes found. Try a different search or category.
        </div>
      )}
    </div>
  ), [filteredRecipes, handleRecipeClick, isLoading]);

  return (
    <div className="container">
      <h2 className="title">
        What would you like to <span className="highlight">Cook?</span>
      </h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="categories">
        {categoryButtons}
      </div>
      <Suspense fallback={<LoadingSkeleton />}>
        {recipeGrid}
      </Suspense>
    </div>
  );
};

export default React.memo(JhatpatRecipes);