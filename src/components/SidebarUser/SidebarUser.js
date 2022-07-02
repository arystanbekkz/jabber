import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

import { Avatar, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import "./SidebarUser.css"


const SidebarUser = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await auth.signOut();
        navigate("/");
    }

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
                onClick={handleLogout}
                title="Sign out"
                >
                <LogoutIcon />
            </IconButton>
        </div>
    )
}

export default SidebarUser;