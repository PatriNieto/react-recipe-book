import ListItem from "./ListItem.jsx";
import { useState } from "react";
import React from "react";
import AddForm from "./AddForm.jsx";

const List = (props) => {

  const {recipesNuestro, setRecipesNuestro, handleDelete, addNewRecipe, addEditedRecipe} = props
  //const [updatedRecipesData, setUpdatedRecipesData] = recipesNuestro
  //la funcion va aqui!
 
    /* const addNewRecipe = (newRecipe) => {
    const updatedRecipes = [ newRecipe, ...recipesNuestro]
    //const updatedRecipesData = [newRecipe,...updatedRecipesData]
    setRecipesNuestro(updatedRecipes)
    //setUpdatedRecipesData(updatedRecipesData)
  } 
    const addEditedRecipe = (editedRecipe) => {
      recipesNuestro.forEach((element, index)=>{
        element.id === editedRecipe.id && recipesNuestro.splice(index,1)
      })

      recipesNuestro.unshift(editedRecipe)

  } */
    
  return (
    <div className="recipesContainer">

      <AddForm
      addNewRecipe = {addNewRecipe}
      
      />
      <h1>Todas las recetas</h1>
      {recipesNuestro.map((elem,index) => (
        <ListItem 
        key = {elem.id}
        elem={elem} 
        handleDelete={handleDelete}
        index= {index}
        addEditedRecipe= {addEditedRecipe} />
      ))}
    </div>
  );
};

export default List;

