// Test Change
import { useState } from 'react'
import {ChatMessages}  from './components/ChatMessages';
import { ChatInput } from './components/ChatInput'
import './App.css'


 


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
