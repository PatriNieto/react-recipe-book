import React from 'react'
import imgLogo from '../assets/Leonardo_Phoenix_A_modern_and_attentiongrabbing_logo_for_the_R_3.jpg'

const SideBar = () => {
  return (
      <div className='side-bar'>
        <img src={imgLogo} alt="" />
        <p>Entrantes</p>
        <p>Calientes</p>
        <p>Postres</p>
      </div>
  )
}

export default SideBar