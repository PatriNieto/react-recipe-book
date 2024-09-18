import React from 'react'
import imgLogo from '../assets/logo-react-Recipe.png'

const SideBar = () => {
  return (
      <div className='side-bar'>
        <img src={imgLogo} alt="" />
        <p>Starters</p>
        <p>Main Courses</p>
        <p>Deserts</p>
      </div>
  )
}

export default SideBar