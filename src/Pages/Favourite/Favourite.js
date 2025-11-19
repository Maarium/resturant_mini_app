import React from 'react'
import './Favourite.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import BottomNav from '../../components/BottomNav/BottomNav'
import FavCards from '../../components/FavCards/FavCards'
const Favourite = () => {
  return (
    <div className='favourite-page'>
      <SearchBar/>
      <FavCards/>
      <div className='page-bottom-nave'>
      <div className='page-bottm'>        
        <BottomNav/>
        </div>
      </div>
    </div>
  )
}

export default Favourite
