import {useEffect, useState} from "react";

export default function Message({message, loggedUser}) {
    const [color, setColor]=useState(``)

    useEffect(() => {
        loggedUser._id === message.sender[0] ? setColor(`red`):setColor(`green`)
    }, [])


    return (

        <p style={{color:color}}>{message.text}</p>


    )
}

