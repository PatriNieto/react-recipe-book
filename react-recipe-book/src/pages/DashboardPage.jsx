import React from 'react'
import SideBar from '../components/SideBar'
import List from '../components/List'
import { useState } from 'react'
import recipes from "../data/recipes.json"
import AddForm from '../components/AddForm'


function DashboardPage(props) {
  const { recipesNuestro, setRecipesNuestro, handleDelete } = props;
  
  return (
    <div>
       
        
        <List
        recipesNuestro={recipesNuestro}
        handleDelete={handleDelete} 
        setRecipesNuestro = {setRecipesNuestro}
        />
        
    
        
    </div>
  )
}

export default DashboardPage  