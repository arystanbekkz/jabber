import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./ChatWindow.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatWindow = () => {

    return (
        <div className="chatWindow">
            <div className="chatWindow__header">
                <div className="chatWindow__header_avatar">
                    <Avatar />
                </div>
                <div className="chatWindow__header_info">
                    <h4>ChatName</h4>
                    <h5>JustNow</h5>
                </div>
                <IconButton>
                    <MoreVertIcon className="chatWindow__header_more
                    "/>
                </IconButton>
            </div>
            <div className="chatWindow__messagesList">
                <ChatMessage />
            </div>
            <div className="chatWindow__messageInput">
                <form className="chatWindow__messageInput_form">
                    <input 
                        type={"text"}
                        placeholder="Enter a message..."
                    />
                    <IconButton className="chatWindow__messageInput_sendBtn">
                        <SendIcon />
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default ChatWindow;