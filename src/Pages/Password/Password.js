import React from 'react'
import './Password.css'
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm'
const Password = () => {
  return (
    <div className='password-page'>
      <WelcomeForm/>
      <div className='snakia-form'>
        <label>Password</label>
        <input type='password' placeholder='********'/>
        <label>Confirm Password</label>
        <input type='password' placeholder='********'/>
      </div>
    </div>
  )
}

export default Password
