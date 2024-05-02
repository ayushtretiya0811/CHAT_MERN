import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
function ChatHeader() {
  return (
    <>
     <div className="right-container-top">
           <div className='chat-avatar'>
           <IconButton style={{padding:"0px"}}>
              <AccountCircle />
            </IconButton>
           </div>
           <div className="chat-name">
            ayush
           </div>
           <div className="chat-status">
            online
           </div>
           <div className="chat-delete">
            <IconButton>
                <DeleteIcon/>
            </IconButton>
           </div>
        </div>
    </>
  )
}

export default ChatHeader