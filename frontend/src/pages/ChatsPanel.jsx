import Sidebar from "../components/Sidebar"
import '../style/Sidebar.css'
import {Route, Routes} from "react-router-dom";

import ChatRoom from "./ChatRoom";
import {useEffect, useState} from "react";
import axios from "axios";
import Chat from "../components/Chat";



export default function () {

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

    return (<>
            <Sidebar classname="sidebar" chats={chats} loggedUser={loggedUser} loading={loading}
                     error={error}></Sidebar>
            <Routes>
                <Route path="/ChatRoom/:ChatId" element={<ChatRoom chats={chats}/>} ></Route>
            </Routes>
        </>


    )
}
