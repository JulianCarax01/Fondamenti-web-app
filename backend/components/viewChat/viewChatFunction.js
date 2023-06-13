const User = require("../../models/users")

const viewChatFunction = async (req) => {
    try {
        const {me} = req.params
        if (!await User.exists({username: me})) {
            return res.redirect(`/?error=utenteNonTrovato`)
        }
        const user = await User.findOne({username: me})

    } catch (e) {
        console.log(e)
    }
}


module.exports = viewChatFunction