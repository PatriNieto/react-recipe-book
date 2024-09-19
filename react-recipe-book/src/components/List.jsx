import ListItem from "./ListItem.jsx";
import recipes from "../data/recipes.json";
import { useState } from "react";
import React from "react";

const List = () => {
  //la funcion va aqui!

  const [recipesNuestro, setRecipe] = useState(recipes);

  const handleDelete = (index) => {
    console.log("removiendo elemento", index);
    const clone = recipesNuestro.slice(0);

    console.log("1", clone);
    clone.splice(index, 1);
    console.log(clone);
    setRecipe(clone);
  };
  return (
    <div >
      
      {recipesNuestro.map((elem) => (
        <ListItem elem={elem} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default List;
