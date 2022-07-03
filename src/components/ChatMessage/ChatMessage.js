import React, { useEffect, useRef } from "react";
import "./ChatMessage.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/users";

const ChatMessage = ({data:{displayName, message, photo, timestamp}}) => {
    const user = useSelector(selectUser);

    const date = new Date(timestamp.toDate()).toLocaleDateString();
    const time = new Date(timestamp.toDate()).toLocaleTimeString();

    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [message])

    return (
        <div className={`chatMessage ${displayName === user.displayName ? "myMessage" : ""}`}  ref={scrollRef}>
            <Avatar
                src={photo} 
                className="chatMessage__avatar"
            />
            <div className="chatMessage__content">
                <h5 className="chatMessage__content_userName">
                    {displayName}
                </h5>
                <p className="chatMessage__content_text">{message}</p>
                <small className="chatMessage__content_timestamp">{`${date} ${time}`}</small>
            </div>
            
        </div>
    )
}

export default ChatMessage;