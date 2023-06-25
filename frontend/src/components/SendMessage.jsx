import React, {useState} from "react";
import axios from 'axios';
import {socket} from "../socket";
import '../style/style_sendmessage.css'
import Message from "./Message";


export default function SendMessage({receiver, sender, rightChat}) {

    const [text, setText] = useState('')
    const [newMex, setNewMex]=useState(Object)
    socket.on("message",()=>{
        //console.log(newMex)
        rightChat.messages.push(newMex)
        //console.log(rightChat.messages)
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", text)
        axios.post(`http://localhost:3000/api/users/sendMessage`, {text, receiver, sender})
            .then((res) => {
                setNewMex(res.data)
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    const {error: errorMessage} = error.response.data;
                    alert(errorMessage);
                } else {
                    console.error(error);
                    alert('Errore del server');
                }
            });

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" id="messaggio" name="messaggio" placeholder="Inserisci qui il tuo messaggio..."
                       value={text}
                       onChange={(e) => {
                           setText(e.target.value);
                           e.target.value = ' '
                       }}/>
                <button type="submit" id="sendMessage">{"📨"}</button>
            </div>


        </form>
    </>)

}