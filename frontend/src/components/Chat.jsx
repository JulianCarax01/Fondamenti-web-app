import {useEffect, useState} from "react";
import axios from "axios";
import ChatButton from "./ChatButton";

export default function Chat({chat, otherId}) {

    const [username, setUsername] = useState(``)
    const [url, setUrl]=useState(``)

    useEffect(() => {
        axios.get("http://localhost:3000/api/users/findUser/" + otherId)
            .then((res) => {
                if (res.status === 200) {
                    return res.data
                } else {
                    throw new Error("Errore di comunicazione col server nell'ottenimento delle chat")
                }
            })
            .then((dati) => {
                setUsername(dati)
                setUrl(`/ChatsPanel/ChatRoom/${chat._id}`)
            })
            .catch((e) => {
                console.log(e)
            })


    }, [])


    return (<>
        <ChatButton description={username} url={url}  ></ChatButton>
    </>)

}
