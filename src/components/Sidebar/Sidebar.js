import Ract from "react";

import "./Sidebar.css";

import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SidebarChat from "../SidebarChat/SidebarChat";
import { Avatar, Icon, IconButton } from "@mui/material";
import { Forum, Phone, Settings } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import { selectUser } from "../../features/users";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";




const Sidebar = () => {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__search_icon" />
                    <input placeholder="Search" className="search__input" />
                </div>
                <IconButton>
                    <BorderColorIcon />
                </IconButton>
                
            </div>
            
            <div className="sidebar__chats">
                <div className="sidebar__chats_header">
                    <h4>Chats</h4>
                </div>
                <div className="sidebar__chats_list">
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                    <SidebarChat 
                        id = "1"
                        chatName = "FirstChat"
                    />
                </div>
            </div>
            <div className="sidebar__footer">
                <IconButton>
                    <Avatar 
                        className="sidebar__footer_avatar"
                        src={user.photo}
                    />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton onClick={() => auth.signOut()}>
                    <LogoutIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Sidebar;