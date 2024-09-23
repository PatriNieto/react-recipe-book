import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';


function ModifyForm(props) {
  const {recipeId} = useParams()
  const {addEditedRecipe, recipesNuestro} = props

  const recipeInformation = recipesNuestro.find((eachRecipe) => eachRecipe.id === recipeId )



  //const {recipeNameValue, recipeImageValue, recipeCalValue,recipeServingsValue,recipeIdValue} = recipesNuestro
  console.log(recipeInformation.name)
  
  const [editedRecipeNameValue, setEditedRecipeNameValue] = useState(recipeInformation.name);
  const [editedRecipeImageValue, setEditedRecipeImageValue] = useState(recipeInformation.image);
  const [editedRecipeCalValue, setEditedRecipeCalValue] = useState(recipeInformation.calories);
  const [editedRecipeServingsValue, setEditedRecipeServingsValue] = useState(recipeInformation.servings);
  const [editedRecipeIdValue, setEditedRecipeIdValue] = useState(recipeId)

  const handleEditedNameValue = (event) => {
    setEditedRecipeNameValue(event.target.value);
  };

  const handleEditedImageValue = (event) => {
    setEditedRecipeImageValue(event.target.value);
  };

  const handleEditedCalValue = (event) => {
    setEditedRecipeCalValue(event.target.value);
  };

  const handleEditedIdValue = (event) => {
    setEditedRecipeIdValue(event.target.value)
  }
  const handleEditedServingsValue = (event) => {
    setEditedRecipeServingsValue(event.target.value);
  };

  const handleEditedFormSubmit = (event) => {
    event.preventDefault();
   let editedRecipe = {
      name: editedRecipeNameValue,
      id: editedRecipeIdValue,
      image: editedRecipeImageValue,
      calories: editedRecipeCalValue,
      servings: editedRecipeServingsValue,
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
    addEditedRecipe(editedRecipe)


  }
  
  return (
    <div className="formulario">
      {/* FORM */}
      <form onSubmit={handleEditedFormSubmit}>
        <span className="addRecipe">Add a Recipe</span>
        <div>
        
          <label className="inputsNames">
            Recipe Name
            <input
            className="inputsForm"
              name="recipeNameValue"
              onChange={handleEditedNameValue}
              value={editedRecipeNameValue}
              type="text"
              placeholder=""
            />
          </label>
          
          <label className="inputsNames">
            Recipe Image
            <input
             className="inputsForm"
              name="image"
              onChange={handleEditedImageValue}
              value={editedRecipeImageValue}
              type="url"
              placeholder="Image"
            />
          </label>
          
          <label className="inputsNames">
            Calories
            <input
            className="inputsForm"
              name="calories"
              onChange={handleEditedCalValue}
              value={editedRecipeCalValue}
              type="number"
              placeholder=""
            />
          </label>
         
          <label className="inputsNames">
            Servings
            <input
            className="inputsForm"
              name="Servings"
              onChange={handleEditedServingsValue}
              value={editedRecipeServingsValue}
              type="number"
              placeholder="Servings"
              min={1}
            />
          </label>
          <label id="recipe-id-hidden" 
          className="inputsNames">
            ID
            <input
            className="inputsForm"
              name="id"
              onChange = {handleEditedIdValue}
              value={recipeId}
              type="string"
              placeholder="Id"
            />
          </label>
          <br></br>
          <button type="submit">Save changes</button>
          <Link to={"/"}>
          <br></br>
          <button>Back</button>
          </Link>

          
        </div>
      </form>
      


      
 
    </div>
  );

}
export default ModifyForm
