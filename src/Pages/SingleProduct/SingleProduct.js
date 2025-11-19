import React from 'react'
import './SingleProduct.css'
import { useNavigate } from 'react-router-dom'
const SingleProduct = () => {
  const navToCheckout = useNavigate()
  const checkout = () => {
    navToCheckout("/checkout")
  }
  
  return (
    <div className='single-product-page'>
      <div className='page-name-single'>
      <div className='page-name-left'>
      <img src='images/single/back.svg'/>
      <img id='single-circle' src='images/single/circle.svg'/>
      <p id='single-address'>Restaurant: <strong>Savour</strong>
      <p id='single-address-two'>Street #45 Sector G-11/3 Islamabad Pakistan</p></p>
    </div>
    <div className='page-name-right'>
      <img src='images/single/msg.svg'/>
    </div>
    </div>
    <div className='single-product-image-container'>
    <div className='single-product-image'>
      <img id='single-prod-pic' src='images/single/singburg.svg'/>
      <img id='single-heart' src='images/single/heart.svg'/>
      <img id='single-share' src='images/single/share.svg'/>
      <div id='single-prod-count'>1/3</div>
    </div>
    </div>
    <div className='single-product-pric'>Beef Burger <span>Rs. 999</span></div>
    <div className='single-delivery-charges'>
      <p>Delivery Charges: 400</p>
      <div className='single-delivery'>
                 <img id='cart-minus' src='images/cart/remove.svg'/>
                 <p>1</p>
                <img src='images/cart/add.svg'/>               
            </div>
    </div>
    <div className='single-product-detail'>
    <p id='single-prod-desc'>Juicy beef patty grilled to perfection, topped with melted cheddar cheese, fresh lettuce, ripe 
      tomatoes, pickles, and a dollop of our signature sauce.</p>
      <p id='single-product-time'> Preparation time: <span>30 minutes</span>
      <p>Delivery time: <span>30 minutes</span></p></p>      
     </div>
     <div className='single-product-ratings'>
      <div className='single-review'>
        <div className='single-review-left'>Rating & Reviews</div>
        <div className='single-review-right'><img src='images/single/start.svg'/>5.0(15)</div>
      </div>
      <div className='single-prod-review-card'>
        <div className='single-review-card'>
          <div className='review-card-left'>
            <p id='review-card-name'>Customer Name</p>
            <div id='review-stars'>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              </div>
              <p id='single-customer-review'>Just received my order, and it's fresh, delicious, and right on time
              </p>
          </div>
          <div className='review-card-right'>
            <p>11, Sep 2024</p>
            <img src='images/single/review.svg'/>
          </div>
        </div>
        <div className='single-review-card'>
          <div className='review-card-left'>
            <p id='review-card-name'>Customer Name</p>
            <div id='review-stars'>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              <img src='images/single/start.svg'/>
              </div>
              <p id='single-customer-review'>Just received my order, and it's fresh, delicious, and right on time
              </p>
          </div>
          <div className='review-card-right'>
            <p>11, Sep 2024</p>
            <img src='images/single/review.svg'/>
          </div>
        </div>
      </div>
     </div>
     <div className='single-product-bottom'>
      <button>Add to Cart</button>
      <button id='gbtn'onClick={checkout}>Order Now</button>
      </div>
     </div>
   

  )
}

export default SingleProduct
