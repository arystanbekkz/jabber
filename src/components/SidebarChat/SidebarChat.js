import { Avatar } from "@mui/material";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../../features/chat";
import { selectUser } from "../../features/users";
import db from "../../firebase/firebase";
import "./SidebarChat.css"

const SidebarChat = ({chatId, chatName, lastMessages, toggle}) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);
    const [lastMessage, setLastMessage] = useState({});
    const user = useSelector(selectUser);

    useEffect(() => {
        setLastMessage(lastMessages.filter(({id, data}) => id === chatId));
    }, [lastMessages])
    
    const handleClick = () => {
        dispatch(setChat({
            chatId: chatId,
            chatName: chatName
        }));
        toggle();
    }

    const date = lastMessage[0] ? new Date(lastMessage[0].data.timestamp.toDate()).toLocaleDateString() : '';
    const time = lastMessage[0] ? new Date(lastMessage[0].data.timestamp.toDate()).toLocaleTimeString() : '';
    const message = lastMessage[0] ? lastMessage[0].data.message : '';
    const lastMessageAuthor = lastMessage[0] ? lastMessage[0].data.displayName : '';

    const timestamp = lastMessage[0] ?
        (new Date().toLocaleDateString() === date ? time : date)
        : '';

    return (
        <div
            onClick={handleClick}
            className="sidebarChat"
        >
            <Avatar />
            <div className="sidebarChat__info">
                <div className="sidebarChat__info_header">
                    <h5>{chatName}</h5>
                    <small className="sidebarChat__timestamp">
                        {lastMessage[0] &&
                            timestamp
                        }
                    </small>
                </div>
                <p className="sidebarChat__info_message">
                    {lastMessage[0] && 
                        (lastMessage[0].data.displayName === user.displayName ? 
                            "You: " : lastMessageAuthor + ': ')
                        + message
                        }
                </p>
            </div>
        </div>
    )
}

export default SidebarChat;