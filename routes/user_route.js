const express = require('express')
const router = express.Router();
const loginID = require("../app/middleware/login")
const {isAdmin} = require('../app/middleware/rbac')
const userController = require('../app/Controller/user_controller')

router.route('/')
    .get(loginID, isAdmin, userController)
    
    .post()


module.exports = router;
