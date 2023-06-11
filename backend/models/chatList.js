const monggoose=require("mongoose")
const Chat=require("./chat")

const chatListSchema=new monggoose.Schema({
    chats:[Chat.schema]
});

module.exports=monggoose.model("chatList",chatListSchema)