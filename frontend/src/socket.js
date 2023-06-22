import  io  from "socket.io-client";

const url="http://localhost:3000/"
export const socket = io(url);

socket.on('friend-add', (user, friendToAdd) => {
    console.log('Amico aggiunto correttamente')
  });

export default socket