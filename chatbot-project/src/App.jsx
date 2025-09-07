import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import './App.css'

function ChatInput({chatMessages,setChatMessages}){
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
      function ChatMessage({message,sender}){ //we can directly add props inside {here} also
        // const message = props.message; these are the way in which we can apply props
        // const sender =  props.sender;
        // const {message,sender} = props;

        // if (sender === 'robot'){
        //   return(
        //     <div>
        //       <img src = "robot.png" width = "50"/>
        //       {message}
        //     </div>
        //   );
        // }
        
        return (
          <div className={
            sender === "user" 
            ? "chat-message-user" 
            : "chat-message-robot"
           }>
            {sender === "robot" && 
            ( <img src = "src/assets/robot.png" 
            className = "chat-message-profile"/>)} 
            <div className = "chat-message-text">
            {message}
            </div>
            {sender === "user" && 
            (<img src= "  src/assets/user.png" alt = "image" 
            className = "chat-message-profile"/> )}
          </div>
        );}
      
      function ChatMessages({chatMessages}){  
        
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
   

function App(){

        const [chatMessages ,setChatMessages]  = useState([
            
          {
            message : "hello Chatbot" ,
            sender : "user",
            id: "id1"
          },{
            message : "Hello! how can i help you?" ,
              sender  : "robot",
              id: "id2"
          }
        ]);
        
        // const chatMessages = array[0];
        //const [chatMessages ,setChatMessages] = array; // array destucturing
        // const setChatMessages = array[1];
        
        
         return(

         <div className = "app-container">
           
            <ChatMessages
              chatMessages ={chatMessages}
            />
             <ChatInput
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}

            />

          </div>
        //   <>
            
        //     <ChatInput></ChatInput>
        //     <ChatMessage 
        //       message =  "hello Chatbot" 
        //       sender = "user" 
        //     />
        //     <ChatMessage 
        //       message = "Hello! how can i help you?" 
        //       sender = "robot"
        //     />
        //     <ChatMessage 
        //       message = "can you get me todays date ?"
        //       sender = "user"
        //     />
        //     <ChatMessage 
        //       message = "Todays date is september 27" 
        //       sender = "robot"
        //     />
            
          
        //   </>
         );
      }
export default App
