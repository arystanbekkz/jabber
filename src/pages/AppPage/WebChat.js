import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Sidebar from "../../components/Sidebar/Sidebar";
import { selectUser } from "../../features/users";

import "./WebChat.css"

const WebChat = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    
    useEffect(() => {
        !user && navigate('/login');
    }, [])
    
    return (
        <div className="WebChat">
            <Sidebar user={user}/>
            <ChatWindow />
        </div>
    )
}

export default WebChat;