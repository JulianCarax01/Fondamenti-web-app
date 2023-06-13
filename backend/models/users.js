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
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    birthday: {
        type: Date,
        unique: false
    },
    logged:{
        type:Boolean,
        default:false
    },

    //friends:[mongoose.Schema.ObjectId],

});


module.exports = mongoose.model("User", userSchema)
