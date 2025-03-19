// recipeSuggestions.js
import ChiaPuddingImg from "../../Recipes/Dishes/Dish1.jpeg";
import CaesarWrapImg from "../../Recipes/Dishes/Dish2.jpeg";
import BellPepperImg from "../../Recipes/Dishes/Dish5.jpg";
import OmeletteImg from "../../Recipes/Dishes/Dish14.jpeg";

export const recipeSuggestions = [
  {
    name: "Overnight Chia Pudding",
    description: "Chia seeds soaked overnight in almond milk.",
    category: "Pudding",
    calories: 220,
    time: 5,
    difficulty: "Easy",
    image: ChiaPuddingImg,
    ingredients: ["Milk", "Chia Seeds", "Honey"],
  },
  {
    name: "Chicken Caesar Wrap",
    description: "A portable version of Caesar salad.",
    category: "Wrap",
    calories: 420,
    time: 20,
    difficulty: "Medium",
    image: CaesarWrapImg,
    ingredients: ["Lettuce", "Chicken", "Tortilla"],
  },
  {
    name: "Stuffed Bell Peppers",
    description: "Bell peppers stuffed with quinoa and spices.",
    category: "Main dish",
    calories: 350,
    time: 45,
    difficulty: "Hard",
    image: BellPepperImg,
    ingredients: ["Bell Pepper", "Quinoa", "Cheese"],
  },
  {
    name: "Spinach and Feta Omelette",
    description: "Fluffy omelette with spinach and feta cheese.",
    category: "Salad",
    calories: 280,
    time: 15,
    difficulty: "Medium",
    image: OmeletteImg,
    ingredients: ["Egg", "Spinach", "Feta"],
  },
];
