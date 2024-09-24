import ListItem from "./ListItem.jsx";
import { useState } from "react";
import React from "react";
import AddForm from "./AddForm.jsx";
import NavBar from "./NavBar.jsx";

const List = (props) => {
  const {
    recipesNuestro,
    handleDelete,
    addNewRecipe,
    addEditedRecipe,
    searchValue,
    setSearchValue,
  } = props;

  const showListAgain = searchValue.trim() === "";

  const renderRecipes = () => {
    if (showListAgain) {
      if (recipesNuestro.length > 0) {
        return recipesNuestro.map((elem, index) => (
          <ListItem
            key={elem.id}
            elem={elem}
            handleDelete={handleDelete}
            index={index}
            addEditedRecipe={addEditedRecipe}
          />
        ));
      } else {
        return <p style={{ color: "#FE6F61" }}>No recipes found</p>;
      }
    } else {
      const filteredRecipes = recipesNuestro.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (filteredRecipes.length > 0) {
        return filteredRecipes.map((elem, index) => (
          <ListItem
            key={elem.id}
            elem={elem}
            handleDelete={handleDelete}
            index={index}
            addEditedRecipe={addEditedRecipe}
          />
        ));
      } else {
        return <p style={{ color: "#FE6F61" }}>No recipes found</p>;
      }
    }
  };

  return (
    <>  
          <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
    
    <div className="recipesContainer addrecipe">
      <AddForm addNewRecipe={addNewRecipe} />
      <h1>All our recipes</h1>
      {renderRecipes()}
    </div>
    </>
  );
};

export default List;
