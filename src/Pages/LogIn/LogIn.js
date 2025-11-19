import React from 'react'
import './LogIn.css'
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm'
const LogIn = () => {
  return (
    <div className='login-form'>
      <WelcomeForm/>
      
      <div className='snakia-form'>       
        <label>Email Address</label>
        <input type='text' name='name' placeholder='email@gmail.com'/>
        <label>Password</label>
        <div className='password-field'>
          <img src='images/welform/eye.svg'/>
        <input type='password' name='password' placeholder='********'/>
        </div>
        <div className='login-rem'>
            <div className='login-rem-left'>
            <input type='checkbox' id='checkbx'/>
            <p>Remember me</p>
            </div>
            <a>Forget Password ?</a>
        </div>
        <button id='form-bottom-btn'>Sign in</button>
      </div>
      </div>
  )
}

export default LogIn
