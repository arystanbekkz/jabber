import ChatMessage from "../ChatMessage/ChatMessage";
import  "./ChatWindowMessages.css"

const ChatWindowMessages = ({messages}) => {
    return (
        <div className="chatWindow__messagesList">
            {messages && messages.map(({id, data}) => (
                <ChatMessage
                    key={id}
                    id={id}
                    data={data}
                />
            ))}
        </div>
    )
}

export default ChatWindowMessages;