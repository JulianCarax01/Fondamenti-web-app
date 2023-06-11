const Message = require("../../models/message")
const Chat = require("../../models/chat")
const User = require("../../models/users")

const sendMessageFunction = async (req, res) => {

    const {sendMessage, receiver} = req.body
    const user = await User.findOne({username: receiver})

    if (!user) {
        return res.redirect(`/?error=utenteNonTrovato`)
    }

    const newMessage = await new Message({text: sendMessage})
    const tryChat1 = await Chat.exists({codice1: req.session_id, codice2: user._id})
    const tryChat2 = await Chat.exists({codice1: user._id, codice2: req.session_id})

    if (tryChat1) {
        const ChatRoom = await Chat.findOne({codice1: req.session_id, codice2: user._id})
        ChatRoom.messages.push(newMessage)
        ChatRoom.save()
    } else if (tryChat2) {
        const ChatRoom = await Chat.findOne({codice1: user._id, codice2: req.session_id})
        ChatRoom.messages.push(newMessage)
        ChatRoom.save()
    } else {
        const ChatRoom = await Chat.create(req.session_id,  user._id,  [])
        ChatRoom.messages.push(newMessage)
        ChatRoom.save()
    }

    res.status(200).end()


}

module.exports = sendMessageFunction