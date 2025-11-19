import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Support.css'
const Support = () => {
  const navToChat = useNavigate()
  const chatting = () => {
    navToChat("/chat")
  }
  return (
    <div className='customer-support-page'>
      <div className='page-name'><img src='images/support/back.svg'/>Customer Support</div>
      <div className='support-card-container'>
        <div className='support-card' onClick={chatting}>
            <img src='images/support/msg.svg'/>
            <div className='support-card-descrition'>
                <div className='support-title'>
                    <p id='support-card-title'>Chat with us</p>
                    <img src='images/support/forward.svg'/>
                </div>             
            <p>Snackia Virtual Assistant 24/7</p>
            <p>Live chat: 10AM to 6PM (Mon-Sun)</p>
                    
                
            </div>
        </div>
        <div className='support-card'>
            <img src='images/support/phone.svg'/>
            <div className='support-card-descrition'>
                <div className='support-title'>
                    <p id='support-card-title'>Call us</p>
                </div>             
            <p>000-0000000</p>
            <p>10AM to 6PM (Mon-Sun)</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
