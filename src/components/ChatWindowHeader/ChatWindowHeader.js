import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./ChatWindowHeader.css";


const ChatWindowHeader = ({chatId, chatName, toggle}) => {

    return (
        <div className="chatWindow__header">
            <div className="back__arrow">
                <IconButton  
                    onClick={toggle}
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