// - email -> input / req / string / unique
// - name -> input / req / string
// - userName -> input / req / string / unique
// - password -> input / req / string
// - createdOn ->  calc'd / req / date
// - userID -> calc'd / req / string / unique

const mongoose = require("mongoose");

const USerSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  emailAddr: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  // avatarImg: {
  //   type: string,
  // },
});




module.exports = mongoose.model("User", UserSchema);