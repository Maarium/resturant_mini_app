import React from 'react'
import './WelcomeForm.css'
const WelcomeForm = () => {
  return (
    <div className='welcome-form'>
      <img src='images/welform/cross.svg'/>
      <div className='welcome-snakia'>
        <div className='welcome-snakia-left'>
            <h1>Welcome to Snackia</h1>
            <p>Delicious food, Delivered fast.</p>
        </div>
        <div className='welcome-snakia-right'>
            <button id='signup'>Sign up</button>
            <button id='login'>Log in</button>
        </div>
      </div>
      
    </div>
  )
}

export default WelcomeForm
