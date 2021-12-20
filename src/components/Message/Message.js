import React from "react";
import './Message.css';

const Message = (props) => {
  return (
    <div className="message">
        { props.textToShow }
    </div>
  );
}

export default Message; 