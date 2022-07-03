import { useState } from "react";

import { useSelector } from "react-redux";

import { selectUser } from "../../features/users";
import { selectChatId } from "../../features/chat";

import { sendMessage } from "../../fetchers/fetchers";

import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./ChatWindowInput.css"


const ChatWindowInput = () => {

    const [input, setInput] = useState("");
    const user = useSelector(selectUser);
    const chatId = useSelector(selectChatId);

    const handleInput = (e) => {
        e.preventDefault();
        if (user && input.trim().length > 0) {
            sendMessage(chatId, user, input);
        }
        setInput("");
    }

    return (
        <div className="chatWindow__messageInput">
            <form 
                className="chatWindow__messageInput_form"
                onSubmit={handleInput}
            >
                <input 
                    value={input}
                    onChange = {(e) => setInput(e.target.value)}
                    type={"text"}
                    placeholder="Enter a message..."
                />
                <IconButton 
                    className="chatWindow__messageInput_sendBtn"
                    type="submit"
                    title="Send Message"
                >
                    <SendIcon />
                </IconButton>
            </form>
        </div>
    )
}

export default ChatWindowInput;