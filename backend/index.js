//setting up intial express server startup

const express = require('express');
const mongoConfig = require('./config');
const app = express();
const port = 3000;


app.get('/', (req, res) =>{
    res.send("Hello World")
})

//routes/controllers 
const accountRoutes = require("./Routes/AccountRoutes")
app.use("/account", accountRoutes)


app.listen(port, () =>{
    console.log(`listening on port ${port}`);
    mongoConfig()
})