import {useEffect, useState} from "react";

export default function ChatRoom({chats}) {
    const initialUrl = window.location.href;
    const url = initialUrl.slice(42)
    const [Chats, setChats] = useState([])
    const [Chat, setChat] = useState(Object)

    useEffect(() => {
        setChats(chats)
        const selectedChat = Chats.find((chat) => {
           return chat._id === url
        })
        setChat(selectedChat)
    },[])


    return (
        <>
            <p>{url}</p>
        </>
    )
}