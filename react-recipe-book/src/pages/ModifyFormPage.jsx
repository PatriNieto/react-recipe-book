import React from 'react'
import ModifyForm from "../components/ModifyForm"
import { useParams } from 'react-router-dom';

function ModifyFormPage(props) {
  const {recipesNuestro,addEditedRecipe} = props
  const {recipeId} = useParams()
  const recipeInformation = recipesNuestro.find((eachRecipe) => eachRecipe.id === recipeId )

  return (
    <div>
        <ModifyForm 
         addEditedRecipe= {addEditedRecipe}
         recipesNuestro = {recipesNuestro}
        />
     </div>   
  )
}

export default ModifyFormPage