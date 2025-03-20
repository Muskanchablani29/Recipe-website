import React, { useState, useCallback, useRef, memo, useEffect } from 'react';
import './SmartChef.css';
import { recipes, dishesByCategory } from './RecipeData';
import RecipeDisplay from './RecipeDisplay';
import CategorySelection from './CategorySelection';
import DishSelection from './DishSelection';
import Message from './Message';
import chef from '../Chef/robotChef.gif'

// Website features information
const websiteFeatures = {
  'Smart Chef': {
    title: 'Smart Chef Assistant',
    description: 'Your personal AI cooking companion that helps you discover and cook delicious recipes. Get step-by-step guidance, ingredient lists, and cooking tips.',
    features: [
      'Interactive recipe guidance',
      'Step-by-step cooking instructions',
      'Ingredient recommendations',
      'Multiple cuisine categories'
    ]
  },
  'Fun Zone': {
    title: 'Fun Zone',
    description: 'Explore entertaining food-related games, quizzes, and activities that make cooking fun and educational.',
    features: [
      'Cooking trivia games',
      'Food puzzles',
      'Recipe matching games',
      'Culinary knowledge tests'
    ]
  },
  'Kitchen Hacks': {
    title: 'Kitchen Hacks',
    description: 'Discover time-saving tips, tricks, and techniques to improve your cooking efficiency and food preparation.',
    features: [
      'Quick cooking tips',
      'Food storage advice',
      'Kitchen organization ideas',
      'Time-saving techniques'
    ]
  },
  'JhatPat Recipes': {
    title: 'JhatPat Recipes',
    description: 'Quick and easy recipes for busy days when you need to prepare meals in a hurry.',
    features: [
      '15-minute recipes',
      'One-pot meals',
      'Quick breakfast ideas',
      'Easy dinner solutions'
    ]
  },
  "Recipes Main page":{
    title: 'Recipes Main page',
    description: 'Browse and discover a wide range of recipes from different categories and cuisines.',
    features: [
      'Select Ingredient',
      'Search for specific Suggested Dish',
      'Search for specific recipes',
      'Filter recipes by cuisine',
    ]
  },

};

// Meal suggestions data
const mealSuggestions = {
  Breakfast: [
    'Masala Dosa',
    'Poha',
    'Pancakes',
    'Omelette',
    'Idli Sambar',
    'Upma',
    'French Toast',
    'Breakfast Burrito'
  ],
  Lunch: [
    'Butter Chicken',
    'Vegetable Biryani',
    'Paneer Tikka Masala',
    'Dal Makhani',
    'Chicken Curry',
    'Mixed Vegetable Curry',
    'Palak Paneer',
    'Fish Curry'
  ],
  Dinner: [
    'Grilled Chicken',
    'Vegetable Stir Fry',
    'Mushroom Curry',
    'Jeera Rice',
    'Vegetable Pasta',
    'Chicken Biryani',
    'Malai Kofta',
    'Vegetable Pulao'
  ]
};

// Website Feature Info Component
const WebsiteFeatureInfo = ({ feature, onBack, onReturnToMain }) => {
  return (
    <div className="website-info-container">
      <h4>{websiteFeatures[feature].title}</h4>
      <p>{websiteFeatures[feature].description}</p>
      <ul>
        {websiteFeatures[feature].features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="button-group">
        <button className="back-button" onClick={onBack}>
          Back to Features
        </button>
        <button className="main-menu-button" onClick={onReturnToMain}>
          Return to Main Menu
        </button>
      </div>
    </div>
  );
};

// Meal Time Selection Component
const MealTimeSelection = ({ onMealTimeSelect }) => {
  return (
    <div className="options-container">
      <h4>Select meal time for suggestion:</h4>
      <div className="meal-time-buttons">
        <button onClick={() => onMealTimeSelect('Breakfast')}>Breakfast</button>
        <button onClick={() => onMealTimeSelect('Lunch')}>Lunch</button>
        <button onClick={() => onMealTimeSelect('Dinner')}>Dinner</button>
      </div>
    </div>
  );
};

// Dish Suggestion Component// Dish Suggestion Component
const DishSuggestion = ({ dish, mealTime, onSuggestAnother, onReturnToMain }) => {
  return (
    <div className="suggestion-container">
      <h4>Suggested Dish</h4>
      <div className="suggested-dish">
        <p>{dish}</p>
      </div>
      <div className="button-group">
        <button className="recipe-button" onClick={() => onSuggestAnother(mealTime)}>
          Suggest Another Dish
        </button>
        <button className="main-menu-button" onClick={onReturnToMain}>
          Back to Main Menu
        </button>
      </div>
    </div>
  );
};


const SmartChef = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const messagesEndRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Get random dish function
  const getRandomDish = (category) => {
    const dishes = mealSuggestions[category];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  };

  // Initial welcome messages
  const showInitialMessages = useCallback(() => {
    setMessages([
      {
        type: 'assistant',
        content: 'Welcome to Smart Chef! I\'m your personal cooking assistant. I\'ll be here to help you with your culinary journey!'
      },
      {
        type: 'assistant',
        content: (
          <div className="options-container">
            <h4>How can I help you today?</h4>
            <div className="initial-options">
              <button onClick={() => handleOptionClick('Provide a Recipe')}>
                Provide a Recipe
              </button>
              <button onClick={() => handleOptionClick('How this Website works')}>
                How this Website works
              </button>
              <button onClick={() => handleOptionClick('Suggest A dish for my meal')}>
                Suggest A dish for my meal
              </button>
            </div>
          </div>
        )
      }
    ]);
  }, []);

  // Return to main menu function
  const returnToMainMenu = useCallback(() => {
    setMessages([
      {
        type: 'assistant',
        content: 'Welcome back! How can I help you today?'
      },
      {
        type: 'assistant',
        content: (
          <div className="options-container">
            <h4>How can I help you today?</h4>
            <div className="initial-options">
              <button onClick={() => handleOptionClick('Provide a Recipe')}>
                Provide a Recipe
              </button>
              <button onClick={() => handleOptionClick('How this Website works')}>
                How this Website works
              </button>
              <button onClick={() => handleOptionClick('Suggest A dish for my meal')}>
                Suggest A dish for my meal
              </button>
            </div>
          </div>
        )
      }
    ]);
    setSelectedFeature(null);
    setTimeout(scrollToBottom, 100);
  }, [scrollToBottom]);

 // Handle meal time selection
const handleMealTimeSelect = useCallback((mealTime) => {
  const suggestedDish = getRandomDish(mealTime);
  setMessages(prev => [
    ...prev,
    { type: 'user', content: mealTime },
    {
      type: 'assistant',
      content: (
        <DishSuggestion 
          dish={suggestedDish}
          mealTime={mealTime}
          onSuggestAnother={(selectedMealTime) => {
            const newDish = getRandomDish(selectedMealTime);
            setMessages(prev => [
              ...prev,
              {
                type: 'assistant',
                content: (
                  <DishSuggestion 
                    dish={newDish}
                    mealTime={selectedMealTime}
                    onSuggestAnother={handleMealTimeSelect}
                    onReturnToMain={returnToMainMenu}
                  />
                )
              }
            ]);
            setTimeout(scrollToBottom, 100);
          }}
          onReturnToMain={returnToMainMenu}
        />
      )
    }
  ]);
  setTimeout(scrollToBottom, 100);
}, [scrollToBottom, returnToMainMenu]);

  // Reset chat to initial state
  const resetChat = useCallback(() => {
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: (
            <div className="options-container">
              <h4>Would you like to try another option?</h4>
              <div className="initial-options">
                <button onClick={() => handleOptionClick('Provide a Recipe')}>
                  Provide a Recipe
                </button>
                <button onClick={() => handleOptionClick('How this Website works')}>
                  How this Website works
                </button>
                <button onClick={() => handleOptionClick('Suggest A dish for my meal')}>
                  Suggest A dish for my meal
                </button>
              </div>
            </div>
          )
        }
      ]);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  }, [scrollToBottom]);

  const handleWebsiteFeatureClick = useCallback((feature) => {
    setSelectedFeature(feature);
    setMessages(prev => [
      ...prev,
      { type: 'user', content: feature },
      {
        type: 'assistant',
        content: <WebsiteFeatureInfo 
          feature={feature} 
          onBack={() => {
            setSelectedFeature(null);
            handleOptionClick('How this Website works');
          }}
          onReturnToMain={returnToMainMenu}
        />
      }
    ]);
    setTimeout(scrollToBottom, 100);
  }, [scrollToBottom, returnToMainMenu]);

// Handle recipe type selection
const handleRecipeType = useCallback((type, selectedDish) => {
  if (!type || !selectedDish) return;
  setCurrentStep(0); // Reset step counter
  
  const recipe = recipes[selectedDish];
  
  if (!recipe) {
    console.error(`Recipe not found for ${selectedDish}`);
    setMessages(prev => [
      ...prev,
      {
        type: 'assistant',
        content: `Sorry, the recipe for ${selectedDish} is not available.`
      }
    ]);
    resetChat();
    return;
  }

  // For Step by Step
  if (type === 'Step by Step') {
    // Check if recipe has steps property and it's not empty
    if (recipe.steps && recipe.steps.length > 0) {
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: (
            <RecipeDisplay 
              recipe={recipe}
              selectedDish={selectedDish}
              type={type}
              onNextStep={() => showNextStep(recipe, selectedDish)}
              currentStep={0}
              totalSteps={recipe.steps.length}
            />
          )
        }
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: `Sorry, step-by-step instructions are not available for ${selectedDish}.`
        }
      ]);
      resetChat();
    }
  } 
  // For Full Recipe
  else if (type === 'Full Recipe') {
    if (recipe.fullRecipe) {
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: (
            <RecipeDisplay 
              recipe={recipe}
              selectedDish={selectedDish}
              type={type}
            />
          )
        }
      ]);
      
      setTimeout(() => {
        resetChat();
      }, 2000);
    } else {
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: `Sorry, the full recipe is not available for ${selectedDish}.`
        }
      ]);
      resetChat();
    }
  }
  
  setTimeout(scrollToBottom, 100);
}, [currentStep, scrollToBottom, resetChat]);


// Show next step in recipe
const showNextStep = useCallback((recipe, selectedDish) => {
  if (!recipe || !recipe.steps) {
    console.error('Recipe or steps are undefined');
    return;
  }

  setCurrentStep(prevStep => {
    const nextStep = prevStep + 1;
    
    // Check if we still have steps to show
    if (nextStep < recipe.steps.length) {
      console.log(`Showing step ${nextStep + 1} of ${recipe.steps.length} for ${selectedDish}`);
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: (
            <RecipeDisplay 
              recipe={recipe}
              selectedDish={selectedDish}
              type="Step by Step"
              onNextStep={() => showNextStep(recipe, selectedDish)}
              currentStep={nextStep}
              totalSteps={recipe.steps.length} // Add total steps count
            />
          )
        }
      ]);
      setTimeout(scrollToBottom, 100);
    }

    // If this is the last step, show completion message and reset
    if (nextStep === recipe.steps.length) {
      console.log(`Completed all steps for ${selectedDish}`);
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: "That's all the steps! Your dish should be ready. Would you like to try another recipe?"
        }
      ]);
      resetChat();
    }

    return nextStep;
  });
}, [scrollToBottom, resetChat]);

  // Handle dish selection
  const handleDishSelection = useCallback((dish) => {
    if (!dish) return;
    
    setMessages(prev => [
      ...prev,
      { type: 'user', content: dish },
      {
        type: 'assistant',
        content: (
          <div className="options-container">
            <h4>How would you like the recipe?</h4>
            <div className="recipe-buttons">
              <button onClick={() => handleRecipeType('Full Recipe', dish)}>Full Recipe</button>
              <button onClick={() => handleRecipeType('Step by Step', dish)}>Step by Step</button>
            </div>
          </div>
        )
      }
    ]);
    setTimeout(scrollToBottom, 100);
  }, [scrollToBottom, handleRecipeType]);

  // Handle category selection
  const handleCategorySelection = useCallback((category) => {
    if (!category || !dishesByCategory[category]) return;
    setSelectedCategory(category);
    
    setMessages(prev => [
      ...prev,
      { type: 'user', content: category },
      {
        type: 'assistant',
        content: (
          <DishSelection 
            category={category}
            dishes={dishesByCategory[category]}
            onDishSelect={handleDishSelection}
          />
        )
      }
    ]);
    
    setTimeout(scrollToBottom, 100);
  }, [scrollToBottom, handleDishSelection]);

  // Handle main option selection
  const handleOptionClick = useCallback((option) => {
    if (!option) return;

    setMessages(prev => [
      ...prev,
      { type: 'user', content: option },
      option === 'Provide a Recipe' ? {
        type: 'assistant',
        content: (
          <CategorySelection 
            categories={dishesByCategory}
            onCategorySelect={handleCategorySelection}
          />
        )
      } : option === 'How this Website works' ? {
        type: 'assistant',
        content: (
          <div className="website-info-container">
            <h4>Website Features</h4>
            <div className="website-features">
              {Object.keys(websiteFeatures).map((feature) => (
                <button
                  key={feature}
                  className="feature-button"
                  onClick={() => handleWebsiteFeatureClick(feature)}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        )
      } : option === 'Suggest A dish for my meal' ? {
        type: 'assistant',
        content: <MealTimeSelection onMealTimeSelect={handleMealTimeSelect} />
      } : {
        type: 'assistant',
        content: `I'll help you with ${option.toLowerCase()}. What specific information do you need?`
      }
    ]);
    
    setTimeout(scrollToBottom, 100);

    if (option !== 'Provide a Recipe' && 
        option !== 'How this Website works' && 
        option !== 'Suggest A dish for my meal') {
      resetChat();
    }
  }, [scrollToBottom, handleCategorySelection, resetChat, handleWebsiteFeatureClick, handleMealTimeSelect]);

  // Toggle chat window
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!messages.length) {
      showInitialMessages();
    }
  }, [messages.length, showInitialMessages]);

  // Scroll to bottom effect
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, scrollToBottom]);

  return (
    <div className="smart-chef-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Smart Chef Assistant</h3>
            <button 
              className="close-button" 
              onClick={toggleChat} 
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <Message 
                key={`${message.type}-${index}`} 
                type={message.type} 
                content={message.content} 
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
      <button 
        className="smart-chef-button" 
        onClick={toggleChat} 
        aria-label="Toggle chat"
      >
        <span className="chef-icon" role="img" aria-label="Chef icon">
          <img src={chef} alt="" />
        </span>
        {!isOpen && <span className="button-text"></span>}
      </button>
    </div>
  );
};

export default memo(SmartChef);
