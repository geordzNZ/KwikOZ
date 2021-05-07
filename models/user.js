// - email -> input / req / string / unique
// - name -> input / req / string
// - userName -> input / req / string / unique
// - password -> input / req / string
// - createdOn ->  calc'd / req / date
// - userID -> calc'd / req / string / unique

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
