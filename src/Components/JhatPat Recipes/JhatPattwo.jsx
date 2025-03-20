import React, { useMemo, useCallback, useState, Suspense } from "react";
import "./JhatPattwo.css";
import salad from "./Salad.jpg";
import nacho from "./nacho.jpg";
import chimchi from "./chimchi.jpg";
import buddhabowl from "./buddhabowl.jpg";
import choclatemousse from "./choclatemousse.jpg";
import pasta from "./pasta.jpg";
import Bhelpuri from "./Bhelpuri.jpg";
import powersalad from "./powersalad.jpg";
import spicy from "./spicy.jpg";
import Tiramisu from "./Tiramisu.jpg";
import MushroomRisotto from "./Mushroom Risotto.jpg";
import GreekChickenSouvlaki from "./Greek Chicken Souvlaki.jpg";
import AvocadoToastwithEggs from "./Avocado Toast with Eggs.jpg";
import HomemadeSushiRolls from "./Avocado Toast with Eggs.jpg";
import KetoCauliflowerRiceBowl from "./Keto Cauliflower Rice Bowl.jpg";
import vegetablesandwich from "./vegetablesandwich.jpeg";
import LemonCheesecake from "./Lemon Cheesecake.jpg";
import MediterraneanCouscous from "./Mediterranean Couscous.jpg";
import BeefStirFry from "./Beef Stir-Fry.jpg";
import CapreseSalad from "./Bhelpuri.jpg";

const RECIPES = Object.freeze([
  {
    id: 1,
    title: "Fresh Salad with Tahini Sauce",
    image: salad,
    category: "Salads & Sides",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Tahini Sauce"],
    recipe: "Mix all ingredients and drizzle with tahini sauce."
  },
  {
    id: 2,
    title: "Chili con Carne with Nachos",
    image: nacho,
    category: "Main Courses",
    ingredients: ["Ground Beef", "Beans", "Tomatoes", "Nachos"],
    recipe: "Cook beef, add beans and tomatoes, serve with nachos."
  },
  {
    id: 3,
    title: "Korean Kimchi Bowl",
    image: chimchi,
    category: "International Flavors",
    ingredients: ["Kimchi", "Rice", "Vegetables", "Soy Sauce"],
    recipe: "Mix kimchi with rice and vegetables, add soy sauce."
  },
  {
    id: 4,
    title: "Vegetarian Buddha Bowl",
    image: buddhabowl,
    category: "Vegetarian Delights",
    ingredients: ["Quinoa", "Chickpeas", "Avocado", "Tahini Sauce"],
    recipe: "Combine quinoa, chickpeas, avocado, and tahini sauce."
  },
  {
    id: 5,
    title: "Dark Chocolate Mousse",
    image: choclatemousse,
    category: "Desserts & Sweets",
    ingredients: ["Dark Chocolate", "Cream", "Sugar", "Eggs"],
    recipe: "Melt chocolate, whip cream, fold in eggs and sugar."
  },
  {
    id: 6,
    title: "Quick Pasta Primavera",
    image: pasta,
    category: "Quick & Easy Super",
    ingredients: ["Pasta", "Vegetables", "Olive Oil", "Parmesan"],
    recipe: "Cook pasta, sauté vegetables, mix with olive oil and parmesan."
  },
  {
    id: 7,
    title: "Bhelpuri",
    image: Bhelpuri,
    category: "Snacks on the Go",
    ingredients: ["Puffed Rice", "Vegetables", "Tamarind Sauce", "Spices"],
    recipe: "Mix puffed rice with vegetables, tamarind sauce, and spices."
  },
  {
    id: 8,
    title: "Quinoa Power Bowl",
    image: powersalad,
    category: "Healthy Eats",
    ingredients: ["Quinoa", "Vegetables", "Avocado", "Lemon Dressing"],
    recipe: "Combine quinoa, vegetables, avocado, and lemon dressing."
  },
  {
    id: 9,
    title: "Spicy Thai Green Curry",
    image: spicy,
    category: "International Flavors",
    ingredients: ["Green Curry Paste", "Coconut Milk", "Vegetables", "Tofu"],
    recipe: "Cook curry paste, add coconut milk, vegetables, and tofu."
  },
  {
    id: 10,
    title: "Classic Tiramisu",
    image: Tiramisu,
    category: "Desserts & Sweets",
    ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Cocoa Powder"],
    recipe: "Layer ladyfingers with mascarpone and coffee, dust with cocoa."
  },
  {
    id: 11,
    title: "Mushroom Risotto",
    image: MushroomRisotto,
    category: "Vegetarian Delights",
    ingredients: ["Arborio Rice", "Mushrooms", "Parmesan", "White Wine"],
    recipe: "Cook rice with mushrooms, add white wine and parmesan."
  },
  {
    id: 12,
    title: "Greek Chicken Souvlaki",
    image: GreekChickenSouvlaki,
    category: "Main Courses",
    ingredients: ["Chicken", "Yogurt", "Cucumber", "Pita Bread"],
    recipe: "Marinate chicken, grill, serve with yogurt and pita."
  },
  {
    id: 13,
    title: "Avocado Toast with Eggs",
    image: AvocadoToastwithEggs,
    category: "Quick & Easy Super",
    ingredients: ["Bread", "Avocado", "Eggs", "Salt"],
    recipe: "Toast bread, top with mashed avocado and eggs."
  },
  {
    id: 14,
    title: "Homemade Sushi Rolls",
    image: HomemadeSushiRolls,
    category: "International Flavors",
    ingredients: ["Sushi Rice", "Nori", "Fish", "Vegetables"],
    recipe: "Roll sushi rice with nori, fish, and vegetables."
  },
  {
    id: 15,
    title: "Keto Cauliflower Rice Bowl",
    image: KetoCauliflowerRiceBowl,
    category: "Healthy Eats",
    ingredients: ["Cauliflower Rice", "Vegetables", "Avocado", "Lemon"],
    recipe: "Mix cauliflower rice with vegetables, avocado, and lemon."
  },
  {
    id: 16,
    title: "Vegetable Sandwich",
    image: vegetablesandwich,
    category: "Snacks on the Go",
    ingredients: ["Bread", "Vegetables", "Cheese", "Mayonnaise"],
    recipe: "Assemble vegetables and cheese between bread slices."
  },
  {
    id: 17,
    title: "Lemon Cheesecake",
    image: LemonCheesecake,
    category: "Desserts & Sweets",
    ingredients: ["Cream Cheese", "Lemon", "Sugar", "Graham Cracker Crust"],
    recipe: "Mix cream cheese with lemon and sugar, pour into crust."
  },
  {
    id: 18,
    title: "Mediterranean Couscous",
    image: MediterraneanCouscous,
    category: "Salads & Sides",
    ingredients: ["Couscous", "Vegetables", "Olive Oil", "Feta Cheese"],
    recipe: "Mix couscous with vegetables, olive oil, and feta cheese."
  },
  {
    id: 19,
    title: "Beef Stir-Fry",
    image: BeefStirFry,
    category: "Quick & Easy Super",
    ingredients: ["Beef", "Vegetables", "Soy Sauce", "Ginger"],
    recipe: "Stir-fry beef with vegetables, soy sauce, and ginger."
  },
  {
    id: 20,
    title: "Caprese Salad",
    image: CapreseSalad,
    category: "Salads & Sides",
    ingredients: ["Tomatoes", "Mozzarella", "Basil", "Balsamic Glaze"],
    recipe: "Layer tomatoes with mozzarella and basil, drizzle with balsamic."
  }
]);

const CATEGORIES = Object.freeze([
  "All Types",
  "Snacks on the Go",
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
    className={`category-button ${isActive ? 'active' : ''}`}
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
    <div className="recipe-card-jhatpat">
      <div className="recipe-image-container-jhatpat">
        <img 
          loading="lazy"
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-image"
        />
      </div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
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
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = useCallback((recipe) => {
    setSelectedRecipe(recipe);
  }, []);

  const handleCategoryClick = useCallback((category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setSearchQuery("");
    setSelectedRecipe(null);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setIsLoading(true);
    setSearchQuery(event.target.value);
    setSelectedCategory("All Types");
    setSelectedRecipe(null);
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
    <div className="container-jhatpat">
      <h2 className="title-jhatpat">
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
        {selectedRecipe && (
          <div className="selected-recipe">
            <img 
              src={selectedRecipe.image} 
              alt={selectedRecipe.title} 
              className="selected-recipe-image"
            />
            <div className="selected-recipe-details">
              <h3>{selectedRecipe.title}</h3>
              <h4>Ingredients:</h4>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h4>Recipe:</h4>
              <p>{selectedRecipe.recipe}</p>
            </div>
          </div>
        )}
        {recipeGrid}
      </Suspense>
    </div>
  );
};

export default React.memo(JhatpatRecipes);