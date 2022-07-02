import { Avatar } from "@mui/material";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChat } from "../../features/chat";
import db from "../../firebase/firebase";
import "./SidebarChat.css"

const SidebarChat = ({id, chatName}) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    // useEffect(() => {
    //     const collRef = collection(db, "chats", `${id}`, "messages");
    //     const q = query(collRef, orderBy("timestamp", "desc"));
    //     onSnapshot(q, (snapshot) => {
    //         setChatInfo(snapshot.docs.map((doc) => doc.data()))
    //     })
    // }, [id])

    return (
        <div
            onClick={() => dispatch(setChat({
                chatId: id,
                chatName: chatName
            }))}
            className="sidebarChat"
        >
            <Avatar />
            <div className="sidebarChat__info">
                <div className="sidebarChat__info_header">
                    <h5>{chatName}</h5>
                    <small className="sidebarChat__timestamp">timestamp</small>
                </div>
                <p className="sidebarChat__info_message">
                    { }
                </p>
            </div>
        </div>
    )
}

export default SidebarChat;