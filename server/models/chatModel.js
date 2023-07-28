const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chatId: {
    type: String,
  },
  messages: {
    type: Array,
    default: [],
  },
});

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;
