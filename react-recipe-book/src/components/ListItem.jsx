import { useState } from "react";
import { Link } from 'react-router-dom'
import React from "react";



function ListItem({elem, handleDelete}) {

  const {name, image, calories, id} = elem
  return (
    
    <Link to={`/itemdetails/${id}`}>
        <div key={elem.id} className="recipeDiv">
          <h1>{name}</h1>
          <img src={image} alt="recipeFoto" />
          <p>{calories <= 350 ? "✅" : "❌"}</p>
          <button onClick={() => handleDelete(index)}>Erase recipe</button>
        </div>
   </Link>
    
  );

}
export default ListItem;
