import Card from '../components/Card';
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
                <Card icon={"👓"} name="Visualizza le mie chat" link="/ChatsPanel" />
                <Card icon={"👭"} name="Visualizza i miei amici" link="/" />
                <Card icon={"📄"} name="Invia un messaggio" link="/sendmessage" />
                <Card icon={"🙋"} name="Aggiungi un amico" link="/" />
                <Card icon={"🙅"} name="Elimina un amico" link="/" />
            </div>
        </>
    );
}
