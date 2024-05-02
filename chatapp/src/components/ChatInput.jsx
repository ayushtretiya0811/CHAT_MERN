import { IconButton } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
function ChatInput() {
  return (
<>

  <input type="text" placeholder="Type your message" className="input-box"/>
  <IconButton>
    <SendIcon />
  </IconButton>

</>
  )
}

export default ChatInput