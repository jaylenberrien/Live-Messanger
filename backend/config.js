require("dotenv").config();

const mongoose = require("mongoose");

const mongoConfig = async() => {
    try {
        const result = await mongoose.connect(process.env.DATABASE)
        console.log("database connected", result.connection.host)
    }
    catch(err){
        console.log("mongo error", err)
    }
}

module.exports = mongoConfig