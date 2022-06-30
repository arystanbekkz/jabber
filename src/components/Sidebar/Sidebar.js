import Ract from "react";

import "./Sidebar.css";

import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SidebarChat from "../SidebarChat/SidebarChat";
import { Avatar, Icon, IconButton } from "@mui/material";
import { Forum, Phone, Settings } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';




const Sidebar = () => {
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
                    <Avatar className="sidebar__footer_avatar"/>
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
                <IconButton>
                    <LogoutIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default Sidebar;