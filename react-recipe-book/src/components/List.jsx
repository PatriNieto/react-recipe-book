import ListItem from "./ListItem.jsx";
import { useState } from "react";
import React from "react";
import recipes from "../data/recipes.json"

<<<<<<< HEAD
const List = (props) => {
  const [recipesNuestro, setRecipe] = useState(recipes)
=======

const List = () => {
  const [recipesNuestro, setRecipesNuestro] = useState(recipes)
>>>>>>> f2605933057457a12c1f9d6998b01e94f643be23
  //la funcion va aqui!
 
  

  const handleDelete = (index) => {
    const clone = recipesNuestro.slice(0);
    clone.splice(index, 1);
    setRecipesNuestro(clone);
  };
  return (
    <div className="recipesContainer">

     
      <h1>Todas las recetas</h1>
      {recipesNuestro.map((elem,index) => (
        <ListItem 
        elem={elem} 
        handleDelete={handleDelete}
        index= {index} />
      ))}
    </div>
  );
};

export default List;
