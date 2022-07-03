import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../../features/chat";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { selectUser } from "../../features/users";
import db from "../../firebase/firebase";

import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader";
import ChatWindowInput from "../ChatWindowInput/ChatWindowInput";
import ChatWindowMessages from "../ChatWindowMessages/ChatWindowMessages";

import "./ChatWindow.css";


const ChatWindow = () => {

    const user = useSelector(selectUser);

    
    const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);

    useEffect(() => {
        if(chatId) {
            const collRef = collection(db, 'chats', `${chatId}`, 'messages');
            const q = query(collRef, orderBy("timestamp", "asc"));
            onSnapshot(q, (snapshot) => {
                setMessages(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })));
            })
        }
    }, [chatId])

    return (
        <div className="chatWindow">
            <ChatWindowHeader 
                chatId={chatId} 
                chatName={chatName}
            /> 

            <ChatWindowMessages 
                messages={messages}
            />
            <ChatWindowInput />
        </div>
    )
}

export default ChatWindow;