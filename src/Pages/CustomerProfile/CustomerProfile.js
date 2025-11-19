import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CustomerProfile.css'
const CustomerProfile = () => {
const navigaToSetting= useNavigate()
const seting = () => {
 navigaToSetting("/setting")
}
const navToOrders = useNavigate()
const cstmerOrder = () => {
  navToOrders("/customerorders")
}
const navToReviews = useNavigate()
const reviews = () => {
navToReviews("/customerreviews")
}
const navToSupport = useNavigate()
const suport = () => {
  navToSupport("/support")
}

  return (
    <div className='cust-fav-container'>
      <div className='profile-info'>
        <div className='profile-left'>
            <img src='images/custprofile/circle.svg'/>
            <div className='name-mail'>
                <p id='name'>Customer Name</p>
                <p id='mail'>name@gmail.com</p>
            </div>
        </div>
        <div className='profile-right'>
            <img src='images/custprofile/setting.svg'onClick={seting}/>
        </div>
      </div>
       <div className='buttons-main'>
      <button id='white-btn'>I am Customer</button>
      <button id='white-btn'>I am Vendor</button>
    </div>
    <div className='profile-options'>
      <p onClick={cstmerOrder}>Order management</p>
    </div>
    <div className='profile-options'>
      <p onClick={reviews}>Your Reviews</p>
    </div>
    <div className='profile-options'>
      <p onClick={suport}>Customer Support</p>
    </div>
    </div>
  )
}

export default CustomerProfile
