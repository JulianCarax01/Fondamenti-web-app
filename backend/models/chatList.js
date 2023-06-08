const monggoose=require("mongoose")
const User=require("./users")
const Chat=require("./chat")

const chatListSchema=new monggoose.Schema({
    _idChat:{},
    _idOtherUser:{
        type: User
    },
    chats:[]
});

module.exports=monggoose.model("chatList",chatListSchema)