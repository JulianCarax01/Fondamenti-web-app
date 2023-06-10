const mongoose = require('mongoose')
const chatList=require("./chatList")

//Creiamo lo schema di mongoose
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    birthday: {
        type: Date,
        unique: false
    },
    friends:[],
    chatLists:[]

});


module.exports = mongoose.model("User", userSchema)
