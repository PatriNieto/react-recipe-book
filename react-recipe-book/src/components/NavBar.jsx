import React from 'react'


function NavBar({ searchValue, setSearchValue }) {

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
  }

  return (
    <div className='navBar'>
      <input
        className='inputNavBar'
        value={searchValue}
        onChange={handleSearchChange}
        type='text'
        placeholder='🔍 '
      />
    </div>
 );

}

export default NavBar

