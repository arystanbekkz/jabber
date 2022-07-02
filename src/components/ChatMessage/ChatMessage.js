import React from "react";
import "./ChatMessage.css";
import { Avatar } from "@mui/material";

const ChatMessage = ({data:{displayName, message, photo, timestamp}}) => {

    // const date = new Date(timestamp.toDate()).toDateString();
    // const time = new Date(timestamp.toDate());
    
    return (
        <div className="chatMessage">
            <Avatar
                src={photo} 
                className="chatMessage__avatar"
            />
            <div className="chatMessage__content">
                <h5 className="chatMessage__content_userName">
                    {displayName}
                </h5>
                <p className="chatMessage__content_text">{message}</p>
                <small className="chatMessage__content_timestamp">{}</small>
            </div>
            
        </div>
    )
}

export default ChatMessage;