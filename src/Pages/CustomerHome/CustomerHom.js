import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import BottomNav from '../../components/BottomNav/BottomNav'
import BtnPair from '../../components/BtnPair/BtnPair'

const CustomerHom = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <BtnPair/>
      <Cards/>
      <BottomNav/>
    </>
  ) 
}

export default CustomerHom
