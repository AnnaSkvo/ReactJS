import logo from "./logo.svg";
import "./App.css";
import { Button, ButtonClass } from "./components/Button/Button";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { AUTHORS } from "./utils/constants";


function App() {

  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN};
    handleAddMessage(newMessage);
  };
  
 useEffect(() => {
  let timeout;
  if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN){
    timeout = setTimeout(() => {
      handleAddMessage({
        text: "iambot",
        author: AUTHORS.BOT
      });
    }, 1500);
  } 
  
  return () => {
    clearTimeout(timeout);
  };
  
 },[messageList]);


  return (
    <>
    
    <div className="App">
    <Form onSubmit={handleSubmit} />
    <MessageList messages={messageList} />
    </div>
   </>
  );
}


export default App;