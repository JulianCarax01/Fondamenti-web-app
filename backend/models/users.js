const mongoose = require('mongoose')
//Creiamo lo schema di mongoose
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true,
        unique: false
    }

});


module.exports = mongoose.model("User", userSchema)
