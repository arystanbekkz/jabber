import  { useEffect, useState } from "react";

import db from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore"; 

import SidebarUser from "../SidebarUser/SidebarUser";
import SidebarChats from "../SidebarChatsList/SidebarChats";
import ChatCreate from "../SidebarChatCreate/ChatCreate";

import "./Sidebar.css";

const Sidebar = ({user, toggle}) => {
    const [chats, setChats] = useState([]);
    const [lastMessages, setLastMessages] = useState([]);

    function getChats() {
        onSnapshot(collection(db, 'chats'), (snapshot) => {
            setChats(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    }

    function getLastMessages() {
        onSnapshot(collection(db, 'lastMessages'), (snapshot) => {
            setLastMessages(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }

    useEffect(() => {
        getChats();
        getLastMessages();
    }, [])

    

    return (
        <div className="sidebar">
            <ChatCreate />           
            <SidebarChats user={user} chats={chats} lastMessages={lastMessages} toggle={toggle}/>
            <SidebarUser user={user}/>
        </div>
    )
}

export default Sidebar;