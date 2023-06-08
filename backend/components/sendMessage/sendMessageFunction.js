const Message = require("../../models/message")


const sendMessageFunction = async (req, res) => {
    const newMessage = await new Message(res.body.text)

}

module.exports = sendMessageFunction