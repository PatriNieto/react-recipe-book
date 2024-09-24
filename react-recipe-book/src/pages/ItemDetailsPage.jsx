import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import recipes from "../data/recipes.json";
import { Link, useParams } from "react-router-dom";

function ItemDetailsPage(props) {
  const { recipesNuestro } = props;
  const { recipeId } = useParams();
  
  const recipeInformation = recipesNuestro.find(
    (eachRecipe) => eachRecipe.id === recipeId
  );

  return (
    <div className="detailsPage">
      <div>
        {recipeInformation && (
          <>
            <h2>Dish</h2>
            <img
              className="imgDetails"
              src={recipeInformation.image}
              alt={recipeInformation.name}
            />
            <h3> {recipeInformation.name}</h3>
            <p>Calories: {recipeInformation.calories}</p>
            <p>Servings: {recipeInformation.servings}</p>
            <Link to="/">
              <button>Back</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
