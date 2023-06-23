import  io  from "socket.io-client";

const url="http://localhost:3000/"
export const socket = io(url);

socket.on('friend-add', (user, friendToAdd) => {
    console.log('Amico aggiunto correttamente')
  });

  socket.on('friend-delete', (user, friendToDelete) => {
    console.log('Amico eliminato correttamente');
  });
export default socket