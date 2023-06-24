const loginFunction = require("../components/login/loginFunction")
const signupFunction = require("../components/signup/signupFunction")
const sendMessage = require("../components/sendMessage/sendMessageFunction")
const showChat = require("../components/showChat/showChatFunction")
const addFriend = require("../components/friend/addFriend")
const deleteFriend = require("../components/friend/deleteFriend")
<<<<<<< HEAD
const findUser = require("../components/findUser/findUser")
=======
const viewFriends = require("../components/friend/viewFriends")
>>>>>>> 3c51bd8b404f9b0dcfa321d2444482c26f672fe0

//Esportiamo la funzione asincrona LoginUser
module.exports = {
    loginUser: loginFunction,
    addUser: signupFunction,
    sendMessage: sendMessage,
<<<<<<< HEAD
    showChat: showChat,
    addFriend: addFriend,
    deleteFriend: deleteFriend,
    findUser: findUser
=======
    viewChat: viewChat,
    showChat:showChat,
    addFriend:addFriend,
    deleteFriend: deleteFriend,
    viewFriends: viewFriends
>>>>>>> 3c51bd8b404f9b0dcfa321d2444482c26f672fe0
}

