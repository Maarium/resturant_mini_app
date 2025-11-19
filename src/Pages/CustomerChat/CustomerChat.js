import React from 'react'
import './CustomerChat.css'
const CustomerChat = () => {
  return (
    <div className='chat-page'>
      <div className='page-name'><img src='images/chat/back.svg'/>Snackia Virtual Assistant</div>
    <div className='chat-main'> 
         <div className='chat-container'>
      <img src='images/chat/cirsmile.svg'/>  
      <div className='chat-text'>
        <p>Hi User! I am your virtual Assistant. Please ask a question.</p>
      </div>
      </div>
<div className='chat-container'>
      <img src='images/chat/cirsmile.svg'/>  
      <div className='chat-text'>
        <p>Hi User! I am your virtual Assistant. Please ask a question.</p>
      </div>
      </div>
      <div className='chat-container'>
      <img src='images/chat/cirsmile.svg'/>  
      <div className='chat-text'>
        <p>Hi User! I am your virtual Assistant. Please ask a question.</p>
      </div>
      </div>
      <div className='chat-container'>
      <img src='images/chat/cirsmile.svg'/>  
      <div className='chat-text'>
        <p>Hi User! I am your virtual Assistant. Please ask a question.</p>
      </div>
      </div>
    </div>
    <div className='chat-bottom'>
    <div className='chat-type-input'>
      <input type='text' name='message' placeholder='Type a message'/>
      <img src='images/chat/attachment.svg'/>
      </div>
    </div>
    </div>
  )
}

export default CustomerChat
