import Card from '../components/Card';
import { FaList, FaRegEdit, FaUsers, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import '../style/style_homepage.css'

export default function Homepage() {
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user.username;
    const gender = user.gender;


    return (
        <>
            <h2>
                Benvenut{gender === "male" ? "o" : (gender === "female" ? "a" : "*")} <div className={'username'}>{username}</div>
            </h2>
            <p>Scegli cosa vuoi fare 🧑‍💻</p>
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
