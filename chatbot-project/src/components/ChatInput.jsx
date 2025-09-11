import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';
export function ChatInput({chatMessages,setChatMessages}){
            const [inputText,  setInputText ] = useState("");
        function saveInputText(event){
           setInputText(event.target.value);

        }
        
        async function sendMessage(){
          const newChatMessages = [
            ...chatMessages,
          {
            message : inputText,
            sender : "user",
            id : crypto.randomUUID()
          }

          ];
          setChatMessages(newChatMessages);

            setInputText('');

            const response =await Chatbot.getResponseAsync(inputText);
            
            setChatMessages([
            ...newChatMessages  ,
          {
            message : response,
            sender : "robot",
            id : crypto.randomUUID()
          }]);
            
        }
        function handleKeytDown(event){
          if (event.key === 'Enter'){
            sendMessage();
          } else if (event.key === "Escape"){
            setInputText('')
          }
        }

        return(
          <div className = "chat-input-container">
            <input 
              placeholder = "Send a message to ChatBot"
              size = "30" 
              onChange = {saveInputText}
              value= {inputText}
              onKeyDown = {handleKeytDown}
              className = "chat-input"
              />
              
            <button 
              className = "send-button"
              onClick = {sendMessage}
            >Send</button>
          </div>
        );
      
      }