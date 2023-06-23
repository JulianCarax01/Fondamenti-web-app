import React, {useEffect, useState} from "react";
import axios from "axios";
import ChatContainer from "./ChatsContainer";

export default function Sidebar() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [chats, setChats] = useState([])
    const loggedUser = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/showChat/` + `${loggedUser._id}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data
                } else {
                    throw new Error("Errore di comunicazione col server nell'ottenimento delle chat")
                }
            })
            .then((dati) => {
                setLoading(false);
                setChats(dati)
            })
            .catch((e) => {
                setError(true);
                setLoading(false);
                console.log(e)
            })
    }, [])

    return (<div>
            {loading ? <p>Caricamento in corso...</p> : error ? <p>Errore!!!Impossibile visualizzare le chat</p> : (<>
                    <ChatContainer chats={chats} loggedUserId={loggedUser._id}></ChatContainer></>)}
        </div>)

}