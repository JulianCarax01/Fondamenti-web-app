const Message = require("../../models/message")
const Chat = require("../../models/chat")


const sendMessageFunction = async (req, res) => {
    const chat = await Chat.exists()
    if (!chat) {
        const newChat = await Chat.create({mine_id: req.session.userId, other_id: req.body._id, messages: []})
    }
    const ChatRoom = await Chat.findOne({mine_id: req.session.userId, other_id: req.body._id})
    const newMex = await new Message({text: req.body.text})
    ChatRoom.messages.push(newMex)
    ChatRoom.save()
    res.status(200).end()


}

module.exports = sendMessageFunction