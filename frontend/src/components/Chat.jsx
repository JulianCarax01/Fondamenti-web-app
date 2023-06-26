import TextContainer from "./TextContainer";
import SendMessage from "./SendMessage";
import {useEffect, useState} from "react";
import {socket} from "../socket";


export default function Chat({rightChat, otherUser, loggedUser}) {
    return (<div>
        <h1>{otherUser}</h1>
        <TextContainer rightChat={rightChat} loggedUser={loggedUser}></TextContainer>
        <SendMessage receiver={otherUser} sender={loggedUser} rightChat={rightChat}></SendMessage>
    </div>)
}
