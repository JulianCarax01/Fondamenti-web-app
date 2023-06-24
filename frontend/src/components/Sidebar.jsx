import React from "react";
import ChatContainer from "./ChatsContainer";

export default function Sidebar({chats, loggedUser, loading, error}) {


    return (
        <>
            <div>
                {loading ? <p>Caricamento in corso...</p> : error ?
                    <p>Errore!!!Impossibile visualizzare le chat</p> : (<>
                        <ChatContainer chats={chats} loggedUserId={loggedUser._id}></ChatContainer></>)}
            </div>

        </>


    )

}