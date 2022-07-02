import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./ChatWindowHeader.css";

const ChatWindowHeader = ({chatId, photoUrl, chatName}) => {

    return (
        <div className="chatWindow__header">
            { chatId ? (<Avatar 
                            src={photoUrl}
            />) : (<Avatar />)}
            <div className="chatWindow__header_info">
                <h4>{ chatId ? chatName : "Click on any chat"}</h4>
                <h5>JustNow</h5>
            </div>
            <IconButton title="More">
                <MoreVertIcon className="chatWindow__header_more
                "/>
            </IconButton>
        </div>
    )
}

export default ChatWindowHeader;