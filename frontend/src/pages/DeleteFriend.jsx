import React from "react"
import { useState } from "react"
import axios from "axios"
import { socket } from "../socket"

export default function DeleteFriend() {
    const [friendToDelete, setFriendToDelete] = useState('')

    const user = JSON.parse(localStorage.getItem('user'));
    const me_user = user._id;
    
    const handleDeleteFriend = (event) => {
        event.preventDefault()
        console.log('handleDeleteFriend function called');
        socket.emit('friend-delete', user, friendToDelete)
        console.log('Before axios.post request');
        axios.post('http://localhost:3000/api/users/deleteFriend', {  user: me_user, friend: friendToDelete })
      .then((response) => {
        console.log(response.data)
        alert("L'amico è stato eliminato!")
        setFriendToDelete('')
        
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("Utente non trovato");
        } 
        else if (error.response && error.response.status === 400) {
          alert("L'utente non è presente nella lista degli amici");
        } 
        else {
          console.error(error);
        }
      })
  };
  return(
        <div> 
            <h2> In questa pagina puoi eliminare un amico </h2>
            
            <form onSubmit={handleDeleteFriend}>
        <label> Elimina un amico </label>
        <input type="text" name="frienddelete" placeholder="Digita lo username dell'amico" value={friendToDelete} 
        onChange={(event) => {setFriendToDelete(event.target.value);  event.target.value=''}}   />
        <button type="submit">Elimina</button>
      </form>
 </div>
  );
}

