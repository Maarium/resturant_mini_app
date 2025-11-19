import React from 'react'
import './ForgetPassword.css'
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm'
const ForgetPassword = () => {
  return (
    <div className='forget-form'>
      <WelcomeForm/>
      <div className='snakia-form'>       
        <label>Email Address</label>
        <input type='text' name='name' placeholder='email@gmail.com'/>
        <button id='form-bottom-btn'>Sign in</button>
      </div>
    </div>
  )
}

export default ForgetPassword
