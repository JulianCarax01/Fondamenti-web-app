const monggoose = require("mongoose")

const messageSchema = new monggoose.Schema({
    text: {
        type: String, reqired: true, unique:false
    }
}, {
    timestamps: true
});

module.exports = monggoose.model("Message", messageSchema)
