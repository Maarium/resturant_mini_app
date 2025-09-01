import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className='search-bar-main'>
      <div className='search-input'>
        <img src='images/search/glass.svg'/>
        <input type='search' placeholder='Search food'/>
      </div>
        <button><img src='images/search/flask.svg'/></button>
    </div>
  )
}

export default SearchBar
