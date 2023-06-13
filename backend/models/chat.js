const mongoose = require("mongoose")
const Message = require("./message")
const User = require("./users");


const chatSchema = new mongoose.Schema({
    utente1: {
        type: String,
        unique:false
    }, utente2: {
        type: String,
        unique: false
    },
    messages: {
        type:[Message.schema],
        unique:false
    }
});

module.exports = mongoose.model("Chat", chatSchema)
