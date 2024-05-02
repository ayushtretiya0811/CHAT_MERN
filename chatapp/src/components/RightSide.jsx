
import React from 'react'
import ChatHeader from './ChatHeader';
import ChatMain from './ChatMain';
import ChatInput from './ChatInput';

function RightSide() {
  return (
    <>
    <div className="right-container">
            <ChatHeader/>
       
        <div className="main-chats">
            <ChatMain/>
        </div>
        <div className="chat-input">
            <ChatInput/>
        </div>
    </div>
    </>
  )
}

export default RightSide