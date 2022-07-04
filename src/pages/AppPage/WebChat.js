import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import Sidebar from "../../components/Sidebar/Sidebar";
import { selectUser } from "../../features/users";
import useMatchMedia from "../../hooks/useMatchMedia";

import "./WebChat.css"

const WebChat = () => {

    const {isMobile} = useMatchMedia();
    const [hideChat, setHideChat] = useState(isMobile);
    const toggle = useCallback(() => {
        setHideChat(!hideChat); 
    })
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    
    useEffect(() => {
        !user && navigate('/login');
    }, [])
    
    return (
        <div className="WebChat">
            <Sidebar user={user} toggle={toggle} />
            <ChatWindow isMobile={isMobile} hideChat={hideChat} toggle={toggle} />
        </div>
    )
}

export default WebChat;