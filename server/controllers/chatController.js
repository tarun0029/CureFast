const chatModel = require("../models/chatModel");

//GET ALL patient chats
const getAllChatsController = async (req, res) => {
  try {
    const chats = await chatModel.findOne({ chatId: req.body.chatId });
    res.status(200).send({
      success: true,
      message: "Chats  Fetched Successfully",
      data: chats.messages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro WHile Fetching chats",
    });
  }
};

module.exports = {
  getAllChatsController,
};
