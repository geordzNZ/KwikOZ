// - subject -> input / req / string
// - text -> input / req / string
// - image  -> input / string
// - likes ->   calc'd / number
// - posterID ->   calc'd / req / string / from logged in userID
// - createdOn ->   calc'd / req / date



const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    required: true,
  },
  posterID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
