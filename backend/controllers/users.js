const loginFunction = require("../components/login/loginFunction")
const signupFunction = require("../components/signup/signupFunction")
const sendMessage = require("../components/sendMessage/sendMessageFunction")
const viewChat = require("../components/viewChat/viewChatFunction")
const showChat = require("../components/showChat/showChatFunction")
const addFriend = require("../components/friend/addFriend")
const deleteFriend = require("../components/friend/deleteFriend")

//Esportiamo la funzione asincrona LoginUser
module.exports = {
    loginUser: loginFunction,
    addUser: signupFunction,
    sendMessage: sendMessage,
    viewChat: viewChat,
    showChat:showChat,
    addFriend:addFriend,
    deleteFriend: deleteFriend
}

