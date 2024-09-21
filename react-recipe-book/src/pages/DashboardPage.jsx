import React from 'react'
import SideBar from '../components/SideBar'
import List from '../components/List'
import { useState } from 'react'
import recipes from "../data/recipes.json"
import AddForm from '../components/AddForm'


function DashboardPage() {
  
  return (
    <div>
        <AddForm/>
        
        <List/>
        
    
        
    </div>
  )
}

export default DashboardPage  