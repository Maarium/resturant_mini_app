import React from 'react'
import "./CustomerNotification.css"
import BottomNav from '../../components/BottomNav/BottomNav'
const CustomerNotification = () => {
  return (
    <>
     <div className='notification-section'>
        
       <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Your order is on its way!</div>
        <div className='noti-desc'>Your meal from [Restaurant Name] is being delivered. Track it in real-time!</div>
      </div>
      </div>
       <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Get 20% off on your next order!</div>
        <div className='noti-desc'>Use code SNACKIA20 at checkout and enjoy your favorite meals for less.</div>
      </div>
      </div>
       <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Your order is on its way!</div>
        <div className='noti-desc'>Your meal from [Restaurant Name] is being delivered. Track it in real-time!</div>
      </div>
      </div>
        <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Get 20% off on your next order!</div>
        <div className='noti-desc'>Use code SNACKIA20 at checkout and enjoy your favorite meals for less.</div>
      </div>
      </div>
      <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Your order is on its way!</div>
        <div className='noti-desc'>Your meal from [Restaurant Name] is being delivered. Track it in real-time!</div>
      </div>
      </div>
      <div className='notificattion-container'>
        <div className='notification-left'>
            <img src='images/notifi/one.svg'/>
            </div>
      <div className='notification-right'>
        <div className='noti-title'>Get 20% off on your next order!</div>
        <div className='noti-desc'>Use code SNACKIA20 at checkout and enjoy your favorite meals for less.</div>
      </div>
      </div>
    </div>
    <BottomNav/>
    </>
  )
}
export default CustomerNotification
