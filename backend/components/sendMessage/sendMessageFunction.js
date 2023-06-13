const Message = require("../../models/message")
const Chat = require("../../models/chat")
const User = require("../../models/users")

const sendMessageFunction = async (req, res) => {
    try {
        const {sendMessage, receiver, sender} = req.body
        const user = await User.findOne({username: receiver})

        if (!user) {
            return res.redirect(`/?error=utenteNonTrovato`)
        }

        const newMessage = await new Message({text: sendMessage})
        const tryChat1 = await Chat.exists({utente1: sender, utente2: user._id})
        const tryChat2 = await Chat.exists({utente1: user._id, utente2: sender})


        if (tryChat1) {
            const ChatRoom = await Chat.findOne({utente1: sender, utente2: user._id})
            ChatRoom.messages.push(newMessage)
            ChatRoom.save()
        } else if (tryChat2) {
            const ChatRoom = await Chat.findOne({utente1: user._id, utente2: sender})
            ChatRoom.messages.push(newMessage)
            ChatRoom.save()
        } else {
            const ChatRoom = await Chat.create({utente1: sender, utente2: user._id})
            ChatRoom.messages.push(newMessage)
            ChatRoom.save()
        }


        res.status(200).send("ok").end()

    } catch (e) {
        console.log(e)
        res.end()
    }


}

module.exports = sendMessageFunction