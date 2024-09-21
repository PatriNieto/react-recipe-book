import React from 'react'
import imgLogo from '../assets/logo-react-Recipe.png'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
      <div className='side-bar'>
         
         {/* <Link to="/"> */}
         <img src={imgLogo} alt="Logo" />
       {/*   </Link> */}
         
         
        
        <p>Starters</p>
        <p>Main Courses</p>
        <p>Desserts</p>
      </div>
  )
}

export default SideBar