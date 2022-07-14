import "./chat.css";
import {Avatar} from '@mui/material';
import { AttachFile,MoreVert, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import {IconButton} from "@mui/material"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';


function Chat ({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e)  =>{
    e.preventDefault();
    await axios.post("/messages/new",{
      
    "message": input,
    "name" :"lakshya",
    "timestamp": "just now!",
    "received": false,
    });
    setInput("");
  };
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/268185611_362287402311215_6699705069321866364_n.jpg?ccb=11-4&oh=01_AVxYOV-TTrLfECrsKHBvo2u8TwJgNmiVhZiD2hkB-mVHVA&oe=62DC3452"/>
          <div className="chat_headerinfo">
            <h3>laksh</h3>
            <p>last seen at ...</p>
            </div>
            <div className="chatheader_right">
              <IconButton aria-label='SearchOutlined'>
                <SearchOutlined/>
              </IconButton  >
              <IconButton aria-label='AttachFile'>
                <AttachFile/>
              </IconButton>
              <IconButton aria-label ='MoreVert'>
                <MoreVert/>
              </IconButton>

            </div>
        
      </div>
      <div className="chat_body">
        {messages.map((message) => (
            <p className={`chat_message ${message.received && 'chat_receiver'}`}
            > 
              <span className="chat_name">{message.name}</span>
              {message.message}
              <span className="chat_timestamp">{message.timestamp}</span>
            </p>
        ))}
        </div>
      <div className="chat_footer">
         
         <IconButton aria-label="InsertEmoticonIcon">
           <InsertEmoticonIcon/>
         </IconButton>
         
           <form >
             <input value ={input} onChange={ e => setInput(e.target.value)} type="text" placeholder="enter the message" />
             <button onclick={sendMessage} type="submit" >send</button>
             </form>
         
         <IconButton aria-label="MicIcon ">
           <MicIcon />
         </IconButton>
         
      </div>
    </div>
  )
}
export default Chat;
