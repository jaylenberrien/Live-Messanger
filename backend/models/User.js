const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true
    },
    Friends: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    Chats: [{
        type: mongoose.Types.ObjectId,
        ref: "Chats"
    }]
});

//methods for instance
userSchema.addFriend = function(accountUsername, friendUsername){
        try{
            if(User.findAccount(accountUsername))
            {
                User.updateOne({Username: accountUsername}, {$push: {Username: friendUsername}})
            }
            else{
                console.log(`User ${username} not found, be sure to check spelling!`)
            }
    }
    catch(err)
    {
        throw err
    }
};

userSchema.removeFriend = async function(accountUsername, friendUsername){
        try{
            if(User.findAccount(accountUsername))
            {
                User.updateOne({Username: accountUsername}, {$pull: {Username: friendUsername}})
            }
            else{
                console.log(`User ${username} not found, be sure to check spelling!`)
            }
    }
    catch(err)
    {
        throw err
    }
}

userSchema.removeChat = async function(username, chatId){
    try{
        if(User.findAccount(username)){
            User.updateOne({Username: username}, {$pull: {chat: chatId}})
        }
        else{
            console.log(`Chat with chat id: ${chatId}, can't be found.`)
        }
    }
    catch(err){
        throw err
    }
}

userSchema.addChat = async function(username, chatId){
    try{
        if(User.findAccount(username)){
            User.updateOne({Username: username}, {$push: {chat: chatId}})
        }
        else{
            console.log(`Chat with chat id: ${chatId}, can't be found.`)
        }
    }
    catch(err){
        throw err
    }
}

//might lock the username to not mess up the id's, they are being used to perform logic with the accounts like an id
userSchema.updateUsername = async function(currentUsername, newUsername){
        try{
            if(User.findAccount(currentUsername)){
                User.updateOne({Username: currentUsername}, {$set: {Username: newUsername}})
            }
            else{
                console.log(`User ${username} not found, be sure to check spelling!`)
            }
    }
    catch(err)
    {
        throw err
    }
}

userSchema.updatePassword = async function(username, newPassword){
    try{
        if(User.findAccount(username))
        {
            User.updateOne({Username: username}, {$set: {password: newPassword}})
        }
        else{
            console.log(`User ${username} not found, be sure to check spelling!`)
        }
    }
    catch(err){
        throw err
    }
}




//methods for model

userSchema.static.createAccount = async function(username, password){
    try{
        await User.create({Username: username, Password: password})
        .then(result =>{
            console.log(result)
        })
    }
    catch(err) {
        throw err
    }
}

userSchema.static.findAccount = async function(username)
{
    try{
        const user = await User.findOne().where({Username: username})
        console.log(user);
        return user;
    }
    catch(err){
        throw err
    }

}

userSchema.static.findAllAccounts = async function(){
    try{
        const users = await User.find()
        return users
    }
    catch(err){
        throw err
    }
}

//I dont think we have a use for a static update method
// userSchema.static.updateAccount = function(){

// }

userSchema.static.deleteAccount = async function(username){
    try {
        User.deleteOne({Username: username})
        .then(result => {
            console.log(results)
        })
    }
    catch(err){
        throw err
    }
}

module.exports = mongoose.model.User