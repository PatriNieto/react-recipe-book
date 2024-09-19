import React from 'react'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import recipes from '../data/recipes.json'
import {Link, useParams } from 'react-router-dom'



function ItemDetailsPage() {
  const {recipeId} = useParams()
  //console.log(recipeId)
  const recipeInformation = recipes.find((eachRecipe) => eachRecipe.id === recipeId )

  return (
    <div>
        <SideBar />
        <Footer/>
      <div>

        {recipeInformation && (

          <>
          <h2>Dish</h2>
          <img src={recipeInformation.image} alt="recipeImg" />
          <h3> {recipeInformation.name}</h3>
          <p> {recipeInformation.calories}</p>
          <p>{recipeInformation.servings}</p>
          <Link to ="/">
          <button>Back</button>
          </Link>
          </>


        )}

        

        </div>
    </div>
  )
}

export default ItemDetailsPage