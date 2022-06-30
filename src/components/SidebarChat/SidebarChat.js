import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css"

const SidebarChat = ({id, chatName}) => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <div className="sidebarChat__info_header">
                    <h5>chatName</h5>
                    <small className="sidebarChat__timestamp">timestamp</small>
                </div>
                <p className="sidebarChat__info_message">message1 message2 message3 message4 message</p>
            </div>
        </div>
    )
}

export default SidebarChat;