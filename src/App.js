//import logo from "./logo.svg";
import "./App.css";
//import { Button, ButtonClass } from "./components/Button/Button";
import React, {useState} from "react";
import Message from "./components/Message/Message";

function App() {
  const [inputText, setInputText] = useState('');

    return (
        <div className="app">
            <input className="input" value={inputText} onChange={e => setInputText(e.target.value)} />
            <Message textToShow={inputText}/>
        </div>
    );
}

export default App;