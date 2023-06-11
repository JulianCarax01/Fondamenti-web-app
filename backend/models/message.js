const monggoose = require("mongoose")

const messageSchema = new monggoose.Schema({
    text: {
        type: String, reqired: true
    }
}, {
    timestamps: true
});

module.exports = monggoose.model("Message", messageSchema)
