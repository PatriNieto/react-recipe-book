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
        placeholder='Search'
      />
      <img width="20" height="20" src="https://img.icons8.com/wired/64/FD7E14/search.png" alt="search"/>
    </div>

  );


}

export default NavBar

