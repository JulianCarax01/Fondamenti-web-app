//import {useEffect} from "react";

export default function Chat({chat, loggedUserId}) {
    return(
        <>
            {chat.utente1===loggedUserId?<h2>{chat.utente2}</h2>:<h2>{chat.utente1}</h2>}
        </>
    )

}
