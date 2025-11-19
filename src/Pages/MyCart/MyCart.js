import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyCart.css'
const MyCart = () => {
  const [cont, setCont] = useState(2)
  const [count, setCount] = useState(2)
  const navtoCheckingOut =useNavigate()
  const chekout = () => {
    (navtoCheckingOut("/checkout"))
  }
  return (
    <div className='cart-page'> 
      <div className='page-name'><img src='images/cart/back.svg'/>
      <span><img src='images/cart/bag.svg'/>My Cart</span>
      </div>
      <div className='searchbar'> 
       <div className='search-input'>
        <img src='images/search/glass.svg'/>
        <input type='search' placeholder='Search'/>
      </div>
      </div>
    <div className='cart-cards-container'>
        <div className='cart-card'>
            <img id='ellipse' src='images/cart/lighttick.svg'/> 
            <div className='cart-card-title'>
            <p id='cart-card-title'>Restaurant: <span>Savour</span></p>
            <img src='images/cart/cross.svg'/>
            </div>
            <div className='cart-card-content'>
                <img src='images/cart/burg.svg'/>
                <div className='cart-card-content-text'>
                <p id='cart-card-prod'>Beef Burger </p>
                <p id='cart-card-price'>Rs. {cont*500-1}</p>
                </div>
            </div>
            <div className='cart-card-quantity'>
                 <img id='cart-minus' src='images/cart/remove.svg' onClick={()=>setCont(cont-1)}/>
                <p>{cont}</p>
                <img src='images/cart/add.svg' onClick={()=>setCont(cont+1)}/>
            </div>
        </div>
        <div className='cart-card'>
            <img id='ellipse' src='images/cart/lighttick.svg'/> 
            <div className='cart-card-title'>
            <p id='cart-card-title'>Restaurant: <span>Savour</span></p>
            <img src='images/cart/cross.svg'/>
            </div>
            <div className='cart-card-content'>
                <img src='images/cart/burg.svg'/>
                <div className='cart-card-content-text'>
                <p id='cart-card-prod'>Beef Burger </p>
                <p id='cart-card-price'>Rs. {count*500-1}</p>
                </div>
            </div>
            <div className='cart-card-quantity'>
                 <img id='cart-minus' src='images/cart/remove.svg' onClick={()=>setCount(count-1)}/>
                 <p>{count}</p>
                <img src='images/cart/add.svg' onClick={()=>setCount(count+1)}/>               
            </div>
        </div>
    </div>
    <div className='cart-bottom-container'>
      <p>Subtotal:<span>Rs {(count*500-1)+(cont*500-1)}</span> </p>
      <button onClick={chekout}>Check Out</button>
    </div>
    </div>
  )
}

export default MyCart
