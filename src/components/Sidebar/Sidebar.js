import  { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import db from "../../firebase/firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore"; 

import { selectUser } from "../../features/users";

import SidebarUser from "../SidebarUser/SidebarUser";
import SidebarChat from "../SidebarChat/SidebarChat";

import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { IconButton } from "@mui/material";

import "./Sidebar.css";

const Sidebar = () => {

    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    function getChats() {
        onSnapshot(collection(db, 'chats'), (snapshot) => {
            setChats(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    }

    useEffect(() => {
        getChats();
    }, [])

    async function createChat() {
        let chatName = prompt("Enter a chat name");
        if (chatName.trim().length >= 1) {
            try {
                const doc = await addDoc(collection(db, 'chats'), {
                    chatName: chatName
                });
            } catch(error) {
                console.log("An error occured while creating chat...", error);
            }
            
        } else {
            alert("Chat was not created. Please try again...")
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__search_icon" />
                    <input placeholder="Search" className="search__input" />
                </div>
                <IconButton 
                    onClick={createChat}
                >
                    <BorderColorIcon />
                </IconButton>
                
            </div>
            
            <div className="sidebar__chats">
                <div className="sidebar__chats_header">
                    <h4>Chats</h4>
                </div>
                <div className="sidebar__chats_list">
                    {chats.map(({id, data:{chatName}}) => (
                        <SidebarChat 
                            key={id}
                            id={id}
                            chatName={chatName}
                        />
                    )
                    )}
                </div>
            </div>
            <SidebarUser user={user}/>
        </div>
    )
}

export default Sidebar;