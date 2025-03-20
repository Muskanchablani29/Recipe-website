import React, { useState, useEffect } from "react";
import "./Recipetwo.css";
import TomatoSoup from "./Recipestwo/TomatoSoup.jpeg";
import PaneerButterMasala from "./Recipestwo/PaneerButterMasala.jpeg";
import TomatoPasta from './Recipestwo/TomatoPasta.jpeg';
import TomatoCurry from './Recipestwo/TomatoCurry.jpeg';
import Bruschetta from './Recipestwo/Brushchetta.jpeg';
import TomatoRice from './Recipestwo/TomatoRice.jpeg';
import PaneerTikka from './Recipestwo/Paneertikka.jpeg';
import PalakPaneer from './Recipestwo/PalakPaneer.jpeg';
import PaneerBhurji from './Recipestwo/PaneerBhurji.jpeg';
import TomatoChutney from './Recipestwo/TomatoChutney.jpeg';

const ingredients = [
  "Tomato", "Paneer", "Mushroom", "Egg", "Spinach", "Carrot", "Potato",
  "Garlic", "Onion", "Peas", "Corn", "Cheese", "Lettuce", "Cabbage", "Cucumber", "Pumpkin", "Lemon",
  "Orange", "Apple", "Banana", "Ginger", "Broccoli", "Cauliflower", "Pepper", "Zucchini", "Radish", "Beetroot",
  "Yogurt", "Milk", "Butter", "Almonds", "Walnuts", "Peanuts", "Tofu", "Oats", "Rice", "Quinoa", "Barley",
  "Chickpeas", "Lentils", "Kale", "Basil", "Mint", "Dill", "Coriander", "Celery", "Chia Seeds", "Dates", "Avocado", "Pomegranate", "Fennel"
];

const dishes = {
  Tomato: [
    { name: "Tomato Soup", category: "Lunch", imageUrl: TomatoSoup },
    { name: "Tomato Pasta", category: "Dinner", imageUrl: TomatoPasta },
    { name: "Bruschetta", category: "Snacks", imageUrl: Bruschetta },
    { name: "Tomato Rice", category: "Lunch", imageUrl: TomatoRice },
    { name: "Tomato Curry", category: "Dinner", imageUrl: TomatoCurry },
    { name: "Tomato Chutney", category: "Breakfast", imageUrl: TomatoChutney },
  ],
  Paneer: [
    { name: "Paneer Butter Masala", category: "Dinner" , imageUrl: PaneerButterMasala },
    { name: "Paneer Tikka", category: "Snacks", imageUrl: PaneerTikka},
    { name: "Palak Paneer", category: "Lunch", imageUrl: PalakPaneer },
    { name: "Paneer Bhurji", category: "Breakfast", imageUrl: PaneerBhurji},
    { name: "Shahi Paneer", category: "Dinner" , imageUrl: PaneerButterMasala },
    { name: "Paneer Sandwich", category: "Snacks", imageUrl: PaneerTikka},
  ],
  Mushroom: [
    { name: "Mushroom Risotto", category: "Dinner" },
    { name: "Stuffed Mushrooms", category: "Snacks" },
    { name: "Mushroom Soup", category: "Lunch" },
    { name: "Mushroom Curry", category: "Dinner" },
    { name: "Mushroom Pizza", category: "Snacks" },
    { name: "Mushroom Stir Fry", category: "Lunch" },
  ],
  Egg: [
    { name: "Scrambled Eggs", category: "Breakfast" },
    { name: "Egg Curry", category: "Dinner" },
    { name: "Egg Salad", category: "Lunch" },
    { name: "Omelette", category: "Breakfast" },
    { name: "Deviled Eggs", category: "Snacks" },
    { name: "Egg Fried Rice", category: "Lunch" },
  ],
  Spinach: [
    { name: "Spinach Smoothie", category: "Drinks" },
    { name: "Palak Paneer", category: "Lunch" },
    { name: "Spinach Salad", category: "Snacks" },
    { name: "Spinach Dal", category: "Dinner" },
    { name: "Spinach Pakora", category: "Snacks" },
    { name: "Spinach Paratha", category: "Breakfast" },
  ],
  Carrot: [
    { name: "Carrot Soup", category: "Lunch" },
    { name: "Carrot Salad", category: "Snacks" },
    { name: "Carrot Cake", category: "Dessert" },
    { name: "Carrot Juice", category: "Drinks" },
    { name: "Carrot Stir Fry", category: "Dinner" },
    { name: "Carrot Halwa", category: "Dessert" },
  ],
  Potato: [
    { name: "Mashed Potatoes", category: "Dinner" },
    { name: "Potato Salad", category: "Lunch" },
    { name: "French Fries", category: "Snacks" },
    { name: "Baked Potato", category: "Dinner" },
    { name: "Potato Soup", category: "Lunch" },
    { name: "Potato Curry", category: "Dinner" },
  ],
  Garlic: [
    { name: "Garlic Bread", category: "Snacks" },
    { name: "Garlic Chicken", category: "Dinner" },
    { name: "Garlic Soup", category: "Lunch" },
    { name: "Garlic Butter Shrimp", category: "Dinner" },
    { name: "Garlic Noodles", category: "Lunch" },
    { name: "Garlic Roasted Potatoes", category: "Dinner" },
  ],
  Onion: [
    { name: "Onion Rings", category: "Snacks" },
    { name: "French Onion Soup", category: "Lunch" },
    { name: "Onion Bhaji", category: "Snacks" },
    { name: "Caramelized Onions", category: "Dinner" },
    { name: "Onion Salad", category: "Lunch" },
    { name: "Onion Pizza", category: "Dinner" },
  ],
  Peas: [
    { name: "Pea Soup", category: "Lunch" },
    { name: "Pea Salad", category: "Snacks" },
    { name: "Pea Curry", category: "Dinner" },
    { name: "Pea Risotto", category: "Dinner" },
    { name: "Pea Pulao", category: "Lunch" },
    { name: "Pea and Mint Soup", category: "Lunch" },
  ],
  Corn: [
    { name: "Corn Salad", category: "Snacks" },
    { name: "Corn Tikki", category: "Snacks" },
    { name: "Creamy Corn Soup", category: "Lunch" },
    { name: "Corn Curry", category: "Dinner" },
    { name: "Corn Pizza", category: "Snacks" },
    { name: "Corn Chat", category: "Snacks" },
  ],
  Cheese: [
    { name: "Cheese Pizza", category: "Dinner" },
    { name: "Cheese Sandwich", category: "Snacks" },
    { name: "Cheese Omelette", category: "Breakfast" },
    { name: "Cheese Pasta", category: "Lunch" },
    { name: "Cheese Nachos", category: "Snacks" },
    { name: "Cheese Fondue", category: "Dinner" },
  ],
  Lettuce: [
    { name: "Caesar Salad", category: "Lunch" },
    { name: "Lettuce Wraps", category: "Snacks" },
    { name: "Lettuce Soup", category: "Lunch" },
    { name: "Lettuce Sandwich", category: "Snacks" },
    { name: "Lettuce Salad", category: "Lunch" },
    { name: "Lettuce Tacos", category: "Dinner" },
  ],
  Cabbage: [
    { name: "Cabbage Soup", category: "Lunch" },
    { name: "Cabbage Salad", category: "Snacks" },
    { name: "Cabbage Rolls", category: "Dinner" },
    { name: "Cabbage Stir Fry", category: "Dinner" },
    { name: "Cabbage Curry", category: "Dinner" },
    { name: "Cabbage Pakora", category: "Snacks" },
  ],
  Cucumber: [
    { name: "Cucumber Salad", category: "Snacks" },
    { name: "Cucumber Sandwich", category: "Snacks" },
    { name: "Cucumber Soup", category: "Lunch" },
    { name: "Cucumber Raita", category: "Lunch" },
    { name: "Cucumber Juice", category: "Drinks" },
    { name: "Cucumber Rolls", category: "Snacks" },
  ],
  Pumpkin: [
    { name: "Pumpkin Soup", category: "Lunch" },
    { name: "Pumpkin Pie", category: "Dessert" },
    { name: "Pumpkin Curry", category: "Dinner" },
    { name: "Pumpkin Bread", category: "Snacks" },
    { name: "Pumpkin Risotto", category: "Dinner" },
    { name: "Pumpkin Pancakes", category: "Breakfast" },
  ],
  Lemon: [
    { name: "Lemonade", category: "Drinks" },
    { name: "Lemon Chicken", category: "Dinner" },
    { name: "Lemon Rice", category: "Lunch" },
    { name: "Lemon Cake", category: "Dessert" },
    { name: "Lemon Tart", category: "Dessert" },
    { name: "Lemon Tea", category: "Drinks" },
  ],
  Orange: [
    { name: "Orange Juice", category: "Drinks" },
    { name: "Orange Chicken", category: "Dinner" },
    { name: "Orange Salad", category: "Snacks" },
    { name: "Orange Cake", category: "Dessert" },
    { name: "Orange Marmalade", category: "Breakfast" },
    { name: "Orange Smoothie", category: "Drinks" },
  ],
  Apple: [
    { name: "Apple Pie", category: "Dessert" },
    { name: "Apple Salad", category: "Snacks" },
    { name: "Apple Juice", category: "Drinks" },
    { name: "Apple Crumble", category: "Dessert" },
    { name: "Apple Smoothie", category: "Drinks" },
    { name: "Apple Pancakes", category: "Breakfast" },
  ],
  Banana: [
    { name: "Banana Smoothie", category: "Drinks" },
    { name: "Banana Bread", category: "Snacks" },
    { name: "Banana Pancakes", category: "Breakfast" },
    { name: "Banana Chips", category: "Snacks" },
    { name: "Banana Split", category: "Dessert" },
    { name: "Banana Muffins", category: "Snacks" },
  ],
  Ginger: [
    { name: "Ginger Tea", category: "Drinks" },
    { name: "Ginger Chicken", category: "Dinner" },
    { name: "Ginger Soup", category: "Lunch" },
    { name: "Ginger Cookies", category: "Dessert" },
    { name: "Ginger Smoothie", category: "Drinks" },
    { name: "Ginger Curry", category: "Dinner" },
  ],
  Broccoli: [
    { name: "Broccoli Soup", category: "Lunch" },
    { name: "Broccoli Salad", category: "Snacks" },
    { name: "Broccoli Stir Fry", category: "Dinner" },
    { name: "Broccoli Pasta", category: "Lunch" },
    { name: "Broccoli Curry", category: "Dinner" },
    { name: "Broccoli Quiche", category: "Breakfast" },
  ],
  Cauliflower: [
    { name: "Cauliflower Soup", category: "Lunch" },
    { name: "Cauliflower Rice", category: "Lunch" },
    { name: "Cauliflower Curry", category: "Dinner" },
    { name: "Cauliflower Pizza", category: "Dinner" },
    { name: "Cauliflower Salad", category: "Snacks" },
    { name: "Cauliflower Tacos", category: "Dinner" },
  ],
  Pepper: [
    { name: "Stuffed Peppers", category: "Dinner" },
    { name: "Pepper Soup", category: "Lunch" },
    { name: "Pepper Salad", category: "Snacks" },
    { name: "Pepper Stir Fry", category: "Dinner" },
    { name: "Pepper Pizza", category: "Dinner" },
    { name: "Pepper Sandwich", category: "Snacks" },
  ],
  Zucchini: [
    { name: "Zucchini Soup", category: "Lunch" },
    { name: "Zucchini Salad", category: "Snacks" },
    { name: "Zucchini Bread", category: "Snacks" },
    { name: "Zucchini Stir Fry", category: "Dinner" },
    { name: "Zucchini Pasta", category: "Lunch" },
    { name: "Zucchini Pizza", category: "Dinner" },
  ],
  Radish: [
    { name: "Radish Salad", category: "Snacks" },
    { name: "Radish Soup", category: "Lunch" },
    { name: "Radish Curry", category: "Dinner" },
    { name: "Radish Stir Fry", category: "Dinner" },
    { name: "Radish Pickle", category: "Snacks" }, 
    { name: "Radish Paratha", category: "Breakfast" },
  ],
  Beetroot: [
    { name: "Beetroot Salad", category: "Snacks" },
    { name: "Beetroot Soup", category: "Lunch" },
    { name: "Beetroot Curry", category: "Dinner" },
    { name: "Beetroot Juice", category: "Drinks" },
    { name: "Beetroot Smoothie", category: "Drinks" },
    { name: "Beetroot Chips", category: "Snacks" },
  ],
  Yogurt: [
    { name: "Yogurt Parfait", category: "Breakfast" },
    { name: "Yogurt Smoothie", category: "Drinks" },
    { name: "Yogurt Salad", category: "Snacks" },
    { name: "Yogurt Curry", category: "Dinner" },
    { name: "Yogurt Dip", category: "Snacks" },
    { name: "Yogurt Ice Cream", category: "Dessert" },
  ],
  Milk: [
    { name: "Milkshake", category: "Drinks" },
    { name: "Milk Pudding", category: "Dessert" },
    { name: "Milk Bread", category: "Snacks" },
    { name: "Milk Tea", category: "Drinks" },
    { name: "Milk Soup", category: "Lunch" },
    { name: "Milk Smoothie", category: "Drinks" },
  ],
  Butter: [
    { name: "Butter Chicken", category: "Dinner" },
    { name: "Butter Cookies", category: "Dessert" },
    { name: "Butter Bread", category: "Snacks" },
    { name: "Butter Pasta", category: "Lunch" },
    { name: "Butter Cake", category: "Dessert" },
    { name: "Butter Naan", category: "Dinner" },
  ],
  Almonds: [
    { name: "Almond Milk", category: "Drinks" },
    { name: "Almond Cookies", category: "Dessert" },
    { name: "Almond Salad", category: "Snacks" },
    { name: "Almond Smoothie", category: "Drinks" },
    { name: "Almond Butter", category: "Snacks" },
    { name: "Almond Cake", category: "Dessert" },
  ],
  Walnuts: [
    { name: "Walnut Salad", category: "Snacks" },
    { name: "Walnut Cake", category: "Dessert" },
    { name: "Walnut Bread", category: "Snacks" },
    { name: "Walnut Smoothie", category: "Drinks" },
    { name: "Walnut Cookies", category: "Dessert" },
    { name: "Walnut Butter", category: "Snacks" },
  ],
  Peanuts: [
    { name: "Peanut Butter", category: "Snacks" },
    { name: "Peanut Salad", category: "Snacks" },
    { name: "Peanut Soup", category: "Lunch" },
    { name: "Peanut Curry", category: "Dinner" },
    { name: "Peanut Smoothie", category: "Drinks" },
    { name: "Peanut Cookies", category: "Dessert" },
  ],
  Tofu: [
    { name: "Tofu Stir Fry", category: "Dinner" },
    { name: "Tofu Salad", category: "Snacks" },
    { name: "Tofu Soup", category: "Lunch" },
    { name: "Tofu Curry", category: "Dinner" },
    { name: "Tofu Smoothie", category: "Drinks" },
    { name: "Tofu Sandwich", category: "Snacks" },
  ],
  Oats: [
    { name: "Oatmeal", category: "Breakfast" },
    { name: "Oat Smoothie", category: "Drinks" },
    { name: "Oat Cookies", category: "Dessert" },
    { name: "Oat Bread", category: "Snacks" },
    { name: "Oat Soup", category: "Lunch" },
    { name: "Oat Pancakes", category: "Breakfast" },
  ],
  Rice: [
    { name: "Fried Rice", category: "Lunch" },
    { name: "Rice Pudding", category: "Dessert" },
    { name: "Rice Soup", category: "Lunch" },
    { name: "Rice Salad", category: "Snacks" },
    { name: "Rice Curry", category: "Dinner" },
    { name: "Rice Smoothie", category: "Drinks" },
  ],
  Quinoa: [
    { name: "Quinoa Salad", category: "Snacks" },
    { name: "Quinoa Soup", category: "Lunch" },
    { name: "Quinoa Curry", category: "Dinner" },
    { name: "Quinoa Smoothie", category: "Drinks" },
    { name: "Quinoa Bread", category: "Snacks" },
    { name: "Quinoa Pancakes", category: "Breakfast" },
  ],
  
  Barley: [
    { name: "Barley Soup", category: "Lunch" },
    { name: "Barley Salad", category: "Lunch" },
    { name: "Barley Risotto", category: "Dinner" },
    { name: "Barley Porridge", category: "Breakfast" },
    { name: "Barley Bread", category: "Snacks" }
  ],
  Chickpeas: [
    { name: "Hummus", category: "Snacks" },
    { name: "Chickpea Curry", category: "Dinner" },
    { name: "Chickpea Salad", category: "Lunch" },
    { name: "Roasted Chickpeas", category: "Snacks" },
    { name: "Chickpea Soup", category: "Lunch" }
  ],
  
  Lentils: [
    { name: "Dal Tadka", category: "Dinner" },
    { name: "Lentil Soup", category: "Lunch" },
    { name: "Lentil Salad", category: "Snacks" },
    { name: "Lentil Curry", category: "Dinner" },
    { name: "Lentil Pancakes", category: "Breakfast" }
  ],
  
  Kale: [
    { name: "Kale Chips", category: "Snacks" },
    { name: "Kale Salad", category: "Lunch" },
    { name: "Kale Smoothie", category: "Breakfast" },
    { name: "Sauteed Kale", category: "Dinner" },
    { name: "Kale Soup", category: "Lunch" }
  ],
  
  Basil: [
    { name: "Pesto Sauce", category: "Side Dish" },
    { name: "Tomato and Basil Soup", category: "Lunch" },
    { name: "Caprese Salad", category: "Lunch" },
    { name: "Basil Lemonade", category: "Beverage" },
    { name: "Basil Pasta", category: "Dinner" }
  ],
  
  Mint: [
    { name: "Mint Chutney", category: "Side Dish" },
    { name: "Mint Lemonade", category: "Beverage" },
    { name: "Mint Rice", category: "Lunch" },
    { name: "Mint Tea", category: "Breakfast" },
    { name: "Mint Chocolate Dessert", category: "Dessert" }
  ],
  
  Dill: [
    { name: "Dill Pickles", category: "Side Dish" },
    { name: "Dill Dip", category: "Snacks" },
    { name: "Dill Rice", category: "Lunch" },
    { name: "Dill and Potato Soup", category: "Lunch" },
    { name: "Dill Omelette", category: "Breakfast" }
  ],
  
  Coriander: [
    { name: "Coriander Chutney", category: "Side Dish" },
    { name: "Coriander Rice", category: "Lunch" },
    { name: "Coriander Soup", category: "Snacks" },
    { name: "Coriander and Lemon Tea", category: "Breakfast" },
    { name: "Coriander Curry", category: "Dinner" }
  ],
  
  Celery: [
    { name: "Celery Soup", category: "Lunch" },
    { name: "Celery Sticks with Dip", category: "Snacks" },
    { name: "Celery Smoothie", category: "Breakfast" },
    { name: "Sauteed Celery", category: "Dinner" },
    { name: "Celery Rice", category: "Lunch" }
  ],
  
  ChiaSeeds: [
    { name: "Chia Pudding", category: "Dessert" },
    { name: "Chia Smoothie", category: "Breakfast" },
    { name: "Chia Energy Bars", category: "Snacks" },
    { name: "Chia Lemonade", category: "Beverage" },
    { name: "Chia Pancakes", category: "Breakfast" }
  ],
  
  Dates: [
    { name: "Date Smoothie", category: "Breakfast" },
    { name: "Stuffed Dates", category: "Snacks" },
    { name: "Date Cookies", category: "Dessert" },
    { name: "Date Syrup", category: "Side Dish" },
    { name: "Date Cake", category: "Dessert" }
  ],
  
  Avocado: [
    { name: "Guacamole", category: "Snacks" },
    { name: "Avocado Toast", category: "Breakfast" },
    { name: "Avocado Salad", category: "Lunch" },
    { name: "Avocado Smoothie", category: "Breakfast" },
    { name: "Avocado Sushi Rolls", category: "Snacks" }
  ],
  
  Pomegranate: [
    { name: "Pomegranate Juice", category: "Beverage" },
    { name: "Pomegranate Salad", category: "Lunch" },
    { name: "Pomegranate Smoothie", category: "Breakfast" },
    { name: "Pomegranate Raita", category: "Side Dish" },
    { name: "Pomegranate Dessert Cups", category: "Dessert" }
  ],
  
  Fennel: [
    { name: "Fennel Tea", category: "Beverage" },
    { name: "Fennel Salad", category: "Lunch" },
    { name: "Fennel Soup", category: "Lunch" },
    { name: "Fennel Cookies", category: "Dessert" },
    { name: "Fennel Rice", category: "Dinner" }
  ]      
};

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Drinks"];

const IngredientDishSelector = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showDishes, setShowDishes] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [mealCategory, setMealCategory] = useState("All");
  const [selectedDish, setSelectedDish] = useState(null);
  const [videoUrls, setVideoUrls] = useState([]);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // Toggle ingredient selection
  const toggleIngredient = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Show dishes when Next button is clicked
  const handleNext = () => {
    setShowDishes(true);
  };

  // Get dishes based on selected ingredients
  const getDishes = () => {
    let suggestedDishes = [];
    selectedIngredients.forEach((ingredient) => {
      if (dishes[ingredient]) {
        suggestedDishes = [...suggestedDishes, ...dishes[ingredient]];
      }
    });

    // Remove duplicates and ensure 6 dishes minimum
    const uniqueDishes = Array.from(
      new Map(suggestedDishes.map((dish) => [dish.name, dish])).values()
    );

    while (uniqueDishes.length < 6) {
      uniqueDishes.push({
        name: `Extra Dish ${uniqueDishes.length + 1}`,
        category: "Miscellaneous",
      });
    }

    // Filter by meal category if selected
    if (mealCategory !== "All") {
      return uniqueDishes.filter((dish) => dish.category === mealCategory);
    }

    return uniqueDishes;
  };

  // Show 10 more ingredients on Show More click
  const handleShowMore = () => {
    setDisplayCount((prev) => Math.min(prev + 10, ingredients.length));
  };

  // Fetch 3 YouTube videos for the selected dish
  const fetchVideos = async (dish) => {
    setSelectedDish(dish);
    setVideoUrls([]); // Reset previous videos
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${dish.name} recipe&type=video&key=${API_KEY}&maxResults=3`
      );
      const data = await response.json();
      if (data.items.length > 0) {
        const videos = data.items.map(
          (item) => `https://www.youtube.com/embed/${item.id.videoId}`
        );
        setVideoUrls(videos);
      } else {
        setVideoUrls([]);
      }
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setVideoUrls([]);
    }
  };

  // Filter ingredients based on search query
  const filteredIngredients = ingredients
    .filter((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, displayCount);

  return (
    <div className="container-dish-select full-screen">
      <h1 className="title-select">Select Ingredients</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar-select"
        placeholder="Search for an ingredient..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Ingredient List */}
      <div className="ingredient-list-select">
        {filteredIngredients.map((ingredient) => (
          <button
            key={ingredient}
            onClick={() => toggleIngredient(ingredient)}
            className={`ingredient-button-select ${
              selectedIngredients.includes(ingredient) ? "selected" : ""
            }`}
          >
            {ingredient}
          </button>
        ))}
      </div>

      {displayCount < ingredients.length && (
        <button className="show-more-button-select" onClick={handleShowMore}>
          Show More
        </button>
      )}

      {/* Next Button */}
      <button
        className="next-button-select"
        onClick={handleNext}
        disabled={selectedIngredients.length === 0}
      >
        Next
      </button>

      {showDishes && (
        <div className="dish-list-select">
          <h2 className="dish-title-select">Suggested Dishes:</h2>

          {/* Meal Category Filter */}
          <div className="filter-group-select">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button-select ${
                  mealCategory === category ? "active" : ""
                }`}
                onClick={() => setMealCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dish Grid */}
          <div className="dish-grid-select full-screen">
  {getDishes().map((dish, index) => (
    <div
      key={index}
      className="dish-card-select"
      onClick={() => fetchVideos(dish)}
    >
      <img
        src={dish.imageUrl || `https://source.unsplash.com/300x200/?food`} // Fallback to a generic food image
        alt={dish.name}
        className="dish-image-select"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = 'https://via.placeholder.com/300x200?text=Recipe+Image'; // Fallback image if main image fails
        }}
      />
      <p className="dish-name-select">{dish.name}</p>
      <p className="dish-category-select">{dish.category}</p>
    </div>
  ))}
</div>
        </div>
      )}

      {/* Video Section */}
      {selectedDish && (
        <div className="video-section-select">
          <h2 className="video-title-select">Recipe Videos for {selectedDish.name}</h2>
          <div className="video-grid-select">
            {videoUrls.length > 0 ? (
              videoUrls.map((url, index) => (
                <iframe
                  key={index}
                  className="video-player-select"
                  src={url}
                  title={`${selectedDish.name} video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ))
            ) : (
              <p className="no-video-select">No videos found for this recipe.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientDishSelector;
