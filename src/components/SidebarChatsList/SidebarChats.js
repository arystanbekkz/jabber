import SidebarChat from "../SidebarChat/SidebarChat";
import "./SidebarChats.css"

const SidebarChats = ({user, chats, lastMessages}) => {

    return (
        <div className="sidebar__chats">
            <div className="sidebar__chats_header">
                <h4>Chats</h4>
            </div>
            <div className="sidebar__chats_list">
                {user && chats.map(({id, data:{chatName}}) => (
                    <SidebarChat 
                        key={id}
                        chatId={id}
                        chatName={chatName}
                        lastMessages={lastMessages}
                    />
                )
                )}
            </div>
        </div>
    )
}

export default SidebarChats;