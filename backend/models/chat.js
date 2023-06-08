const monggoose=require("mongoose")
const Message=require("./message")


const chatSchema=new monggoose.Schema({
    messages:[]
});

module.exports=monggoose.model("Chat",chatSchema)
