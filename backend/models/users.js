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
    password: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true,
        unique: false
    },
    friends:[],
    chatLists:[]

});


module.exports = mongoose.model("User", userSchema)
