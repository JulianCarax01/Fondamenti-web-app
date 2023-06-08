const loginFunction = require("../components/login/loginFunction")
const signupFunction = require("../components/login/signupFunction")
//Esportiamo la funzione asincrona LoginUser
module.exports = {
    loginUser: loginFunction,
    addUser: signupFunction
}

