const Message = require("../../models/message")
const Chat = require("../../models/chat")
const User = require("../../models/users")

const sendMessageFunction = async (req, res) => {

    const {sendMessage, receiver} = req.body
    const user = await User.findOne({username: receiver})




    ChatRoom.messages.push(newMex)
    ChatRoom.save()
    res.status(200).end()


}

module.exports = sendMessageFunction