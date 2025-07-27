const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new mongoose.Schema({
    Members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    Messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }],
});

module.exports = mongoose.model.Chat