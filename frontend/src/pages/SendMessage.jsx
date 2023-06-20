import React, {useState} from "react";
import axios from 'axios';


export default function sendMessage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/api/users/sendMessage`, {})
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
        <h2>Invia il tuo messaggio</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label id="username">Inserisci qui l'username dell'utente a cui vuoi inviare il messaggio</label>
                <input type="text" id="username" name="username" placeholder="Username..."/></div>

            <div>
                <label id="messaggio">Inserisci qui il messaggio che vuoi inviare</label>
                <input type="text" id="messaggio" name="messaggio" placeholder="Inserisci qui il tuo messaggio..."/>
            </div>

            <div>
                <button type="button" id="sendMessage">Ivia</button>
            </div>


        </form>
    </>)

}