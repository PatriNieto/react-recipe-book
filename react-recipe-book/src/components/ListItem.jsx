import { useState } from "react";
import { Link } from 'react-router-dom'
import React from "react";



function ListItem({elem, handleDelete, index}) {
 

  const {name, image, calories, id} = elem
console.log(elem)

  return (
    
        <div key={elem.id} className="recipeDiv">
          <h1>{name}</h1>
          <img src={image} alt="recipeFoto" />
          <p>{calories <= 350 ? "✅" : "❌"}</p>
          <button onClick={() => handleDelete(index)}>Erase recipe</button>
          <Link 
          to={`/itemdetails/${id}`
          }> 
            <button>Check Details</button>
            
          </Link> 
          
          <Link 
          to={`/modifyFormPage/${id}`
          
          }> 
          <button>Edit recipe</button>

          </Link>


          
          
        </div>
  );
}

export default ListItem;
