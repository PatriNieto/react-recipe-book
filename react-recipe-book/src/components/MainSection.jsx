import NavBar from "./NavBar"
import recipes from "../data/recipes.json"
import useState from "react"
import List from "./List"
console.log(recipes)
function MainSection() {
   

    return(
     <div>
        <NavBar/>
        <List />
    
    </div>
    )
}

export default MainSection