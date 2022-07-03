import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./ChatWindowHeader.css";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebase";

const ChatWindowHeader = ({chatId, chatName}) => {

    return (
        <div className="chatWindow__header">
            <div className="back__arrow">
                <IconButton  
                >
                    <ArrowBackIcon />
                </IconButton>
            </div>
            { chatId ? (<Avatar 
                            
            />) : (<Avatar />)}
            <div className="chatWindow__header_info">
                <h4>{ chatId ? chatName : "Click on any chat"}</h4>
            </div>
            <IconButton title="More">
                <MoreVertIcon className="chatWindow__header_more
                "/>
            </IconButton>
        </div>
    )
}

export default ChatWindowHeader;