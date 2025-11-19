import React from 'react'
import './SignUp.css'
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm'
const SignUp = () => {
  return (
    <>  
       
    <div className='sign-up-form'> 
      <WelcomeForm/>
      <div className='snakia-form'>       
        <label>Name</label>
        <input type='text' name='name' placeholder='name here'/>
        <label>Email Address</label>
        <input type='text' name='name' placeholder='email@gmail.com'/>
        <label>Password</label>
        <div className='password-field'>
          <img src='images/welform/eye.svg'/>
        <input type='password' name='password' placeholder='********'/>
        </div>
        <button id='form-bottom-btn'>Sign in</button>
      </div>
      </div>
    
    </>
  )
}

export default SignUp
