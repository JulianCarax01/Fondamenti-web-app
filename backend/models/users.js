const mongoose = require('mongoose')
//Creiamo lo schema di mongoose
  const userSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });


module.exports = mongoose.model("User", userSchema)
