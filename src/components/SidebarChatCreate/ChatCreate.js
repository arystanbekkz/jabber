import { useState } from "react";

import { IconButton } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { addDoc, collection } from "firebase/firestore";
import db from "../../firebase/firebase";

import "./ChatCreate.css";

const ChatCreate = () => {

    const [chatName, setChatName] = useState('');

    async function createChat(e) {
        e.preventDefault();
        if (chatName.trim().length >= 1) {
            try {
                const doc = await addDoc(collection(db, 'chats'), {
                    chatName: chatName
                });
            } catch(error) {
                console.log("An error occured while creating chat...", error);
            }
            setChatName('');
            
        } else {
            alert("Chat was not created. Please try again...")
        }
    }

    return (
        <form 
            className="sidebar__chatCreate"
            onSubmit={createChat}    
        >
            <div className="sidebar__chatName">
                <input 
                    value={chatName}
                    onChange={(e) => setChatName(e.target.value)}
                    placeholder="Enter chat name" 
                    className="createChat__input" 
                />
            </div>
            <IconButton 
                type="submit"
                title="Create new chat"
            >
                <BorderColorIcon />
            </IconButton>
        </form>
    )
}

export default ChatCreate;