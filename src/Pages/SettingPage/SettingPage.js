import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SettingPage.css'
const SettingPage = () => {
const navToAccountInformation = useNavigate()
const AccInfo = () => {
  navToAccountInformation("/accountinfo")
}
  return (
    <div className='setting-page'>
      <div className='page-name'><img src='images/settings/back.svg'/>Settings</div>
      <div className='setting-options'>
        <div className='set-option' onClick={AccInfo}>Account Information</div>
        <div className='set-option'>Logout</div>
      </div>
    </div>
  )
}

export default SettingPage
