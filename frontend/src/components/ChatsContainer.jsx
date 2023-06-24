import Chat from "./Chat";

export default function ChatContainer({chats, loggedUserId}) {
    return (
        chats.map((chat) => {
            let ot;
            chat.utente1 === loggedUserId ? (ot = chat.utente2) : (ot = chat.utente2)
            return <Chat chat={chat} key={chat._id} otherId={ot}></Chat>
        })
    )
}