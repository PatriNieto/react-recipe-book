import ListItem from "./ListItem.jsx";
import recipes from "../data/recipes.json"
import { useState } from "react";
import React from "react";


const List = () => {
  const [recipesNuestro, setRecipesNuestro] = useState(recipes)
  //la funcion va aqui!
  console.log(`maluuuuuuuu1`,recipesNuestro)
  

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
