import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Vendor.css'
import BottomNav from '../../components/BottomNav/BottomNav'
const Vendor = () => {
 const navigate = useNavigate()
 const navigateToOther = () => {
  navigate("/home")
 }
  return (
    <>
    <div className='vendor-page'>
      <div className='vendor-page-name'>
        <img src='images/vendor/smile.svg'/>
        <a href='#'>Sign In</a>
      </div>
      <div className='vendor-search'>
        <img src='images/vendor/map.svg'/>
        <input type='search' placeholder='Your location here'/>
      </div>
<div className='vendor-lower-main'>
      <div className='vendor-card'>
        <div className='vendor-card-left'>
            <p>Delicious Food, Delivered Fast.</p>
            <button onClick={navigateToOther}>Order Now</button>
        </div>
        <div className='vendor-card-right'>
        <img src='images/vendor/burger.svg'/>
        </div>
      </div>
      <p id='vendor-sell'>Sell your Food</p>
      <div className='vendor-start-card-main'>
      <div className='vendor-start-card'>
        <img src='images/vendor/start.svg'/>
        <p>List your restaurant here on Snackia. are you interested? Let’s start today.</p>
        <button>Get Started</button>
      </div>
      </div>
      <p id='vendor-why'>Why Snackia?</p>
      <div className='why-vendor-cards-main'>
              <div className='why-vendor-cards-container'>
        <div className='why-vendor-card'>
          <p>Fresh, Fast, and Reliable</p>
          <img src='images/vendor/brbot.svg'/>
        </div>
        <div className='why-vendor-card'>
          <p>Secure and Easy Payments</p>
          <img src='images/vendor/hand.svg'/>
        </div>
        <div className='why-vendor-card'>
          <p>Real-Time Order Tracking</p>
          <img src='images/vendor/cone.svg'/>
        </div>
        <div className='why-vendor-card'>
          <p>24/7 Customer Support</p>
          <img src='images/vendor/face.svg'/>
        </div>
      </div>
   </div>
</div>
    </div>
    </>
  )
}

export default Vendor
