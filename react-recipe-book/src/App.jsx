import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import List from "./components/List";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import DashboardPage from "./pages/DashboardPage";
import { useState } from "react";
import recipes from "./data/recipes.json";
import ModifyFormPage from "./pages/ModifyFormPage";


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipesNuestro, setRecipesNuestro] = useState(recipes);

  const handleDelete = (index) => {
    const clone = recipesNuestro.slice(0);
    clone.splice(index, 1);
    setRecipesNuestro(clone);
  };

  const addNewRecipe = (newRecipe) => {
    const updatedRecipes = [newRecipe, ...recipesNuestro];

    setRecipesNuestro(updatedRecipes);
  };
  const addEditedRecipe = (editedRecipe) => {
    recipesNuestro.forEach((element, index) => {
      element.id === editedRecipe.id &&
        recipesNuestro.splice(index, 1, editedRecipe);
    });
  };

  return (
    <>
      <div className="container">
        <div className="subcontainer">
          <SideBar />

          <Footer url={`https://github.com/PatriNieto/react-recipe-book.git`} />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                recipesNuestro={recipesNuestro}
                handleDelete={handleDelete}
                setRecipesNuestro={setRecipesNuestro}
                addNewRecipe={addNewRecipe}
                addEditedRecipe={addEditedRecipe}
                searchValue={searchValue}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/itemdetails/:recipeId"
            element={<ItemDetailsPage recipesNuestro={recipesNuestro} />}
          />
          <Route
            path="/modifyFormPage/:recipeId"
            element={
              <ModifyFormPage
                recipesNuestro={recipesNuestro}
                addEditedRecipe={addEditedRecipe}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
