import React from "react";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./WebChat.css"

const WebChat = () => {

    return (
        <div className="WebChat">
           <Sidebar />
            <ChatWindow />
        </div>
    )
}

export default WebChat;