import React, {useState,useEffect} from 'react';
import Card from '../components/Card';
import { FaList, FaRegEdit, FaUsers, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import axios from 'axios';

export default function Homepage() {
    const username = localStorage.getItem('username');
    const [gender, setGender] = useState('');

    useEffect(() => {
        // Effettua una richiesta al server per ottenere i dati dell'utente, compreso il campo del sesso
        axios.get('http://localhost:3000/api/users/' + username)
            .then((response) => {
                const userData = response.data;
                setGender(userData.gender);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [username]);

    return (
        <>
            <h2>
                Benvenut{gender === "male" ? "o" : (gender === "female" ? "a" : "*")} {username}
            </h2>
            <p>Scegli cosa vuoi fare</p>
            <div className="justify-content-center">
                <Card icon={FaList} name="Visualizza le mie chat" link="/" />
                <Card icon={FaUsers} name="Visualizza i miei amici" link="/" />
                <Card icon={FaRegEdit} name="Scrivi un messaggio" link="/sendMessage" />
                <Card icon={FaUserPlus} name="Aggiungi un amico" link="/" />
                <Card icon={FaUserMinus} name="Elimina un amico" link="/" />
            </div>
        </>
    );
}
