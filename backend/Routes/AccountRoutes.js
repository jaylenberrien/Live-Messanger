const accountController = require("../controllers/AccountController")
const express = require("express")
const router = express.Router


//create account route
router.post = ("/create", accountController.createAccount);







module.exports = router