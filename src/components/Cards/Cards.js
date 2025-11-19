import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cards.css'
const Cards = () => {
  const navToSingleProduct = useNavigate()
  const single = () => {
    navToSingleProduct("/singleproduct")
  }
  return (
    <div className='home-card-section'>
      <div className='card-box' onClick={single}>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
      <div className='card-box'>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
    
     
      <div className='card-box'>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
      <div className='card-box'>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
    
    
      <div className='card-box'>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
      <div className='card-box'>
        <div className='card-image'>
        <img src='images/card/burger.svg'/>
        </div>
        <div className='card-content'>
            <p id='card-title'>Beef Burger </p>
            <p id='card-price'>Rs. 999</p>
            <div className='card-ratings'>
            <p><img src='images/card/star.svg'/>5.0</p>
            <p><img src='images/card/gl.svg'/>islamabad</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default Cards
