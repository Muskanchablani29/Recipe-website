import { useState } from "react";
import "./Shareas.css";

export default function ShareRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "medium",
    ingredients: [{ item: "" }],
    instructions: [{ step: "" }],
    description: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle ingredient inputs
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index].item = value;
    setFormData(prev => ({
      ...prev,
      ingredients: newIngredients
    }));
  };

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { item: "" }]
    }));
  };

  // Handle instruction steps
  const handleInstructionChange = (index, value) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index].step = value;
    setFormData(prev => ({
      ...prev,
      instructions: newInstructions
    }));
  };

  const addInstruction = () => {
    setFormData(prev => ({
      ...prev,
      instructions: [...prev.instructions, { step: "" }]
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return;
    }
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError("Please enter a recipe title");
      return;
    }

    if (!image) {
      setError("Please upload an image");
      return;
    }

    try {
      // Here you would typically send the data to your backend
      const submitData = {
        ...formData,
        image
      };
      console.log("Submitting recipe:", submitData);
      
      // Reset form after successful submission
      setFormData({
        title: "",
        prepTime: "",
        cookTime: "",
        servings: "",
        difficulty: "medium",
        ingredients: [{ item: "" }],
        instructions: [{ step: "" }],
        description: "",
      });
      setImage(null);
      setError("");
    } catch (err) {
      setError("Failed to submit recipe. Please try again.");
    }
  };

  return (
    <div className="heading-container">
    <h1 className="main-heading">Share Your Recipe</h1>
    <p className="sub-heading">Share your culinary masterpiece with food lovers around the world</p>
    <div className="heading-decoration">
      <span className="decoration-line"></span>
      <span className="decoration-icon">👩‍🍳</span>
      <span className="decoration-line"></span>
    </div>
  
    <form className="container" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleInputChange}
          className="input-field"
          required
        />
      </div>

      <div className="image-upload">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          className="file-input" 
        />
        {image && <img src={image} alt="Recipe" className="uploaded-image" />}
      </div>

      <div className="form-row">
        <input
          type="text"
          name="prepTime"
          placeholder="Prep Time (mins)"
          value={formData.prepTime}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="cookTime"
          placeholder="Cook Time (mins)"
          value={formData.cookTime}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          value={formData.servings}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="form-group">
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleInputChange}
          className="select-field"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="ingredients-section">
        <h3>Ingredients</h3>
        {formData.ingredients.map((ing, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Ingredient ${index + 1}`}
            value={ing.item}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            className="input-field"
          />
        ))}
        <button type="button" onClick={addIngredient} className="add-button">
          Add Ingredient
        </button>
      </div>

      <div className="instructions-section">
        <h3>Instructions</h3>
        {formData.instructions.map((inst, index) => (
          <textarea
            key={index}
            placeholder={`Step ${index + 1}`}
            value={inst.step}
            onChange={(e) => handleInstructionChange(index, e.target.value)}
            className="textarea-field"
          />
        ))}
        <button type="button" onClick={addInstruction} className="add-button">
          Add Step
        </button>
      </div>

      <div className="form-group">
        <textarea
          name="description"
          placeholder="Recipe Description..."
          value={formData.description}
          onChange={handleInputChange}
          className="textarea-field"
        />
      </div>

      <button type="submit" className="submit-button">
        Submit Recipe
      </button>
    </form></div>
  );
}
