import { auth } from "../../firebase/firebase";

import { Avatar, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import "./SidebarUser.css"


const SidebarUser = ({user}) => {

    return (
        <div className="sidebar__footer">
            <Avatar 
                className="sidebar__footer_avatar"
                src={user.photo}
            />
            <div className="userName__wrapper">
                <span className="userName">{user.displayName}</span>
            </div>
            <IconButton 
                onClick={() => auth.signOut()}
                title="Sign out"
                >
                <LogoutIcon />
            </IconButton>
        </div>
    )
}

export default SidebarUser;