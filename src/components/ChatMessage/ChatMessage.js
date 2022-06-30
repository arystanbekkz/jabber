import React from "react";
import "./ChatMessage.css";
import { Avatar } from "@mui/material";

const ChatMessage = () => {

    return (
        <div className="chatMessage">
            <Avatar className="chatMessage__avatar"/>
            <div className="chatMessage__content">
                <h5 className="chatMessage__content_userName">
                    Arystanbek
                </h5>
                <p className="chatMessage__content_text">hello, world! lorem ipsum dot color from the my heart to everyone of you</p>
                <small className="chatMessage__content_timestamp">timestamp</small>
            </div>
            
        </div>
    )
}

export default ChatMessage;