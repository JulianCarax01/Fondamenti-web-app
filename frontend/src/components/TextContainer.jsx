import Message from "./Message";
import {useEffect, useRef, useState} from "react";
import {socket} from "../socket";

export default function TextContainer({rightChat, loggedUser, message}) {

    const ref = useRef(null)
    const scroll = () => {
        const lastChild = ref.current?.lastElementChild;
        lastChild?.scrollIntoView()
    }

    useEffect(() => {
        socket.on("message", (message) => {
            let newMex = <Message key={message._id}
                                  message={message}
                                  loggedUser={loggedUser}></Message>
            let p = document.createElement("p")
            let color;
            loggedUser._id === message.sender[0] ? color = `green` : color = `red`
            p.innerHTML = message.text;
            p.style.color = color;
            ref.current.append(p)
            scroll()
        })
        scroll()
    }, []);

    return (<div ref={ref}>
            {rightChat.messages.map((message) => {
                return <Message key={message._id}
                                message={message}
                                loggedUser={loggedUser}></Message>
            })}
        </div>


    )
}

