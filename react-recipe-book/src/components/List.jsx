import ListItem from "./ListItem.jsx";
import { useState } from "react";
import React from "react";
import recipes from "../data/recipes.json"

const List = (props) => {
  const [recipesNuestro, setRecipe] = useState(recipes)
  //la funcion va aqui!
 
  

  const handleDelete = (index) => {
    const clone = recipesNuestro.slice(0);
    clone.splice(index, 1);
    setRecipe(clone);
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
