const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsListSchema = new Schema = {
    User: [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
}


module.exports = mongoose.model.FriendsList