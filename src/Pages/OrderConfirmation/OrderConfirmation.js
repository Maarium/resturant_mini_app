import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OrderConfirmation.css'
const OrderConfirmation = () => {
  const navToTrackOrder = useNavigate()
  const tracking = () => {
    navToTrackOrder("/track")
  }
  return (
    <div className='order-confirm-page'>
      <div className='page-name'><img src='images/order/back.svg'/>Order Confirmation</div>
      <div className='order-text'>
        <p id='order-text-head'>Thank You for ordering with.<img src='images/order/smile.svg'/></p>
        <p id='order-text-desc'>We’ve successfully received your order and are getting it ready for delivery.</p>
      </div>
      <div className='order-pricing-container'>
      <div className='order-price-card'>
        <p id='order-summary-card-title'>Restaurant:<span> Savour</span> </p>
        <div className='order-summary-card-content'>
        <img src='images/checkout/burgr.svg'/>
        <p id='check-prod-name'>Beef Burger  <p>Rs. 999</p></p>
        </div>
        <p id='checkout-qty'>Qty 2</p>
      </div>
      <div className='check-total'>
              <p>Subtotal:</p><span>Rs. 1998</span>
      </div>
      <div className='check-total'>
      <p>Shipping fee:</p><span>Rs. 400</span>
      </div>
     </div>
     
      <div className='order-total-price'>
      <p>Total:<span> Rs 2398</span></p>
      </div>
      <div className='order-now-desc'>
      <p>Your order will arrive by [Insert Time]. We’ll keep you updated with real-time tracking, so you know exactly when your delicious snacks will reach you!</p>
      <button onClick={tracking}>Track your Order</button>
      </div>
     
    </div>
  )
}

export default OrderConfirmation
