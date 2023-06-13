const loginFunction = require("../components/login/loginFunction")
const signupFunction = require("../components/signup/signupFunction")
const sendMessage = require("../components/sendMessage/sendMessageFunction")
const viewChat = require("../components/viewChat/viewChatFunction")
//Esportiamo la funzione asincrona LoginUser
module.exports = {
    loginUser: loginFunction,
    addUser: signupFunction,
    sendMessage: sendMessage,
    viewChat: viewChat
}

