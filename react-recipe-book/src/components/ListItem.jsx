import { useState } from "react";
import { Link } from 'react-router-dom'
import React from "react";




function ListItem({elem, handleDelete, index}) {
 

  const {name, image, calories, id} = elem

  


  return (
    
        <div key={elem.id} className="recipeDiv">
          <h1>{name}</h1>
          <div>
          <img src={image} alt="recipeFoto" className="recipeFoto"/>
          </div>
          <p>{calories <= 350 ? "✅" : "❌"}</p>
          <Link 
          to={`/itemdetails/${id}`
          }> 
            Check Details
            
          </Link> 
          
          <Link 
          to={`/modifyFormPage/${id}`
          
          }> 
          Edit recipe

          </Link>


          <button onClick={() => handleDelete(index)}>Erase recipe</button>
          
          
        </div>
  );
}

export default ListItem;
