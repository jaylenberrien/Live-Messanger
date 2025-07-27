const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema = {
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Content: {
        type: String,
    },
    DateSent: {
        type: Date,
        default: Date.now()
    }
}