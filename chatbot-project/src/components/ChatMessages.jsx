import { useRef } from 'react'
import { useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({chatMessages}){  
    
  const chatMessagsRef =useRef(null);
  
    useEffect(() =>{
    const containerElem = chatMessagsRef.current;
    if (containerElem){
      containerElem.scrollTop  = containerElem.scrollHeight;  
    }
    
  },[chatMessages]);   


  const chatMessageComponents = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message = {chatMessage.message}
        sender = {chatMessage.sender}
        key = {chatMessage.id}
      />

    );
  });


    return(
      <div className = "chat-message-container"
      ref  = {chatMessagsRef}>
      
      {chatMessageComponents}
      </div>
    )


  }

 