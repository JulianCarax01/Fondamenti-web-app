import Chat from "./Chat";

export default function ChatContainer({chats,loggedUserId}) {
    return (
        chats.map((chat) => <Chat chat={chat} key={chat._id} loggedUserId={loggedUserId}></Chat>)
    )
}