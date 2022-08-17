import React from 'react'
import { ChatContainer } from './Chat.styled'

function Chat() {
  return (
    <ChatContainer>
        <div className='chatContent'>
            <div className='chatting'>
                user
            </div>
            <div className='group'>
            <div className='card full-height'>
              hello
            </div>
            </div>
        </div>
    </ChatContainer>
  )
}

export default Chat