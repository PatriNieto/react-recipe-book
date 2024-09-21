import ListItem from "./ListItem.jsx";
import { useState } from "react";
import React from "react";
import AddForm from "./AddForm.jsx";





const List = (props) => {
  const {recipesNuestro, setRecipesNuestro, handleDelete} = props
  //const [updatedRecipesData, setUpdatedRecipesData] = recipesNuestro
  //la funcion va aqui!
 
    const addNewRecipe = (newRecipe) => {
    const updatedRecipes = [ newRecipe, ...recipesNuestro]
    //const updatedRecipesData = [newRecipe,...updatedRecipesData]
    setRecipesNuestro(updatedRecipes)
    //setUpdatedRecipesData(updatedRecipesData)
  } 
 
 
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
        index= {index} />
      ))}
    </div>
  );
};

export default List;
