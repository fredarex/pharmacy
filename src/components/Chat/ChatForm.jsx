import React from 'react'
import { useState } from 'react'


const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};
function ChatForm() {
    const [message, setMessage] = useState('');
    const disableButton = isMessageEmpty(message);
    const handleMessage = (e) => {
        e.preventDefault();
        if (!isMessageEmpty(message)) {
             setMessage('');
        }
    }
  return (
    <div className='chat_form'>
        <form onSubmit={handleMessage}>
            <input type='text' value={message} onChange={(e) => e.target.value} />
            <button disabled={disableButton} type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ChatForm