import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BottomNav.css'
const BottomNav = () => {
  const navigation = useNavigate()
  const favs = () => {
    navigation("/favourite")
  }
  const navto = useNavigate()
  const notify = () => {
 navto("/notification")
  }
  const navToAcc = useNavigate()
  const acc = () => {
    navToAcc("/profile")
  }
  return (
    <div className='bottom-nav'>
      <img id='home' src='images/bottomnav/home.svg'/>
      <img src='images/bottomnav/heart.svg' onClick={favs}/>
      <img src='images/bottomnav/bell.svg' onClick={notify}/>
      <img src='images/bottomnav/account.svg' onClick={acc}/>
    </div>
   
  )
}

export default BottomNav
