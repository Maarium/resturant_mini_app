import React from 'react'
import './CheckOut.css'
import { useNavigate } from 'react-router-dom'
const CheckOut = () => {
  const navToConfirmOrder = useNavigate()
  const confirm = () => {
    navToConfirmOrder("/orderconfirm")
  }
  
  return (
    <div className='check-out-page'>
      <div className='page-name'><img src='images/checkout/back.svg'/> Checkout</div>
      <div className='check-delivery'>
        <p id='check-heading'>Delivery</p>
        <div className='check-delivery-form'>
        <input type='text' name='FirstName' placeholder='First Name'/>
        <input type='text' name='LastName' placeholder='Last Name'/>
        <input type='text' name='Address' placeholder='Address'/>
        <input type='number' name='phone' placeholder='Phone'/>
        <input type='email' name='email' placeholder='Email'/>
        <p id='save-check'><input id='delivery-checkbox' type='checkbox'/> 
        Save this information for the next time</p>
        </div>
        <div className='checkout-payment'>
         <p id='check-heading'>Payment</p>
        <button id='delivery-method'>Cash on Delivery</button>
        <p id='check-heading'>Billing Address</p>
        <button id='delivery-method'>Same as shipping address</button>
        </div>
      </div>
     <div className='checkout-order-summary'>
      <p id='checkout-summary-heading'>Order Summary</p>
      <div className='order-summary-card'>
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
     <div className='checkout-total-price'>
      <div className='checkout-total-price-content'>
      <p>Total:<span> Rs 2398</span></p>
      <button id='checkout-place-order' onClick={confirm}>Place Order</button>
      </div>
     </div>
    </div>
  )
}

export default CheckOut
