import React from 'react'
import './AccountInfo.css'
const AccountInfo = () => {
  return (
    <div className='account-page'>
            <div className='page-name'><img src='images/settings/back.svg'/>Account Information</div>
            <div className='account-form'>
                <label>Name</label>
                <input type='text' name='name'/>
                <label>Password</label>
                <input type='password' name='password'/>
                <label>Email</label>
                <input type='email' name='email'/>
                <label>Phone Number</label>
                <input type='number' name='numbern'/>
            </div>

    </div>
  )
}

export default AccountInfo
