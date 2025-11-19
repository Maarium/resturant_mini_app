import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const navToCart = useNavigate()
  const shop = () => {
    navToCart("/mycart")
  }
  const navToMsg = useNavigate()
  const msg = () => {
    navToMsg("/chat")
  }
  return (
    <div className='navbar'>
      <div className='nav-sub'>
        <div className='nav-sub-left'>
            <img src='images/nav/location.svg'/>
            Your location
        </div>
        <div className='nav-sub-right'>
         <img src='images/nav/msg.svg' onClick={msg}/>
         <img src='/images/nav/cart.svg' onClick={shop}/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
