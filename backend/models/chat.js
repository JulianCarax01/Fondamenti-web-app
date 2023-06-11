const mongoose = require("mongoose")
const Message = require("./message")
const User = require("./users");


const chatSchema = new mongoose.Schema({
    codice1: {
        type: String, unique: true
    }, codice2: {
        type: String, unique: true
    },
    messages: {
        type:[Message.schema],
        default: []
    }
});

module.exports = mongoose.model("Chat", chatSchema)
