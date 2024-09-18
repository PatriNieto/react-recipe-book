import recipes from "../data/recipes.json";
import { useState } from "react";

import React from "react";

const ListItem = () => {
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
    <div>
      {recipesNuestro.map((elem, index) => (
        <div key={index}>
          <h1>{elem.name}</h1>
          <img src={elem.image} alt="recipeFoto" />
          <p>{elem.calories <= 350 ? "✅" : "❌"}</p>
          <button onClick={() => handleDelete(index)}>Erase</button>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
