const User = require("../models/User")



const createAccount = async function(username, password){
    try {
        User.createAccount(username, password)
    } 
    catch (error) {
        throw err
    }
}


















module.exports = {
    createAccount
}