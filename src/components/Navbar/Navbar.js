import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-sub'>
        <div className='nav-sub-left'>
            <img src='images/nav/location.svg'/>
            Your location
        </div>
        <div className='nav-sub-right'>
         <img src='images/nav/msg.svg'/>
         <img src='/images/nav/cart.svg'/>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
