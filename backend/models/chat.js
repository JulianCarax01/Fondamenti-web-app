const mongoose = require("mongoose")
const Message = require("./message")
const User = require("./users");


const chatSchema = new mongoose.Schema({
    mine_id:{
        type:String,
        unique:true
    },
    other_id:{
        type:String,
        unique:true
    },
    messages: [Message.schema]
});

module.exports = mongoose.model("Chat", chatSchema)
