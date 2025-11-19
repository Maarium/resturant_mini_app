import React from 'react'
import './TrackOrder.css'
const TrackOrder = () => {
  return (
    <div className='track-order-page'>
      <div className='page-name'><img src='images/track/back.svg'/>Order Tracking</div>
      <div className='track-card'>
        <img src='images/track/burgs.svg'/>
        <div className='track-card-text'>
          <div className='track-card-title'>
          <p id='track-total'>Total<p id='track-card-price'>Rs. 1999</p></p>
          <p>Today</p>
          </div>
          <p id='track-address'>Shipping Address: House #12, Street #45 <p>Sector G-11/3, Islamabad 44000</p>Pakistan</p>
        </div>
      </div>
      <p id='track-order-status'>Order Status:<span> On its way</span></p>
      <div className='order-track-steps'>
        <div className='track-received-step'>
          <div className='track-one-step-images'> 
          <hr/>
          <img src='images/track/tick.svg'/>
          <hr/>
        </div>
           <p>Recieved</p>
        </div>
        <div className='track-packed-step'>
          <div className='track-one-step-images'> 
          <hr/>
          <img src='images/track/tick.svg'/>
          <hr/>
        </div>
           <p>Packed</p>
        </div>
        <div className='track-way-step'>
          <div className='track-one-step-images'> 
          <hr/>
          <img src='images/track/tick.svg'/>
          <hr/>
        </div>
           <p>On its way</p>
        </div>
        <div className='track-delivered-step'>
          <div className='track-one-step-images'> 
          <hr/>
          <img src='images/track/tick.svg'/>
          <hr/>
        </div>
           <p>Delivered</p>
        </div>
      </div>
      <div className='track-location'>
        <img src='images/track/map.svg'/>
      </div>
    </div>
  )
}

export default TrackOrder
