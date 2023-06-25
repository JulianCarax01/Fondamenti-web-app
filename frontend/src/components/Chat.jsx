import TextContainer from "./TextContainer";
import SendMessage from "./SendMessage";

export default function Chat({rightChat, otherUser, loggedUser}) {
    return (<>
        <h1>{otherUser}</h1>
        <TextContainer rightChat={rightChat} loggedUser={loggedUser}></TextContainer>
        <SendMessage receiver={otherUser} sender={loggedUser} rightChat={rightChat}></SendMessage>
    </>)
}
