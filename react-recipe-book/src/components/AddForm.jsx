import React, { useState } from "react";

function AddForm(props) {
  
  
  const randomId = Math.random().toString(36).substring(2, 12);
  const [recipeNameValue, setRecipeNameValue] = useState("");
  const [recipeImageValue, setRecipeImageValue] = useState("");
  const [recipeCalValue, setRecipeCalValue] = useState(0);
  const [recipeServingsValue, setRecipeServingsValue] = useState(0);
  const [recipeIdValue, setRecipeIdValue] = useState (randomId)

  const handleNameValue = (event) => {
    setRecipeNameValue(event.target.value);
  };

  const handleImageValue = (event) => {
    setRecipeImageValue(event.target.value);
  };

  const handleCalValue = (event) => {
    setRecipeCalValue(event.target.value);
  };

  const handleIdValue = (event) => {
    setRecipeIdValue(randomId)
  }
  const handleServingsValue = (event) => {
    setRecipeServingsValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
   let newRecipe = {
      name: recipeNameValue,
      id: randomId,
      image: recipeImageValue,
      calories: recipeCalValue,
      servings: recipeServingsValue,
    }; 

   /*  let newRecipe = {
      recipeNameValue, randomId, recipeImageValue, recipeCalValue,recipeServingsValue
    } */

    

    /*setRecipesNuestro((current)   => {
      let clone = [...current];
      clone.unshift(newRecipe);
      return clone;
    });
    */
    //adding the product
    props.addNewRecipe(newRecipe)


  }
  
  return (
    <div className="Formulario">
      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Recipe</span>
        <div>
          <label>
            Recipe Name
            <input
              name="recipeNameValue"
              onChange={handleNameValue}
              value={recipeNameValue}
              type="text"
              placeholder="Recipe Name"
            />
          </label>

          <label>
            Recipe Image
            <input
              name="image"
              onChange={handleImageValue}
              value={recipeImageValue}
              type="url"
              placeholder="Image"
            />
          </label>

          <label>
            Calories
            <input
              name="calories"
              onChange={handleCalValue}
              value={recipeCalValue}
              type="number"
              placeholder="Calories"
            />
          </label>

          <label>
            Servings
            <input
              name="Servings"
              onChange={handleServingsValue}
              value={recipeServingsValue}
              type="number"
              placeholder="Servings"
              min={1}
            />
          </label>
          <label id="recipe-id-hidden">
            ID
            <input
              name="id"
              onChange = {handleIdValue}
              value={recipeIdValue}
              type="string"
              placeholder="Id"
             
            />
          </label>

          <button type="submit">Add Recipe</button>
        </div>
      </form>
      {/* FORM END */}


      
      {/* RECIPE LIST */}
      {/*recipesNuestro &&
        recipesNuestro.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} />
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
          </div>
))}*/}
    </div>
  );
}

export default AddForm;
