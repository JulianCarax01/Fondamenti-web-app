import Message from "./Message";
import {useEffect, useRef, useState} from "react";

export default function TextContainer({rightChat, loggedUser}) {const ref=useRef(null)
    const scroll=()=>{
        const lastChild=ref.current?.lastElementChild;
        lastChild?.scrollIntoView()
    }
    useEffect(() => {
        scroll()
    }, []);

    return (<div ref={ref}>
            {rightChat.messages.map((message) => {
                return <Message key={message._id}
                                message={message}
                                loggedUser={loggedUser}></Message>
            })}
        </div>

    )}



/*


* */