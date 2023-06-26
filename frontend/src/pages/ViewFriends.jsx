import React, { useState, useEffect } from "react";
import axios from "axios";
import '../style/style_viewfriends.css';

export default function ViewFriends() {
  const [friendList, setFriendList] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const me_user = user._id


  useEffect(() => {
    axios.post("http://localhost:3000/api/users/viewFriends", { userId: me_user })
      .then(res => {
        if (res.data && res.data.friends) {
          setFriendList(res.data.friends);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert("Utente non trovato");
        } else {
          console.error(error);
        }
      });
  }, []);

  return (
    <div>
      <h2>In questa pagina puoi visualizzare i tuoi amici</h2>
      {friendList?.length === 0 ? (
        <>
          <p>Non sono presenti amici nella lista</p>
          <p>Se vuoi aggiungerli</p>
          <a href="http://localhost:3001/addFriend">
            <button>Aggiungi amico</button>
          </a>
        </>
      ) : (
        <ul className="friend-list">
          {friendList.map((friend) => (
            <li className="friend-list-item" key={friend._id}>
              {friend.username}
            </li>
          ))}
        </ul>
      )}
        <p> Per ritornare alla <a href="http://localhost:3001/homepage" style={{ color: "#6643b5" }}> Homepage </a> </p>

    </div>
  );
}




